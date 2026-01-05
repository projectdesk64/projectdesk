import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  schema: z.object({
    title: z.string(),
    price: z.number(),
    category: z.string(),
    techStack: z.array(z.string()),
    shortDescription: z.string(),
    coverImage: z.string(),
    architectureImage: z.string(),
    draft: z.boolean().optional(),
  }),
});

export const collections = {
  projects,
};
