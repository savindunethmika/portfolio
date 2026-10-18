const SHOW_AFTER_PX = 300;

/** Floating "back to top" button, shown once the page is scrolled down. */
export function setupBackToTop() {
  const button = document.getElementById('back-to-top');
  if (!button) return;

  const update = () => {
    button.style.display = window.scrollY > SHOW_AFTER_PX ? 'block' : 'none';
  };

  window.addEventListener('scroll', update, { passive: true });
  button.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  update();
}
