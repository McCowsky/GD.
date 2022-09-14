/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway"],
        poppins: ["Poppins"],
      },
    },
  },
  plugins: [],
};
