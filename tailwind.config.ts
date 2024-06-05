import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        "fade-reveal-left": "fadeRevealLeft 0.9s ease-out forwards",
      },
      colors: {
        red: "#E33A3A",
        hover_red: "#D61F1F",
        white: "#fbfbfb",
        dark: "#232121",
      },
    },
  },
  plugins: [],
};
export default config;
