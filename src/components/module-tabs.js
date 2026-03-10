export function initModuleTabs(tabsEl, onChange) {
  const tabs = Array.from(tabsEl.querySelectorAll('.module-tab'));

  const setActive = (tab) => {
    tabs.forEach((item) => item.classList.toggle('active', item === tab));
    onChange?.(`模块切换：当前模块「${tab.textContent?.trim()}」`);
  };

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => setActive(tab));
  });
}
