// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import smartypants from "remark-smartypants";

// https://astro.build/config
export default defineConfig({
	vite: {
		plugins: [tailwindcss()],
	},
	redirects: {
		"/blog/post": "/blog",
		"/blog/category": "/blog",
	},
	markdown: {
		smartypants: false,
		remarkPlugins: [
			[
				smartypants, { dashes: 'oldschool' }
			],
		],
		shikiConfig: {
			themes: {
				light: 'github-light',
				dark: 'github-dark',
			},
			defaultColor: false,
		},
	},
});