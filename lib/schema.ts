import { z } from "zod"

export const registerGiverSchema = z.object({
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Full name can only contain letters and spaces"),

  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),

  phoneNumber: z
    .string()
    .min(10, "Phone number must be at least 10 digits"),
    // .regex(/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)/, "Password must contain at least one letter and one number"),
})



export type registerGiverData = z.infer<typeof registerGiverSchema>