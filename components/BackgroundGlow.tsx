"use client";

export default function BackgroundGlow() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-yellow-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-sol/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
    </div>
  );
}
