export function initSlider(sliderEl, outputEl) {
  const sync = () => {
    outputEl.textContent = `${sliderEl.value}%`;
    sliderEl.style.filter = `drop-shadow(0 0 ${Math.max(6, sliderEl.value / 3)}px rgba(102,232,255,0.45))`;
  };

  sliderEl.addEventListener('input', sync);
  sync();
}
