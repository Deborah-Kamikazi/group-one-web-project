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
      container: {
        center: true,
        screens: {
          sm: '600px',
          md: '728px',
          lg: '984px',
          xl: '1240px',
          '2xl': '1440px',
        },
      }
    },
  },
  plugins: [],
};
