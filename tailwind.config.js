/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.pug", "./index.html", "./demo.pug", "./demo.html"],
  theme: {
    extend: {
      colors: {
        darkCustom: "rgb(24, 24, 27)",
        darkSecondary: "rgb(44, 49, 55)",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
