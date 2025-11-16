import { siteConfig } from "@/config/site-config";
import { AlertTriangle, CheckCircle } from "lucide-react";

export default function TokenUtility() {
  return (
    <section id="token" className="py-24 px-6 bg-surface/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-6xl font-display font-bold mb-12 text-center bg-gradient-to-r from-yellow-primary to-yellow-secondary bg-clip-text text-transparent">
          {siteConfig.token.title}
        </h2>

        <div className="space-y-6 mb-10">
          {siteConfig.token.bullets.map((bullet, i) => (
            <div key={i} className="flex items-start gap-4 group bg-bg/50 p-6 rounded-xl border border-yellow-accent/10">
              <span className="text-yellow-primary text-xl">◆</span>
              <p className="text-lg text-gray-400 group-hover:text-gray-300 transition-colors">{bullet}</p>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-2xl p-8 mt-8 text-center border border-yellow-primary/10">
          <div className="flex items-start gap-4">
            <CheckCircle className="text-yellow-primary/60 mt-1 flex-shrink-0 group-hover:text-yellow-primary transition-colors" size={20} />
            <p className="text-gray-500 text-sm leading-relaxed">
              {siteConfig.token.disclaimer}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
