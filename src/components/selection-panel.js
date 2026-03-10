export function initSelectionPanel(panelEl) {
  const cards = Array.from(panelEl.querySelectorAll('.select-card'));

  cards.forEach((card) => {
    card.addEventListener('click', () => {
      cards.forEach((c) => c.classList.remove('selected'));
      card.classList.add('selected');
    });
  });
}
