/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "webgreen-100": "#00672E",
        "webgray-100": "#EFECEA",
      },
      flexGrow: {
        1.2: 1.2,
        2: 2,
      },
    },
  },
  plugins: [],
};
