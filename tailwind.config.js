module.exports = {
  presets: [require('@selfaware/tailwind-base')],
  content: [
    './components/*.jsx',
    './pages/*.{js,jsx}',
    './lib/*.{js,jsx}',
    './client/**/*.{js,jsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        xs: '375px',
      },
      colors: {
        black: '#111',
        gray: '#adadad',
        white: '#fff',
      },
      fontFamily: {
        sans: ['Neue Montreal', 'Arial', 'Helvetica', 'sans-serif'],
      },
      letterSpacing: {
        1: '0.01em',
        2: '0.02em',
      },
      borderWidth: {
        1: '1px',
      },
      gridTemplateColumns: {
        14: 'repeat(14, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      gridColumnStart: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
        17: '17',
      },
    },
  },
  plugins: [],
}
