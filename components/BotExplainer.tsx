import { siteConfig } from "@/config/site-config";

export default function BotExplainer() {
  return (
    <section id="bot" className="py-24 px-6 bg-surface/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-yellow-primary mb-12 text-center">
          {siteConfig.botExplainer.title}
        </h2>

        <div className="space-y-6">
          {siteConfig.botExplainer.bullets.map((bullet, i) => (
            <div key={i} className="panel flex items-start gap-4">
              <span className="text-3xl font-mono text-yellow-primary">{i + 1}</span>
              <p className="text-lg text-fg/90 pt-1">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
