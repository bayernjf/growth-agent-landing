# 部署 — growth-agent-landing

更新时间：2026-11-02

## 站点信息
- Pages 项目：**未创建**（待建，建议名 `growth-agent-landing`）
- GitHub 仓库：**未创建**（建议 `bayernjf/growth-agent-landing`）
- 自定义域名：`growth-agent.bayjf.com`〔**待 owner 确认**〕（确认后加 Custom Domain，
  DNS 加 `CNAME growth-agent → <pages 分配域名>`，Proxied）
- 技术栈：Astro 7（SSG）+ `@bay/landing-ui` + `@astrojs/sitemap`
- Node：`>=22.12.0`；包管理器 npm

## 构建
```bash
npm install
npm run build     # astro build && node scripts/shot.mjs
npm run preview
```

## 上线待办（按顺序）
1. 建 GitHub 远端仓库 `bayernjf/growth-agent-landing` 并推送（`main` 为生产分支，
   日常开发在 `dev`）。
2. Cloudflare Pages 建项目 `growth-agent-landing`，连接该 GitHub 仓库（Git 集成）。
3. Pages 构建配置（与 loom-landing / agent-world-landing 一致）：

   | 配置项 | 值 |
   |---|---|
   | Production branch | `main` |
   | Build command | `npx playwright install chromium && npm run build` |
   | Build output directory | `dist` |
   | Environment variables | `NODE_VERSION = 22`、`PLAYWRIGHT_BROWSERS_PATH = 0` |

4. owner 确认域名后：Pages 加 Custom Domain `growth-agent.bayjf.com`，DNS 加 CNAME
   （Proxied）；若最终域名不同，按「改域名时的同步点」逐项替换。
5. 推送 `dev` 验证 preview 部署，合并 `main` 发版。

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
