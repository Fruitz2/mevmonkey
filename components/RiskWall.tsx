import { siteConfig } from "@/config/site-config";
import { AlertTriangle } from "lucide-react";

export default function RiskWall() {
  return (
    <section className="py-24 px-6 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-error/[0.02] to-transparent"></div>
      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold bg-gradient-to-r from-yellow-primary to-error bg-clip-text text-transparent">
            {siteConfig.risk.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {siteConfig.risk.bullets.map((bullet, i) => (
            <div key={i} className="glass-card rounded-xl p-6 flex items-start gap-4 border border-error/10 hover:border-error/20 transition-all duration-300">
              <AlertTriangle className="text-error/60 flex-shrink-0 mt-1" size={18} />
              <p className="text-fg/80">{bullet}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-lg text-muted">
            {siteConfig.risk.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
