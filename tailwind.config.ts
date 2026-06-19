import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  "#f0fdf4",
          100: "#dcfce7",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
        },
        earth: {
          100: "#fef3c7",
          200: "#fde68a",
          400: "#d97706",
          500: "#b45309",
          600: "#92400e",
          700: "#78350f",
          900: "#1c1917",
        },
        slate: {
          50:  "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          400: "#94a3b8",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0f172a",
        }
      },
      fontFamily: {
        heading: ["DM Serif Display", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
