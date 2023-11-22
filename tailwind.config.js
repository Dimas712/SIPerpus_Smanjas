/**@type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{vue.js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green': '#8AA57C',
        'green2': '#657864',
        'green3': '#414d40',
        'green4': '#485C3E',
        'putih': '#D9D9D9',
        'footer': '#BFC7BB',
        'icons': '#000000',
        'bgds': '#D0DDCA'
        
      },
      fontFamily: {
        'quatro': ['Quattrocento'],
        'numans': ['Numans'],
        'poppins': ['Poppins'],
        'noto' : ['Noto Serif Kannada']
      },
    },
  },
  plugins: [],
});
