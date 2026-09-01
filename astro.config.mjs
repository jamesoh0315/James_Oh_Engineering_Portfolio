// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	// Update this when you pick a deploy target — it's used for canonical URLs,
	// Open Graph tags, and the sitemap.
	site: 'https://jamesoh0315.github.io',
	integrations: [mdx()],
	vite: {
		plugins: [tailwindcss()],
	},
});
