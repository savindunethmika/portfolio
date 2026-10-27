import { startTerminalAnimation } from './terminalAnimation.js';

const STORAGE_KEY = 'portfolioIntroSeen';
const LOCK_CLASS = 'intro-active';
const AUTO_HIDE_MS = 4000;
const TERMINAL_DELAY_MS = 500;

// sessionStorage can throw (private mode, blocked storage) — treat that as "not seen".
function hasSeenIntro() {
  try {
    return sessionStorage.getItem(STORAGE_KEY) === 'true';
  } catch {
    return false;
  }
}

function rememberIntro() {
  try {
    sessionStorage.setItem(STORAGE_KEY, 'true');
  } catch {
    /* storage unavailable — the intro will simply show again next visit */
  }
}

/** Full-screen welcome overlay; dismissed by button or after a few seconds. */
export function setupIntroScreen() {
  const introScreen = document.getElementById('introScreen');
  const enterButton = document.getElementById('enterPortfolio');
  if (!introScreen || !enterButton) return;

  const reveal = () => {
    introScreen.classList.add('hide');
    document.documentElement.classList.remove(LOCK_CLASS);
  };

  // Already seen in this tab: skip straight to the page.
  if (hasSeenIntro()) {
    reveal();
    startTerminalAnimation();
    return;
  }

  let dismissed = false;
  let autoHideTimer;

  const dismiss = () => {
    if (dismissed) return;
    dismissed = true;
    clearTimeout(autoHideTimer);
    rememberIntro();
    reveal();
    setTimeout(startTerminalAnimation, TERMINAL_DELAY_MS);
  };

  document.documentElement.classList.add(LOCK_CLASS); // no scrolling behind the overlay
  enterButton.addEventListener('click', dismiss);
  autoHideTimer = setTimeout(dismiss, AUTO_HIDE_MS);
}
