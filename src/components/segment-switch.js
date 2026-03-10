export function initSegmentSwitch(switchEl) {
  const segments = Array.from(switchEl.querySelectorAll('.segment'));

  const setActive = (index) => {
    switchEl.dataset.activeIndex = String(index);
    segments.forEach((segment, i) => {
      segment.classList.toggle('active', i === index);
    });
  };

  segments.forEach((segment, index) => {
    segment.addEventListener('click', () => setActive(index));
  });

  setActive(segments.findIndex((el) => el.classList.contains('active')) || 0);
}
