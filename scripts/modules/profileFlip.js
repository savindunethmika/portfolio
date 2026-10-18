/**
 * Flips the whole code window between the ASCII portrait (front) and the
 * real photo (back). The hidden face is `inert`, so keyboard and screen-reader
 * users can't reach its button while it is out of sight.
 */
export function setupProfileFlip() {
  const codeWindow = document.querySelector('.code-window');
  if (!codeWindow) return;

  const front = codeWindow.querySelector('.flip-front');
  const back = codeWindow.querySelector('.flip-back');

  const setFlipped = (isFlipped) => {
    codeWindow.classList.toggle('is-flipped', isFlipped);
    front.inert = isFlipped;
    back.inert = !isFlipped;

    // The clicked button just became inert; hand focus to the one now showing.
    (isFlipped ? back : front)
      .querySelector('.photo-toggle')
      .focus({ preventScroll: true });
  };

  codeWindow.querySelectorAll('.photo-toggle').forEach((button) => {
    button.addEventListener('click', () => {
      setFlipped(!codeWindow.classList.contains('is-flipped'));
    });
  });
}
