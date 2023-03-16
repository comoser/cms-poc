import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'zd6eo5jz',
    dataset: process.env.SANITY_STUDIO_API_DATASET as string
  },
  graphql: [
    {
      playground: false,
      tag: 'api',
      workspace: 'default',
      id: 'schema-experiment',
    },
  ]
})
