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
	loader: glob({ pattern: ['**/*.{md,mdx}', '!**/_*'], base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			summary: z.string(),
			tags: z.array(z.string()).default([]),
			// Path is resolved relative to THIS markdown file, so a cover living in
			// src/assets/ is written as: ../../assets/your-image.jpg
			coverImage: image(),
			coverAlt: z.string().default(''),
			// How the cover is framed inside the card's 4:3 crop, as a CSS
			// object-position value. '50% 50%' is centred; lower the first number to
			// reveal more of the left edge, raise it to reveal more of the right.
			coverPosition: z.string().default('center'),
			// Lower numbers lead. Anything without an `order` falls to the end,
			// where ties break on filename.
			order: z.number().default(9999),
			// Earlier coursework and personal builds. Archived projects sort below
			// every current one regardless of `order`, and the archive page draws a
			// labelled divider where the group starts — so moving a project across
			// that line is this one field, with no renumbering.
			archived: z.boolean().default(false),
		}),
});

export const collections = { projects };
