import netlify from '@presta/adapter-netlify'

export const files = ['pages/**/*.{js,jsx}']
export const plugins = [netlify()]
