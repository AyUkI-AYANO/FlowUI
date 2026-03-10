export function initActionToolbar(toolbarEl, onChange) {
  const actions = Array.from(toolbarEl.querySelectorAll('.action-btn'));

  const setActive = (button) => {
    actions.forEach((action) => action.classList.toggle('active', action === button));
    onChange?.(`动作工具条：已执行「${button.textContent?.trim()}」`);
  };

  actions.forEach((action) => {
    action.addEventListener('click', () => setActive(action));
  });
}
