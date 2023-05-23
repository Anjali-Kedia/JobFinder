/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blueColor' : '#26474E',
        'greyIsh' : '#E6D1D2',
        'cardShadow': '#f7f8f9',
        'textColor' : '#252b36',
      
      }
    },
  },
  plugins: [],
}

