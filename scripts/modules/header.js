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

  enterPortfolio.addEventListener('click', () => {
    introScreen.classList.add('hide');

    setTimeout(() => {
      startTerminalAnimation();
    }, 500);
  });
};