# AGENTS.md — growth-agent-landing

供 AI coding agents（Claude Code / Codex / Cursor / Copilot 等）在本仓库工作时自动读取。

## 项目概览
growth-agent 落地页：自托管、BYOK、每天交 PR 的极简增长 Agent。Astro 7 静态站点，
纯 Astro 组件（无 React island），中英双语。

产品事实的唯一事实源在**产品仓库**（`bayernjf/growth-agent`：README、
`deploy/SELF_HOSTING.md`，以及 bayjf 仓 `docs/tier0/Tier0-增长Agent PRD.md` /
`Tier0-增长Agent技术方案.md`），本仓库文案必须与其对账，不得自行编造产品事实、
用户数、客户、评价、定价或性能指标。

## 技术栈
| 类别 | 方案 |
|------|------|
| 框架 | Astro 7（SSG，`output: 'static'`） |
| 交互 | 无 React island；仅 reveal-on-scroll 与 CTA mailto 两段内联脚本 |
| 样式 | 原生 CSS，design token 集中在 `src/styles/global.css` 的 `@layer tokens` |
| i18n | Astro i18n：`/` 英文（默认无前缀）、`/zh/` 中文 |
| 共享包 | `@bay/landing-ui`（品牌返链、GitHub Star） |
| Node / 包管理 | >= 22.12 / npm |

## 常用命令
```bash
npm install
npm run dev       # 开发服务器（3026 端口）
npm run build     # astro build && node scripts/shot.mjs
npm run preview
npm run check     # astro check
```

## 约定
- 所有文案走 `src/i18n/ui.ts`，新增字符串**必须**同时提供中英两版。
- 落地页中的产品事实（每日 1+1 上限、D2 人审 24h SLA、BYOK 连接器、fail-closed、
  docker 部署、P1/P2/P3 画像）必须与产品仓 docs 对账，改动记入 handoff 对账清单。
- `npm run build` 内含 `scripts/shot.mjs`（Playwright 截图），预览 / OG 图是构建产物，不要提交。
- 改域名要同步 `src/consts.ts` 的 `SITE_URL`、`public/robots.txt` 的 Sitemap、README 与两份 llms。
- 部署细节见 `docs/DEPLOYMENT.md`：Pages 生产分支是 `main`，日常开发在 `dev`。

## 不要做的事
- 不要直接改构建产物 `dist/`。
- 不要把文案硬编码进组件（一律走 i18n 字典）。
- 不要提交 `.env` 或任何密钥。
- 不要跳过 `git pull --rebase` 直接 push。
- 不要编造营销数字（用户数、MRR、客户 logo、性能指标）；没有的事实留占位并标注。
