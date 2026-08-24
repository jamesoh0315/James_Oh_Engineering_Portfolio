import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/**
 * Single source of truth for project ordering — by the `order` frontmatter field,
 * lowest first. Files without an `order` default to 9999 and land at the end,
 * where ties break on filename (numerically, so project-10 follows project-9).
 *
 * The homepage grid, the archive, the detail routes, and prev/next all use this,
 * so a new markdown file drops into the right place everywhere at once.
 */
export async function getSortedProjects(): Promise<Project[]> {
	const projects = await getCollection('projects');

	return projects.sort((a, b) => {
		const byOrder = a.data.order - b.data.order;
		if (byOrder !== 0) return byOrder;
		return a.id.localeCompare(b.id, undefined, { numeric: true });
	});
}
