import { setupMobileMenu } from './modules/header.js';
import { setupIntroScreen } from './modules/intro.js';
import { setupProfileFlip } from './modules/profileFlip.js';
import { setupMobileCarousels } from './modules/mobileCarousels.js';
import { setupScrollReveal } from './modules/scrollReveal.js';
import { setupBackToTop } from './modules/backToTop.js';
import { setupContactForm } from './modules/contactForm.js';
import { renderSkills } from './render/skills.js';
import { renderCertificates } from './render/certificates.js';
import { renderProjects } from './render/projects.js';

document.getElementById('year').textContent = new Date().getFullYear();

setupMobileMenu();
setupIntroScreen();
setupProfileFlip();
setupBackToTop();
setupContactForm();

// Cards must be in the DOM before reveal animations and carousels hook in.
renderSkills();
renderCertificates();
renderProjects();
setupMobileCarousels();
setupScrollReveal();
