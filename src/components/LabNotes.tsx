const NOTES = [
  {
    date: 'week 01',
    title: 'the sniffer',
    status: 'done',
    body: `built the original pool-sniffer in a weekend just to see if the idea was even real. fourteen thousand new pools deployed that week. roughly nine in ten were rugs. of what was left, maybe one in ten had legs. that small slice is what we are hunting.`,
  },
  {
    date: 'week 04',
    title: 'jito bundle integration',
    status: 'done',
    body: `routing tip-stream through jito so the sandwich lands atomically. in testing this took the revert rate from forty-one percent down to single digits. it makes or breaks the economics.`,
  },
  {
    date: 'week 09',
    title: '████████████',
    status: 'classified',
    body: `redacted by legal counsel, who is brett, and brett is not a lawyer. ask in telegram if you really want to know.`,
  },
  {
    date: 'week 12',
    title: 'public exploits feed',
    status: 'planned',
    body: `a live page showing recent sandwich attempts with the victim wallets hashed. so holders can watch the bot work in real time once we are live. ships at or shortly after launch.`,
  },
  {
    date: 'launch + 1',
    title: 'rug-protection mode',
    status: 'planned',
    body: `the inverse of sandwich mode. point the bot at a pool you are sitting in, it watches for the dev's exit tx, front-runs the rug, saves you. controversial inside the team. shipping anyway.`,
  },
  {
    date: 'later',
    title: '████████████',
    status: 'classified',
    body: `exists on paper. ships when legal counsel (brett) clears it. cannot describe what it does. probably illegal in three jurisdictions.`,
  },
]

const STATUS_COLOR: Record<string, string> = {
  done: 'text-wire',
  planned: 'text-bone',
  classified: 'text-siren',
}

export default function LabNotes() {
  return (
    <section id="lab" className="relative py-20 px-4 md:px-8 bg-jungle/30">
      <div className="absolute inset-0 grid-bg-fine opacity-20 pointer-events-none" />
      <div className="relative max-w-5xl mx-auto">
        <div className="div-label mb-8">§04 / lab notes</div>

        <div className="flex flex-col lg:flex-row gap-8 items-end mb-12">
          <h2 className="stencil text-bone text-5xl md:text-7xl leading-[0.9]">
            lab notes.<br />
            <span className="text-wire glow">not a roadmap.</span>
          </h2>
          <p className="font-body text-bone/80 max-w-md">
            we keep a notebook instead of a roadmap. some entries are done.
            some are planned. some we cannot describe in public yet. all of
            them are honest about which is which.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-wire/30" />

          <div className="space-y-7">
            {NOTES.map((n, i) => (
              <article key={i} className="relative pl-12">
                <div className="absolute left-[7px] top-1.5 w-4 h-4 border border-wire bg-ink flex items-center justify-center">
                  <span className="h-1.5 w-1.5 bg-wire" />
                </div>

                <div className="panel">
                  <div className="panel-header flex items-center justify-between flex-wrap gap-2">
                    <span>{n.date} / {n.title}</span>
                    <span className={`${STATUS_COLOR[n.status]} font-bold`}>
                      [{n.status}]
                    </span>
                  </div>
                  <div className="p-4 font-body text-bone/85 text-[14px] leading-relaxed">
                    {n.body}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
