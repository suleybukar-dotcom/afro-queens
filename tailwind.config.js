/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orange: { DEFAULT: "#E07B39", light: "#F0956A", dark: "#C4622A" },
        ocre: { DEFAULT: "#D4A843", light: "#E8C572", dark: "#B8901F" },
        noir: { DEFAULT: "#1A1A1A", light: "#2D2D2D" },
        gris: { DEFAULT: "#6B6B6B", light: "#9E9E9E", warm: "#F5F0EA" },
      },
      fontFamily: {
        script: ["'Playfair Display'", "serif"],
        body: ["'Cormorant Garamond'", "serif"],
        sans: ["'Jost'", "sans-serif"],
      },
    },
  },
  plugins: [],
};
