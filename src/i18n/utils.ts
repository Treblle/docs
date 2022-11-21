import { readdir } from 'node:fs/promises';
/** If a nav entry’s slug is not found, mark it as needing fallback content. */
async function markFallbackNavEntries(lang: string, nav: any) {
	// import.meta.url is `./src/i18n/util.ts` in dev but `./dist/entry.js` in build.
	const dirURL = new URL(
		import.meta.env.DEV ? `../pages/${lang}/` : `../src/pages/${lang}/`,
		import.meta.url
	);

	const urlToSlug = (url: URL) => url.pathname.split(`/src/pages/${lang}/`)[1];
	const markdownSlugs = new Set((await getAllMarkdownPaths(dirURL)).map(urlToSlug));

	for (const entry of nav) {
		if ('header' in entry) continue;
		if (!(markdownSlugs.has(entry.slug + '.md') || markdownSlugs.has(entry.slug + '/index.md'))) {
			entry.isFallback = true;
		}
	}
	return nav;
}

/**
 * Get paths for all Markdown files that are contained in `dir` and its children.
 * We’re doing this manually instead of using `import.meta.glob` because that was triggering
 * all Markdown files to be reloaded by Astro when one file changed, which was exteremely slow.
 * @param dir The directory to search in.
 */
 async function getAllMarkdownPaths(dir: URL, files: URL[] = []) {
	// Ensure a trailing slash so files are resolved correctly relative to this directory.
	if (dir.href.at(-1) !== '/') dir.pathname += '/';
	const entries = await readdir(dir, { withFileTypes: true });
	await Promise.all(
		entries.map(async (entry) => {
			if (entry.isDirectory()) {
				return await getAllMarkdownPaths(new URL(entry.name, dir), files);
			} else if (entry.name.endsWith('.md')) {
				files.push(new URL(entry.name, dir));
			}
		})
	);
	return files;
}
