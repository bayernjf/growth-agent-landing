# Handoff — growth-agent-landing

State of growth-agent-landing as of 2026-11-02.

> 一句话：落地页从零建好，双语 + 构建 + 截图管线齐全；**未建仓、未推送、未部署**，
> 上线待办见 `docs/DEPLOYMENT.md`。

## 已完成

- Astro 7 静态站（`output: 'static'`），结构与最新惯例仓 loom-landing 对齐：
  `consts.ts` 单一域名源、`i18n/ui.ts` 双语文案字典 + 编译期键校验、SEO 组件
  （canonical + hreflang ×3 + OG/Twitter + JSON-LD `@graph`）、`@astrojs/sitemap`、
  reveal-on-scroll、`scripts/shot.mjs` 构建期截 og 图。
- 页面区块：Hero（一句话定位 + 单主 CTA + 次 CTA + 批次 tick 终端卡）、
  核心闭环 4 项（每写 / 每修 / 监控 / 周报）、使用方式 5 步（含真实命令）、
  硬约束 6 条、适用人群 P1/P2/P3、mailto 预约 CTA、Footer（隐私 / 条款占位页双语）。
- `@bay/landing-ui#v1.5.0` 的 BayjfLink（顶栏 + 页脚）与 StarOnGithub。
- robots.txt 放行 AI 爬虫；llms.txt / llms-en.txt 双语自述。
- 设计令牌沿用暗色「产线」语言；品牌色增长绿 `#4ade80` + 人审琥珀 `#ffb340`；
  `--ink-faint` 主动提亮至 `#8496a1`（其它仓的 `#61737e` 在深色底上不过 WCAG AA）。

## 文案事实源（对账清单）

| 页面说法 | 出处 |
|---|---|
| 每天 1 写 + 1 修、D2 人审、人合并、周报 | 产品仓 README L3–4 |
| 不卖仪表盘 / 数据自留 / BYOK / 人工合并 | 产品仓 README「定位」节 |
| zeus / growth-os / loom / atlas / ops-console 边界 | 产品仓 README「架构边界」节 |
| Node 22 + TS strict + Hono + SQLite/PG 双方言 | 产品仓 README「技术栈」节 |
| 2C4G、compose 一键、healthz、批次幂等、report 单独排期 | `deploy/SELF_HOSTING.md` §2/§3.3 |
| GSC 只读 scope、AES-256-GCM 密封、凭据表、fail-closed | `deploy/SELF_HOSTING.md` §1/§4 |
| QA 三闸（意图/查重/价值）、24h SLA、无自动放行 | `deploy/SELF_HOSTING.md` §1、PRD §6 |
| fix 任务只用自己目标页做证据 | 产品仓 handoff.md「故意如此的规则」 |
| P1/P2/P3 画像与首期只服务 P1 | `bayjf/docs/tier0/Tier0-增长Agent PRD.md` §2 |
| dogfood 先在作者自己站点跑、定价未定 | PRD §7/§9、产品仓 README「当前状态」 |

未编造：用户数、客户 logo、评价、定价数字、性能指标。站点状态如实标注
「Pre-launch · dogfood prep」。

## 待办（上线前）

- 建 GitHub 仓库、建 Pages 项目、绑域名（步骤见 `docs/DEPLOYMENT.md`）。
- 域名确认后替换 `src/consts.ts` 的 `SITE_URL` 占位（`growth-agent.bayjf.com`）。
- 隐私 / 条款为占位文案，公开上线前需完善（`src/i18n/ui.ts` 的 `legal.*`）。
- 产品仓 `github.com/bayernjf/growth-agent` 当前为私有仓；落地页 Star / README
  链接在外部访客点开是 404，上线前需确认是否转公开或调整链接。
