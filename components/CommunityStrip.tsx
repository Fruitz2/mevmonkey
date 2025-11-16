import { siteConfig } from "@/config/site-config";

export default function CommunityStrip() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-yellow-primary mb-8">
          {siteConfig.community.title}
        </h2>
        
        <p className="text-xl text-muted mb-12 leading-relaxed">
          {siteConfig.community.body}
        </p>

        <div className="flex flex-wrap justify-center gap-6">
          <a
            href={siteConfig.links.tg}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {siteConfig.community.ctas[0]}
          </a>
          <a
            href={siteConfig.links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary"
          >
            {siteConfig.community.ctas[1]}
          </a>
        </div>
      </div>
    </section>
  );
}
