const groq = require('groq')

const queries = {}
queries.link = groq`{
  ...,
  _type == 'internal_link' => {
    reference-> {
      _type,
      title,
      'slug': slug.current,
      'isHomepage': *[_type == 'site'][0].homepage._ref == _id
    }
  }
}`

queries.image = groq`{
  _type,
  ...(asset-> {
    '_id': _id,
    'url': url,
    'alt': altText,
    'width': metadata.dimensions.width,
    'height': metadata.dimensions.height,
  }),
}`

queries.page = groq`{
  _type,
  title,
  'slug': slug.current,
  share_title,
  share_description,
  share_image ${queries.image},
}`

module.exports = queries
