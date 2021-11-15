export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '61928b9a64c9d5d9dbd7deb6',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-hj7zjb7a',
                  apiId: 'b5435671-66ea-470c-bbae-c0d997de71c2'
                },
                {
                  buildHookId: '61928b9acf0f0a36e42c60ee',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-6q6ogeb3',
                  apiId: '8410fcb0-2d21-4012-9737-af2afc427689'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/inakidelamadrid/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-6q6ogeb3.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
