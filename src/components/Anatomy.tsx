import { useMemo } from 'react'
import { fakeAddr, shortAddr, fakeTicker } from '../lib/fake'

export default function Anatomy() {
  // worked example, deterministic per mount.
  const data = useMemo(() => {
    const token = fakeTicker()
    return {
      token,
      victimAddr: fakeAddr(),
      victimTx: fakeAddr(64),
      ourTx1: fakeAddr(64),
      ourTx2: fakeAddr(64),
      victimIn: '8.42',
      victimSlip: '12.3',
      profit: '0.418',
      blockSlot: '312,449,182',
    }
  }, [])

  return (
    <section id="anatomy" className="relative py-20 px-4 md:px-8">
      <div className="absolute inset-0 grid-bg-fine opacity-30 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto">
        <div className="div-label mb-8">§01 / how it works</div>

        <div className="flex flex-col lg:flex-row gap-8 items-start mb-10">
          <h2 className="stencil text-bone text-5xl md:text-7xl leading-[0.9] flex-1">
            how the monkey
            <br />
            <span className="text-wire glow">eats.</span>
          </h2>
          <p className="font-body text-bone/80 text-base leading-relaxed max-w-md">
            a sandwich is three transactions in one block. someone is about to
            buy a token from a thin pool. we buy first, they buy at the worse
            price we created, we sell. the difference is the spread, and the
            spread is the lunch.
          </p>
        </div>

        <div className="panel">
          <div className="panel-header flex items-center justify-between">
            <span>worked example / slot {data.blockSlot} / {data.token}/SOL</span>
            <span className="text-bone/60">illustration only</span>
          </div>

          <div className="p-4 md:p-6 grid grid-cols-1 md:grid-cols-3 gap-3">
            <Step
              n="01"
              kind="hit"
              role="OPERATOR / FRONT-RUN"
              ms="t + 0 ms"
              tx={data.ourTx1}
              big="BUY"
              amount="3.2 SOL"
              token={data.token}
              note="we see the victim's pending swap in the mempool and slip in first, pushing the pool price up before they execute."
            />

            <Step
              n="02"
              kind="victim"
              role="VICTIM / SWAP"
              ms="t + 47 ms"
              tx={data.victimTx}
              big="BUY"
              amount={`${data.victimIn} SOL`}
              token={data.token}
              note={`wallet ${shortAddr(data.victimAddr)} eats ${data.victimSlip}% slippage and never knows the difference.`}
            />

            <Step
              n="03"
              kind="hit"
              role="OPERATOR / BACK-RUN"
              ms="t + 94 ms"
              tx={data.ourTx2}
              big="SELL"
              amount="3.61 SOL"
              token={data.token}
              note="we dump at the new price the victim just paid for. the block lands clean. the spread is ours."
            />
          </div>

          <div className="border-t border-wire/20 grid grid-cols-2 md:grid-cols-4 font-mono text-[11px]">
            <Cell label="block lat" value="47ms" accent />
            <Cell label="gas burned" value="0.00041 SOL" />
            <Cell label="net spread" value={`+${data.profit} SOL`} accent />
            <Cell label="status" value="settled" accent />
          </div>
        </div>

        <p className="mt-6 font-mono text-[11px] text-concrete leading-relaxed max-w-3xl">
          mev is a permissionless property of public blockchains. the bot only
          targets shallow pools where the spread is meaningful. deeper pools
          have professional firms running this same math with more capital,
          and the monkey knows its place.
        </p>
      </div>
    </section>
  )
}

function Step({
  n, kind, role, ms, tx, big, amount, token, note,
}: {
  n: string
  kind: 'hit' | 'victim'
  role: string
  ms: string
  tx: string
  big: string
  amount: string
  token: string
  note: string
}) {
  const accent = kind === 'hit' ? 'text-wire' : 'text-siren'
  const border = kind === 'hit' ? 'border-wire/40' : 'border-siren/40'
  const bg = kind === 'hit' ? 'bg-wire/[0.04]' : 'bg-siren/[0.04]'

  return (
    <div className={`relative border ${border} ${bg} p-4`}>
      <div className="absolute -top-3 left-3 bg-ink px-2 font-mono text-[10px] tracking-widest text-bone/80">
        STEP {n}
      </div>
      <div className={`font-mono text-[10px] tracking-[0.18em] ${accent} mb-2`}>{role}</div>

      <div className="flex items-baseline gap-2 mb-3">
        <span className={`stencil ${accent} text-4xl leading-none`}>{big}</span>
        <span className="font-mono text-bone text-sm">{amount}</span>
        <span className="font-mono text-concrete text-xs">{token}</span>
      </div>

      <div className="space-y-1 font-mono text-[10px] mb-3">
        <div className="flex justify-between text-bone/70">
          <span className="text-concrete">tx</span>
          <span className={accent}>{shortAddr(tx, 6, 6)}</span>
        </div>
        <div className="flex justify-between text-bone/70">
          <span className="text-concrete">at</span>
          <span>{ms}</span>
        </div>
      </div>

      <p className="font-body text-[12px] text-bone/70 leading-snug border-t border-wire/10 pt-3">
        {note}
      </p>
    </div>
  )
}

function Cell({ label, value, accent = false }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className="px-4 py-3 border-r border-wire/10 last:border-r-0">
      <div className="text-concrete text-[10px] uppercase tracking-widest">{label}</div>
      <div className={accent ? 'text-wire mt-0.5' : 'text-bone mt-0.5'}>{value}</div>
    </div>
  )
}
