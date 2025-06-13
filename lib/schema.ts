import { z } from "zod"
import { isValidPhoneNumber } from "react-phone-number-input";


export const registerGiverSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z]+$/, "First name can only contain letters and no spaces"),


  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z]+$/, "Last name can only contain letters and no spaces"),

  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),

  phoneNumber: z
    .string()
    .refine(isValidPhoneNumber, { message: "Invalid phone number" }),
    // .regex(/^[+]?[1-9][\d]{0,15}$/, "Please enter a valid phone number"),

  password: z
    .string()
    .min(8, "Password must be at least 8 characters")
    .regex(/^(?=.*[a-zA-Z])(?=.*\d)/, "Password must contain at least 8 charaters one letter and one number"),
})


export const loginSchema = z.object({
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})  

export const forgotPasswordSchema = z.object({  
  email: z.string().email("Please enter a valid email address").min(1, "Email is required"),
})

export const resetPasswordSchema = z.object({
  password: z.string().min(8, "Password must be at least 8 characters"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

export type registerGiverData = z.infer<typeof registerGiverSchema>
export type loginData = z.infer<typeof loginSchema>
export type forgotPasswordData = z.infer<typeof forgotPasswordSchema>
export type resetPasswordData = z.infer<typeof resetPasswordSchema>