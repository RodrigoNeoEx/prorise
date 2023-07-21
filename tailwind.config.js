module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#08B3E6",
        secondary: "#FE5649",

        white: "#FFFFFF",

        dark: {
          400: "#767676",
          500: "#27272A",
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

      backgroundImage: {
        fundo: "url('../assets/images/fundo-home.png')",
      },
    },
  },

  plugins: [
    require("@tailwindcss/forms"),
    // ...
  ],
};
