import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Belleza"],
        sans: ["Quicksand"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#36598C",
        secondary: "#FECACC",
      },
    },
  },
  plugins: [],
} satisfies Config;
