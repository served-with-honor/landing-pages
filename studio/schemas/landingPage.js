export default {
	title: 'Landing Page',
  name: 'landingPage',
  type: 'document',
  groups: [
    { name: 'basic', title: 'Basic', },
    { name: 'content', title: 'Content', },
  ],
  fields: [
    {
      title: 'Name',
      name: 'name',
      type: 'string',
      group: 'basic',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      group: 'basic',
      options: {
        source: 'name',
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Company',
      name: 'company',
      type: 'string',
      group: 'basic',
      options: {
        list: [
          'Served with Honor',
          'VA Claims Insider',
          'Telemedica',
          'Military Disability Made Easy',
          'Hire Veterans',
          'Oneiros',
          'LendHero',
          'District Lending',
          'Raw Cider',
        ]
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Layout',
      name: 'layout',
      type: 'string',
      group: 'content',
      options: {
        list: [
          'Default',
        ]
      },
      initialValue: 'Default',
      validation: (Rule) => Rule.required(),
    },
  ]
}