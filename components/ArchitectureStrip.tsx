import { siteConfig } from "@/config/site-config";
import { ArrowRight } from "lucide-react";

export default function ArchitectureStrip() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-8 text-center bg-gradient-to-r from-yellow-primary to-yellow-secondary bg-clip-text text-transparent">
          {siteConfig.architecture.title}
        </h2>

        {siteConfig.architecture.intro && (
          <p className="text-lg text-muted text-center max-w-3xl mx-auto mb-16 leading-relaxed">
            {siteConfig.architecture.intro}
          </p>
        )}

        <div className="grid md:grid-cols-4 gap-6">
          {siteConfig.architecture.stages.map((stage, i) => (
            <div key={i} className="relative group">
              <div className="panel h-full hover:border-yellow-primary/20 transition-all duration-300">
                <div className="text-xs font-mono text-yellow-primary/60 uppercase tracking-[0.15em] mb-3">
                  {stage.label}
                </div>
                <h3 className="text-xl font-display font-semibold mb-3 text-white/90">
                  {stage.title}
                </h3>
                <p className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors leading-relaxed">
                  {stage.body}
                </p>
              </div>
              
              {i < siteConfig.architecture.stages.length - 1 && (
                <ArrowRight className="absolute -right-4 top-1/2 transform -translate-y-1/2 text-yellow-primary/20 z-10 hidden md:block group-hover:text-yellow-primary/40 transition-colors" size={20} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
