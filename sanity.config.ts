import {defineConfig} from 'sanity'
import {visionTool} from '@sanity/vision'
import {deskTool} from 'sanity/desk'
import {schemaTypes} from './schemas'
import {
  documentI18n,
  getFilteredDocumentTypeListItems,
} from '@sanity/document-internationalization'


const i18nConfig = {
  languages: [
    {id: 'en_US', title: 'English'},
    {id: 'ar_SA', title: 'Arabic'},
  ],
  base: 'en_US',
}

export default defineConfig({
  name: 'default',
  title: 'cms-poc',

  projectId: 'zd6eo5jz',
  dataset: process.env.SANITY_STUDIO_API_DATASET as string,

  plugins: [
    documentI18n(i18nConfig),
    deskTool({
      structure: (S, {schema}) => {
        const docTypeListItems = getFilteredDocumentTypeListItems({
          S,
          schema,
          config: i18nConfig,
        });

        return S.list()
          .title('Content')
          .items([
            ...docTypeListItems,
          ])
      },
    }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

