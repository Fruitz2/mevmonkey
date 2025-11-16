import { siteConfig } from "@/config/site-config";
import { ArrowRight } from "lucide-react";

export default function ArchitectureStrip() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-yellow-primary mb-8 text-center">
          {siteConfig.architecture.title}
        </h2>

        {siteConfig.architecture.intro && (
          <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {siteConfig.architecture.intro}
          </p>
        )}

        <div className="grid md:grid-cols-4 gap-6">
          {siteConfig.architecture.stages.map((stage, i) => (
            <div key={i} className="relative">
              <div className="panel h-full">
                <div className="text-xs font-mono text-yellow-primary uppercase tracking-wider mb-3">
                  {stage.label}
                </div>
                <h3 className="text-xl font-display font-bold mb-3">
                  {stage.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {stage.body}
                </p>
              </div>
              
              {i < siteConfig.architecture.stages.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="text-yellow-accent" size={20} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
