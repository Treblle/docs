export const SITE = {
	title: 'Treblle Docs',
	description: 'Treblle docs',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'http://localhost:3000/default-og-image.png',
		alt: 'Beautiful Treblle Logo'

	},
	twitter: 'treblleapi',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/Treblle/docs/tree/main`;

export const COMMUNITY_INVITE_URL = `https://app.treblle.com/chat`;

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'Getting Started': [
			{ text: 'Introduction', link: 'en/introduction' },
			{ text: 'Who is Treblle for', link: 'en/who-is-treblle-for' },
      { text: 'How Treblle works', link: 'en/how-treblle-works' },
      // { text: 'Service status', link: 'en/service-status' },
		],
    'Dashboard': [
    	{ text: 'Overview', link: 'en/dashboard' },
      { text: 'Projects', link: 'en/dashboard/projects' },
      { text: 'Endpoints', link: 'en/dashboard/endpoints' },
      { text: 'Requests', link: 'en/dashboard/requests' },
      { text: 'Problems', link: 'en/dashboard/problems' },
      { text: 'Flows', link: 'en/dashboard/flows' },
      { text: 'API Score', link: 'en/dashboard/api-score' },
      { text: 'API documentation', link: 'en/dashboard/api-documentation' },
      { text: 'Customize', link: 'en/dashboard/customize'}
		],
    'Security': [
      { text: 'Masked fields', link: 'en/security/masked-fields' },
      // { text: 'Exclusions', link: 'en/security/exclusions' },
      // { text: 'Certification', link: 'en/security/certification' },
      // { text: 'Data security', link: 'en/security/data-security' },
      // { text: 'Security audits', link: 'en/security/security-audits' },
    ],
		'Integrations': [
      { text: 'PHP', link: 'en/integrations/php' },
      { text: 'Laravel', link: 'en/integrations/laravel' },
      { text: '.Net', link: 'en/integrations/net' },
      { text: '.Net Core', link: 'en/integrations/net-core'},
      { text: 'Go', link: 'en/integrations/go'},
      { text: 'Lumen', link: 'en/integrations/lumen'},
      { text: 'Symfony', link: 'en/integrations/symfony'},
      { text: 'Ruby', link: 'en/integrations/ruby'},
      { text: 'Node', link: 'en/integrations/node'},
      { text: 'AdonisJS', link: 'en/integrations/adonisjs' },
      { text: 'DirectUs', link: 'en/integrations/directus' },
      { text: 'Django', link: 'en/integrations/django' },
      { text: 'Spring', link: 'en/integrations/spring' }
    ],
	},
};
