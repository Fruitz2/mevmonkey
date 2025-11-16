import { siteConfig } from "@/config/site-config";

export default function BotExplainer() {
  return (
    <section id="bot" className="py-24 px-6 bg-surface/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-yellow-primary mb-8 text-center">
          {siteConfig.botExplainer.title}
        </h2>

        {siteConfig.botExplainer.intro && (
          <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            {siteConfig.botExplainer.intro}
          </p>
        )}

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
