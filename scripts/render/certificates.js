import { certificates } from '../data/certificates.js';
import { techTags, linkButton, enableImageFallbacks } from './shared.js';

export function renderCertificates() {
  const container = document.querySelector('.js-certificate-container');

  container.innerHTML = certificates
    .map((cert) => `
      <div class="certificate-card scroll-reveal">
        <div class="card-image">
          <img src="${cert.image}" alt="${cert.name}">
          <div class="card-image-fallback"><i class="fa-solid fa-award"></i></div>
        </div>

        <div class="certificate-title">
          <h3>${cert.name}</h3>
        </div>

        <div class="certificate-details">
          <p>${cert.description}</p>

          <div class="certificate-issue">
            <h4>${cert.org}</h4>
            <p>${cert.date}</p>
          </div>

          <div class="tech-tags">${techTags(cert.languages)}</div>
        </div>

        <div class="card-actions">
          ${linkButton({ href: cert.link, icon: 'fa-solid fa-link', label: 'View Certificate' })}
        </div>
      </div>
    `)
    .join('');

  enableImageFallbacks(container);
}
