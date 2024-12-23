import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";
export default {
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
  plugins: [
    plugin(function ({ addUtilities, addVariant }) {
      addVariant("webkit-scrollbar", "&::-webkit-scrollbar");
      addUtilities({
        ".scrollbar-w-none": {
          "scrollbar-width": "none",
        },
        ".gutter-stable": {
          "scrollbar-gutter": "stable",
        },
        ".toast": {
          "background-image":
            "linear-gradient(to right, #141E30 0%, #243B55  51%, #141E30  100%)",
          "background-size": "200% auto",
        },
      });
    }),
  ],
} satisfies Config;
