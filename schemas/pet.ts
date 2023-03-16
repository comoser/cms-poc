import {baseLanguage} from './localeString'

export default {
  name: 'pet',
  type: 'document',
  title: 'Pet',
  fields: [
    {
      name: 'name',
      type: 'localeString',
      title: 'Name'
    },
    {
      name: 'age',
      type: 'number',
      title: 'Age'
    }
  ],
  preview: {
    select: {
      title: `title.${baseLanguage.id}`
    }
  }
}
