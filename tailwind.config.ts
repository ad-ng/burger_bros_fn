import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#FFF7E8",
        "cream-deep": "#F7E6C9",
        chili: "#E3342F",
        cheddar: "#F7B731",
        charcoal: "#171717",
        herb: "#1F8A4C",
      },
      boxShadow: {
        glow: "0 22px 55px rgba(227, 52, 47, 0.18)",
        card: "0 18px 45px rgba(23, 23, 23, 0.1)",
      },
      fontFamily: {
        display: ["Bricolage Grotesque", "Inter", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 18% 15%, rgba(247,183,49,.28), transparent 28%), radial-gradient(circle at 88% 18%, rgba(227,52,47,.16), transparent 30%)",
      },
    },
  },
  plugins: [],
};

export default config;
