import z from "zod";

// Schema for signing in a user
export const signInFormSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Schema for signing up a user
export const signUpFormSchema = z
  .object({
    name: z.string().min(3, "Name must be 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and Confirm password must match",
    path: ["confirmPassword"],
  });
