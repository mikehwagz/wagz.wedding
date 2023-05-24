export const schemaTypes = [
  {
    title: 'Person',
    name: 'person',
    type: 'document',
    fields: [
      {
        title: 'Name',
        name: 'name',
        type: 'string',
      },
      {
        name: 'group',
        title: 'Group',
        type: 'reference',
        to: [{ type: 'group' }],
      },
      {
        name: 'hasPlusOne',
        title: 'Plus One?',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'hasResponded',
        title: 'Responded?',
        type: 'boolean',
        initialValue: false,
      },
      {
        name: 'isAttending',
        title: 'Attending?',
        type: 'boolean',
      },
      {
        title: 'Meal Option',
        name: 'mealOption',
        type: 'string',
        options: {
          list: ['Chicken', 'Salmon', 'Vegetarian'],
          layout: 'radio',
        },
        hidden: ({ parent }) => !parent.isAttending,
      },
      {
        name: 'dietaryRestrictions',
        title: 'Dietary Restrictions',
        type: 'string',
        hidden: ({ parent }) => !parent.isAttending,
      },
      {
        name: 'plusOneIsAttending',
        title: 'Plus One Attending?',
        type: 'boolean',
        hidden: ({ parent }) => !parent.isAttending || !parent.hasPlusOne,
      },
      {
        name: 'plusOneName',
        title: 'Plus One Name',
        type: 'string',
        hidden: ({ parent }) =>
          !parent.isAttending || !parent.hasPlusOne || !parent.plusOneIsAttending,
      },
      {
        name: 'plusOneMealOption',
        title: 'Plus One Meal Option',
        type: 'string',
        options: {
          list: ['Chicken', 'Salmon', 'Vegetarian'],
          layout: 'radio',
        },
        hidden: ({ parent }) =>
          !parent.isAttending || !parent.hasPlusOne || !parent.plusOneIsAttending,
      },
      {
        name: 'plusOneDietaryRestrictions',
        title: 'Plus One Dietary Restrictions',
        type: 'string',
        hidden: ({ parent }) =>
          !parent.isAttending || !parent.hasPlusOne || !parent.plusOneIsAttending,
      },
    ],
  },
  {
    name: 'group',
    title: 'Group',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
    ],
  },
]
