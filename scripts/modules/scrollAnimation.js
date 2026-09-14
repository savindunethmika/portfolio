export function scrollAnimations() {

  const animatedElements = document.querySelectorAll(
    '.scroll-reveal'
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15
    }
  );


  animatedElements.forEach((element) => {
    observer.observe(element);
  });

};