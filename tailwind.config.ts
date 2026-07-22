import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#FFFFFF",
        ink: "#0A0A0A",
        muted: "#5C5C5C",
        faint: "#8F8F8F",
        line: "#EAEAEA",
        soft: "#F6F6F6",
        accent: "#FF6B35",
        "accent-dark": "#E85A28",
        "accent-soft": "#FFF1EB",
      },
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "999px",
        card: "1.25rem",
      },
      boxShadow: {
        lift: "0 18px 40px -18px rgba(0,0,0,0.25)",
        soft: "0 10px 30px -12px rgba(0,0,0,0.12)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.96)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both",
        "scale-in": "scale-in 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
