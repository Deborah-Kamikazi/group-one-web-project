/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "green-250": "#00672E",
        "gray-150": "#EFECEA",
      },
      flexGrow: {
        1.2: 1.2,
        2: 2,
      },
    },
  },
  plugins: [],
};
