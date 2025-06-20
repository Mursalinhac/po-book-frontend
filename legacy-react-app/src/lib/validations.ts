import { z } from "zod"

// Customer Information Schema
export const customerInfoSchema = z.object({
  firstName: z.string()
    .min(1, "Customer name is required")
    .min(2, "Customer name must be at least 2 characters")
    .max(50, "Customer name must be less than 50 characters"),
  
  stock: z.string()
    .min(1, "Stock number is required")
    .max(20, "Stock number must be less than 20 characters"),
  
  salesperson: z.string()
    .min(1, "Salesperson is required")
    .max(50, "Salesperson name must be less than 50 characters"),
  
  address1: z.string()
    .min(1, "Address is required")
    .max(100, "Address must be less than 100 characters"),
  
  city: z.string()
    .min(1, "City is required")
    .max(50, "City must be less than 50 characters"),
  
  state: z.string()
    .min(1, "State is required")
    .max(50, "State must be less than 50 characters"),
  
  zipcode: z.string()
    .min(5, "Zip code must be at least 5 digits")
    .max(10, "Zip code must be less than 10 digits")
    .regex(/^\d{5}(-\d{4})?$/, "Invalid zip code format"),
  
  number: z.string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number must be less than 15 digits")
    .regex(/^\d{10,15}$/, "Phone number must contain only digits"),
  
  email: z.string()
    .min(1, "Email is required")
    .email("Invalid email address")
    .max(100, "Email must be less than 100 characters"),
})

// Trade Information Schema
export const tradeInfoSchema = z.object({
  year: z.string()
    .min(1, "Year is required")
    .regex(/^\d{4}$/, "Year must be 4 digits")
    .refine((val) => {
      const year = parseInt(val)
      const currentYear = new Date().getFullYear()
      return year >= 1900 && year <= currentYear + 1
    }, "Year must be between 1900 and next year"),

  make: z.string()
    .min(1, "Make is required")
    .max(50, "Make must be less than 50 characters"),

  model: z.string()
    .min(1, "Model is required")
    .max(50, "Model must be less than 50 characters"),

  color: z.string()
    .min(1, "Color is required")
    .max(50, "Color must be less than 50 characters"),

  vin: z.string()
    .min(17, "VIN must be exactly 17 characters")
    .max(17, "VIN must be exactly 17 characters")
    .regex(/^[A-HJ-NPR-Z0-9]{17}$/, "Invalid VIN format"),

  miles: z.string()
    .min(1, "Mileage is required")
    .regex(/^\d+$/, "Mileage must be a number")
    .refine((val) => {
      const miles = parseInt(val)
      return miles >= 0 && miles <= 999999
    }, "Mileage must be between 0 and 999,999"),

  tradeValue: z.string()
    .min(1, "Trade value is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Trade value must be a valid amount")
    .refine((val) => {
      const value = parseFloat(val)
      return value >= 0 && value <= 999999.99
    }, "Trade value must be between $0 and $999,999.99"),

  balanceOwed: z.string()
    .min(1, "Balance owed is required")
    .regex(/^\d+(\.\d{1,2})?$/, "Balance owed must be a valid amount")
    .refine((val) => {
      const value = parseFloat(val)
      return value >= 0 && value <= 999999.99
    }, "Balance owed must be between $0 and $999,999.99"),

  netTrade: z.string()
    .optional()
    .refine((val) => {
      if (!val) return true
      const value = parseFloat(val)
      return !isNaN(value) && value >= -999999.99 && value <= 999999.99
    }, "Net trade must be a valid amount"),

  balanceOwedTo: z.string()
    .max(100, "Balance owed to must be less than 100 characters")
    .optional(),

  accountNumber: z.string()
    .min(1, "Account number is required")
    .max(50, "Account number must be less than 50 characters"),

  infoFrom: z.string()
    .min(1, "Info from is required")
    .max(100, "Info from must be less than 100 characters"),

  goodWill: z.string()
    .optional()
    .refine((val) => {
      if (!val) return true
      const value = parseFloat(val)
      return !isNaN(value) && value >= 0 && value <= 999999.99
    }, "Good will must be a valid amount"),
})

// Type exports for use in components
export type CustomerInfoFormData = z.infer<typeof customerInfoSchema>
export type TradeInfoFormData = z.infer<typeof tradeInfoSchema>
