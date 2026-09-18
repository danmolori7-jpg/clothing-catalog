import { z } from "zod";

export const productSchema = z.object({
  id: z.string(),
  name: z.string(),
  category: z.string(),
  price: z.number(),
  image: z.string(),
  imageAlt: z.string(),
});

export type Product = z.infer<typeof productSchema>;
