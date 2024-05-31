/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        webGreen: "#00672E",
        webGrey: "#EFECEA",
      },
      flexGrow: {
        1.2: 1.2,
        2: 2,
      },
    },
  },
  plugins: [],
};
