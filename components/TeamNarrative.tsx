import { siteConfig } from "@/config/site-config";

export default function TeamNarrative() {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="panel text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-yellow-primary mb-8">
            Who built this
          </h2>
          
          <div className="space-y-6 text-lg text-muted leading-relaxed">
            <p>
              Small team that trades Solana and got tired of manually checking every new token launch. Started writing scripts to automate the boring parts. Realized other people might find them useful.
            </p>
            
            <p>
              This isn&apos;t some venture backed project with a roadmap written by consultants. It&apos;s tools we actually use. If it helps you catch a rug or spot an entry, great. If not, feedback helps us make it better.
            </p>
            
            <p>
              We&apos;re putting this out there because the Solana trading scene moves too fast to do everything manually. Bot does the watching. You do the thinking. That&apos;s the split.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
