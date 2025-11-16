import { siteConfig } from "@/config/site-config";

export default function RoadmapStrip() {
  return (
    <section id="roadmap" className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-yellow-primary mb-16 text-center">
          {siteConfig.roadmap.title}
        </h2>

        <div className="grid md:grid-cols-4 gap-8">
          {siteConfig.roadmap.phases.map((phase, i) => (
            <div key={i} className="relative">
              <div className="panel hover:border-yellow-accent/40 transition-all duration-300">
                <div className="text-xs font-mono text-yellow-primary uppercase tracking-wider mb-3">
                  {phase.label}
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">
                  {phase.title}
                </h3>
                <ul className="space-y-2">
                  {phase.bullets.map((bullet, j) => (
                    <li key={j} className="text-sm text-muted flex items-start gap-2">
                      <span className="text-yellow-primary mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              {i < siteConfig.roadmap.phases.length - 1 && (
                <div className="hidden md:block absolute top-0 -right-4 w-8 h-full flex items-center justify-center">
                  <div className="w-px h-full bg-gradient-to-b from-transparent via-yellow-accent/30 to-transparent" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
