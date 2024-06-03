/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
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

      container:{
        center: true,
        padding: '1rem',
        "max-width": '1440px',
      }
    },
  },
  plugins: [],
};
