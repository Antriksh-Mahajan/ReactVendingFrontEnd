/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        mainblack: "#181818",
        graycolor: "#2d2d2d",
        greencolor: "#BDD52F",
      },
    },
  },
  plugins: [],
});
