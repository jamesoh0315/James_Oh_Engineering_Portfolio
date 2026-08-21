import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Projects collection.
 *
 * Adding a project is two steps and zero code changes:
 *   1. Drop the image in  src/assets/
 *   2. Create a markdown file in  src/content/projects/
 *
 * Everything else — the homepage grid, the archive page, the detail route,
 * prev/next links — derives from this collection automatically.
 *
 * The '!**\/_*' pattern keeps _template.md out of the collection so it can
 * live next to the real files without ever rendering as a project.
 */
const projects = defineCollection({
	loader: glob({ pattern: ['**/*.md', '!**/_*'], base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			date: z.coerce.date(),
			summary: z.string(),
			tags: z.array(z.string()).default([]),
			// Path is resolved relative to THIS markdown file, so a cover living in
			// src/assets/ is written as: ../../assets/your-image.jpg
			coverImage: image(),
			coverAlt: z.string().default(''),
			featured: z.boolean().default(false),
		}),
});

export const collections = { projects };
