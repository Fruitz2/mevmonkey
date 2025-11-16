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
      "Advanced Solana MEV tools for traders who move fast. Spot opportunities before they happen, avoid rugs before they pull, and stay ahead of the pack.",
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
    bullets: [
      "Watches Solana mempool and DEX events in real time to catch opportunities as they emerge",
      "Analyzes on chain patterns to spot potential risks and red flags before you get burned",
      "Shows you the full picture with timing windows, liquidity depth, and MEV context",
      "Gives you the intel you need while keeping you in complete control of every trade",
    ],
  },
  architecture: {
    title: "Solana MEV pipeline (planned)",
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
        title: "Your Control",
        body: "The bot prepares transactions for you, but every trade requires your confirmation. Your wallet, your keys, your decisions.",
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
      "Built for Solana traders who want an edge. Whether you're hunting new launches or avoiding traps, MEV Monkey gives you the intel you need to trade smarter. Join our community to get updates and help us build the tools traders actually want.",
    ctas: ["Join Telegram", "Follow on X"],
  },
};
