export function initWindow(windowEl) {
  const closeButton = windowEl.querySelector('.close-button');
  closeButton?.addEventListener('click', () => {
    windowEl.animate(
      [
        { opacity: 1, transform: 'scale(1)' },
        { opacity: 0, transform: 'scale(0.96)' }
      ],
      { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)', fill: 'forwards' }
    );

    setTimeout(() => {
      windowEl.style.display = 'none';
    }, 420);
  });
}
