import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
  }),
});

const listings = defineCollection({
  type: "content",
  schema: z.object({
    address: z.string(),
    price: z.string(),
    beds: z.number().optional(),
    baths: z.number().optional(),
    status: z.string(), // e.g. "Active", "In Contract"
    heroImage: z.string().optional(),
  }),
});

const closed = defineCollection({
  type: "content",
  schema: z.object({
    address: z.string(),
    salePrice: z.string(),
    closedDate: z.coerce.date(),
    heroImage: z.string().optional(),
  }),
});

export const collections = { blog, listings, closed };
