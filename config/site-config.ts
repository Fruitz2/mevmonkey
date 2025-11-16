export const siteConfig = {
  meta: {
    title: "MEV Monkey | Solana MEV Bot & Trading Tools",
    description:
      "Advanced MEV tools for Solana traders. Real time mempool monitoring, rug detection, and smart execution hints. Built by traders, for traders who move fast.",
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
      "Advanced Solana MEV tools delivered through Telegram. Spot opportunities before they happen, avoid rugs before they pull, and stay ahead of the pack.",
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
    subtitle: "A complete Solana ecosystem bringing together token, bot, and community lab.",
    items: [
      {
        label: "MEVM Token",
        title: "Access and Benefits",
        body: "Token holders get premium access to advanced features, reduced fees, and voting rights on what we build next. No promises of returns, just real utility and closer access to the lab.",
      },
      {
        label: "MEV Bot",
        title: "Execution Edge",
        body: "A Solana native bot designed for speed. Monitor new pools, analyze MEV opportunities, and get execution insights that help you trade smarter and faster.",
      },
      {
        label: "Monkey Lab",
        title: "Research and Development",
        body: "Our open playground for testing new strategies, building better tools, and experimenting with cutting edge MEV techniques. The community helps shape what we build.",
      },
    ],
  },
  botExplainer: {
    title: "What MEV Monkey does",
    intro: "Our team of experienced Solana developers has been building MEV tools since the early days of DeFi. We've analyzed thousands of transactions, studied MEV patterns across multiple chains, and now we're bringing that expertise to Solana traders.",
    bullets: [
      "Monitors Solana mempool and DEX activity in real time for new token launches and opportunities",
      "Analyzes on chain patterns on Solana to identify rug pulls and suspicious activity",
      "Provides timing insights, liquidity analysis, and MEV context specific to Solana",
      "Operates through a Telegram bot interface for easy access anywhere",
      "Works with Solana wallets like Phantom for secure transaction signing",
      "Tracks your performance on Solana to help refine your trading strategy",
    ],
  },
  architecture: {
    title: "How the system works",
    intro: "Built on years of MEV research and real world trading experience. Our architecture is designed to be fast, reliable, and transparent.",
    stages: [
      {
        label: "1. Intake",
        title: "Mempool and DEX Feeds",
        body: "Listening to Solana RPC and WebSocket streams to catch new pools, major swaps, and unusual gas activity as they happen.",
      },
      {
        label: "2. Filters",
        title: "Smart Filtering",
        body: "Automatically filters out obvious scams and suspicious activity using pattern recognition and historical data. Gets smarter over time.",
      },
      {
        label: "3. Signals",
        title: "Trade Signals",
        body: "Generates clear entry opportunities and warns you about potential rugs or MEV traps in language you can actually understand.",
      },
      {
        label: "4. Execution",
        title: "Telegram Bot Interface",
        body: "Access all features through our Telegram bot (@mevmonkey_bot, currently in development). Get alerts, view opportunities, and execute trades right from Telegram with your Solana wallet.",
      },
    ],
  },
  token: {
    title: "MEVM Token Benefits",
    bullets: [
      "Free basic tools for everyone, with premium features unlocked for MEVM holders",
      "Token holders get reduced bot fees and early access to new features before anyone else",
      "Help decide what we build next through community votes and feature proposals",
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
          "Raw scripts and experimental code",
          "Internal testing on Solana devnet",
          "Building the foundation",
        ],
      },
      {
        label: "Phase 1",
        title: "Prototype bot",
        bullets: [
          "Working Solana prototype with test wallets",
          "New pool detection and basic rug warnings",
          "Core safety features and logging system",
        ],
      },
      {
        label: "Phase 2",
        title: "Closed degen circle",
        bullets: [
          "Limited invite only beta testing",
          "Gathering real user feedback",
          "Refining features based on trader input",
        ],
      },
      {
        label: "Phase 3",
        title: "Public lab",
        bullets: [
          "Public launch with full featured UI",
          "MEVM token integration for access tiers",
          "Complete documentation and guides",
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
      "Built for Solana traders who want an edge. Whether you're hunting new launches on Solana or avoiding rug pulls, MEV Monkey gives you the intel you need to trade smarter. Join our Telegram community to get early access to @mevmonkey_bot and help shape what we build next.",
    ctas: ["Join Telegram", "Follow on X"],
  },
};
