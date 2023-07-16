/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      darkBlue: "#2b3945",
      veryDarkBlue: "#202c37",
      veryDarkBlue2: "#111517",
      darkGray: "#858585",
      veryLightGray: "#fafafa",
      white: "#ffffff",
    },
    fontFamily: {
      nunito3: ["Inter", "sans-serif"],
      nunito1: ["Nunito Sans", "sans-serif"],
      nunito2: ["Rubik", "sans-serif"],
    },
  },
  plugins: [],
};
