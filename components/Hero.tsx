import Image from "next/image";
import { siteConfig } from "@/config/site-config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 px-6">
      <div className="absolute inset-0 bg-gradient-radial from-yellow-primary/5 via-transparent to-transparent" />
      
      <div className="container mx-auto max-w-full px-4 md:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 items-center justify-center">
          <div className="order-2 lg:order-1 w-full lg:w-auto text-center lg:text-left">
            <div className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] mb-4 text-sol/80 flex items-center gap-2 justify-center lg:justify-start">
              <span>SOLANA</span>
              <span className="w-1 h-1 rounded-full bg-sol"></span>
              <span>MEV LAB</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-black mb-4 md:mb-6 text-glow animate-fade-in tracking-tight">
              {siteConfig.hero.title}
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

          <div className="order-1 lg:order-2 flex justify-center overflow-visible">
            <div className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px] xl:w-[1000px] xl:h-[1000px]">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-primary/10 to-sol/10 blur-3xl rounded-full opacity-50" />
              <Image
                src="/logo.png"
                alt="MEV Monkey"
                width={3000}
                height={3000}
                className="animate-fade-in drop-shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain'
                }}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
