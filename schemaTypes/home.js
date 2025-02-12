import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
        name: 'h1',
        title: 'H1',
        type: 'string',
      }),
      defineField({
        name: 'h2',
        title: 'H2',
        type: 'string',
      }),

  ],
})
