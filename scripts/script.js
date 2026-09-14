import { toggleMobileMenu, toggleIntroScreen } from "./modules/header.js";
import { getSkills } from "./data/skills.js";
import { getProjects } from "./data/projects.js";
import { getCertificates } from "./data/certificates.js";
import { scrollAnimations } from "./modules/scrollAnimation.js";
import './modules/backToTop.js';
import './modules/contact.js'

toggleMobileMenu();
toggleIntroScreen();
getSkills();
getProjects();
getCertificates();
scrollAnimations();