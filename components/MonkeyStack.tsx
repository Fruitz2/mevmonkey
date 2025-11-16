import { siteConfig } from "@/config/site-config";

export default function MonkeyStack() {
  return (
    <section id="stack" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-yellow-primary mb-4">
            {siteConfig.monkeyStack.title}
          </h2>
          <p className="text-xl text-muted">
            {siteConfig.monkeyStack.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              label: "MEV Bot",
              title: "Telegram Bot Access",
              body: "Trade Solana smarter through our Telegram bot (@mevmonkey_bot). Monitor new pools, get instant rug alerts, and access MEV insights right from your phone. Currently in development.",
            },
            ...siteConfig.monkeyStack.items,
          ].map((item, i) => (
            <div key={i} className="panel group cursor-pointer">
              <div className="text-sm font-mono text-yellow-primary uppercase tracking-wider mb-4 group-hover:text-yellow-secondary transition-colors">
                {item.label}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-yellow-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed group-hover:text-fg/90 transition-colors">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
