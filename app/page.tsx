import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SolanaStatusStrip from "@/components/SolanaStatusStrip";
import MonkeyStack from "@/components/MonkeyStack";
import BotExplainer from "@/components/BotExplainer";
import ArchitectureStrip from "@/components/ArchitectureStrip";
import TokenUtility from "@/components/TokenUtility";
import RoadmapStrip from "@/components/RoadmapStrip";
import RiskWall from "@/components/RiskWall";
import CommunityStrip from "@/components/CommunityStrip";
import BackgroundGlow from "@/components/BackgroundGlow";

export default function HomePage() {
  return (
    <>
      <BackgroundGlow />
      <Header />
      
      <main>
        <Hero />
        <SolanaStatusStrip />
        
        <div className="section-divider" />
        
        <MonkeyStack />
        
        <div className="section-divider" />
        
        <BotExplainer />
        
        <div className="section-divider" />
        
        <ArchitectureStrip />
        
        <div className="section-divider" />
        
        <TokenUtility />
        
        <div className="section-divider" />
        
        <RoadmapStrip />
        
        <div className="section-divider" />
        
        <RiskWall />
        
        <div className="section-divider" />
        
        <CommunityStrip />
      </main>

      <footer className="border-t border-yellow-accent/20 py-12 px-6 mt-24">
        <div className="container mx-auto max-w-7xl text-center">
          <p className="text-muted text-sm">
            MEV Monkey © 2024 | Experimental Solana MEV Lab | Not financial advice
          </p>
          <p className="text-muted text-xs mt-2">
            Built with chaos and caffeine. Use at your own risk.
          </p>
        </div>
      </footer>
    </>
  );
}
