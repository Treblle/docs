export const SITE = {
  title: 'Treblle Docs',
  description: 'Treblle docs',
  defaultLanguage: 'en_US',
}

export const OPEN_GRAPH = {
  image: {
    src: 'https://docs.treblle.com/default-og-image.png',
    alt: 'Beautiful Treblle Logo',
  },
  twitter: 'treblleapi',
}

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
  title: string
  description: string
  layout: string
  image?: { src: string; alt: string }
  dir?: 'ltr' | 'rtl'
  ogLocale?: string
  lang?: string
}

export const KNOWN_LANGUAGES = {
  English: 'en',
} as const
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES)

export const GITHUB_EDIT_URL = `https://github.com/Treblle/docs/tree/main`

export const COMMUNITY_INVITE_URL = `https://app.treblle.com/chat`

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
  indexName: import.meta.env.PUBLIC_ALGOLIA_INDEX_NAME,
  appId: import.meta.env.PUBLIC_ALGOLIA_APP_ID,
  apiKey: import.meta.env.PUBLIC_ALGOLIA_API_KEY,
}

export type Sidebar = Record<
  (typeof KNOWN_LANGUAGE_CODES)[number],
  Record<string, { text: string; link: string }[]>
>
export const SIDEBAR: Sidebar = {
  en: {
    'Getting Started': [
      { text: 'Introduction', link: 'en/introduction' },
      { text: 'Who is Treblle for', link: 'en/who-is-treblle-for' },
      { text: 'How Treblle works', link: 'en/how-treblle-works' },
      { text: 'Integrations', link: 'en/integrations' },
      // { text: 'Service status', link: 'en/service-status' },
    ],
    Integrations: [
      { text: 'PHP', link: 'en/integrations/php' },
      { text: 'Laravel', link: 'en/integrations/laravel' },
      { text: '.Net', link: 'en/integrations/net' },
      { text: '.Net Core', link: 'en/integrations/net-core' },
      { text: 'Go', link: 'en/integrations/go' },
      { text: 'Lumen', link: 'en/integrations/lumen' },
      { text: 'Symfony', link: 'en/integrations/symfony' },
      { text: 'Ruby', link: 'en/integrations/ruby' },
      { text: 'Node(JavaScript)', link: 'en/integrations/node' },
      { text: 'Sails', link: 'en/integrations/sails' },
      { text: 'Express', link: 'en/integrations/express' },
      { text: 'Koa', link: 'en/integrations/koa' },
      { text: 'Strapi', link: 'en/integrations/strapi' },
      { text: 'AdonisJS', link: 'en/integrations/adonisjs' },
      { text: 'Fastify', link: 'en/integrations/fastify' },
      { text: 'DirectUs', link: 'en/integrations/directus' },
      { text: 'Django(Python)', link: 'en/integrations/django' },
      { text: 'Spring(Java)', link: 'en/integrations/spring' },
      { text: 'Community SDKs', link: 'en/integrations/community-sdks' },
    ],
    Product: [
      { text: 'Dashboard', link: 'en/dashboard' },
      { text: 'Projects', link: 'en/dashboard/projects' },
      { text: 'Requests', link: 'en/dashboard/requests' },
      { text: 'Endpoints', link: 'en/dashboard/endpoints' },
      { text: 'Problems', link: 'en/dashboard/problems' },
      { text: 'Flows', link: 'en/dashboard/flows' },
      { text: 'API Score', link: 'en/dashboard/api-score' },
      { text: 'API Analytics', link: 'en/dashboard/api-analytics' },
      { text: 'API Documentation', link: 'en/dashboard/api-documentation' },
    ],
    Security: [
      { text: 'Masked fields', link: 'en/security/masked-fields' },
      // { text: 'Exclusions', link: 'en/security/exclusions' },
      // { text: 'Certification', link: 'en/security/certification' },
      // { text: 'Data security', link: 'en/security/data-security' },
      // { text: 'Security audits', link: 'en/security/security-audits' },
    ],
  },
}

export const getCurrentPageFilePath = async (
  currentPage: string
): Promise<string> => {
  const docsPages = await import.meta.glob('./pages/en/**/*.md(x)')
  const docsFiles = Object.keys(docsPages)

  const [docsFile] = docsFiles.filter((file) => file.includes(currentPage))
  const matchedExtension = docsFile.match(/\.(?<extension>mdx|md)$/)

  const fileExtension = matchedExtension?.groups?.extension ?? 'md'
  const currentFile = `src/pages${currentPage.replace(
    /\/$/,
    ''
  )}.${fileExtension}`

  return currentFile
}
