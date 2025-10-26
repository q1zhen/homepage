import { defineCollection, z } from "astro:content"
import { file, glob } from "astro/loaders"

export const collections = {
	index: defineCollection({
		loader: file("src/contents/index.yaml")
	}),
	blog: defineCollection({
		loader: glob({
			pattern: "**/*.md",
			base: "./blog",
			generateId: ({ entry }) => {
				return encodeURIComponent(entry.replace(/\.md$/, "").replaceAll("/", "-"))
			},
		}),
		schema: z.object({
			title: z.string(),
			description: z.string(),
			date: z.date(),
			category: z.string().default("miscellaneous"),
			lang: z.string().default("en"),
			draft: z.boolean().default(false),
		}),
	})
}