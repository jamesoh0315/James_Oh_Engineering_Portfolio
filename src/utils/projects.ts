import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

/**
 * Single source of truth for project ordering — newest first.
 * The homepage grid, the archive, the detail routes, and prev/next all use this,
 * so a new markdown file drops into the right place everywhere at once.
 */
export async function getSortedProjects(): Promise<Project[]> {
	const projects = await getCollection('projects');
	return projects.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}
