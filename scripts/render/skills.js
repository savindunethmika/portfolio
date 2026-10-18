import { skills } from '../data/skills.js';

export function renderSkills() {
  document.querySelector('.js-skills-container').innerHTML = skills
    .map(({ icon, name, description }) => `
      <div class="skill-card scroll-reveal">
        <i class="${icon}"></i>
        <h3>${name}</h3>
        <p>${description}</p>
      </div>
    `)
    .join('');
}
