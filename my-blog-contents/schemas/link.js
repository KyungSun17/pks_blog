import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  fields: [
    defineField({
      name: 'metadata',
      title: 'metadata',
      type: 'string', //plugin오류해결필요 - urlWithMetadata 사용해야함
      validation: (Rule) => Rule.required(),
    }),
  ],

  preview: {
    select: {
      title: 'metadata', //plugin오류해결필요 - metadata.openGraph.title
      subtitle: 'metadata', //plugin오류해결필요 - metadata.openGraph.url
    },
    },
},)
