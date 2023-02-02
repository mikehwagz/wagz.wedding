module.exports = {
  presets: [require('@selfaware/tailwind-base')],
  content: [
    './src/**/*.njk',
    './src/scripts/**/*.js',
    './.eleventy.js',
    './lib/*.js',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '40rem',
      s: '60rem',
      m: '80rem',
      l: '100rem',
      xl: '120rem',
      '2xl': '140rem',
      '3xl': '160rem',
      ...new Array(27)
        .fill()
        .map((_, i) => i * 5 + 30)
        .reduce((acc, val) => {
          acc[val * 10] = `${val}rem`
          return acc
        }, {}),
    },
    extend: {
      colors: {
        black: '#000000',
        blue: '#C9DBFF',
        cream: '#F7F2E9',
      },
      fontFamily: {
        gooper: ['Gooper', 'serif'],
        candy: ['Candy Darling', 'sans-serif'],
      },
      letterSpacing: {
        n1: '-0.01em',
        0: '0em',
      },
    },
  },
}
