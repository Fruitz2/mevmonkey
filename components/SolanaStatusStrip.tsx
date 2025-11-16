import { siteConfig } from "@/config/site-config";

export default function SolanaStatusStrip() {
  const getToneColor = (tone: string) => {
    switch (tone) {
      case "ok":
        return "text-sol";
      case "warn":
        return "text-yellow-primary";
      case "alert":
        return "text-error";
      default:
        return "text-muted";
    }
  };

  return (
    <div className="border-y border-yellow-accent/20 bg-surface/50 py-6">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.status.map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-sm text-muted uppercase tracking-wider mb-2 font-mono">
                {item.label}
              </div>
              <div className={`text-xl font-bold ${getToneColor(item.tone)}`}>
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
