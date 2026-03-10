# Aurora Flow UI

一套基于原生 **HTML + CSS + JavaScript** 的 UI 美术体系，风格为「流畅、抽象、极光灵感」。

## 组件清单（独立文件）

- 窗口：`src/components/window.css` + `src/components/window.js`
- 关闭按键：`src/components/close-button.css`
- 两段式开关：`src/components/segment-switch.css` + `src/components/segment-switch.js`
- 滑条：`src/components/slider.css` + `src/components/slider.js`
- 水平菜单栏：`src/components/horizontal-menu.css` + `src/components/horizontal-menu.js`
- 垂直菜单栏：`src/components/vertical-menu.css` + `src/components/vertical-menu.js`
- 选择界面：`src/components/selection-panel.css` + `src/components/selection-panel.js`
- 内部分区窗口：`src/components/partition-window.css`
- 风格过滤器（X1 新增）：`src/components/chip-filter.css` + `src/components/chip-filter.js`
- 信息折叠面板（X1 新增）：`src/components/accordion.css` + `src/components/accordion.js`

## 演示

- 入口文件：`index.html`
- 演示逻辑：`src/demo.js`
- X1 新增「播放交互动画演示」按钮，可顺序展示菜单切换、选项选择、折叠面板开合、滑条数值变化等动态交互效果。

## Changelog

### XBaseline

- 提供基础窗口结构及极光风格视觉体系。
- 包含基础交互组件：横向/纵向菜单、两段式开关、选择卡片、滑条。
- 演示页可展示静态布局与基础点击状态切换。

### X1

- 新增两个符合设计语言的组件：风格过滤器（Chip Filter）与信息折叠面板（Accordion）。
- 演示页加入新组件，丰富场景并保持统一视觉语言（玻璃拟态、极光高光、圆角体系）。
- 演示脚本新增「交互动画播放」流程，可自动演示菜单切换、选项切换、折叠开合、滑条动态变化。

本项目零外部 UI 库依赖，可直接双击 `index.html` 或使用任意静态服务器运行。
