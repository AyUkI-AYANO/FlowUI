import { initWindow } from './components/window.js';
import { initHorizontalMenu } from './components/horizontal-menu.js';
import { initVerticalMenu } from './components/vertical-menu.js';
import { initSegmentSwitch } from './components/segment-switch.js';
import { initSlider } from './components/slider.js';
import { initSelectionPanel } from './components/selection-panel.js';

const windowEl = document.querySelector('[data-component="window"]');
const horizontalMenuEl = document.querySelector('[data-component="horizontal-menu"]');
const verticalMenuEl = document.querySelector('[data-component="vertical-menu"]');
const segmentSwitchEl = document.querySelector('[data-component="segment-switch"]');
const sliderEl = document.querySelector('[data-component="slider"]');
const sliderOutEl = document.querySelector('#glow-value');
const selectionPanelEl = document.querySelector('[data-component="selection-panel"]');

if (windowEl) initWindow(windowEl);
if (horizontalMenuEl) initHorizontalMenu(horizontalMenuEl);
if (verticalMenuEl) initVerticalMenu(verticalMenuEl);
if (segmentSwitchEl) initSegmentSwitch(segmentSwitchEl);
if (sliderEl && sliderOutEl) initSlider(sliderEl, sliderOutEl);
if (selectionPanelEl) initSelectionPanel(selectionPanelEl);
