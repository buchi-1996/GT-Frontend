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



export const basicDetailsSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").max(100, "Title must be less than 100 characters"),
  weight: z
    .number()
    .min(1, "Weight must be positive")
    .or(
      z
        .string()
        .transform((val) => Number.parseFloat(val))
        .refine((val) => val >= 0, "Weight must be positive"),
    ),
  itemWorth: z
    .number()
    .min(1, "Item worth must be positive")
    .or(
      z
        .string()
        .transform((val) => Number.parseFloat(val))
        .refine((val) => val >= 0, "Item worth must be positive"),
    ),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),
  image: z.any().refine((file) => file instanceof File, "Image is required"),
})

export const categoriesSchema = z.object({
  category: z.string().min(1, "Category is required"),
  condition: z.string().min(1, "Condition is required"),
})

// Updated time slot schema to match the new structure
export const timeSlotSchema = z.object({
  specificDate: z
    .array(
      z.object({
        date: z.string(),
        timeSlots: z.array(z.string()),
      }),
    )
    .optional(),
  timeSlots: z
    .array(
      z.object({
        day: z.string(),
        timeSlots: z.array(z.string()),
      }),
    )
    .optional(),
})

export const pickupDetailsSchema = z.object({
  province: z.string().min(1, "Province is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
})

// Combined schema for final submission
export const addItemSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").max(100, "Title must be less than 100 characters"),
  weight: z
    .number()
    .min(0, "Weight must be positive")
    .or(
      z
        .string()
        .transform((val) => Number.parseFloat(val))
        .refine((val) => val >= 0, "Weight must be positive"),
    ),
  itemWorth: z
    .number()
    .min(0, "Item worth must be positive")
    .or(
      z
        .string()
        .transform((val) => Number.parseFloat(val))
        .refine((val) => val >= 0, "Item worth must be positive"),
    ),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),
  image: z.any().optional(),
  category: z.string().min(1, "Category is required"),
  condition: z.string().min(1, "Condition is required"),
  specificDate: z
    .array(
      z.object({
        date: z.string(),
        timeSlots: z.array(z.string()),
      }),
    )
    .optional(),
  timeSlots: z
    .array(
      z.object({
        day: z.string(),
        timeSlots: z.array(z.string()),
      }),
    )
    .optional(),
  province: z.string().min(1, "Province is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
})

export type BasicDetailsData = z.infer<typeof basicDetailsSchema>
export type CategoriesData = z.infer<typeof categoriesSchema>
export type TimeSlotData = z.infer<typeof timeSlotSchema>
export type PickupDetailsData = z.infer<typeof pickupDetailsSchema>
export type AddItemData = z.infer<typeof addItemSchema>

export type registerGiverData = z.infer<typeof registerGiverSchema>
export type loginData = z.infer<typeof loginSchema>
export type forgotPasswordData = z.infer<typeof forgotPasswordSchema>
export type resetPasswordData = z.infer<typeof resetPasswordSchema>