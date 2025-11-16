"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site-config";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-yellow-accent/20">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between max-w-7xl">
        <Link href="/" className="text-2xl font-display font-bold text-yellow-primary">
          🐒 MEV MONKEY
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <a href="#stack" className="text-muted hover:text-yellow-primary transition-colors">
            Stack
          </a>
          <a href="#bot" className="text-muted hover:text-yellow-primary transition-colors">
            Bot
          </a>
          <a href="#token" className="text-muted hover:text-yellow-primary transition-colors">
            Token
          </a>
          <a href="#roadmap" className="text-muted hover:text-yellow-primary transition-colors">
            Roadmap
          </a>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.links.tg}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-yellow-primary transition-colors"
          >
            TG
          </a>
          <a
            href={siteConfig.links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-yellow-primary transition-colors"
          >
            X
          </a>
          <a
            href={siteConfig.links.pump}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm py-2 px-6"
          >
            Buy MEVM
          </a>
        </div>
      </div>
    </header>
  );
}
