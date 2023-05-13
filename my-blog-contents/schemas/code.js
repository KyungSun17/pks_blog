import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'code',
  title: 'Code',
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'language',
        title: 'Language',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'code',
        title: 'Code',
        type: 'string',
        validation: (Rule) => Rule.required(),
    }),
  ],
})
