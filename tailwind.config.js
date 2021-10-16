module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '10vh': '10vh',
        '90vh': '90vh',
        '70vh': '70vh',
        '10vw': '10vw',
        '90vw': '90vw',
        '70vw': '70vw'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
