// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
	// Deploy target. Drives canonical URLs, Open Graph tags, and the sitemap.
	site: 'https://james-oh-engineering-portfolio.vercel.app',
	integrations: [mdx()],
	vite: {
		plugins: [tailwindcss()],
	},
});
