const CAROUSEL_SELECTORS = [
  '.js-skills-container',
  '.js-certificate-container',
  '.js-projects-container'
];

/**
 * Adds pagination dots under each card row. The dots are only displayed on
 * small screens (see carousel.css), where the rows become swipeable carousels.
 */
export function setupMobileCarousels() {
  CAROUSEL_SELECTORS.forEach((selector) => {
    const container = document.querySelector(selector);
    if (!container) return;

    const cards = Array.from(container.children);
    if (cards.length <= 1) return;

    const dotsContainer = document.createElement('div');
    dotsContainer.className = 'carousel-dots';

    const dots = cards.map((card, index) => {
      const dot = document.createElement('button');
      dot.type = 'button';
      dot.className = 'carousel-dot';
      dot.setAttribute('aria-label', `Go to card ${index + 1}`);
      dot.addEventListener('click', () => {
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      });
      dotsContainer.appendChild(dot);
      return dot;
    });

    container.after(dotsContainer);

    // Highlight the dot of the card closest to the carousel's centre.
    const updateActiveDot = () => {
      const centre = container.scrollLeft + container.clientWidth / 2;
      let closest = 0;
      let closestDistance = Infinity;

      cards.forEach((card, index) => {
        const distance = Math.abs(centre - (card.offsetLeft + card.offsetWidth / 2));
        if (distance < closestDistance) {
          closestDistance = distance;
          closest = index;
        }
      });

      dots.forEach((dot, index) => dot.classList.toggle('active', index === closest));
    };

    container.addEventListener('scroll', updateActiveDot, { passive: true });
    updateActiveDot();
  });
}
