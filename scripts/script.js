import { toggleMobileMenu, toggleIntroScreen } from "./modules/header.js";
import { getSkills } from "./data/skills.js";
import { getProjects } from "./data/projects.js";
import { getCertificates } from "./data/certificates.js";
import { scrollAnimations } from "./modules/scrollAnimation.js";
import { setupMobileCarousels } from "./modules/mobileCarousels.js";
import './modules/backToTop.js';
import './modules/contact.js'


const photoToggle = document.querySelector('#photoToggle');
const profileFlipCard = document.querySelector('#profileFlipCard');

if (photoToggle && profileFlipCard) {
  photoToggle.addEventListener('click', () => {
    const isFlipped =
      profileFlipCard.classList.toggle('is-flipped');

    photoToggle.setAttribute(
      'aria-pressed',
      String(isFlipped)
    );

    photoToggle.setAttribute(
      'aria-label',
      isFlipped
        ? 'Show ASCII portrait'
        : 'Show my real photo'
    );

    photoToggle.innerHTML = isFlipped
      ? '<i class="fa-solid fa-code"></i><span>View ASCII</span>'
      : '<i class="fa-regular fa-image"></i><span>View Photo</span>';
  });
}


toggleMobileMenu();
toggleIntroScreen();
getSkills();
getProjects();
getCertificates();
setupMobileCarousels();
scrollAnimations();
