export function startTerminalAnimation() {
  const terminal = document.getElementById('terminalOutput');
  const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  const typeText = async (text, speed = 30) => {
    for (let i = 0; i < text.length; i++) {
      terminal.textContent += text[i];
      await sleep(speed);
    }

  };


  const runAnimation = async () => {
    terminal.classList.add('cursor');

    await typeText("> Initializing System...\n", 35);
    await sleep(500);
    await typeText("> Connecting to Portfolio...\n", 25);
    await sleep(400);
    await typeText("> Accessing Developer Data...\n", 25);
    await sleep(500);
    await typeText("> Access Granted!\n\n", 30);
    await sleep(800);

    terminal.textContent = "";

    const developerCode = `
const developer = {

  name: "Savindu",

  role: "Student & Web Developer",

  skills: [
    "HTML",         "CSS",      "PHP",
    "SQL",          "Python",   "Java",
    "JavaScript",   "C++",      "C#",
  ],

  passion: "Building Amazing Projects"
};
`;
    await typeText(developerCode, 8);
    await sleep(1000);

    terminal.classList.add('cursor');
  };

  runAnimation();
}
