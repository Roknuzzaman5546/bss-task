/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Century Gothic', 'Apple Gothic', 'sans-serif'],
        hurme: ['HurmeHEMA', 'Century Gothic', 'CenturyGothic', 'AppleGothic', 'sans-serif']
      },
    },
  },
  plugins: [],
}