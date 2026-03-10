export function initChipFilter(filterEl) {
  const chips = Array.from(filterEl.querySelectorAll('.chip'));

  chips.forEach((chip) => {
    chip.addEventListener('click', () => {
      chips.forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
    });
  });
}
