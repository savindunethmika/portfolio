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
          <img
            src="${certificate.image}"
            alt="${certificate.name}"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >

          <div class="certificate-image-fallback">
            <i class="fa-solid fa-award"></i>
          </div>
        </div>

        <div class="certificate-content">
          <h3>${certificate.name}</h3>
        </div>
        <div class="certificate-content2">
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
    name: 'Programming with Python',
    image: 'images/certificates/python workshop-0001.jpg',
    description: 'Certificate of Participation for the Free Two-Day Python Programming Workshop',
    org: 'SOUTHERN IRAA (PVT) LTD.',
    date: '2024 February 26,27',
    languages: ['Python'],
    link: 'https://www.southerniraa.lk/workshop/pythondata-science/exam-results'
  },{
    id: 2,
    name: 'Web Development',
    image: 'images/certificates/web desing-0001.jpg',
    description: 'Certificate of Participation for the Free Two-Day Web Design & Development Workshop',
    org: 'SOUTHERN IRAA (PVT) LTD.',
    date: '2025 January 25,26',
    languages: ['HTML', 'CSS'],
    link: '404.html'
  },{
    id: 3,
    name: 'Creative Design',
    image: 'images/certificates/Graphic Desing-001.jpg',
    description: 'Certificate of Participation for the Free Two-Day Creative Design Workshop',
    org: 'SOUTHERN IRAA (PVT) LTD.',
    date: '2025 January 20,21',
    languages: ['Adobe Photoshop'],
    link: 'https://www.southerniraa.lk/workshop/graphic-designing/exam-results-s3'
  },
].map((certificateDetails) => {
  return new Certificate(certificateDetails);
});
