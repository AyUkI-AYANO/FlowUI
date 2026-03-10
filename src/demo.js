import { initWindow } from './components/window.js';
import { initHorizontalMenu } from './components/horizontal-menu.js';
import { initVerticalMenu } from './components/vertical-menu.js';
import { initSegmentSwitch } from './components/segment-switch.js';
import { initSlider } from './components/slider.js';
import { initSelectionPanel } from './components/selection-panel.js';
import { initChipFilter } from './components/chip-filter.js';
import { initAccordion } from './components/accordion.js';
import { initActionToolbar } from './components/action-toolbar.js';
import { initModuleTabs } from './components/module-tabs.js';

const windowEl = document.querySelector('[data-component="window"]');
const horizontalMenuEl = document.querySelector('[data-component="horizontal-menu"]');
const verticalMenuEl = document.querySelector('[data-component="vertical-menu"]');
const segmentSwitchEl = document.querySelector('[data-component="segment-switch"]');
const sliderEl = document.querySelector('[data-component="slider"]');
const sliderOutEl = document.querySelector('#glow-value');
const selectionPanelEl = document.querySelector('[data-component="selection-panel"]');
const chipFilterEl = document.querySelector('[data-component="chip-filter"]');
const accordionEl = document.querySelector('[data-component="accordion"]');
const actionToolbarEl = document.querySelector('[data-component="action-toolbar"]');
const moduleTabsEl = document.querySelector('[data-component="module-tabs"]');
const aeroToggleEl = document.querySelector('[data-component="aeroglass-toggle"]');
const interactionLogEl = document.querySelector('#interaction-log');
const playDemoBtn = document.querySelector('#play-demo');

const setLog = (text) => {
  if (interactionLogEl) interactionLogEl.textContent = text;
};

function initAeroglassToggle(toggleEl, setLogMessage) {
  if (!toggleEl) return;

  const toggleMap = {
    window: [windowEl],
    menu: [horizontalMenuEl, verticalMenuEl],
    options: [selectionPanelEl, chipFilterEl, moduleTabsEl]
  };

  const buttons = Array.from(toggleEl.querySelectorAll('[data-aero-toggle]'));
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.toggle('active');
      const key = button.dataset.aeroToggle;
      const enabled = button.classList.contains('active');
      toggleMap[key]?.forEach((el) => {
        if (el) el.classList.toggle('aeroglass-enabled', enabled);
      });
      const targetLabel = button.textContent?.trim() || '模块';
      setLogMessage?.(`Aeroglass：${targetLabel}${enabled ? '已开启' : '已关闭'}`);
    });
  });
}

if (windowEl) initWindow(windowEl);
if (horizontalMenuEl) initHorizontalMenu(horizontalMenuEl);
if (verticalMenuEl) initVerticalMenu(verticalMenuEl);
if (segmentSwitchEl) initSegmentSwitch(segmentSwitchEl);
if (sliderEl && sliderOutEl) initSlider(sliderEl, sliderOutEl);
if (selectionPanelEl) initSelectionPanel(selectionPanelEl);
if (chipFilterEl) initChipFilter(chipFilterEl);
if (accordionEl) initAccordion(accordionEl);
if (actionToolbarEl) initActionToolbar(actionToolbarEl, setLog);
if (moduleTabsEl) initModuleTabs(moduleTabsEl, setLog);
if (aeroToggleEl) initAeroglassToggle(aeroToggleEl, setLog);

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
  setLog('开始自动演示：将依次触发全部模块按钮。');

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
  const actionButtons = actionToolbarEl ? Array.from(actionToolbarEl.querySelectorAll('.action-btn')) : [];
  const moduleButtons = moduleTabsEl ? Array.from(moduleTabsEl.querySelectorAll('.module-tab')) : [];
  const aeroglassButtons = aeroToggleEl ? Array.from(aeroToggleEl.querySelectorAll('[data-aero-toggle]')) : [];

  for (const item of topItems) await clickAndWait(item, 320);
  for (const item of sideItems) await clickAndWait(item);
  for (const item of cards) await clickAndWait(item);
  for (const item of segments) await clickAndWait(item, 340);
  for (const item of chips) await clickAndWait(item);
  for (const item of accordionTriggers) await clickAndWait(item, 380);
  for (const item of accordionTriggers.slice().reverse()) await clickAndWait(item, 380);
  for (const item of actionButtons) await clickAndWait(item);
  for (const item of moduleButtons) await clickAndWait(item);
  for (const item of aeroglassButtons) await clickAndWait(item, 300);
  for (const item of aeroglassButtons.slice().reverse()) await clickAndWait(item, 300);

  if (sliderEl) {
    await animateSlider(sliderEl, 88);
    await delay(180);
    await animateSlider(sliderEl, 42);
    await delay(180);
    await animateSlider(sliderEl, 62);
  }

  setLog('自动演示完成：所有按钮均已触发，可继续手动操作。');
}

playDemoBtn?.addEventListener('click', () => {
  playInteractionDemo();
});
