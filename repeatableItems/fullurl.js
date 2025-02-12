import {defineField, defineType} from 'sanity'
export default defineType({
  title: 'URL',
  name: 'fullURL',
  type: 'object',
  fields: [
    defineField({
      title: 'URL Title',
      name: 'title',
      type: 'string',
    }),
    defineField({
      title: 'Link',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
        }),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      text: 'href',
    },
    prepare(selection) {
      const {title, text} = selection
      return {...selection, title: title, subtitle: text}
    },
  },
})
