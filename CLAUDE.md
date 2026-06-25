# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

航鉴电力科技（AeroInspect）企业官网 — 智能风机巡检解决方案。由 Google AI Studio 生成初始工程。

## 技术栈

- **前端**: React 19 + TypeScript 5.8 + Vite 6
- **样式**: Tailwind CSS v4（Vite 插件，无 `tailwind.config.js`）+ Ant Design v6
- **路由**: React Router v7（HashRouter，适配 GitHub Pages）
- **动画**: Motion v12（原 Framer Motion）
- **图标**: Lucide React
- **AI**: `@google/genai`（Google Gemini SDK）
- **后端**: Express 已安装但尚未开发

## 工具链

- **Playwright**: 已安装插件，Claude 可启动浏览器进行截图验证和视觉调试
- **frontend-design**: 已安装插件，Claude 构建 UI 时遵循设计原则和组件模式
- **GitHub CLI (`gh`)**: 已可用，通过 `gh` 命令操作 PR、issue、CI 等

## 常用命令

| 命令 | 说明 |
|------|------|
| `npm run dev` | 启动开发服务器（`--port=3000 --host=0.0.0.0`） |
| `npm run build` | 构建生产包到 `./dist` |
| `npm run preview` | 预览生产构建 |
| `npm run lint:ts` | TypeScript 类型检查（`tsc --noEmit`） |
| `npm run lint` | ESLint 代码检查 |
| `npm run format` | Prettier 格式化 |
| `npm run clean` | ⚠️ 使用 `rm -rf`，Windows PowerShell 不兼容，需手动清理或用 Git Bash |

## 关键约定

### 路径别名

`@/` 映射到**项目根目录**（非 `src/`），导入示例：`@/src/components/Navbar`。

### Tailwind CSS v4

v4 通过 Vite 插件引入，CSS 文件直接 `@import "tailwindcss"`，无需独立配置文件。v4 的类名和配置方式与 v3 差异较大，查阅 v4 文档确认。

### Git 规范

- 提交信息遵循约定式提交：`feat:`、`fix:`、`chore:`、`docs:` 等
- 分支命名：`feature/xxx`、`fix/xxx`

## 注意事项

- **TypeScript strict 模式已启用**: `strict: true`，所有参数和类型需显式声明。
- **ESLint + Prettier**: 已配置，`npm run lint` 运行 ESLint，`npm run format` 格式化代码
- **无测试**: 项目无测试框架和测试文件。
- **环境变量**: 需要 `GEMINI_API_KEY`（Gemini API 密钥）和 `APP_URL`（应用部署地址），参考 `.env.example`。
- **CI 部署**: 推送到 `main` 分支自动通过 GitHub Actions 部署到 GitHub Pages，构建产物在 `./dist`。
- **DISABLE_HMR**: 开发服务器通过 `DISABLE_HMR=true` 环境变量禁用 HMR（AI Studio 兼容设定）。
