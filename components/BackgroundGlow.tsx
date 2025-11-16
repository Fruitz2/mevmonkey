"use client";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-gradient-to-r from-yellow-primary/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-gradient-to-l from-sol/5 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-yellow-primary/3 to-transparent rounded-full blur-[120px]" />
      </div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cfilter id="noiseFilter" x="0%25" y="0%25" width="100%25" height="100%25"%3E%3CfeTurbulence baseFrequency="0.9" numOctaves="4" seed="2" /%3E%3C/filter%3E%3C/defs%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)" opacity="0.02"/%3E%3C/svg%3E')] opacity-30"></div>
    </div>
  );
}
