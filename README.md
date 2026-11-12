# growth-agent — Landing

自托管、BYOK、每天交 PR 的极简增长 Agent 的落地页：每天 1 篇新内容 PR + 1 个页面修复
PR，全部经 zeus 决策内核分级（D2 人审）并由人在 GitHub 合并；每周一份排名变化报告。

- 线上：待上线（占位域名 `https://growth-agent.bayjf.com`，待 owner 确认，见 `docs/DEPLOYMENT.md`）
- 产品仓库：https://github.com/bayernjf/growth-agent（**文案事实源**：产品仓 README、
  `deploy/SELF_HOSTING.md`、bayjf 仓 `docs/tier0/Tier0-增长Agent PRD.md` 与技术方案）

## 技术栈

- [Astro 7](https://astro.build) 静态站点，`output: 'static'`，纯 Astro 组件（无 React island）
- 原生 CSS，design token 集中在 `src/styles/global.css` 的 `@layer tokens`
  （沿用 loom-landing 的暗色「产线」语言，品牌色换为增长绿 + 人审琥珀）
- `@bay/landing-ui` 提供品牌返链（BayjfLink）与 GitHub Star 组件
- 双语路由由 Astro i18n 提供：`/` 英文（默认，无前缀）、`/zh/` 中文

## 本地开发

需要 Node 22.12+（`node -v` 确认；Astro 7 会拒绝 20.x）。

```bash
npm install
npm run dev
```

开发服务器默认跑在 3026 端口（见 `.claude/launch.json`）。

## 构建

```bash
npm run build
```

`astro build` 之后会自动跑 `scripts/shot.mjs`：在 `dist/` 上起静态服务，用 Playwright 截取两种
语言的首屏，产出 `dist/preview-en.png` 与 `dist/preview-zh.png` 作为 og:image。预览图不入库，
每次构建现生成。首次构建前装一次浏览器内核：

```bash
npx playwright install chromium
```

其他脚本：

```bash
npm run preview   # 预览 dist
npm run check     # astro check 类型检查
npm run shot      # 只重截预览图（需要 dist 已存在）
```

## 目录结构

```
public/            favicon、brand mark、robots.txt、llms.txt / llms-en.txt
scripts/shot.mjs   构建后截取 og:image
src/consts.ts      站点级常量（域名、社交、og 图路径）
src/i18n/          ui.ts 文案字典 + index.ts 语言工具
src/layouts/       Layout.astro（head、reveal 脚本）
src/components/    SEO、Hud（顶栏）、Hero（含批次 tick 终端卡）、Capabilities（核心闭环 4 项）、
                   Workflow（使用方式 5 步）、Guardrails（硬约束 6 条）、Audience（P1/P2/P3）、
                   Cta（mailto 预约）、Footer、LegalLayout
src/pages/         index.astro（en）、zh/index.astro、404.astro、
                   privacy / terms（两种语言各一份）
src/styles/        global.css
```

## 部署到 Cloudflare Pages（Git 集成）

已上线：GitHub 仓库 `bayernjf/growth-agent-landing`（public），Pages 项目
`growth-agent-landing` 已连接该仓库，推送 `main` 自动构建发版，其它分支产出 preview。
站点：`https://growth-agent-landing.pages.dev`。其余配置（Production branch `main`、
build command `npx playwright install chromium && npm run build`、output `dist`、
`NODE_VERSION=22` + `PLAYWRIGHT_BROWSERS_PATH=0`）与其他 `*-landing` 仓一致。

自定义域名 `growth-agent.bayjf.com` 已通过 Pages API 绑定到本项目（2026-11-12），
`src/consts.ts` 的 `SITE_URL` 与 `public/robots.txt` 的 Sitemap 地址已一致。
DNS 侧需在 `bayjf.com` zone 加一条 `CNAME growth-agent → growth-agent-landing.pages.dev`
（Proxied）；当前 Pages 域名状态为 pending，等 DNS 生效后自动签发证书。

## SEO

- 每种语言独立的 title / description，取自 `src/i18n/ui.ts` 的 `meta.*`
- canonical + 三条 hreflang（自身、另一语言、x-default）
- Open Graph + Twitter `summary_large_image`，og:image 用构建时截图
- JSON-LD `@graph`：Organization / WebSite / SoftwareApplication
- `@astrojs/sitemap` 生成带 hreflang 互指的 sitemap
- `prefetch` 全站预取，`inlineStylesheets: 'auto'`

## GEO（生成式引擎优化）

- `public/robots.txt` 显式放行 GPTBot、ClaudeBot、PerplexityBot、CCBot 等 AI 爬虫
- `public/llms.txt`（中文）与 `public/llms-en.txt`（英文）用 markdown 自述产品定位、
  核心闭环与硬约束，供答案引擎直接引用

## 文案对账规则

页面上的产品事实（每日 1+1 上限、D2 人审 24h SLA、BYOK 连接器清单、fail-closed 行为、
docker 部署形态、P1/P2/P3 画像）必须能在产品仓 README / `deploy/SELF_HOSTING.md` /
PRD 中找到出处；**不得编造用户数、客户、评价、定价或性能指标**。改动记入 handoff 对账清单。
