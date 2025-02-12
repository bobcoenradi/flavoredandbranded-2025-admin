import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'author',
  title: 'About',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Title',
      type: 'string',
    }),
    // defineField({
    //   name: 'slug',
    //   title: 'Slug',
    //   type: 'slug',
    //   options: {
    //     source: 'name',
    //     maxLength: 96,
    //   },
    // }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
          ],
          lists: [],
        },
      ],
    }),
    defineField({
      name: 'about',
      title: 'About Flavored and Branded',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
          ],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
