/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['cairo', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        'scroll-fast': 'scroll 5s linear infinite',
        'scroll-slow': 'scroll 10s linear infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' },
        }
      }
    },
  },
  plugins: [],
}