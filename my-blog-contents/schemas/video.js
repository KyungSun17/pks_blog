import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'video',
  title: 'Video',
  type: 'object',
  fields: [
    defineField({
      name: 'caption',
      title: 'Caption',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
        name: 'metadata',
        title: 'Metadata',
        type: 'string', //plugin오류해결필요 - urlWithMetadata 사용해야함 (npm에 404오류)
      }),
  ],

  preview: {
    select: {
      title: 'caption',
      subtitle: 'metadata', //plugin오류해결필요 - metadata.url 사용해야함
    },
  },
})
