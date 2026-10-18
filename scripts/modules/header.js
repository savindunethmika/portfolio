/** Hamburger menu for small screens. */
export function setupMobileMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = menuBtn.querySelector('i');

  const setOpen = (isOpen) => {
    navLinks.classList.toggle('active', isOpen);
    menuBtn.setAttribute('aria-expanded', String(isOpen));
    menuIcon.classList.toggle('fa-xmark', isOpen);
    menuIcon.classList.toggle('fa-bars', !isOpen);
  };

  menuBtn.addEventListener('click', () => {
    setOpen(!navLinks.classList.contains('active'));
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => setOpen(false));
  });
}
