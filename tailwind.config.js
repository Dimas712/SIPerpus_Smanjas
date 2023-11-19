/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
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
        'poppins': ['Poppins']
      },
    },
  },
  plugins: [],
}