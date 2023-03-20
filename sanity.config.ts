import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {languageFilter} from '@sanity/language-filter'

export default defineConfig({
  name: 'default',
  title: 'cms-poc',

  projectId: 'zd6eo5jz',
  dataset: process.env.SANITY_STUDIO_API_DATASET as string,

  plugins: [
    languageFilter({
      supportedLanguages: [
        {id: 'en', title: 'English'},
        {id: 'ar', title: 'Arabic'},
      ],
      defaultLanguages: ['en'],
      // Only show language filter for document type `page` (schemaType.name)
      // documentTypes: ['page'],
      filterField: (enclosingType, field, selectedLanguageIds) =>
        !enclosingType.name.startsWith('locale') || selectedLanguageIds.includes(field.name),
    }),
    deskTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

