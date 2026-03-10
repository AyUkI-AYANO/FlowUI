export function initAccordion(accordionEl) {
  const items = Array.from(accordionEl.querySelectorAll('.accordion-item'));

  items.forEach((item) => {
    const trigger = item.querySelector('.accordion-trigger');
    trigger?.addEventListener('click', () => {
      const shouldOpen = !item.classList.contains('open');
      items.forEach((it) => it.classList.remove('open'));
      if (shouldOpen) item.classList.add('open');
    });
  });
}
