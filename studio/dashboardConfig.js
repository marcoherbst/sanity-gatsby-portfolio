export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5d876513e88422c03f8b80a6',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-93k189ze',
                  apiId: '0266b785-48ab-4f9f-85e4-cb2c429181db'
                },
                {
                  buildHookId: '5d876513867fc8f7789daef2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-i3k6ep9f',
                  apiId: '138e09b5-d95c-42d5-9e06-5e58fbeaf163'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/marcoherbst/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-i3k6ep9f.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
