import {defineArrayMember} from 'sanity'
import richTextEditor from './richTextEditor'

export default {
  name: 'page',
  title: 'Page', // name of the model
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    },
    {
      title: 'Header Title',
      name: 'headerTitle',
      type: 'array',
      of: [{type: 'richTextEditor'}],
    },
    {
      name: 'headerImage',
      title: 'Header Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Header Actions',
      name: 'headerActions',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Header Action',
          name: 'headerAction',
          fields: [
            {
              type: 'localeString',
              title: 'Action Title',
              name: 'actionTitle',
            },
            {
              type: 'localeString',
              title: 'Action Description',
              name: 'actionDescription',
            },
          ],
        },
      ],
    },
    {
      title: 'Feature Content',
      name: 'featureContent',
      type: 'array',
      of: [
        {
          type: 'object',
          title: 'Highlight Item',
          name: 'highlightItem',
          fields: [
            {
              type: 'string',
              title: 'Highlight Title',
              name: 'highlghtTitle',
            },
            {
              type: 'string',
              title: 'Highlight Description',
              name: 'highlghtDescription',
            },
            {
              name: 'highlghtImage',
              title: 'Highlight Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      type: 'object',
      title: 'CTA',
      name: 'cta',
      fields: [
        {
          type: 'string',
          title: 'CTA Description',
          name: 'ctaDescription',
        },
        {
          name: 'ctaImage',
          title: 'CTA Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
}
