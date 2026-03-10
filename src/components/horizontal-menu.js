export function initHorizontalMenu(menuEl) {
  const items = Array.from(menuEl.querySelectorAll('.menu-item'));
  const indicator = menuEl.querySelector('.menu-indicator');

  if (!indicator || !items.length) return;

  const syncIndicator = (activeEl) => {
    indicator.style.width = `${activeEl.offsetWidth}px`;
    indicator.style.left = `${activeEl.offsetLeft}px`;
  };

  items.forEach((item) => {
    item.addEventListener('click', () => {
      items.forEach((it) => it.classList.remove('active'));
      item.classList.add('active');
      syncIndicator(item);
    });
  });

  syncIndicator(menuEl.querySelector('.menu-item.active') || items[0]);

  window.addEventListener('resize', () => {
    const active = menuEl.querySelector('.menu-item.active');
    if (active) syncIndicator(active);
  });
}
