export default {
  name: 'page',
  title: 'Page', // name of the model
  type: 'document',
  fields: [
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'localeRichTextEditor',
    },
    {
      title: 'Header Title',
      name: 'headerTitle',
      type: 'localeRichTextEditor',
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
              type: 'localeRichTextEditor',
              title: 'Action Title',
              name: 'actionTitle',
            },
            {
              type: 'localeRichTextEditor',
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
              type: 'localeRichTextEditor',
              title: 'Highlight Title',
              name: 'highlightTitle',
            },
            {
              type: 'localeRichTextEditor',
              title: 'Highlight Description',
              name: 'highlightDescription',
            },
            {
              name: 'highlightImage',
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
          type: 'localeRichTextEditor',
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
