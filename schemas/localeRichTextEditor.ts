const english = {id: 'en', title: 'English', isDefault: true}
const arabic = {id: 'ar', title: 'Arabic', isDefault: false}

const supportedLanguages = [english, arabic]

export default {
  title: 'Localized rich text editor',
  name: 'localeRichTextEditor',
  type: 'object',
  // Fieldsets can be used to group object fields.
  // Here we omit a fieldset for the "default language",
  // making it stand out as the main field.
  fieldsets: [
    {
      title: 'Translations',
      name: 'translations',
      options: {collapsible: true},
    },
  ],
  // Dynamically define one field per language
  fields: supportedLanguages.map((lang) => ({
    title: lang.title,
    name: lang.id,
    type: 'array',
    of: [{type: 'richTextEditor'}],
    fieldset: lang.isDefault ? null : 'translations',
  })),
}
