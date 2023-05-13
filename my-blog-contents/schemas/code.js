import {defineField, defineType} from 'sanity'
import CodeInput from '../components/CodeInput'

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
        components:{input: CodeInput,} //버전이슈로 판단됨, 수정
    }),
  ],
})
