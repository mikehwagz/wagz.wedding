const sanityClient = require('@sanity/client')
const sanityImage = require('@sanity/image-url')

const options = {
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2022-10-11',
  useCdn: process.env.NODE_ENV === 'production',
}

const productionClient = sanityClient(options)

const previewClient = sanityClient({
  ...options,
  useCdn: false,
  token: process.env.SANITY_TOKEN,
})

module.exports.getClient = (configData) => {
  const isPreview = configData.eleventy.hasOwnProperty('serverless')
  return isPreview ? previewClient : productionClient
}

module.exports.imageBuilder = sanityImage(productionClient)
