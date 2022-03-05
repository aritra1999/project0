module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '800px',
      'md': '1000px',
      'lg': '1500px',
    },
    extend: {
      width: {
        '600': '600px',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

