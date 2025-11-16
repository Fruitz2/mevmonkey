import { siteConfig } from "@/config/site-config";

export default function TeamNarrative() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="panel text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-yellow-primary mb-8">
            Built by traders, for traders
          </h2>
          
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Our team has been deep in the Solana ecosystem since the beginning. We've traded through the ups and downs, built tools for ourselves, and learned what actually works in fast moving markets.
            </p>
            
            <p>
              MEV Monkey started as internal scripts we used to monitor new token launches and spot red flags before committing capital. After months of refinement and testing on our own trades, we decided to build it into a proper tool that other traders could use.
            </p>
            
            <p>
              We're not promising magic. We're offering the same tools and insights we use ourselves. Real time data, pattern recognition, and clear warnings. The kind of edge that comes from experience and good engineering, not hype.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
