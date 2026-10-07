export function setupMobileCarousels() {

  const containers = [
    document.querySelector('.js-skills-container'),
    document.querySelector('.js-certificate-container'),
    document.querySelector('.js-projects-container')
  ];

  containers.forEach((container) => {

    if (!container) return;

    const cards = Array.from(container.children);

    if (cards.length <= 1) return;


    // Create dots
    const dotsContainer = document.createElement('div');

    dotsContainer.className = 'carousel-dots';


    cards.forEach((card, index) => {

      const dot = document.createElement('button');

      dot.className = 'carousel-dot';

      dot.type = 'button';

      dot.setAttribute(
        'aria-label',
        `Go to card ${index + 1}`
      );


      // First dot is active
      if (index === 0) {
        dot.classList.add('active');
      }


      // Click dot → move to card
      dot.addEventListener('click', () => {

        card.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'
        });

      });


      dotsContainer.appendChild(dot);

    });


    // Put dots underneath the cards
    container.after(dotsContainer);


    const dots = Array.from(
      dotsContainer.children
    );


    // Detect which card is currently visible
    const updateActiveDot = () => {

      const containerCenter =
        container.scrollLeft +
        container.clientWidth / 2;


      let closestIndex = 0;
      let closestDistance = Infinity;


      cards.forEach((card, index) => {

        const cardCenter =
          card.offsetLeft +
          card.offsetWidth / 2;


        const distance =
          Math.abs(containerCenter - cardCenter);


        if (distance < closestDistance) {

          closestDistance = distance;
          closestIndex = index;

        }

      });


      dots.forEach((dot, index) => {

        dot.classList.toggle(
          'active',
          index === closestIndex
        );

      });

    };


    container.addEventListener(
      'scroll',
      updateActiveDot,
      { passive: true }
    );


    // Set correct dot after page loads
    updateActiveDot();

  });

}