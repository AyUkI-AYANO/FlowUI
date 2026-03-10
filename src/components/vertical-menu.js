export function initVerticalMenu(menuEl) {
  const { activeColor, activeColorAlt, activeGlow } = menuEl.dataset;
  if (activeColor) menuEl.style.setProperty('--menu-active-color', activeColor);
  if (activeColorAlt) menuEl.style.setProperty('--menu-active-color-alt', activeColorAlt);
  if (activeGlow) menuEl.style.setProperty('--menu-active-glow', activeGlow);

  const items = Array.from(menuEl.querySelectorAll('.v-item'));
  items.forEach((item) => {
    item.addEventListener('click', () => {
      items.forEach((it) => it.classList.remove('active'));
      item.classList.add('active');
    });
  });
}
