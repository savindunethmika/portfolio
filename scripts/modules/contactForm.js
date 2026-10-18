/** Submits the contact form to its Formspree `action` without leaving the page. */
export function setupContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const submitButton = form.querySelector('button[type="submit"]');
  const status = document.getElementById('formStatus');
  const defaultLabel = submitButton.textContent;

  const showStatus = (message, type) => {
    status.textContent = message;
    status.className = type;
  };

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';
    showStatus('', '');

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' } // Formspree answers with JSON instead of a redirect
      });

      if (!response.ok) throw new Error(`Request failed: ${response.status}`);

      showStatus('Message sent successfully!', 'success');
      form.reset();
    } catch (error) {
      console.error('Contact form error:', error);
      showStatus('Unable to send your message. Please check your connection and try again.', 'error');
    } finally {
      submitButton.disabled = false;
      submitButton.textContent = defaultLabel;
    }
  });
}
