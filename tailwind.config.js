/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        custom_orange: "#DA722C",
        custom_purple: "#7A0E53",
      },
      fontFamily: {
        raleway: ["Raleway"],
        poppins: ["Poppins"],
      },
      keyframes: {
        hideNav: {
          from: { top: "0%" },
          to: { top: "-100%" },
        },
        showNav: {
          from: { top: "-100%" },
          to: { top: "0%" },
        },
      },
      animation: {
        hideNav: "hideNav 1s ease forwards",
        showNav: "showNav 1s ease forwards",
      },
    },
  },
  plugins: [],
};
