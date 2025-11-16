"use client";

import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site-config";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-bg/90 backdrop-blur-xl border-b border-yellow-accent/30">
      <div className="container mx-auto px-4 sm:px-6 py-3 flex items-center justify-between max-w-7xl">
        <Link href="/" className="flex items-center gap-2 sm:gap-3 group">
          <Image
            src="/logo.png"
            alt="MEV Monkey"
            width={50}
            height={50}
            className="drop-shadow-lg group-hover:scale-110 transition-transform duration-300 w-10 h-10 sm:w-12 sm:h-12"
          />
          <span className="text-xl sm:text-2xl font-display font-bold text-yellow-primary group-hover:text-yellow-secondary transition-colors hidden sm:inline">
            MEV MONKEY
          </span>
          <span className="text-xl font-display font-bold text-yellow-primary sm:hidden">
            MONK
          </span>
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
            className="text-muted hover:text-yellow-primary transition-colors p-2"
            aria-label="Telegram"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.781-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.121.099.155.232.171.326.016.094.037.308.021.475z"/>
            </svg>
          </a>
          <a
            href={siteConfig.links.x}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-yellow-primary transition-colors p-2"
            aria-label="X (Twitter)"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a
            href={siteConfig.links.pump}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-xs sm:text-sm py-2 px-3 sm:px-6"
          >
            Buy MONK
          </a>
        </div>
      </div>
    </header>
  );
}
