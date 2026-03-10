export function initModuleTabs(tabsEl, onChange) {
  const { activeColor, activeColorAlt, activeGlow } = tabsEl.dataset;
  if (activeColor) tabsEl.style.setProperty('--tab-active-color', activeColor);
  if (activeColorAlt) tabsEl.style.setProperty('--tab-active-color-alt', activeColorAlt);
  if (activeGlow) tabsEl.style.setProperty('--tab-active-glow', activeGlow);

  const tabs = Array.from(tabsEl.querySelectorAll('.module-tab'));

  const setActive = (tab) => {
    tabs.forEach((item) => item.classList.toggle('active', item === tab));
    onChange?.(`模块切换：当前模块「${tab.textContent?.trim()}」`);
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => setActive(tab));
  });
}
