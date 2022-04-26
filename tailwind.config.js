module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    ripple: theme => ({
      colors: theme('colors'),
      darken: 0.1
    }),
  },
  plugins: [
    require('tailwindcss-ripple')()
  ],
}
