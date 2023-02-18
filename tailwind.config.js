/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "app.js",
  ],
  theme: {
    extend: {  
      colors: {
        darkPurple: '#45278B',
        greyish: '#EBEBF5',
        bluish: '#2E335A',
        lightPurple: '#48319D',
    },
  },
  },
  plugins: [],
}
