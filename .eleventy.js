// const { EleventyServerlessBundlerPlugin } = require('@11ty/eleventy')
const filters = require('./lib/filters')
const transforms = require('./lib/transforms')
const shortcodes = require('./lib/shortcodes')

module.exports = (eleventyConfig) => {
  // eleventyConfig.addPlugin(EleventyServerlessBundlerPlugin, {
  //   name: 'preview',
  //   functionsDir: './netlify/functions/',
  // })

  // eleventyConfig.setServerOptions({
  //   domdiff: false,
  // })

  Object.keys(filters).forEach((filter) => {
    eleventyConfig.addFilter(filter, filters[filter])
  })

  Object.keys(transforms).forEach((transform) => {
    eleventyConfig.addTransform(transform, transforms[transform])
  })

  Object.keys(shortcodes).forEach((shortcode) => {
    eleventyConfig.addShortcode(shortcode, shortcodes[shortcode])
  })

  eleventyConfig.setUseGitIgnore(false)
  eleventyConfig.addWatchTarget('./tailwind.config.js')
  eleventyConfig.addWatchTarget('./lib/')
  eleventyConfig.addWatchTarget('./src/assets/')
  eleventyConfig.addWatchTarget('./src/scripts/')
  eleventyConfig.addWatchTarget('./src/styles/')
  eleventyConfig.addPassthroughCopy({ './src/assets': '/assets' })

  return {
    dir: {
      input: 'src',
      output: 'dist',
      layouts: '_layouts',
      data: '../data',
    },
  }
}
