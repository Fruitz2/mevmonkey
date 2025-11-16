import { siteConfig } from "@/config/site-config";
import { AlertTriangle } from "lucide-react";

export default function RiskWall() {
  return (
    <section className="py-24 px-6 bg-yellow-primary/5 border-y border-yellow-accent/20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-yellow-primary">
            {siteConfig.risk.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {siteConfig.risk.bullets.map((bullet, i) => (
            <div key={i} className="panel flex items-start gap-4">
              <AlertTriangle className="text-yellow-primary flex-shrink-0 mt-1" size={20} />
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
