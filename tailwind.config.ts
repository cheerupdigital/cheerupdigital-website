import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        base: "#0B0F19",
        night: "#0B0F19",
        surface: "#111827",
        "surface-2": "#0F1525",
        gold: "#D4AF37",
        "gold-soft": "#E6C868",
        "gold-deep": "#9E7E26",
        ink: "#FFFFFF",
        muted: "#A1A1AA",
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "var(--font-inter)", "sans-serif"],
      },
      fontSize: {
        display: ["clamp(2.75rem, 6.5vw, 6rem)", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
        hero: ["clamp(3rem, 8vw, 7.5rem)", { lineHeight: "0.98", letterSpacing: "-0.035em" }],
        h2: ["clamp(2rem, 4.5vw, 3.75rem)", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(212,175,55,0.25), 0 20px 60px -20px rgba(212,175,55,0.35)",
        card: "0 30px 80px -40px rgba(0,0,0,0.8)",
      },
      backgroundImage: {
        "gold-gradient":
          "linear-gradient(135deg, #E6C868 0%, #D4AF37 45%, #9E7E26 100%)",
        "radial-faint":
          "radial-gradient(circle at 50% 0%, rgba(212,175,55,0.12), transparent 60%)",
        grid: "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      animation: {
        marquee: "marquee 38s linear infinite",
        "marquee-reverse": "marquee-reverse 38s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        "spin-slow": "spin 24s linear infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        shimmer: "shimmer 3s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0,0) scale(1)", opacity: "0.55" },
          "33%": { transform: "translate(6%, -8%) scale(1.18)", opacity: "0.75" },
          "66%": { transform: "translate(-5%, 5%) scale(0.92)", opacity: "0.5" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
