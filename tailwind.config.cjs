/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-grey' : '#f3f4f6',
        'dark-grey' : '#4a4f5b',
        'sucess' : '#18bb85',
        'pending' : '#f59e0b',
        'fail' : '#ef4444'
      }
    },
  },
  plugins: [],
}
