import { defineCollection } from "astro:content"
import { file } from "astro/loaders"

export const collections = {
	index: defineCollection({
		loader: file("src/contents/index.yaml")
	})
}