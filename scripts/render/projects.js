import { projects } from '../data/projects.js';
import { techTags, linkButton, enableImageFallbacks } from './shared.js';

function projectButtons({ source, demo }) {
  const buttons = [
    source && linkButton({ href: source, icon: 'fa-brands fa-github', label: 'Source Code' }),
    demo && linkButton({ href: demo, icon: 'fa-solid fa-eye', label: 'Live Demo' })
  ].filter(Boolean);

  return buttons.length
    ? `<div class="card-actions">${buttons.join('')}</div>`
    : '';
}

export function renderProjects() {
  const container = document.querySelector('.js-projects-container');

  container.innerHTML = projects
    .map((project) => `
      <div class="project-card scroll-reveal">
        <div class="card-image">
          <img src="${project.image}" alt="${project.name}">
          <div class="card-image-fallback"><i class="${project.icon}"></i></div>
        </div>

        <div class="project-content">
          <h3>${project.name}</h3>
          <p>${project.description}</p>
          <div class="tech-tags">${techTags(project.languages)}</div>
        </div>

        ${projectButtons(project)}
      </div>
    `)
    .join('');

  enableImageFallbacks(container);
}
