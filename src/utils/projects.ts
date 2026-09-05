import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/**
 * Single source of truth for project ordering: current work first, then the
 * archive, and within each group by the `order` frontmatter field, lowest
 * first. Files without an `order` default to 9999 and land at the end of their
 * group, where ties break on filename (numerically, so project-10 follows
 * project-9).
 *
 * Grouping on `archived` before `order` is what lets a project move below the
 * archive divider by flipping one boolean — the `order` numbers stay as they
 * are and nothing needs renumbering.
 *
 * The homepage grid, the archive, the detail routes, and prev/next all use this,
 * so a new markdown file drops into the right place everywhere at once.
 */
export async function getSortedProjects(): Promise<Project[]> {
	const projects = await getCollection('projects');

	return projects.sort((a, b) => {
		const byGroup = Number(a.data.archived) - Number(b.data.archived);
		if (byGroup !== 0) return byGroup;
		const byOrder = a.data.order - b.data.order;
		if (byOrder !== 0) return byOrder;
		return a.id.localeCompare(b.id, undefined, { numeric: true });
	});
}
