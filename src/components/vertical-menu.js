export function initVerticalMenu(menuEl) {
  const items = Array.from(menuEl.querySelectorAll('.v-item'));
  items.forEach((item) => {
    item.addEventListener('click', () => {
      items.forEach((it) => it.classList.remove('active'));
      item.classList.add('active');
    });
  });
}
