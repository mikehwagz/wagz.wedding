import { createClient } from '@sanity/client'

export const route = '/api/person'

export async function handler(ev) {
  const sanityClient = createClient({
    projectId: 'vphgm86p',
    dataset: 'production',
    apiVersion: '2023-05-07',
    token: process.env.SANITY_TOKEN,
    useCdn: false,
  })

  if (ev.httpMethod === 'GET' && ev.queryStringParameters?.id) {
    const id = ev.queryStringParameters.id
    const fields = `_id, name, hasPlusOne, hasResponded`
    const data = await sanityClient.fetch(`*[_id == "${id}"][0] {
      ${fields},
      'group': *[_type == 'person' && references(^.group._ref) && _id != "${id}"] {
        ${fields},
      },
    }`)

    return {
      statusCode: 200,
      json: data,
    }
  }

  if (ev.httpMethod === 'PUT') {
    const { _id, group, ...data } = JSON.parse(ev.body)
    const tx = sanityClient.transaction()
    let res = null

    tx.patch(_id, p =>
      p.set({
        isAttending: data.isAttending,
        mealOption: data.mealOption,
        dietaryRestrictions: data.dietaryRestrictions,
        hasResponded: true,
        ...(data.isAttending && data.hasPlusOne
          ? {
              plusOneName: data.plusOneName,
              plusOneIsAttending: data.plusOneIsAttending,
              plusOneMealOption: data.plusOneMealOption,
              plusOneDietaryRestrictions: data.plusOneDietaryRestrictions,
            }
          : {}),
      }),
    )

    if (data.isAttending && group?.length > 0) {
      group.forEach((person, i) => {
        tx.patch(person._id, p =>
          p.set({
            isAttending: person.isAttending,
            mealOption: data[`groupMealOption_${i}`],
            dietaryRestrictions: data[`groupDietaryRestrictions_${i}`],
            hasResponded: true,
          }),
        )
      })
    }

    res = await tx.commit()

    return {
      statusCode: 200,
      json: res,
    }
  }

  return {
    statusCode: 200,
    body: { response: 'Love is real' },
  }
}
