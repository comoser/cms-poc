export default {
  name: 'pet',
  type: 'document',
  i18n: true,
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
}
