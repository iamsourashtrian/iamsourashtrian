import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx,md,mdx}",
    "./components/**/*.{ts,tsx,md,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FBFBFA",
        ink: "#1C1917",
        moss: "#315747",
        clay: "#B76546",
        sand: "#EDEAE2",
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["Arial", "sans-serif"],
      },
    },
  },
  plugins: [typography],
};

export default config;
