import { defineField, defineType } from 'sanity'

export default defineType({
  title: 'Portfolio Item',
  name: 'portfolioItem',
  type: 'object',
  fields: [
    defineField({
      name: 'portfolioLabel',
      title: 'Label',
      type: 'string',
    }),
    defineField({
      name: 'portfolioImage',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true, // Enables selection of focal point
      },
    }),
    defineField({
      name: 'portfolioVideo',
      title: 'Video',
      type: 'file',
      options: {
        accept: 'video/*',
      },
    }),
  ],
})
