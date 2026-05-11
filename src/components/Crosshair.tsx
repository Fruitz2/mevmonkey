import { useEffect, useRef } from 'react'

export default function Crosshair() {
  const ref = useRef<HTMLDivElement>(null)
  const target = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }
    window.addEventListener('mousemove', move)
    let raf = 0
    const tick = () => {
      // very fast follow, predator pacing not balloon pacing
      current.current.x += (target.current.x - current.current.x) * 0.45
      current.current.y += (target.current.y - current.current.y) * 0.45
      if (ref.current) {
        ref.current.style.transform = `translate3d(${current.current.x - 20}px, ${current.current.y - 20}px, 0)`
      }
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => {
      window.removeEventListener('mousemove', move)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div ref={ref} className="pointer-events-none fixed left-0 top-0 z-[9999]" style={{ width: 40, height: 40 }}>
      <svg viewBox="0 0 40 40" width="40" height="40">
        {/* outer brackets, four corner ticks */}
        <g stroke="#d9ff00" strokeWidth="1.2" fill="none" opacity="0.9">
          <path d="M2 2 L2 8 M2 2 L8 2" />
          <path d="M38 2 L38 8 M38 2 L32 2" />
          <path d="M2 38 L2 32 M2 38 L8 38" />
          <path d="M38 38 L38 32 M38 38 L32 38" />
        </g>
        {/* small inner cross */}
        <g stroke="#d9ff00" strokeWidth="1" opacity="0.7">
          <line x1="20" y1="14" x2="20" y2="18" />
          <line x1="20" y1="22" x2="20" y2="26" />
          <line x1="14" y1="20" x2="18" y2="20" />
          <line x1="22" y1="20" x2="26" y2="20" />
        </g>
        {/* center dot */}
        <circle cx="20" cy="20" r="1" fill="#d9ff00" />
      </svg>
    </div>
  )
}
