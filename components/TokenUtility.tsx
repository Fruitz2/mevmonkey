import { siteConfig } from "@/config/site-config";
import { AlertTriangle } from "lucide-react";

export default function TokenUtility() {
  return (
    <section id="token" className="py-24 px-6 bg-surface/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-yellow-primary mb-12 text-center">
          {siteConfig.token.title}
        </h2>

        <div className="space-y-6 mb-10">
          {siteConfig.token.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-4 bg-bg/50 p-6 rounded-xl border border-yellow-accent/10">
              <span className="text-yellow-primary text-xl">◆</span>
              <p className="text-lg text-fg/90">{bullet}</p>
            </div>
          ))}
        </div>

        <div className="panel border-error/30 bg-error/5">
          <div className="flex items-start gap-4">
            <AlertTriangle className="text-error flex-shrink-0 mt-1" size={24} />
            <p className="text-fg/90 leading-relaxed">
              {siteConfig.token.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
