module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      // add my own breakpoints
      screens: {
        '3xl': '2000px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
