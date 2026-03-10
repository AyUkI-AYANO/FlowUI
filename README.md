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
- 风格过滤器：`src/components/chip-filter.css` + `src/components/chip-filter.js`
- 信息折叠面板：`src/components/accordion.css` + `src/components/accordion.js`
- 动作工具条（X2 新增）：`src/components/action-toolbar.css` + `src/components/action-toolbar.js`
- 模块切换器（X2 新增）：`src/components/module-tabs.css` + `src/components/module-tabs.js`

## 演示

- 入口文件：`index.html`
- 演示逻辑：`src/demo.js`
- X2 演示页保证所有按钮均可点击，支持菜单指示器动效切换、全组件自动演示与交互反馈日志。

## Changelog

### XBaseline

- 提供基础窗口结构及极光风格视觉体系。
- 包含基础交互组件：横向/纵向菜单、两段式开关、选择卡片、滑条。
- 演示页可展示静态布局与基础点击状态切换。

### X1

- 新增两个符合设计语言的组件：风格过滤器（Chip Filter）与信息折叠面板（Accordion）。
- 演示页加入新组件，丰富场景并保持统一视觉语言（玻璃拟态、极光高光、圆角体系）。
- 演示脚本新增「交互动画播放」流程，可自动演示菜单切换、选项切换、折叠开合、滑条动态变化。

### X2

- 新增动作工具条与模块切换器两个实操模块，所有按钮均支持可视化点击反馈。
- 演示脚本升级为全量触发流程：顶部菜单、侧栏、卡片、开关、过滤器、折叠面板、新模块按钮、滑条都会被自动演示。
- 新增交互反馈日志，手动/自动点击都可看到当前操作状态，便于验证按钮可操作性。

本项目零外部 UI 库依赖，推荐使用 localhost 服务运行（示例：`node scripts/serve-localhost.mjs --port 4173` 后访问 `http://localhost:4173`）。

### X2.5

- 演示入口切换为 **localhost 本地服务模式**，避免 `file://` 场景下 ES Module 被浏览器策略拦截导致按钮失效。
- 新增 `scripts/serve-localhost.mjs` 轻量静态服务脚本，启动后可直接访问 `http://localhost:4173`。
- `index.html` 在 `file://` 打开时会显示明确提示，指导使用 localhost 启动方式，确保演示页交互完全可用。
