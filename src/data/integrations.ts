export interface Integration {
  language: 'PHP' | 'JavaScript' | 'Ruby' | 'Others'
  platforms: Platform[]
}
export interface Platform {
  name: string
  link: string
  logo: string
}

const integrations: Integration[] = [
  {
    language: 'PHP',
    platforms: [
      {
        name: 'PHP',
        link: '/en/integrations/php',
        logo: '/integrations/php.svg',
      },
      {
        name: 'Laravel',
        link: '/en/integrations/laravel',
        logo: '/integrations/laravel.svg',
      },
      {
        name: 'Symfony',
        link: '/en/integrations/symfony',
        logo: '/integrations/symfony.svg',
      },
      {
        name: 'Lumen',
        link: '/en/integrations/lumen',
        logo: '/integrations/lumen.svg',
      },
    ],
  },
  {
    language: 'JavaScript',
    platforms: [
      {
        name: 'Node',
        link: '/en/integrations/node',
        logo: '/integrations/node.svg',
      },
      {
        name: 'Sails',
        link: '/en/integrations/sails',
        logo: '/integrations/sails.svg',
      },
      {
        name: 'AdonisJS',
        link: '/en/integrations/adonisjs',
        logo: '/integrations/adonis.svg',
      },
      {
        name: 'Fastify',
        link: '/en/integrations/fastify',
        logo: '/integrations/fastify.svg',
      },
      {
        name: 'Directus',
        link: '/en/integrations/directus',
        logo: '/integrations/directus.svg',
      },
      {
        name: 'Strapi',
        link: '/en/integrations/strapi',
        logo: '/integrations/strapi.svg',
      },
      {
        name: 'Express',
        link: '/en/integrations/express',
        logo: '/integrations/express.svg',
      },
      {
        name: 'Nest',
        link: '/en/integrations/node#nestjs-with-express',
        logo: '/integrations/nest.svg',
      },
      {
        name: 'Koa',
        link: '/en/integrations/node#koa-integration',
        logo: '/integrations/koa.svg',
      },
    ],
  },
  {
    language: 'Others',
    platforms: [
      {
        name: '.Net',
        link: '/en/integrations/dotnet',
        logo: '/integrations/dotnet.svg',
      },
      {
        name: '.Net Core',
        link: '/en/integrations/dotnet-core',
        logo: '/integrations/dotnet-core.svg',
      },
      {
        name: 'Django',
        link: '/en/integrations/django',
        logo: '/integrations/django.svg',
      },
      {
        name: 'Rails',
        link: '/en/integrations/rails',
        logo: '/integrations/rails.svg',
      },
      {
        name: 'Spring',
        link: '/en/integrations/spring',
        logo: '/integrations/spring.svg',
      },
    ],
  },
]

export default integrations
