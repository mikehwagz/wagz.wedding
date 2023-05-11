import algoliasearch from 'algoliasearch'
import { createClient } from '@sanity/client'
export const route = '/api/algolia-sync'

export async function handler() {
  const algoliaClient = algoliasearch('WU6A99GNOQ', 'a737c08ff3857a1aa3a6f18f4f6b1b4c')

  const sanityClient = createClient({
    projectId: 'vphgm86p',
    dataset: 'production',
    apiVersion: '2023-05-07',
    useCdn: false,
  })

  const records = await sanityClient.fetch(`*[_type == 'person'] {
    'objectID': _id,
    name,
  }`)

  const index = algoliaClient.initIndex('guest_list')

  const objects = await index.saveObjects(records)

  return {
    statusCode: 200,
    body: JSON.stringify(objects),
  }
}
