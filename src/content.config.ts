import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './blog'
	})
});
const projects = defineCollection({
	loader: glob({
		pattern: '**/*.md',
		base: './projects'
	})
});

export const collections = { blog, projects };
