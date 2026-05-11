import { motion } from 'framer-motion'
import BootSequence from './BootSequence'
import OperatorMark from './OperatorMark'

export default function Hero() {
  return (
    <section className="relative pt-10 pb-16 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div
        className="absolute -top-20 -right-20 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(217,255,0,0.10) 0%, transparent 60%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap items-center gap-3 mb-5 font-mono text-[11px] uppercase tracking-[0.25em] text-concrete"
        >
          <span className="kbd">SOL / MEV LAB</span>
          <span className="text-wire">/</span>
          <span>pre-launch</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 lg:gap-12 items-end">
          <div>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="stencil text-wire glow-strong text-[18vw] md:text-[12vw] lg:text-[9.6rem] xl:text-[12rem] leading-[0.85] tracking-tight spray"
            >
              MEV
              <br />
              MONKEY<span className="text-bone">.</span>
            </motion.h1>

            <p className="mt-6 max-w-xl font-body text-bone/85 text-base md:text-lg leading-relaxed">
              the monkey eats first. a solana sandwich bot for low-liquidity pools,
              built by people who got tired of getting sandwiched themselves.
              running soon.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="" className="btn-solid">notify me</a>
              <a href="" className="btn-term">read the manual</a>
            </div>

            <div className="mt-8 panel ticks">
              <div className="panel-header flex items-center justify-between">
                <span>status</span>
                <span className="text-concrete">solana / spl</span>
              </div>
              <div className="px-3 py-2.5 font-mono text-[12px] flex items-center gap-3 overflow-hidden">
                <span className="h-1.5 w-1.5 rounded-full bg-wire animate-pulseDot shrink-0" />
                <span className="text-bone flex-1">
                  contract address publishes at launch. follow{' '}
                  <a href="" className="text-wire glow hover:underline">x</a>
                  {' '}or{' '}
                  <a href="" className="text-wire glow hover:underline">telegram</a>
                  {' '}for the drop.
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="panel ticks-full relative overflow-hidden">
              <span className="tick tick-tl" />
              <span className="tick tick-tr" />
              <span className="tick tick-bl" />
              <span className="tick tick-br" />
              <div className="panel-header flex items-center justify-between">
                <span>operator portrait</span>
                <span className="text-bone/60">classified</span>
              </div>
              <div className="relative scanlines aspect-square bg-gradient-to-br from-jungle via-ink to-black flex items-center justify-center overflow-hidden">
                <OperatorMark className="w-[78%] h-[78%]" />
                <div className="absolute inset-3 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                    <path d="M0 12 L0 0 L12 0" stroke="#d9ff00" strokeWidth="0.5" fill="none" />
                    <path d="M88 0 L100 0 L100 12" stroke="#d9ff00" strokeWidth="0.5" fill="none" />
                    <path d="M0 88 L0 100 L12 100" stroke="#d9ff00" strokeWidth="0.5" fill="none" />
                    <path d="M88 100 L100 100 L100 88" stroke="#d9ff00" strokeWidth="0.5" fill="none" />
                  </svg>
                </div>
                <div className="absolute top-3 left-3 font-mono text-[10px] tracking-widest text-wire/80 uppercase">
                  id / MNK-01
                </div>
                <div className="absolute top-3 right-3 font-mono text-[10px] text-bone/50 uppercase">
                  warming up
                </div>
                <div className="absolute bottom-3 right-3 flex items-center gap-2 font-mono text-[10px] text-bone/70">
                  <span className="h-1.5 w-1.5 rounded-full bg-bone/40" />
                  PRE-LAUNCH
                </div>
              </div>
            </div>

            <div className="panel ticks-full relative">
              <span className="tick tick-tl" />
              <span className="tick tick-tr" />
              <span className="tick tick-bl" />
              <span className="tick tick-br" />
              <div className="panel-header flex items-center justify-between">
                <span>dry run</span>
                <span className="flex items-center gap-1.5">
                  <span className="h-1.5 w-1.5 rounded-full bg-siren" />
                  <span className="h-1.5 w-1.5 rounded-full bg-wire" />
                  <span className="h-1.5 w-1.5 rounded-full bg-bone/30" />
                </span>
              </div>
              <div className="p-4 bg-[#070907]">
                <BootSequence />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
