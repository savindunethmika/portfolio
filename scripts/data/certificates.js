export class Certificate {
  id;
  name;
  image;
  description;
  org;
  date;
  languages;
  link;

  constructor(cetificateDetails) {
    this.id = cetificateDetails.id;
    this.name = cetificateDetails.name;
    this.image = cetificateDetails.image;
    this.description = cetificateDetails.description;
    this.org = cetificateDetails.org;
    this.date = cetificateDetails.date;
    this.languages = cetificateDetails.languages;
    this.link = cetificateDetails.link;
  };

  getLanguages() {
    let languageHTML = '';
    this.languages.forEach((language) => {
      languageHTML += `<span>${language}</span>`;
    });
    return languageHTML;
  }
};

export function getCertificates() {
  let certificateHTML = '';

  cetificates.forEach((certificate) => {
    certificateHTML += `
      <div class="certificate-card scroll-reveal">
        <div class="certificate-image">
          <img src="${certificate.image}">
        </div>

        <div class="certificate-content">
          <h3>${certificate.name}</h3>
          <p>
            ${certificate.description}
          </p>

          <div class="certificate-issue">
            <h4>${certificate.org}</h4>
            <p>${certificate.date}</p>
          </div>

          <div class="certificate-tech">
            ${certificate.getLanguages()}
          </div>
        </div>

        <div class="certificate-view-button">
          <button class="btn2 primary-btn" style="margin: 10px 10px;">
            <a
              href="${certificate.link}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn primary-btn project-btn"
            >
              <i class="fa-solid fa-link"></i>
              View Certificate
            </a>
          </button>
        </div>
      </div>
    `;
  });

  document.querySelector('.js-certificate-container')
    .innerHTML = certificateHTML;
};

const cetificates = [
  {
    id: 1,
    name: 'certificate-01',
    image: 'images/certificates/test.png',
    description: 'This is a test picture and this is how it looks.he he. 1',
    org: 'Orgenization1',
    date: '2026 September',
    languages: ['python'],
    link: ''
  },
].map((certificateDetails) => {
  return new Certificate(certificateDetails);
});