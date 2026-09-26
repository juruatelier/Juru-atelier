// Tiny parallax response; intentionally restrained.
const hero = document.querySelector('.hero');
window.addEventListener('pointermove', (e) => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const x = (e.clientX / innerWidth - .5) * 3;
  const y = (e.clientY / innerHeight - .5) * 3;
  hero.style.translate = `${x}px ${y}px`;
});
