export class Project {
  id;
  icon;
  image;
  name;
  description;
  languages;
  source;
  demo_link;

  constructor(projectDetails) {
    this.id = projectDetails.id;
    this.icon = projectDetails.icon;
    this.image = projectDetails.image;
    this.name = projectDetails.name;
    this.description = projectDetails.description;
    this.languages = projectDetails.languages;
    this.source = projectDetails.source;
    this.demo_link = projectDetails.demo_link;
  };

  getTechs() {
    let techHTML = '';

    this.languages.forEach((tech) => {
      techHTML += `<span>${tech}</span>`;
    });

    return techHTML;
  };

  getIcon() {
    const webicons = {
      'shoppingCart' : '<i class="fa-solid fa-cart-shopping"></i>',
      'amazon'       : '<i class="fa-brands fa-amazon"></i>',
      'calculator'   : '<i class="fa-solid fa-calculator"></i>',
      'gamepad'      : '<i class="fa-solid fa-gamepad"></i>'
    }

    return webicons[this.icon];
  }

  renderButtons() {
    if (this.source && this.demo_link) {
      return `
        <div class="project-view-button">
          <button class="btn2 primary-btn" style="margin: 10px 10px;">
            <a
              href="${this.source}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn primary-btn project-btn"
            >
              <i class="fa-brands fa-github"></i>
              Source Code
            </a>
          </button>
          
          <button class="btn2 primary-btn" style="margin: 10px 10px;">
            <a
              href="${this.demo_link}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn primary-btn project-btn"
            >
              <i class="fa-solid fa-eye"></i>
              Live Demo
            </a>
          </button>
        </div>
      `;
    } else if (this.source) {
      return `
      <div class="project-view-button">
          <button class="btn2 primary-btn" style="margin: 10px 10px;">
            <a
              href="${this.source}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn primary-btn project-btn"
            >
              <i class="fa-brands fa-github"></i>
              Source Code
            </a>
          </button>
        </div>
      `;
    }
  }
};

export function getProjects() {
  let projectHTML = '';

  projects.forEach((project) => {
    projectHTML += `
      <div class="project-card scroll-reveal">
  
        <div class="project-image">
          <img
            src="${project.image}"
            alt="${project.name}"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';"
          >

          <div class="project-image-fallback">
            ${project.getIcon()}
          </div>
        </div>


        <div class="project-content">
          <h3>${project.name}</h3>
          <p>
            ${project.description}
          </p>

          <div class="project-tech">
            ${project.getTechs()}
          </div>
        </div>

        ${project.renderButtons()}
      </div>
    `;
});


document.querySelector('.js-projects-container')
  .innerHTML = projectHTML;

}

const projects = [
  {
    id: 1,
    icon: 'shoppingCart',
    image: 'images/projects/grocery-store.png',
    name: 'Grocery Store App',
    description: 'A web application for managing products, orders and grocery store operations.',
    languages: ['HTML', 'CSS', 'Python', 'MySQL'],
    source: 'https://github.com/savindunethmika/grocery_store_app',
  },
  {
    id: 2,
    icon: 'amazon',
    image: 'https://github.com/savindunethmika/amazon_clone/raw/main/images/preview.gif',
    name: 'Amazon Clone',
    description: 'An e-commerce website with shopping cart,  checkout and order tracking functionality.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    source: 'https://github.com/savindunethmika/amazon_clone',
    demo_link: 'https://savindunethmika-amazon-clone.pages.dev/'
  },
  {
    id: 3,
    icon: 'calculator',
    image: 'images/projects/calculator.png',
    name: 'Calculator App',
    description: 'A simple calculator application beautifully designed with basic arithmetic operations.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    source: 'https://github.com/savindunethmika/Calculator-js',
    demo_link: 'https://savindunethmika-calculator-js.pages.dev/'
  },
  {
    id: 4,
    icon: 'gamepad',
    image: 'https://github.com/savindunethmika/rock-paper-scissors-js/raw/main/images/preview.png',
    name: 'Rock-Paper-Scissors Game',
    description: 'A simple implementation of the classic Rock-Paper-Scissors game using HTML, CSS, and JavaScript.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    source: 'https://github.com/savindunethmika/rock-paper-scissors-js',
    demo_link: 'https://savindunethmika-rock-paper-scissors-js.pages.dev/'
  },
  {
    id: 5,
    icon: 'gamepad',
    image: 'https://github.com/savindunethmika/Zelda_game_python/raw/main/graphics/preview.png',
    name: 'Zelda Python Game',
    description: 'A 2D game developed using Python and Pygame with enemies and player mechanics.',
    languages: ['Python', 'Pygame'],
    source: 'https://github.com/savindunethmika/Zelda_game_python',
  }
].map((projectDetails) => {
  return new Project(projectDetails);
});
