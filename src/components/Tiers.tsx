const TIERS = [
  {
    name: 'RUNT',
    sub: 'free tier',
    min: '< 50k',
    perks: [
      'public feed of recent sandwiches',
      'telegram bot, basic commands',
      'no priority',
    ],
    tone: 'border-bone/30',
  },
  {
    name: 'PRIMATE',
    sub: 'holder',
    min: '≥ 50k',
    perks: [
      'real-time pool alerts',
      'watch any wallet or token',
      'lower bot rate limits',
    ],
    tone: 'border-wire/40',
  },
  {
    name: 'ALPHA',
    sub: 'recommended',
    min: '≥ 250k',
    perks: [
      'priority routing in the queue',
      'pre-launch pool sniffer',
      'access to the holder channel',
      'first look at every feature shipped',
    ],
    tone: 'border-wire',
    feature: true,
  },
  {
    name: 'SILVERBACK',
    sub: 'top holders',
    min: '≥ 1M',
    perks: [
      'direct line to the team',
      'share of the kill-pool fees',
      'feature votes',
      'one favour, payable in code',
    ],
    tone: 'border-siren/60',
  },
]

export default function Tiers() {
  return (
    <section id="tiers" className="relative py-20 px-4 md:px-8">
      <div className="relative max-w-6xl mx-auto">
        <div className="div-label mb-8">§03 / what $MONK unlocks at launch</div>

        <div className="flex flex-col lg:flex-row gap-8 items-end mb-10">
          <h2 className="stencil text-bone text-5xl md:text-7xl leading-[0.9]">
            access ladder.<br />
            <span className="text-wire glow">climb or watch.</span>
          </h2>
          <p className="font-body text-bone/80 max-w-md">
            $MONK works as a keycard. more of it, more of the bot. specifics
            may shift before launch but the ladder shape is set.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {TIERS.map((t) => (
            <div
              key={t.name}
              className={`panel ${t.tone} ${t.feature ? 'relative' : ''}`}
            >
              {t.feature && (
                <div className="absolute -top-3 left-3 bg-wire text-ink font-mono text-[10px] font-bold tracking-widest px-2 py-0.5">
                  RECOMMENDED
                </div>
              )}
              <div className="panel-header flex items-center justify-between">
                <span>tier / {t.name.toLowerCase()}</span>
                <span className="text-concrete">{t.sub}</span>
              </div>
              <div className="p-5">
                <div className="stencil text-bone text-4xl mb-1">{t.name}</div>
                <div className="font-mono text-[11px] text-wire mb-5 tracking-widest">
                  {t.min} $MONK
                </div>
                <ul className="space-y-2.5 font-body text-[13px] text-bone/85">
                  {t.perks.map((p, i) => (
                    <li key={i} className="flex gap-2.5 leading-snug">
                      <span className="text-wire mt-[2px]">/</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
