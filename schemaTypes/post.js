import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'order',
      title: 'Order',
      type: 'number',
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'subtitle',
      title: 'Sub Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'concept',
      title: 'Concept',
      type: 'array',
      of: [{type: 'block'}]
    }),
    defineField({
      name: 'work',
      title: 'Work',
      type: 'array',
      of: [{type: 'string'}]
    }),
    defineField({
      name: 'visits',
      title: 'Visits',
      type: 'array',
      of: [{type: 'fullURL'}]
    }),
    defineField({
      name: 'portfolioarray',
      title: 'Portfolio Items',
      description: 'Add either image or video to your portfolio item, not both in one item',
      type: 'array',
      of: [{ type: 'portfolioItem' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    }),
  ],

  preview: {
    select: {
      title: 'title'
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title,
      };
    },
  },
})