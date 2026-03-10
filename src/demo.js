import { initWindow } from './components/window.js';
import { initHorizontalMenu } from './components/horizontal-menu.js';
import { initVerticalMenu } from './components/vertical-menu.js';
import { initSegmentSwitch } from './components/segment-switch.js';
import { initSlider } from './components/slider.js';
import { initSelectionPanel } from './components/selection-panel.js';
import { initChipFilter } from './components/chip-filter.js';
import { initAccordion } from './components/accordion.js';

const windowEl = document.querySelector('[data-component="window"]');
const horizontalMenuEl = document.querySelector('[data-component="horizontal-menu"]');
const verticalMenuEl = document.querySelector('[data-component="vertical-menu"]');
const segmentSwitchEl = document.querySelector('[data-component="segment-switch"]');
const sliderEl = document.querySelector('[data-component="slider"]');
const sliderOutEl = document.querySelector('#glow-value');
const selectionPanelEl = document.querySelector('[data-component="selection-panel"]');
const chipFilterEl = document.querySelector('[data-component="chip-filter"]');
const accordionEl = document.querySelector('[data-component="accordion"]');
const playDemoBtn = document.querySelector('#play-demo');

if (windowEl) initWindow(windowEl);
if (horizontalMenuEl) initHorizontalMenu(horizontalMenuEl);
if (verticalMenuEl) initVerticalMenu(verticalMenuEl);
if (segmentSwitchEl) initSegmentSwitch(segmentSwitchEl);
if (sliderEl && sliderOutEl) initSlider(sliderEl, sliderOutEl);
if (selectionPanelEl) initSelectionPanel(selectionPanelEl);
if (chipFilterEl) initChipFilter(chipFilterEl);
if (accordionEl) initAccordion(accordionEl);

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

async function animateSlider(slider, toValue, duration = 520) {
  const from = Number(slider.value);
  const start = performance.now();

  return new Promise((resolve) => {
    const frame = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const value = Math.round(from + (toValue - from) * progress);
      slider.value = String(value);
      slider.dispatchEvent(new Event('input', { bubbles: true }));

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {
        resolve();
      }
    };

    requestAnimationFrame(frame);
  });
}

async function playInteractionDemo() {
  const clickAndWait = async (element, wait = 280) => {
    element?.click();
    await delay(wait);
  };

  const topItems = horizontalMenuEl ? Array.from(horizontalMenuEl.querySelectorAll('.menu-item')) : [];
  const sideItems = verticalMenuEl ? Array.from(verticalMenuEl.querySelectorAll('.v-item')) : [];
  const cards = selectionPanelEl ? Array.from(selectionPanelEl.querySelectorAll('.select-card')) : [];
  const segments = segmentSwitchEl ? Array.from(segmentSwitchEl.querySelectorAll('.segment')) : [];
  const chips = chipFilterEl ? Array.from(chipFilterEl.querySelectorAll('.chip')) : [];
  const accordionTriggers = accordionEl ? Array.from(accordionEl.querySelectorAll('.accordion-trigger')) : [];

  for (const index of [1, 2, 0]) await clickAndWait(topItems[index]);
  for (const index of [2, 3, 1]) await clickAndWait(sideItems[index]);
  for (const index of [1, 3, 0]) await clickAndWait(cards[index]);
  for (const index of [1, 0]) await clickAndWait(segments[index]);
  for (const index of [2, 3, 0]) await clickAndWait(chips[index]);
  for (const index of [1, 0]) await clickAndWait(accordionTriggers[index], 380);

  if (sliderEl) {
    await animateSlider(sliderEl, 88);
    await delay(180);
    await animateSlider(sliderEl, 42);
    await delay(180);
    await animateSlider(sliderEl, 62);
  }
}

playDemoBtn?.addEventListener('click', () => {
  playInteractionDemo();
});
