import { siteConfig } from "@/config/site-config";
import { AlertTriangle } from "lucide-react";

export default function RiskWall() {
  return (
    <section className="py-24 px-6 bg-error/5 border-y border-error/20">
      <div className="container mx-auto max-w-5xl">
        <div className="flex items-center justify-center gap-4 mb-12">
          <AlertTriangle className="text-error" size={48} />
          <h2 className="text-4xl md:text-6xl font-display font-bold text-error">
            {siteConfig.risk.title}
          </h2>
          <AlertTriangle className="text-error" size={48} />
        </div>

        <div className="space-y-4 mb-10">
          {siteConfig.risk.bullets.map((bullet, i) => (
            <div key={i} className="bg-bg/50 p-6 rounded-xl border border-error/20 flex items-start gap-4">
              <span className="text-error text-2xl font-bold">!</span>
              <p className="text-fg/90 text-lg">{bullet}</p>
            </div>
          ))}
        </div>

        <div className="panel border-error/30 text-center">
          <p className="text-xl text-fg/90 font-bold">
            {siteConfig.risk.disclaimer}
          </p>
        </div>
      </div>
    </section>
  );
}
