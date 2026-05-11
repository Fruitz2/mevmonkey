// pre-launch top bar. honest about what state we are in.
// at launch, swap this for a live ticker of sandwich PnL.

export default function TopStrip() {
  const items = [
    'mev monkey, pre-launch',
    'mainnet bot offline',
    'follow x and telegram for the launch date',
    'no presale, no allocations, no allow-list',
    'contract drops at launch',
  ]
  const loop = [...items, ...items, ...items]

  return (
    <div className="sticky top-0 z-40 border-b border-wire/30 bg-ink/95 backdrop-blur">
      <div className="flex items-stretch h-8 overflow-hidden font-mono text-[11px]">
        <div className="flex items-center gap-2 px-3 bg-wire text-ink font-bold tracking-widest">
          <span className="h-1.5 w-1.5 rounded-full bg-ink animate-pulseDot" />
          PRE-LAUNCH
        </div>
        <div className="flex-1 overflow-hidden relative">
          <div className="flex items-center gap-6 whitespace-nowrap pl-4 animate-scrollX h-full">
            {loop.map((t, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="text-wire">/</span>
                <span className="text-bone uppercase tracking-widest">{t}</span>
              </span>
            ))}
          </div>
        </div>
        <div className="hidden sm:flex items-center px-3 border-l border-wire/30 text-concrete uppercase tracking-widest">
          <span>solana mainnet</span>
        </div>
      </div>
    </div>
  )
}
