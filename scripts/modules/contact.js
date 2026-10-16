const contactForm = document.querySelector('#contactForm');
const submitBtn = contactForm.querySelector('button[type="submit"]');
const formStatus = document.querySelector('#formStatus');

contactForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    formStatus.textContent = '';
    formStatus.className = '';
    formStatus.setAttribute('role', 'status');

    try {
        const response = await fetch('YOUR_EXISTING_ENDPOINT', {
            method: 'POST',
            body: new FormData(contactForm)
        });

        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        // Use this only if your endpoint returns JSON.
        const result = await response.json();

        if (result.success) {
            formStatus.textContent = 'Message sent successfully!';
            formStatus.classList.add('success');
            contactForm.reset();
        } else {
            throw new Error('Message submission failed.');
        }

    } catch (error) {
        console.error('Contact form error:', error);

        formStatus.textContent =
            'Unable to send your message. Please check your connection and try again.';

        formStatus.classList.add('error');

    } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send Message';
    }
});
