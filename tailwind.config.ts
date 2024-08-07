import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marqueexl: "marqueexl 35s linear infinite",
        marquee2xl: "marquee2xl 35s linear infinite",
      },
      keyframes: {
        marqueexl: {
          "0%": { transform: "translate(120%, 0)" },
          "100%": { transform: "translate(-100%, 0)" },
        },
        marquee2xl: {
          "0%": { transform: "translate(140%, 0)" },
          "100%": { transform: "translate(-100%, 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
