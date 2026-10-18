import { asciiPortrait } from '../data/asciiPortrait.js';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const BOOT_LINES = [
  '> INITIALIZING SYSTEM...',
  '> CONNECTING TO PORTFOLIO...',
  '> ACCESSING DEVELOPER DATA...',
  '> ACCESS GRANTED'
];

/** Types a short boot sequence, then draws the ASCII portrait line by line. */
export async function startTerminalAnimation() {
  const terminal = document.getElementById('terminalOutput');
  if (!terminal) return;

  const typeText = async (text, delay) => {
    for (const char of text) {
      terminal.textContent += char;
      await sleep(delay);
    }
  };

  terminal.classList.add('cursor');

  for (const line of BOOT_LINES) {
    await typeText(`${line}\n`, 25);
    await sleep(400);
  }

  terminal.textContent = '';
  terminal.classList.remove('cursor');
  terminal.classList.add('ascii-photo');

  for (const line of asciiPortrait.trim().split('\n')) {
    terminal.textContent += `${line}\n`;
    await sleep(25);
  }

  terminal.classList.add('cursor');
}
