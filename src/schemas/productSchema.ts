import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  price: z.number(),
  image: z.string(),
  imageAlt: z.string(),
  description: z.string(),
  sizes: z.array(z.string()),
  colors: z.array(z.string()),
  material: z.string(),
  isAvailable: z.boolean(),
});

export type Product = z.infer<typeof productSchema>;
