// the operator. dark chimp, wire-yellow shades, faint reflection of a ticker
// in the lenses. SVG so it sits inside the grid texture without aliasing.

export default function OperatorMark({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 280 280" className={className} aria-label="MEV Monkey operator">
      {/* ears */}
      <ellipse cx="58" cy="138" rx="22" ry="32" fill="#3a3a3a" stroke="#1a1a1a" strokeWidth="2" />
      <ellipse cx="222" cy="138" rx="22" ry="32" fill="#3a3a3a" stroke="#1a1a1a" strokeWidth="2" />
      <ellipse cx="58" cy="138" rx="11" ry="18" fill="#2a2a2a" />
      <ellipse cx="222" cy="138" rx="11" ry="18" fill="#2a2a2a" />

      {/* head */}
      <ellipse cx="140" cy="148" rx="86" ry="82" fill="#2a2a2a" stroke="#0a0a0a" strokeWidth="3" />

      {/* hair tufts */}
      <path
        d="M85 78 Q90 50 100 72 M115 64 Q120 38 130 60 M145 60 Q150 34 162 60 M175 64 Q182 42 192 70 M85 78 L110 90 L130 76 L155 88 L180 76 L200 86"
        fill="#1a1a1a"
        stroke="#1a1a1a"
        strokeWidth="2"
      />
      <path
        d="M124 42 Q130 30 138 42 M158 42 Q166 32 172 44"
        stroke="#a8c900"
        strokeWidth="2"
        fill="none"
        opacity="0.6"
      />

      {/* muzzle */}
      <ellipse cx="140" cy="186" rx="64" ry="50" fill="#3d3d3d" />

      {/* nose, heart shape */}
      <path
        d="M125 178 Q132 172 140 180 Q148 172 155 178 Q150 188 140 192 Q130 188 125 178 Z"
        fill="#1a1a1a"
      />

      {/* sly mouth */}
      <path
        d="M112 214 Q140 226 168 214"
        stroke="#d9ff00"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        opacity="0.9"
      />

      {/* shades */}
      <rect x="78" y="118" width="56" height="36" rx="4" fill="#d9ff00" stroke="#0a0a0a" strokeWidth="3" />
      <rect x="146" y="118" width="56" height="36" rx="4" fill="#d9ff00" stroke="#0a0a0a" strokeWidth="3" />
      <line x1="134" y1="132" x2="146" y2="132" stroke="#0a0a0a" strokeWidth="3" />

      {/* dark reflection panels inside lenses */}
      <rect x="84" y="124" width="44" height="24" fill="#0a0a0a" opacity="0.82" />
      <rect x="152" y="124" width="44" height="24" fill="#0a0a0a" opacity="0.82" />

      {/* tiny ticker reflected in the lenses */}
      <g fontFamily="JetBrains Mono, monospace" fontSize="6" fill="#d9ff00" opacity="0.9">
        <text x="86" y="135">MEV</text>
        <text x="86" y="143">0.41</text>
        <text x="154" y="135">HIT</text>
        <text x="154" y="143">+SOL</text>
      </g>

      {/* chin tuft */}
      <path d="M120 230 Q140 244 160 230 L155 238 Q140 248 125 238 Z" fill="#1a1a1a" />
    </svg>
  )
}
