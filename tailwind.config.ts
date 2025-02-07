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
        "primary-light": "#B4C1E1",
        "primary-lightest": "rgba(180, 193, 225, 0.09)",
        secondary: "#FECACC",
        "secondary-light": "rgba(254, 202, 204, 0.16)",
        "secondary-dark": "#CE6889",
        "secondary-dark-transparent": "rgba(206, 104, 137, 0.33)",
      },
      transitionProperty: {
        height: "height",
      },
    },
  },
  plugins: [],
} satisfies Config;
