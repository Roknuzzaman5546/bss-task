/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'Century Gothic', 'Apple Gothic', 'sans-serif'],
        'hurme': ['HurmeHEMA', 'Century Gothic', 'CenturyGothic', 'AppleGothic', 'sans-serif']
      },
      screens: {
        'custom-range': { 'min': '1025px', 'max': '1335px' },
        'custom-md': { 'min': '768px', 'max': '1024px' },
      },
    },
  },
  plugins: [],
}