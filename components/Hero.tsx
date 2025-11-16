import Image from "next/image";
import { siteConfig } from "@/config/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-radial from-yellow-primary/5 via-transparent to-transparent" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-primary/10 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-sol/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-sol/80 px-4 py-2 rounded-full border border-sol/20 bg-sol/5 backdrop-blur-xl">
              <span className="w-2 h-2 rounded-full bg-sol animate-pulse" />
              <span>SOLANA</span>
              <span className="text-sol/40">•</span>
              <span>MEV LAB</span>
              <span className="w-2 h-2 rounded-full bg-sol animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-black leading-[0.9] animate-fade-in tracking-tight">
              <span className="block bg-gradient-to-r from-yellow-primary via-yellow-secondary to-yellow-primary bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                {siteConfig.hero.title}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-400 mb-6 md:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
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

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center lg:justify-start">
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

          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[300px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] aspect-square">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-primary/10 to-sol/10 blur-3xl rounded-full opacity-50" />
              <Image
                src="/logo.png"
                alt="MEV Monkey"
                width={2000}
                height={2000}
                className="animate-fade-in drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500 w-full h-full object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
