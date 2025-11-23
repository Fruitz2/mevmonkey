import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/config/site-config";

export const metadata: Metadata = {
  metadataBase: new URL('https://mevmonkey.com'),
  title: siteConfig.meta.title,
  description: siteConfig.meta.description,
  keywords: ["solana", "mev", "trading bot", "monk token", "telegram bot", "crypto", "mempool", "rug detection"],
  authors: [{ name: "MEV Monkey Team" }],
  creator: "MEV Monkey",
  openGraph: {
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    url: "https://mevmonkey.com",
    siteName: "MEV Monkey",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MEV Monkey - Solana Trading Bot",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.meta.title,
    description: siteConfig.meta.description,
    images: ["/logo.png"],
    creator: "@mevmonkey",
    site: "@mevmonkey",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
