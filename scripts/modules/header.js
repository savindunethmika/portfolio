/** Hamburger menu for small screens. */
export function setupMobileMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  const setOpen = (isOpen) => {
    navLinks.classList.toggle('active', isOpen);
    menuBtn.classList.toggle('active', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  };

  menuBtn.addEventListener('click', () => {
    setOpen(!navLinks.classList.contains('active'));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });

  document.addEventListener('pointerdown', (event) => {
    if (
      navLinks.classList.contains('active') &&
      event.target instanceof Node &&
      !navLinks.contains(event.target) &&
      !menuBtn.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  window.addEventListener(
    'scroll',
    () => {
      if (navLinks.classList.contains('active')) {
        setOpen(false);
      }
    },
    { passive: true },
  );
}
