import Image from "next/image";
import { siteConfig } from "@/config/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="absolute inset-0 bg-gradient-radial from-yellow-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <div className="text-sm font-mono text-sol uppercase tracking-widest mb-4">
              SOLANA • MEV LAB
            </div>
            
            <h1 className="text-6xl md:text-8xl font-display font-bold text-yellow-primary mb-6 text-glow animate-fade-in">
              {siteConfig.hero.title}
            </h1>
            
            <p className="text-xl text-muted mb-8 leading-relaxed">
              {siteConfig.hero.subtitle}
            </p>

            <div className="space-y-3 mb-10">
              {siteConfig.hero.bullets.map((bullet, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-yellow-primary mt-1">▸</span>
                  <p className="text-fg/80">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.links.pump}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {siteConfig.hero.primaryCta}
              </a>
              <a
                href={siteConfig.links.tg}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                {siteConfig.hero.secondaryCtas[0]}
              </a>
            </div>
          </div>

          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-primary/20 blur-3xl rounded-full animate-pulse" />
              <Image
                src="/logo.png"
                alt="MEV Monkey"
                width={980}
                height={980}
                className="animate-fade-in drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
