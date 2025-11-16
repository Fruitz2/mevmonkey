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
    eyebrow: "SOLANA • MEV LAB • UTILITY MEME",
    title: "MEV MONKEY",
    subtitle:
      "One hyperactive monkey glued to Solana's mempool. Tools for people who already know what risk feels like.",
    bullets: [
      "Planned: Solana pool snipes, rug-check hints, simple MEV surf tools.",
      "No signals. No 100x promises. Just faster eyes on the mempool.",
      "If you use it well, it might help you trade smarter. It might also still be wrong.",
    ],
    primaryCta: "View on Pump.fun",
    secondaryCtas: ["Open Telegram", "View MEVM Token"],
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
    title: "What the bot actually tries to do",
    bullets: [
      "Monitor Solana mempool and DEX events for new meme pools and weird activity.",
      "Flag basic rug vibes using simple heuristics: creator behavior, LP patterns, timing.",
      "Surface 'MEV surf' hints: are you likely early, late, or getting farmed?",
      "Generate human-readable trade ideas. You decide if you click send.",
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
    title: "Where MEVM fits in",
    bullets: [
      "Tiered access: basic dashboards for everyone, advanced lab panels for MEVM holders.",
      "Potential fee perks: MEVM holders can get lower bot fees or occasional fee rebates into a public treasury.",
      "Direction, not control: MEVM used for community polls on which Solana strategy or feature to prioritize next.",
    ],
    disclaimer:
      "Owning MEVM does NOT guarantee profit, yield, or any return. It just plugs you deeper into the lab.",
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
    title: "Read this before you let monkey touch your trades",
    bullets: [
      "Solana is fast, but losses are faster if you don't know what you're doing.",
      "Bots can and do lose money — especially on meme coins.",
      "MEV is complex. Sometimes you are the one getting farmed.",
      "Smart contracts, bots, and integrations can have bugs or be exploited.",
      "Never put in more SOL than you can afford to see go to zero.",
    ],
    disclaimer:
      "Nothing here is financial advice. MEV Monkey is experimental software on Solana for people who already understand degen risk.",
  },
  community: {
    title: "Who this is actually for",
    body: "Solana degens who already understand slippage, rugs, and MEV — and want tools, not hand-holding. If you're here for guaranteed returns, please close the tab.",
    ctas: ["Open Telegram", "Follow on X"],
  },
};
