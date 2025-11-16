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
          {siteConfig.monkeyStack.items.map((item, i) => (
            <div key={i} className="panel hover:border-yellow-accent/40 transition-all duration-300">
              <div className="text-sm font-mono text-yellow-primary uppercase tracking-wider mb-4">
                {item.label}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                {item.title}
              </h3>
              <p className="text-muted leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
