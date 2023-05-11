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
        name: 'hasPlusOne',
        title: 'Plus One?',
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
      },
      {
        name: 'dietaryRestrictions',
        title: 'Dietary Restrictions',
        type: 'string',
      },

      {
        name: 'guest',
        title: 'Guest',
        type: 'object',
        hidden: ({ parent }) => !parent.hasPlusOne,
        fields: [
          {
            name: 'isAttending',
            title: 'Attending?',
            type: 'boolean',
          },
          {
            name: 'name',
            title: 'Name',
            type: 'string',
          },
          {
            title: 'Meal Option',
            name: 'mealOption',
            type: 'string',
            options: {
              list: ['Chicken', 'Salmon', 'Vegetarian'],
              layout: 'radio',
            },
          },
          {
            name: 'dietaryRestrictions',
            title: 'Dietary Restrictions',
            type: 'string',
          },
        ],
      },
    ],
  },
]
