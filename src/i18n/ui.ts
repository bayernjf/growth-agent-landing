export const languages = {
  en: "English",
  zh: "简体中文",
} as const;

export const defaultLang = "en";

export const ui = {
  en: {
    "meta.title": "growth-agent — Self-hosted growth agent that ships one PR a day",
    "meta.description":
      "A self-hosted, BYOK growth agent: one new-content PR and one page-fix PR every day, every decision graded by the zeus kernel with D2 human review, merged by you on GitHub. A ranking report every week.",

    "nav.langSwitch": "中文",
    "hud.status": "Pre-launch · dogfood prep",

    "hero.kicker": "SELF-HOSTED · BYOK · DAILY PR",
    "hero.title": "One PR a day. Your servers. Your keys.",
    "hero.sub":
      "growth-agent is a minimal growth agent you self-host: every day it ships one new-content PR and one page-fix PR. Every publish decision is graded by the zeus decision kernel (D2 human review) and merged by you on GitHub — the last step online is always yours. Once a week, a ranking report.",
    "hero.cta": "Request dogfood access",
    "hero.cta2": "Read the README",
    "hero.meta.cap": "daily cap",
    "hero.meta.gate": "human review",
    "hero.meta.byok": "your own keys",
    "hero.meta.host": "self-hosted",

    "term.caption": "one tick of the batch scheduler — real commands, offline fixture shown",
    "term.cmd": "$ npm run batch -- daily --site example.com",
    "term.l1": "signal   gsc: pages losing impressions · uncovered queries",
    "term.l2": "decide   zeus: D2 decision submitted · awaiting_approval (sla 24h)",
    "term.l3": "approve  ops-console card → you approve → task = drafting",
    "term.l4": "draft    inbox/loom: no draft file, no fabricated content",
    "term.l5": "qa       intent ✓ · dedupe ✓ · value ✓ (results visible)",
    "term.l6": "publish  PR opened by bot — never merged by bot",
    "term.l7": "report   weekly-<week>-v<n>.md · append-only · cost ledger",

    "caps.kicker": "CORE LOOP",
    "caps.title": "What one day of growth work looks like",
    "caps.sub":
      "Not a dashboard you have to operate — one finished unit of growth work, delivered as a pull request you can inspect.",
    "caps.c1.title": "One new page a day",
    "caps.c1.desc":
      "Signals from your own Search Console snapshots — pages losing impressions, queries you don't cover — become a D2-reviewed task. Once approved, it turns into a GitHub PR with the evidence attached.",
    "caps.c2.title": "One page fix a day",
    "caps.c2.desc":
      "Pages sliding in the rankings get a rewrite PR — title, meta, content — through the same approval chain. A fix task argues only from its own target page's data, never padded with site-wide stats.",
    "caps.c3.title": "Monitoring that feeds tomorrow",
    "caps.c3.desc":
      "Daily GSC snapshots (strictly read-only) and SERP rank tracking on your own supplier key become the signal source for the next day's tasks.",
    "caps.c4.title": "A weekly report you can audit",
    "caps.c4.desc":
      "Adoption rate, human edits per merged PR, rank / impression / click deltas, and what your own API keys actually cost — versioned, append-only, never overwritten, never emailed.",

    "flow.kicker": "HOW IT RUNS",
    "flow.title": "From docker compose up to a merged PR",
    "flow.sub":
      "Five steps. Every connector defaults to an offline fixture, so the whole pipeline runs before you hand over a single credential.",
    "flow.s1.title": "Self-host the stack",
    "flow.s1.desc":
      "One compose file brings up the orchestrator and the zeus decision kernel; a 2-core 4 GB box is enough. /healthz reports database dialect, credential presence and startup reconciliation — any online mode missing credentials fails closed at boot.",
    "flow.s1.cmd": "docker compose up -d --build && curl localhost:8790/healthz",
    "flow.s2.title": "Bring your own keys",
    "flow.s2.desc":
      "GSC installed-app OAuth (read-only scope, refresh token sealed with AES-256-GCM), your own SERP supplier account, a repo-scoped GitHub PAT. Credentials live only in .env or your secrets store — never in the business database, logs or git history.",
    "flow.s2.cmd": "cp .env.example .env   # GA_GSC_*, GA_SERP_*, GA_GITHUB_*",
    "flow.s3.title": "The batch ticks",
    "flow.s3.desc":
      "The scheduler sidecar runs daily → production → verify every tick. All three are idempotent, so an empty tick is a no-op; report and packet run on their own schedule because they version their output.",
    "flow.s3.cmd": "npm run batch -- daily|production|verify --site <site>",
    "flow.s4.title": "You approve",
    "flow.s4.desc":
      "Every content decision lands in the approval console as a D2 card with a 24-hour SLA and a deep link. No approve-in-IM, no auto-release path — if you don't decide, it waits and reminds you.",
    "flow.s5.title": "You merge",
    "flow.s5.desc":
      "The bot opens branches and PRs and never merges. Your merge webhook flips the task, verify re-checks the page later, and API spend lands in the cost ledger for the weekly report.",

    "guard.kicker": "HARD CONSTRAINTS",
    "guard.title": "Guardrails you cannot switch off",
    "guard.sub":
      "These are compile-time rules, not settings. They exist so a growth agent can never turn into a scaled-content machine.",
    "guard.g1": "D2 human review with a 24h SLA — no D0/D1 auto-approval path exists for content",
    "guard.g2": "PRs only, never merged — the last step online is always your merge",
    "guard.g3": "Hard daily cap of 1 write + 1 fix — there is no “10 posts a day” tier",
    "guard.g4": "GSC strictly read-only (webmasters.readonly); refresh token encrypted at rest",
    "guard.g5": "QA triple gate — intent, dedupe, value — runs before a PR opens, results visible",
    "guard.g6": "Fail-closed everywhere — missing credentials never silently fall back to fixtures",

    "aud.kicker": "WHO IT'S FOR",
    "aud.title": "Built for owners, not dashboard renters",
    "aud.sub":
      "Three profiles from the product requirement doc. Phase one serves P1 only; the rest follow after dogfood.",
    "aud.p1.tag": "P1 · phase one",
    "aud.p1.title": "Multi-site indie builders",
    "aud.p1.desc":
      "You run 3–20 Git-published sites (Astro / Next / static), know docker and PRs, refuse to rent a full SEO suite — and want one real unit of work done every day, with data never leaving your VPS.",
    "aud.p2.tag": "P2 · after dogfood",
    "aud.p2.title": "Teams that guard data sovereignty",
    "aud.p2.desc":
      "Content or marketing teams of 3–10 who are sensitive about GSC grants and data egress: clear compliance boundaries, an approval console with role separation, no black-box automation.",
    "aud.p3.tag": "P3 · later",
    "aud.p3.title": "Merchants who outgrew suites",
    "aud.p3.desc":
      "You bought Semrush and used 5% of it. You want traffic, not another dashboard. Served by an optional hosted edition in a later phase — phase one is deliberately not for you.",

    "cta.title": "Dogfood starts on our own sites first",
    "cta.sub":
      "The 30-day dogfood plan runs on the author's own properties before any external install. If you want your site on the list after that, send a note.",
    "cta.form.name": "Name (optional)",
    "cta.form.email": "Email",
    "cta.form.platforms": "Your sites and stack (e.g. 3 Astro blogs on a VPS)",
    "cta.form.submit": "Request dogfood access",
    "cta.form.note":
      "Opens your mail app with these details prefilled. We only use them to reply to this request.",
    "cta.form.opening": "Opening your mail app…",
    "cta.form.fallback": "Prefer email?",
    "cta.form.invalid": "Please add your email and a line about your sites.",
    "cta.email": "b4yernjf@gmail.com",

    "foot.tag": "Self-hosted, BYOK growth agent — one PR a day.",
    "foot.nav.capabilities": "Core loop",
    "foot.nav.workflow": "How it runs",
    "foot.nav.guardrails": "Guardrails",
    "foot.nav.privacy": "Privacy",
    "foot.nav.terms": "Terms",

    "legal.privacyTitle": "Privacy Policy",
    "legal.privacyBody":
      "This is a placeholder. The privacy policy will be finalized before the public launch.",
    "legal.termsTitle": "Terms of Service",
    "legal.termsBody":
      "This is a placeholder. The terms of service will be finalized before the public launch.",
    "legal.updated": "Last updated",
  },

  zh: {
    "meta.title": "growth-agent — 自托管、每天交 PR 的极简增长 Agent",
    "meta.description":
      "自托管、BYOK 的极简增长 Agent：每天产出 1 篇新内容 PR + 1 个页面修复 PR，全部经 zeus 决策内核分级（D2 人审）并由你在 GitHub 合并；每周一份排名变化报告。",

    "nav.langSwitch": "English",
    "hud.status": "发布前 · dogfood 准备中",

    "hero.kicker": "SELF-HOSTED · BYOK · DAILY PR",
    "hero.title": "每天一个 PR。数据在你的服务器，密钥在你手里。",
    "hero.sub":
      "growth-agent 是一个你自托管的极简增长 Agent：每天产出 1 篇新内容 PR + 1 个页面修复 PR。所有发布决策都经 zeus 决策内核分级（D2 人审），并由你在 GitHub 亲手合并——上线的最后一步永远是你。每周一份排名变化报告。",
    "hero.cta": "预约 dogfood 体验",
    "hero.cta2": "阅读 README",
    "hero.meta.cap": "每日硬上限",
    "hero.meta.gate": "人工审批",
    "hero.meta.byok": "密钥自带",
    "hero.meta.host": "自托管",

    "term.caption": "批次调度器的一个 tick —— 真实命令，图示为离线 fixture 输出",
    "term.cmd": "$ npm run batch -- daily --site example.com",
    "term.l1": "signal   gsc：掉流量页 · 未覆盖查询",
    "term.l2": "decide   zeus：提交 D2 决策 · awaiting_approval（sla 24h）",
    "term.l3": "approve  ops-console 卡片 → 你批准 → task = drafting",
    "term.l4": "draft    inbox/loom：缺草稿不伪造内容",
    "term.l5": "qa       意图 ✓ · 查重 ✓ · 价值 ✓（结果可见）",
    "term.l6": "publish  bot 只开 PR —— 永不自动合并",
    "term.l7": "report   weekly-<周>-v<n>.md · 只追加 · 成本台账",

    "caps.kicker": "核心闭环",
    "caps.title": "一天的增长工作长什么样",
    "caps.sub": "不是要你天天盯的仪表盘——而是一件做完的增长工作，以 PR 形式交付，随你审。",
    "caps.c1.title": "每天 1 篇新内容",
    "caps.c1.desc":
      "信号来自你自己的 Search Console 快照——掉流量的页、没覆盖的查询——变成一条 D2 人审任务；批准后开出 GitHub PR，证据随 PR 附上。",
    "caps.c2.title": "每天 1 个页面修复",
    "caps.c2.desc":
      "排名下滑的页面得到一个改写 PR（标题 / meta / 正文），走同一条审批链。fix 任务只拿自己目标页的数据做证据，不拿整站曝光充数。",
    "caps.c3.title": "喂养明天的监控",
    "caps.c3.desc":
      "每日 GSC 快照（严格只读授权）+ SERP 排名追踪（用你自己的供应商账号），成为次日任务的信号源。",
    "caps.c4.title": "可审计的周报",
    "caps.c4.desc":
      "采用率、合并时的人工修改量、排名 / 展示 / 点击变化、你自己 API key 的真实花销——版本化、只追加、不覆盖、不发邮件。",

    "flow.kicker": "使用方式",
    "flow.title": "从 docker compose up 到合并 PR",
    "flow.sub":
      "五步。所有连接器默认离线 fixture，整条管道跑通之前，你不需要交出任何凭据。",
    "flow.s1.title": "自托管整条栈",
    "flow.s1.desc":
      "一个 compose 文件拉起 orchestrator 与 zeus 决策内核，单机 2C4G 可跑。/healthz 返回数据库方言、凭据 presence 与启动对账结果；online 模式缺凭据会在启动阶段 fail-closed 退出。",
    "flow.s1.cmd": "docker compose up -d --build && curl localhost:8790/healthz",
    "flow.s2.title": "密钥自带（BYOK）",
    "flow.s2.desc":
      "GSC installed-app OAuth（只读 scope，refresh token 用 AES-256-GCM 密封落盘）、你自己的 SERP 供应商账号、最小权限 GitHub PAT。凭据只存 .env 或你的密钥管理器——永不进业务库、日志或 git 历史。",
    "flow.s2.cmd": "cp .env.example .env   # GA_GSC_*, GA_SERP_*, GA_GITHUB_*",
    "flow.s3.title": "批次按 tick 运转",
    "flow.s3.desc":
      "调度 sidecar 每个 tick 依次跑 daily → production → verify，三步都幂等，空 tick 是 no-op；report / packet 版本化输出，单独排期。",
    "flow.s3.cmd": "npm run batch -- daily|production|verify --site <站点>",
    "flow.s4.title": "你来审批",
    "flow.s4.desc":
      "每条内容决策都以 D2 卡片落到审批台：24 小时 SLA + 深链通知。没有 IM 内批驳，没有自动放行——你不决定，它就等，并提醒你。",
    "flow.s5.title": "你来合并",
    "flow.s5.desc":
      "bot 只开分支和 PR，永不合并。你的合并动作经 webhook 回写任务，verify 稍后复查页面，API 花销进成本台账，汇进周报。",

    "guard.kicker": "硬约束",
    "guard.title": "关不掉的护栏",
    "guard.sub":
      "这些是写进代码的规则，不是配置项。它们的存在，是为了让增长 Agent 永远不会变成规模化内容机器。",
    "guard.g1": "内容发布一律 D2 人审（24h SLA）——不存在 D0/D1 自动放行的配置路径",
    "guard.g2": "只开 PR、永不合并——上线的最后一步永远是你的合并动作",
    "guard.g3": "每日硬上限 1 写 + 1 修——没有“每日 10 篇”档",
    "guard.g4": "GSC 严格只读（webmasters.readonly），refresh token 加密落盘",
    "guard.g5": "QA 三闸（意图 / 查重 / 价值）在 PR 打开前执行，结果对人可见",
    "guard.g6": "处处 fail-closed——缺凭据永不静默回退到离线 fixture",

    "aud.kicker": "适用人群",
    "aud.title": "为“拥有者”造，不为“仪表盘租客”造",
    "aud.sub": "三类画像来自产品需求文档。首期只服务 P1，其余在 dogfood 验证后跟进。",
    "aud.p1.tag": "P1 · 首期",
    "aud.p1.title": "多站群独立开发者",
    "aud.p1.desc":
      "手握 3–20 个 Git 发布站（Astro / Next / 静态站），会 docker 与 PR，不愿为 SEO 全家桶买单——要的是每天一件做完的实际工作，且数据不出自己的 VPS。",
    "aud.p2.tag": "P2 · dogfood 后",
    "aud.p2.title": "重视数据主权的小团队",
    "aud.p2.desc":
      "3–10 人的内容 / 市场团队，对 GSC 授权与数据出域敏感：合规边界清晰、审批台有角色区分、不接受黑盒全自动。",
    "aud.p3.tag": "P3 · 后续阶段",
    "aud.p3.title": "嫌套件贵且用不起来的商家",
    "aud.p3.desc":
      "买过 Semrush 只用了 5%。要的是流量上涨，不是又一块仪表盘。由后续可选托管版服务——首期刻意不覆盖。",

    "cta.title": "dogfood 先在作者自己的站点上跑",
    "cta.sub":
      "30 天 dogfood 计划先跑在作者自己的站点上，之后才开放外部安装。想让你的站点排进名单，留个言。",
    "cta.form.name": "称呼（可选）",
    "cta.form.email": "邮箱",
    "cta.form.platforms": "你的站点与技术栈（如：VPS 上 3 个 Astro 博客）",
    "cta.form.submit": "预约 dogfood 体验",
    "cta.form.note": "提交会打开你的邮件客户端并预填上述信息，我们仅用于回复本次请求。",
    "cta.form.opening": "正在打开邮件客户端…",
    "cta.form.fallback": "也可以直接发邮件：",
    "cta.form.invalid": "请填写邮箱并简单描述你的站点。",
    "cta.email": "b4yernjf@gmail.com",

    "foot.tag": "自托管、BYOK 的极简增长 Agent——每天一个 PR。",
    "foot.nav.capabilities": "核心闭环",
    "foot.nav.workflow": "使用方式",
    "foot.nav.guardrails": "硬约束",
    "foot.nav.privacy": "隐私政策",
    "foot.nav.terms": "服务条款",

    "legal.privacyTitle": "隐私政策",
    "legal.privacyBody": "占位内容。公开上线前将完善隐私政策。",
    "legal.termsTitle": "服务条款",
    "legal.termsBody": "占位内容。公开上线前将完善服务条款。",
    "legal.updated": "最后更新",
  },
} as const;

export type Lang = keyof typeof languages;
export type UIKey = keyof (typeof ui)["en"];
