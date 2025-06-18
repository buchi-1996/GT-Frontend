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


// Helper function for number validation that handles both string and number inputs
const positiveNumberSchema = (fieldName: string, minValue: number = 0.01) =>
  z.union([
    z.number().min(minValue, `${fieldName} must be at least ${minValue}`),
    z
      .string()
      .min(1, `${fieldName} is required`)
      .transform((val) => {
        const parsed = parseFloat(val)
        if (isNaN(parsed)) {
          throw new Error(`${fieldName} must be a valid number`)
        }
        return parsed
      })
      .refine((val) => val >= minValue, `${fieldName} must be at least ${minValue}`)
  ])

// Image validation helper
const imageSchema = z
  .any()
  .refine((file) => {
    if (!file) return false
    return file instanceof File
  }, "Image is required")
  .refine((file) => {
    if (!file || !(file instanceof File)) return false
    return file.type.startsWith('image/')
  }, "File must be an image")
  .refine((file) => {
    if (!file || !(file instanceof File)) return false
    return file.size <= 10 * 1024 * 1024 // 10MB
  }, "Image must be less than 10MB")

export const basicDetailsSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").max(100, "Title must be less than 100 characters"),
  weight: positiveNumberSchema("Weight", 0.1),
  itemWorth: positiveNumberSchema("Item worth", 1),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),
  image: imageSchema,
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
}).refine(
  (data) => {
    // At least one of specificDate or timeSlots must have content
    const hasSpecificDate = data.specificDate && data.specificDate.length > 0
    const hasTimeSlots = data.timeSlots && data.timeSlots.length > 0
    return hasSpecificDate || hasTimeSlots
  },
  {
    message: "Please add at least one time slot for weekly availability or select a specific date with time slots.",
  }
)

export const pickupDetailsSchema = z.object({
  province: z.string().min(1, "Province is required"),
  zipCode: z.string().min(1, "Zip code is required"),
  address: z.string().min(5, "Address must be at least 5 characters"),
})

// Combined schema for final submission - with more flexible image validation
export const addItemSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters").max(100, "Title must be less than 100 characters"),
  weight: positiveNumberSchema("Weight", 0.1),
  itemWorth: positiveNumberSchema("Item worth", 0.01),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(500, "Description must be less than 500 characters"),
  // For final submission, image should be required but allow File type
  image: z
    .any()
    .refine((file) => {
      if (!file) return false
      return file instanceof File
    }, "Image is required")
    .refine((file) => {
      if (!file || !(file instanceof File)) return false
      return file.type.startsWith('image/')
    }, "File must be an image"),
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
}).refine(
  (data) => {
    // At least one of specificDate or timeSlots must have content
    const hasSpecificDate = data.specificDate && data.specificDate.length > 0
    const hasTimeSlots = data.timeSlots && data.timeSlots.length > 0
    return hasSpecificDate || hasTimeSlots
  },
  {
    message: "Please add at least one time slot for weekly availability or select a specific date with time slots.",
    path: ["timeSlots"], // This will show the error on the timeSlots field
  }
)

export type BasicDetailsData = z.infer<typeof basicDetailsSchema>
export type CategoriesData = z.infer<typeof categoriesSchema>
export type TimeSlotData = z.infer<typeof timeSlotSchema>
export type PickupDetailsData = z.infer<typeof pickupDetailsSchema>
export type AddItemData = z.infer<typeof addItemSchema>

export type registerGiverData = z.infer<typeof registerGiverSchema>
export type loginData = z.infer<typeof loginSchema>
export type forgotPasswordData = z.infer<typeof forgotPasswordSchema>
export type resetPasswordData = z.infer<typeof resetPasswordSchema>