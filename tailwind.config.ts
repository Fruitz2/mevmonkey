import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#020305",
        surface: "#0A0B0F",
        "yellow-primary": "#F9D648",
        "yellow-secondary": "#FFE873",
        "yellow-accent": "#FFC107",
        sol: "#14F195",
        fg: "#FFFFFF",
        muted: "#9CA3AF",
        error: "#EF4444",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in",
        glow: "glow 2s ease-in-out infinite alternate",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(249, 214, 72, 0.3)" },
          "100%": { boxShadow: "0 0 40px rgba(249, 214, 72, 0.6)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
