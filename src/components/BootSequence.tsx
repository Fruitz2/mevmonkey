import { useEffect, useState } from 'react'

const SCRIPT: { t: string; cls?: string }[] = [
  { t: '$ ./operator --dry-run', cls: 'text-bone' },
  { t: '[ok] devnet rpc connected', cls: 'text-concrete' },
  { t: '[ok] mempool listener attached', cls: 'text-concrete' },
  { t: '[ok] flashloan path solved', cls: 'text-concrete' },
  { t: '[ok] jito tip bundle valid', cls: 'text-concrete' },
  { t: '> scanning low-liquidity pools', cls: 'text-bone' },
  { t: '> filter: tvl < 25k, slippage > 4%', cls: 'text-concrete' },
  { t: '> simulation hit. mainnet disabled.', cls: 'text-wire glow' },
  { t: 'DRY RUN PASSED', cls: 'text-wire glow-strong font-bold' },
]

export default function BootSequence() {
  const [shown, setShown] = useState<{ t: string; cls?: string }[]>([])
  const [done, setDone] = useState(false)

  useEffect(() => {
    let i = 0
    let cancelled = false
    const next = () => {
      if (cancelled) return
      if (i >= SCRIPT.length) {
        setDone(true)
        return
      }
      setShown((p) => [...p, SCRIPT[i]])
      i++
      setTimeout(next, 280 + Math.random() * 220)
    }
    setTimeout(next, 400)
    return () => {
      cancelled = true
    }
  }, [])

  return (
    <div className="font-mono text-[12px] leading-[1.55] min-h-[200px]">
      {shown.map((s, i) =>
        s ? (
          <div key={i} className={s.cls || 'text-bone'}>
            {s.t}
          </div>
        ) : null,
      )}
      {!done && (
        <span className="inline-block w-2 h-4 bg-wire animate-blink ml-0.5 align-middle" />
      )}
    </div>
  )
}
