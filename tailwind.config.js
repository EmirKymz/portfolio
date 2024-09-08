/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Open Sans"', ...defaultTheme.fontFamily.sans],

        montserrat: ['"Montserrat"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "primary-dark": "#4A4A4A",
        "primary-light": "#F2F2F2",
        secondary: {
          100: "#E2E2D5",
          200: "#888883",
          300: "#77CCDD",
        },
      },
    },
  },
  varients: {
    extend: {
      typography: ["dark"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
