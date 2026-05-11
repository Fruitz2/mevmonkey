export default function Footer() {
  return (
    <footer className="relative pt-20 pb-24 px-4 md:px-8 bg-jungle/50 border-t border-wire/20">
      <div className="relative max-w-6xl mx-auto">
        {/* big closing CTA */}
        <div className="panel ticks-full relative mb-12">
          <span className="tick tick-tl" /><span className="tick tick-tr" />
          <span className="tick tick-bl" /><span className="tick tick-br" />
          <div className="panel-header flex items-center justify-between">
            <span>before launch</span>
            <span className="text-bone/60">handle outputs at launch</span>
          </div>
          <div className="p-6 md:p-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="stencil text-bone text-5xl md:text-7xl leading-[0.85]">
                get on the<br />
                <span className="text-wire glow">list.</span>
              </h2>
              <p className="font-body text-bone/85 mt-5 max-w-md">
                the bot is not live yet. drop your handle in telegram or
                follow on x. the launch goes out the same minute it ships,
                no presale and no allow-list.
              </p>
            </div>
            <div className="space-y-3">
              <a href="" className="btn-solid w-full justify-center">notify me on x</a>
              <a href="" className="btn-term w-full justify-center">join telegram</a>
              <a href="" className="btn-term w-full justify-center">read the manual</a>
            </div>
          </div>
        </div>

        {/* warning band + plain disclaimer */}
        <div className="warning-stripes h-2 mb-4" />
        <div className="panel mb-10 border-bone/20">
          <div className="panel-header text-bone/80">disclaimer</div>
          <div className="p-5 font-body text-bone/80 text-[13px] leading-relaxed">
            <p className="mb-3">
              $MONK is a memecoin issued on pump.fun. it has no intrinsic
              value and no claim on anything. holding it gives you access
              to a telegram bot that we operate. it does not give you
              equity, debt, yield, or representation.
            </p>
            <p className="mb-3">
              MEV is a permissionless property of public blockchains. the
              tooling here observes and acts on public mempool activity.
              you are responsible for what you do with it. crypto is high
              risk, low-tvl meme tokens are higher, and buying any of this
              with money you cannot afford to lose is the highest risk on
              that ladder. please don't.
            </p>
            <p className="text-concrete">
              nothing on this site is financial or legal advice. brett is
              not a lawyer.
            </p>
          </div>
        </div>

        {/* footer rail */}
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 font-mono text-[11px]">
          <div>
            <div className="stencil text-wire glow text-3xl">MEV MONKEY.</div>
            <div className="text-concrete mt-1 tracking-widest">solana mev lab / pre-launch</div>
          </div>
          <div className="flex gap-3 flex-wrap">
            <a href="" className="btn-term">x</a>
            <a href="" className="btn-term">telegram</a>
            <a href="" className="btn-term">pump.fun</a>
            <a href="" className="btn-term">solscan</a>
          </div>
        </div>

        <div className="mt-10 text-center font-mono text-[10px] text-concrete tracking-widest">
          built by people who got tired of being lunch.
        </div>
      </div>
    </footer>
  )
}
