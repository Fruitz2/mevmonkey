export const siteConfig = {
  meta: {
    title: "MEV Monkey — Solana MEV bot & degen lab",
    description:
      "Small Solana dev lab wiring a MEV-aware bot for meme traders. Black and yellow, loud and honest. No calls, no promises. Just tools, logs, and one very loud monkey.",
  },
  links: {
    pump: "https://pump.fun/coin/REPLACE_ME",
    x: "https://x.com/mevmonkey",
    tg: "https://t.me/mevmonkey",
    contract: "REPLACE_ME",
  },
  hero: {
    eyebrow: "SOLANA • MEV LAB",
    title: "MEV MONKEY",
    subtitle:
      "Advanced Solana MEV tools for traders who move fast. Spot opportunities, avoid rugs, stay ahead of the pack.",
    bullets: [
      "Real-time Solana mempool monitoring for new pools and market movements",
      "Smart rug detection using on-chain patterns and creator analysis",
      "MEV-aware execution hints to help you trade with better timing",
    ],
    primaryCta: "View on Pump.fun",
    secondaryCtas: ["Join Telegram", "View MEVM Token"],
  },
  status: [
    { label: "Network", value: "Solana", tone: "ok" },
    { label: "Bot Status", value: "Prototype in dev", tone: "warn" },
    { label: "Risk Level", value: "Always high", tone: "alert" },
  ],
  monkeyStack: {
    title: "The Monkey Stack",
    subtitle: "A tiny Solana ecosystem: token, bot, lab.",
    items: [
      {
        label: "MEVM Token",
        title: "Access & alignment",
        body: "Holders get better access, fee perks, and a say in what the monkey learns next. No yield promises, just closer seats to the lab.",
      },
      {
        label: "MEV Bot",
        title: "Execution edge",
        body: "A Solana-native bot focused on new pools, MEV vibes, and execution context for degen traders.",
      },
      {
        label: "Monkey Lab",
        title: "Plays & experiments",
        body: "A place to ship new strategies, dashboards, and experiments with the community watching over the monkey's shoulder.",
      },
    ],
  },
  botExplainer: {
    title: "What MEV Monkey does",
    bullets: [
      "Monitors Solana mempool and DEX events in real-time for emerging opportunities",
      "Analyzes on-chain patterns to identify potential risks and red flags",
      "Provides MEV-aware insights: timing windows, liquidity depth, and execution context",
      "Delivers actionable intel while you stay in full control of your trades",
    ],
  },
  architecture: {
    title: "Solana MEV pipeline (planned)",
    stages: [
      {
        label: "1. Intake",
        title: "Mempool + DEX feeds",
        body: "Listen to Solana RPC/WebSocket streams for new pools, big swaps, and gas spikes.",
      },
      {
        label: "2. Filters",
        title: "Basic sanity checks",
        body: "Filter obvious scams and nonsense based on rules and block history. Still not perfect.",
      },
      {
        label: "3. Signals",
        title: "Snipes & warnings",
        body: "Produce candidate entries and rug/MEV warnings in plain language.",
      },
      {
        label: "4. Execution",
        title: "You stay in control",
        body: "Bot can pre-fill transactions, but you always confirm in your own wallet.",
      },
    ],
  },
  token: {
    title: "MEVM Token Benefits",
    bullets: [
      "Access tiers: Free basic tools for everyone, premium features for MEVM holders",
      "Fee benefits: MEVM holders enjoy reduced bot fees and priority access to new features",
      "Community voice: Vote on which strategies and tools we build next",
    ],
    disclaimer:
      "MEVM provides access and benefits, not guaranteed returns. Trade responsibly.",
  },
  roadmap: {
    title: "Rough plan (not a promise)",
    phases: [
      {
        label: "Phase 0",
        title: "Closet chaos",
        bullets: [
          "Ugly scripts and notebooks.",
          "Monkey screaming at Solana logs.",
          "Internal dev-only tests.",
        ],
      },
      {
        label: "Phase 1",
        title: "Prototype bot",
        bullets: [
          "Solana-only prototype hooked to test wallets.",
          "New pool radar, basic rug hints.",
          "Hard-coded safeties and logs.",
        ],
      },
      {
        label: "Phase 2",
        title: "Closed degen circle",
        bullets: [
          "Small invite-only beta.",
          "Strict caps and disclaimers.",
          "Feedback into next bot iterations.",
        ],
      },
      {
        label: "Phase 3",
        title: "Public lab",
        bullets: [
          "Public UI for the bot tools.",
          "MEVM-based access tiers and fees.",
          "Docs explaining every module and risk.",
        ],
      },
    ],
  },
  risk: {
    title: "Trading Smart on Solana",
    bullets: [
      "Crypto trading involves risk. Past performance doesn't indicate future results.",
      "MEV tools help you make informed decisions, but markets are unpredictable.",
      "Always do your own research and only invest what you can afford to lose.",
      "Smart contracts and bots are powerful tools but require careful use.",
    ],
    disclaimer:
      "MEV Monkey provides tools and information. All trading decisions are your own. Not financial advice.",
  },
  community: {
    title: "Join the Lab",
    body:
      "Built for Solana traders who want an edge. Whether you're hunting new launches or avoiding traps, MEV Monkey gives you the intel you need. Join our community to stay updated and help shape what we build next.",
    ctas: ["Join Telegram", "Follow on X"],
  },
};
