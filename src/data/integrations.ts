export interface Integration {
  language: 'PHP' | 'JavaScript' | 'Ruby' | 'Others'
  platforms: Platform[]
}
export interface Platform {
  name: string
  link: string
  logo: string
  logoDark: string
}

const integrations: Integration[] = [
  {
    language: 'PHP',
    platforms: [
      {
        name: 'PHP',
        link: '/en/integrations/php',
        logo: '/integrations/php.svg',
        logoDark: '/integrations/php-dark.svg',
      },
      {
        name: 'Laravel',
        link: '/en/integrations/laravel',
        logo: '/integrations/laravel.svg',
        logoDark: '/integrations/laravel-dark.svg',
      },
      {
        name: 'Symfony',
        link: '/en/integrations/symfony',
        logo: '/integrations/symfony.svg',
        logoDark: '/integrations/symfony-dark.svg',
      },
      {
        name: 'Lumen',
        link: '/en/integrations/lumen',
        logo: '/integrations/lumen.svg',
        logoDark: '/integrations/lumen-dark.svg',
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
        logoDark: '/integrations/node-dark.svg',
      },
      {
        name: 'Sails',
        link: '/en/integrations/sails',
        logo: '/integrations/sails.svg',
        logoDark: '/integrations/sails-dark.svg',
      },
      {
        name: 'AdonisJS',
        link: '/en/integrations/adonisjs',
        logo: '/integrations/adonis.svg',
        logoDark: '/integrations/adonis-dark.svg',
      },
      {
        name: 'Fastify',
        link: '/en/integrations/fastify',
        logo: '/integrations/fastify.svg',
        logoDark: '/integrations/fastify-dark.svg',
      },
      {
        name: 'Directus',
        link: '/en/integrations/directus',
        logo: '/integrations/directus.svg',
        logoDark: '/integrations/directus-dark.svg',
      },
      {
        name: 'Strapi',
        link: '/en/integrations/strapi',
        logo: '/integrations/strapi.svg',
        logoDark: '/integrations/strapi-dark.svg',
      },
      {
        name: 'Express',
        link: '/en/integrations/express',
        logo: '/integrations/express.svg',
        logoDark: '/integrations/express-dark.svg',
      },
      {
        name: 'Nest',
        link: '/en/integrations/node#nestjs-with-express',
        logo: '/integrations/nest.svg',
        logoDark: '/integrations/nest-dark.svg',
      },
      {
        name: 'Koa',
        link: '/en/integrations/koa',
        logo: '/integrations/koa.svg',
        logoDark: '/integrations/koa-dark.svg',
      },
    ],
  },
  {
    language: 'Others',
    platforms: [
      {
        name: '.Net',
        link: '/en/integrations/net',
        logo: '/integrations/dotnet.svg',
        logoDark: '/integrations/dotnet-dark.svg',
      },
      {
        name: 'Go',
        link: '/en/integrations/go',
        logo: '/integrations/go.svg',
        logoDark: '/integrations/go-dark.svg',
      },
      {
        name: '.Net Core',
        link: '/en/integrations/net-core',
        logo: '/integrations/dotnet-core.svg',
        logoDark: '/integrations/dotnet-core-dark.svg',
      },
      {
        name: 'Django',
        link: '/en/integrations/django',
        logo: '/integrations/django.svg',
        logoDark: '/integrations/django-dark.svg',
      },
      {
        name: 'Rails',
        link: '/en/integrations/rails',
        logo: '/integrations/rails.svg',
        logoDark: '/integrations/rails-dark.svg',
      },
      {
        name: 'Spring',
        link: '/en/integrations/spring',
        logo: '/integrations/spring.svg',
        logoDark: '/integrations/spring-dark.svg',
      },
    ],
  },
]

export default integrations
