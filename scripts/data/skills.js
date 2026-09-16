class Skill {
  name;
  i_class;
  description;

  constructor(skillDetails) {
    this.name = skillDetails.name;
    this.i_class = skillDetails.i_class;
    this.description = skillDetails.description;
  };
};

export function getSkills() {
  let skillHTML = '';

  skills.forEach((skill) => {
    skillHTML += `
      <div class="skill-card scroll-reveal">
        <i class="${skill.i_class}"></i>
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
      </div>
    `;
  });

  document.querySelector('.js-skills-container')
    .innerHTML = skillHTML;
};

const skills = [
  {
    name: 'HTML',
    i_class: 'fa-brands fa-html5',
    description: 'Building structured and semantic web pages.'
  },{
    name: 'CSS',
    i_class: 'fa-brands fa-css3-alt',
    description: 'Creating responsive and modern user interfaces.'
  },{
    name: 'PHP',
    i_class: 'fa-brands fa-php',
    description: 'Developing server-side applications and handling database interactions.'
  },{
    name: 'MySQL',
    i_class: 'devicon-mysql-plain-wordmark',
    description: 'Designing and managing databases for web applications.'
  },{
    name: 'JavaScript',
    i_class: 'fa-brands fa-js',
    description: 'Adding functionality and interactivity to websites.'
  },{
    name: 'Python',
    i_class: 'fa-brands fa-python',
    description: 'Developing applications and programming projects.'
  },{
    name: 'Java',
    i_class: 'fa-brands fa-java',
    description: 'Developing robust and scalable applications.'
  },{
    name: 'C++',
    i_class: 'devicon-cplusplus-plain',
    description: 'Learning programming fundamentals and problem solving.'
  },
].map((skillDetails) => {
  return new Skill(skillDetails);
})
