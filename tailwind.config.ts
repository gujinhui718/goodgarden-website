import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        garden: {
          50: "#f5f8f1",
          100: "#e8f0df",
          300: "#a8c08f",
          500: "#537743",
          600: "#3f6132",
          700: "#2d4a24",
          900: "#183019"
        },
        gold: { 300: "#e9cd7a", 400: "#d5b456", 500: "#ad8730" },
        cream: "#fbfaf6"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(24, 48, 25, 0.11)",
        card: "0 12px 35px rgba(34, 52, 29, 0.08)"
      },
      letterSpacing: { eyebrow: "0.16em" }
    }
  },
  plugins: []
};

export default config;
