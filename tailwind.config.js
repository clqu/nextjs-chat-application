/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'dark-1': '#111214',
        'dark-2': '#0d0e11',
        'dark-3': '#191c21',
      }
    },
  },
  plugins: [],
}
