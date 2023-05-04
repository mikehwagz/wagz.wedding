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
      colors: {
        black: '#000000',
        'blue-primary': '#C9DBFF',
        'blue-secondary': '#B0CBFF',
        tan: '#F7F2E9',
      },
      fontFamily: {
        gooper: ['Gooper', 'serif'],
        candy: ['Candy Darling', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
