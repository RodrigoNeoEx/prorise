/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      ...colors,

      primary: "#08B3E6",
      secondary: "#FE5649",

      dark: {
        400: "#767676",
        600: "#222228",
        700: "#18181C",
        800: "#12171A",
        900: "#000000",
      },

      custom: {
        gray: {
          500: "#9E9E9E",
        },
      },
    },
    extend: {},
  },
  plugins: [],
};
