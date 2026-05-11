export default function Operator() {
  return (
    <section id="operator" className="relative py-20 px-4 md:px-8 bg-jungle/40">
      <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto">
        <div className="div-label mb-8">§02 / who runs it</div>

        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-8 items-start">
          <div>
            <h2 className="stencil text-bone text-5xl md:text-7xl leading-[0.9] mb-4">
              the<br />
              <span className="text-wire glow">operator.</span>
            </h2>
            <p className="font-body text-bone/85 text-lg leading-relaxed mb-5">
              MNK-01 is what we call the bot. it watches a list of shallow
              pools, and when one of them shows the right kind of pending swap,
              it acts. you never hand it your wallet. it works out of its own
              treasury. the bot has no opinion on the tokens it eats, and that
              is the point.
            </p>
            <p className="font-body text-bone/70 text-[13px] leading-relaxed">
              the humans behind it have been getting sandwiched on solana since
              the BONK era and decided to be on the other side of the trade for
              once. that is the whole pitch.
            </p>
          </div>

          <div className="panel ticks-full relative">
            <span className="tick tick-tl" /><span className="tick tick-tr" />
            <span className="tick tick-bl" /><span className="tick tick-br" />
            <div className="panel-header flex items-center justify-between">
              <span>spec sheet / MNK-01</span>
              <span className="text-bone/60">draft</span>
            </div>
            <div className="divide-y divide-wire/15">
              <Spec label="target pools" value="tvl < 25k" />
              <Spec label="slippage floor" value="≥ 4%" />
              <Spec label="block submission" value="jito bundle" />
              <Spec label="interface" value="telegram bot" />
              <Spec label="custody" value="none. read-only." accent />
              <Spec label="status" value="warming up" accent />
            </div>
            <div className="panel-header border-t border-b-0 text-[10px] flex items-center justify-between">
              <span className="text-concrete">specs subject to change before launch.</span>
              <span className="text-wire">MNK-01</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Spec({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="px-5 py-4 flex items-baseline justify-between gap-4">
      <span className="font-mono text-[11px] uppercase tracking-widest text-concrete">{label}</span>
      <span
        className={
          'text-right font-mono text-[14px] font-bold ' +
          (accent ? 'text-wire glow' : 'text-bone')
        }
      >
        {value}
      </span>
    </div>
  )
}
