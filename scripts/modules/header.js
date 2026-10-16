import { startTerminalAnimation } from './terminalAnimation.js';

export function toggleMobileMenu() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');
  const menuIcon = menuBtn.querySelector('i');


  menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');

    if (navLinks.classList.contains('active')) {
      menuIcon.classList.remove('fa-bars');
      menuIcon.classList.add('fa-xmark');
    } else {
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    }
  });


  document.querySelectorAll('.nav-links a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
      menuIcon.classList.remove('fa-xmark');
      menuIcon.classList.add('fa-bars');
    });
  });
};


export function toggleIntroScreen() {
  const introScreen = document.getElementById('introScreen');
  const enterPortfolio = document.getElementById('enterPortfolio');

  if (!introScreen || !enterPortfolio) return;

  const storageKey = 'portfolioIntroSeen';
  let dismissed = false;
  let autoHideTimer;

  function hideIntro() {
    if (dismissed) return;

    dismissed = true;
    clearTimeout(autoHideTimer);

    // Remember that the intro has been dismissed.
    sessionStorage.setItem(storageKey, 'true');

    introScreen.classList.add('hide');
    document.body.style.overflowY = 'auto';

    // Start the terminal animation after the intro disappears.
    setTimeout(() => {
      startTerminalAnimation();
    }, 500);
  }

  // Don't show the intro again in this tab session.
  if (sessionStorage.getItem(storageKey) === 'true') {
    introScreen.classList.add('hide');
    document.body.style.overflowY = 'auto';
    startTerminalAnimation();
    return;
  }

  // Prevent scrolling while the intro is visible.
  document.body.style.overflowY = 'hidden';

  // Hide the intro when the visitor clicks the button.
  enterPortfolio.addEventListener('click', hideIntro);

  // Automatically hide it after 4 seconds.
  autoHideTimer = setTimeout(hideIntro, 4000);
}
