export class Project {
  id;
  icon;
  name;
  description;
  languages;
  link;

  constructor(projectDetails) {
    this.id = projectDetails.id;
    this.icon = projectDetails.icon;
    this.name = projectDetails.name;
    this.description = projectDetails.description;
    this.languages = projectDetails.languages;
    this.link = projectDetails.link;
  };

  getTechs() {
    let techHTML = '';

    this.languages.forEach((tech) => {
      techHTML += `<span>${tech}</span>`;
    });

    return techHTML;
  };

  getIcon() {
    if (this.icon === 'shoppingCart') {
      return '<i class="fa-solid fa-cart-shopping"></i>';
    } else if (this.icon === 'amazon') {
      return '<i class="fa-brands fa-amazon"></i>';
    } else if (this.icon === 'calculator') {
      return '<i class="fa-solid fa-calculator"></i>';
    } else if (this.icon === 'gamepad') {
      return '<i class="fa-solid fa-gamepad"></i>';
    }
  }
};

export function getProjects() {
  let projectHTML = '';

  projects.forEach((project) => {
    projectHTML += `
      <div class="project-card scroll-reveal">
        <div class="project-image">
          ${project.getIcon()}
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

        <div class="project-view-button">
          <button class="btn2 primary-btn" style="margin: 10px 10px;">
            <a
              href="${project.link}"
              target="_blank"
              rel="noopener noreferrer"
              class="btn primary-btn project-btn"
            >
              <i class="fa-brands fa-github"></i>
              View Project
            </a>
          </button>
        </div>
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
    name: 'Grocery Store App',
    description: 'A web application for managing products, orders and grocery store operations.',
    languages: ['HTML', 'CSS', 'Python', 'MySQL'],
    link: 'https://github.com/DevilSavi/grocery_store_app'
  },
  {
    id: 2,
    icon: 'amazon',
    name: 'Amazon Clone',
    description: 'An e-commerce website with shopping cart,  checkout and order tracking functionality.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/DevilSavi/amazon_clone'
  },
  {
    id: 3,
    icon: 'calculator',
    name: 'Calculator App',
    description: 'A simple calculator application beautifully designed with basic arithmetic operations.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/DevilSavi/Calculator-js'
  },
  {
    id: 4,
    icon: 'gamepad',
    name: 'Rock-Paper-Scissors Game',
    description: 'A simple implementation of the classic Rock-Paper-Scissors game using HTML, CSS, and JavaScript.',
    languages: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://github.com/DevilSavi/rock-paper-scissors-js'
  },
  {
    id: 5,
    icon: 'gamepad',
    name: 'Zelda Python Game',
    description: 'A 2D game developed using Python and Pygame with enemies and player mechanics.',
    languages: ['Python', 'Pygame'],
    link: 'https://github.com/DevilSavi/Zelda_game_python'
  }
].map((projectDetails) => {
  return new Project(projectDetails);
});