import { siteConfig } from "@/config/site-config";

export default function BotExplainer() {
  return (
    <section id="bot" className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-yellow-primary/[0.02] to-transparent"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-center bg-gradient-to-r from-yellow-primary via-yellow-secondary to-yellow-primary bg-clip-text text-transparent">
          {siteConfig.botExplainer.title}
        </h2>

        {siteConfig.botExplainer.intro && (
          <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            {siteConfig.botExplainer.intro}
          </p>
        )}

        <div className="space-y-6">
          {siteConfig.botExplainer.bullets.map((bullet, i) => (
            <div key={i} className="panel flex items-start gap-4 group hover:scale-[1.01] transition-transform duration-300">
              <span className="text-2xl font-mono text-yellow-primary/60 group-hover:text-yellow-primary transition-colors">{i + 1}</span>
              <p className="text-lg text-fg/90 pt-1">{bullet}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
