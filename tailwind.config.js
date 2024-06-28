/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'c1': "url('../assets/img/c1.jpg')",
      }
    },
  },
  plugins: [],
}