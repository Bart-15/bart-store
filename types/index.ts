import { z } from "zod";
import { insertProductSchema } from "@/validators/product.validators";

export type Product = z.infer<typeof insertProductSchema> & {
  id: string;
  rating: number;
  createdAt: Date;
};
