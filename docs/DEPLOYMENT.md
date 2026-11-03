# 部署 — growth-agent-landing

更新时间：2026-11-03

## 站点信息
- Pages 项目：**已创建** `growth-agent-landing`（Git 集成，生产分支 `main`）
- GitHub 仓库：**已创建** `bayernjf/growth-agent-landing`（public，`main` + `dev`）
- 线上地址：`https://growth-agent-landing.pages.dev`（2026-11-03 首版构建成功）
- 自定义域名：`growth-agent.bayjf.com`〔**待 owner 确认**〕（确认后加 Custom Domain，
  DNS 加 `CNAME growth-agent → growth-agent-landing.pages.dev`，Proxied）
- 技术栈：Astro 7（SSG）+ `@bay/landing-ui` + `@astrojs/sitemap`
- Node：`>=22.12.0`；包管理器 npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## 上线待办（剩余）
1. ~~建 GitHub 远端仓库~~（已完成 `bayernjf/growth-agent-landing`，`main` 生产，
   `dev` 日常开发）。
2. ~~Cloudflare Pages 建项目并连接仓库~~（已完成，Git 集成）。
3. ~~Pages 构建配置~~（已完成）：

   | 配置项 | 值 |
   |---|---|
   | Production branch | `main` |
   | Build command | `npx playwright install chromium && npm run build` |
   | Build output directory | `dist` |
   | Environment variables | `NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0` |

4. owner 确认域名后：Pages 加 Custom Domain `growth-agent.bayjf.com`，DNS 加 CNAME
   （Proxied）；若最终域名不同，按「改域名时的同步点」逐项替换。
5. 推送 `dev` 验证 preview 部署（首个 preview 部署随 dev 分支推送产生）。

## 发布后验证
1. 英文首页（`/`）与中文首页（`/zh/`）可访问。
2. 隐私政策与条款页（双语）可访问。
3. `robots.txt`、`sitemap-index.xml` 可访问且域名一致。
4. OG 图 / 预览图（构建时截出）可访问。
5. 顶栏与页脚的 BayJF 返链、GitHub Star 链接可点击且指向正确。

## 改域名时的同步点
- `src/consts.ts` 的 `SITE_URL`
- `public/robots.txt` 里的 Sitemap 地址
- `README.md`、`public/llms.txt`、`public/llms-en.txt`、`handoff.md` 中的域名引用
