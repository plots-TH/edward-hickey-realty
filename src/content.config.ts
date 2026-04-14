import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders"; // 1. Add this import

const blog = defineCollection({
  // 2. Add the loader for each collection
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const listings = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/listings" }),
  schema: z.object({
    address: z.string(),
    price: z.string(),
    beds: z.number().optional(),
    baths: z.number().optional(),
    status: z.string(),
    heroImage: z.string().optional(),
  }),
});

const closed = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: "./src/content/closed" }),
  schema: z.object({
    address: z.string(),
    salePrice: z.string(),
    closedDate: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog, listings, closed };
