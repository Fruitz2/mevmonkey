export const siteConfig = {
  meta: {
    title: "MEV Monkey - Solana Trading Bot | MONK Token",
    description:
      "Advanced Solana MEV bot and trading tools. Real-time mempool monitoring, rug detection, smart alerts via Telegram bot @mevmonkey_bot. Powered by MONK token.",
  },
  links: {
    pump: "https://pump.fun/coin/REPLACE_ME",
    x: "https://x.com/mevmonkeyx",
    tg: "https://t.me/mevmonkey",
    contract: "REPLACE_ME",
  },
  hero: {
    eyebrow: "SOLANA • MEV LAB",
    title: "MEV MONKEY",
    subtitle:
      "MEV tools for Solana traders, accessible via Telegram bot. Monitor new pools, track suspicious activity, and get alerts when things look off.",
    bullets: [
      "Track new token launches on Solana as they hit the chain",
      "Get notified about liquidity changes and suspicious wallet patterns",
      "Access insights through a simple Telegram interface",
    ],
    primaryCta: "View on Pump.fun",
    secondaryCtas: ["Join Telegram", "View MONK Token"],
  },
  status: [
    { label: "Network", value: "Solana", tone: "ok" },
    { label: "Bot Status", value: "Prototype in dev", tone: "warn" },
    { label: "Risk Level", value: "Always high", tone: "alert" },
  ],
  monkeyStack: {
    title: "The Stack",
    subtitle: "Three parts working together: access token, monitoring bot, and community feedback loop.",
    items: [
      {
        label: "MONK Token",
        title: "Access Token",
        body: "Holding MONK gets you access to premium bot features and reduced fees. It's utility, not an investment. No yield, no staking, just better access to the tools.",
      },
      {
        label: "MEV Bot",
        title: "Monitoring Bot",
        body: "Telegram bot that watches Solana for you. New pools, suspicious movements, transaction patterns. Get pinged when something looks interesting or sketchy. Still being built.",
      },
      {
        label: "Community Lab",
        title: "Feedback Loop",
        body: "We test features with the community before rolling them out. If something doesn't work, we hear about it. If traders need something specific, we build it. Simple as that.",
      },
    ],
  },
  botExplainer: {
    title: "What MEV Monkey does",
    intro: "We're building tools that help Solana traders see what's happening on chain. No magic, just data presented in a way that's actually useful.",
    bullets: [
      "Monitors new token launches on Solana and flags unusual deployment patterns",
      "Tracks liquidity movements and wallet behaviors that often signal trouble",
      "Sends alerts through Telegram when something worth checking appears",
      "Shows transaction timing and gas patterns that matter for MEV opportunities",
      "Integrates with Phantom and other Solana wallets for transaction execution",
      "Keeps a log of your trades so you can see what worked and what didn't",
    ],
  },
  architecture: {
    title: "How it works",
    intro: "Four steps. Nothing fancy. Data comes in, gets filtered, turns into alerts, you decide what to do with them.",
    stages: [
      {
        label: "1. Watch",
        title: "Monitor the chain",
        body: "Connected to Solana nodes watching for new token contracts, liquidity adds, and unusual transaction patterns.",
      },
      {
        label: "2. Filter",
        title: "Cut the noise",
        body: "Most launches are junk. Bot filters out the obvious garbage so you only see things worth a second look.",
      },
      {
        label: "3. Alert",
        title: "Send notifications",
        body: "When something hits your criteria, you get a ping on Telegram. Token address, liquidity info, red flags if any.",
      },
      {
        label: "4. Execute",
        title: "You decide",
        body: "Bot shows you the data. You connect your wallet if you want to trade. No auto trading, no taking control of your funds.",
      },
    ],
  },
  token: {
    title: "MONK Token Benefits",
    bullets: [
      "Free basic tools for everyone, with premium features unlocked for MONK holders",
      "Token holders get reduced bot fees and early access to new features before anyone else",
      "Help decide what we build next through community votes and feature proposals",
    ],
    disclaimer:
      "MONK provides access and benefits, not guaranteed returns. Trade responsibly.",
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
          "MONK token integration for access tiers",
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
    title: "Join",
    body:
      "If you trade Solana and want tools that actually help, join the Telegram. Early access to the bot, direct line to the devs, and input on what gets built next.",
    ctas: ["Join Telegram", "Follow on X"],
  },
};
