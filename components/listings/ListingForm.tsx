"use client"

import { useState, useEffect, useCallback } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Upload, MapPin, Package, Clock, X, PlusCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import {
  basicDetailsSchema,
  categoriesSchema,
  timeSlotSchema,
  pickupDetailsSchema,
  addItemSchema,
  type AddItemData,
} from "@/lib/schema"

// Updated form type to match new schema structure
type FormData = {
  title: string
  weight: string | number
  itemWorth: string | number
  description: string
  image?: File | null
  category: string
  condition: string
  specificDate?: Array<{ date: string; timeSlots: string[] }>
  timeSlots?: Array<{ day: string; timeSlots: string[] }>
  province: string
  zipCode: string
  address: string
}

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useAppState } from "@/hooks/useAppState"
import { DatePicker } from "@/components/DatePicker"
import TimeSlotSelectModal from "../modal/TimeSlotSelect"

const ListingForm = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { itemListingFormData, setItemListingFormData, closeAddItem } = useAppState()

  // Time slot management state
  const [isTimeSlotModalOpen, setIsTimeSlotModalOpen] = useState(false)
  const [selectedDay, setSelectedDay] = useState("")
  const [selectedTimeSlots, setSelectedTimeSlots] = useState<string[]>([])
  const [isViewSlotsModalOpen, setIsViewSlotsModalOpen] = useState(false)
  const [viewSlotsDay, setViewSlotsDay] = useState("")
  const [isSpecificDateModalOpen, setIsSpecificDateModalOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedSpecificTimeSlots, setSelectedSpecificTimeSlots] = useState<string[]>([])

  // Initial days data
  const initialDaysData = [
    { name: "Mondays", timeSlots: [] as string[] },
    { name: "Tuesdays", timeSlots: [] as string[] },
    { name: "Wednesdays", timeSlots: [] as string[] },
    { name: "Thursdays", timeSlots: [] as string[] },
    { name: "Fridays", timeSlots: [] as string[] },
    { name: "Saturdays", timeSlots: [] as string[] },
    { name: "Sundays", timeSlots: [] as string[] },
    { name: "Weekdays", timeSlots: [] as string[] },
    { name: "Weekends", timeSlots: [] as string[] },
  ]

  const [daysData, setDaysData] = useState(initialDaysData)

  // Updated structured data states
  const [structuredTimeSlots, setStructuredTimeSlots] = useState<Array<{ day: string; timeSlots: string[] }>>([])
  const [structuredSpecificDateSlots, setStructuredSpecificDateSlots] = useState<
    Array<{ date: string; timeSlots: string[] }>
  >([])

  // Add a flag to track if initialization has been done
  const [isInitialized, setIsInitialized] = useState(false)

  const steps = [
    { title: "Basic Details", icon: Package, schema: basicDetailsSchema },
    { title: "Categories", icon: Clock, schema: categoriesSchema },
    { title: "Time Slot", icon: Clock, schema: timeSlotSchema },
    { title: "Pickup Details", icon: MapPin, schema: pickupDetailsSchema },
  ]

  const categories = ["Electronics", "Furniture", "Clothing", "Books", "Sports", "Home & Garden", "Other"]
  const availableTimeSlots = [
    "6:00 - 7:00",
    "7:00 - 8:00",
    "8:00 - 9:00",
    "9:00 - 10:00",
    "10:00 - 11:00",
    "11:00 - 12:00",
    "12:00 - 13:00",
    "13:00 - 14:00",
    "14:00 - 15:00",
    "15:00 - 16:00",
    "16:00 - 17:00",
    "17:00 - 18:00",
    "18:00 - 19:00",
    "19:00 - 20:00",
    "20:00 - 21:00",
  ]
  const provinces = [
    "Alberta",
    "British Columbia",
    "Manitoba",
    "New Brunswick",
    "Newfoundland and Labrador",
    "Northwest Territories",
    "Nova Scotia",
    "Nunavut",
    "Ontario",
    "Prince Edward Island",
    "Quebec",
    "Saskatchewan",
    "Yukon",
  ]

  // Helper function to ensure safe form data with correct types
  const getSafeFormData = useCallback((): FormData => ({
    title: typeof itemListingFormData.title === "string" ? itemListingFormData.title : "",
    weight: typeof itemListingFormData.weight === "number" ? itemListingFormData.weight : "",
    itemWorth: typeof itemListingFormData.itemWorth === "number" ? itemListingFormData.itemWorth : "",
    description: typeof itemListingFormData.description === "string" ? itemListingFormData.description : "",
    image: itemListingFormData.image || null,
    category: typeof itemListingFormData.category === "string" ? itemListingFormData.category : "",
    condition: typeof itemListingFormData.condition === "string" ? itemListingFormData.condition : "",
    specificDate: Array.isArray(itemListingFormData.specificDate) ? itemListingFormData.specificDate : [],
    timeSlots: Array.isArray(itemListingFormData.timeSlots) ? itemListingFormData.timeSlots : [],
    province: typeof itemListingFormData.province === "string" ? itemListingFormData.province : "",
    zipCode: typeof itemListingFormData.zipCode === "string" ? itemListingFormData.zipCode : "",
    address: typeof itemListingFormData.address === "string" ? itemListingFormData.address : "",
  }), [itemListingFormData])

  const form = useForm<FormData>({
    resolver: zodResolver(addItemSchema),
    defaultValues: getSafeFormData(),
    mode: "onChange",
  })

  const { handleSubmit, reset, trigger, setValue, control } = form

  // Initialize time slot data from context on component mount - FIXED
  useEffect(() => {
    if (!isInitialized) {
      // Initialize structured time slots
      if (itemListingFormData.timeSlots && Array.isArray(itemListingFormData.timeSlots)) {
        setStructuredTimeSlots(itemListingFormData.timeSlots)

        // Update daysData based on structured time slots
        const updatedDaysData = initialDaysData.map((day) => {
          const matchingSlot = itemListingFormData.timeSlots?.find((slot) => slot.day === day.name)
          return {
            ...day,
            timeSlots: matchingSlot ? matchingSlot.timeSlots : [],
          }
        })
        setDaysData(updatedDaysData)
      }

      // Initialize specific date slots
      if (itemListingFormData.specificDate && Array.isArray(itemListingFormData.specificDate)) {
        setStructuredSpecificDateSlots(itemListingFormData.specificDate)
      }

      setIsInitialized(true)
    }
  }, [isInitialized, itemListingFormData.timeSlots, itemListingFormData.specificDate])

  // Sync time slot changes to context - FIXED to prevent infinite loops
  useEffect(() => {
    if (isInitialized) {
      setItemListingFormData((prev) => ({
        ...prev,
        timeSlots: structuredTimeSlots.length > 0 ? structuredTimeSlots : [],
        specificDate: structuredSpecificDateSlots.length > 0 ? structuredSpecificDateSlots : [],
      }))
    }
  }, [structuredTimeSlots, structuredSpecificDateSlots, setItemListingFormData, isInitialized])

  // Update form values when context data changes - FIXED
  useEffect(() => {
    if (isInitialized) {
      const safeData = getSafeFormData()

      // Update each field individually to ensure type safety
      setValue("title", safeData.title)
      setValue("weight", safeData.weight)
      setValue("itemWorth", safeData.itemWorth)
      setValue("description", safeData.description)
      setValue("image", safeData.image)
      setValue("category", safeData.category)
      setValue("condition", safeData.condition)
      setValue("specificDate", safeData.specificDate)
      setValue("timeSlots", safeData.timeSlots)
      setValue("province", safeData.province)
      setValue("zipCode", safeData.zipCode)
      setValue("address", safeData.address)
    }
  }, [getSafeFormData, setValue, isInitialized])

  // Time slot management functions
  const viewAllSlots = (dayName: string) => {
    setViewSlotsDay(dayName)
    setIsViewSlotsModalOpen(true)
  }

  const removeTimeSlot = (dayIndex: number, slotIndex: number) => {
    const dayName = daysData[dayIndex].name
    const slotToRemove = daysData[dayIndex].timeSlots[slotIndex]

    setDaysData((prev) =>
      prev.map((day, index) =>
        index === dayIndex ? { ...day, timeSlots: day.timeSlots.filter((_, i) => i !== slotIndex) } : day,
      ),
    )

    // Update structured data
    setStructuredTimeSlots((prev) =>
      prev
        .map((item) =>
          item.day === dayName ? { ...item, timeSlots: item.timeSlots.filter((slot) => slot !== slotToRemove) } : item,
        )
        .filter((item) => item.timeSlots.length > 0),
    )
  }

  const removeTimeSlotByName = (dayName: string, slotToRemove: string) => {
    setDaysData((prev) =>
      prev.map((day) =>
        day.name === dayName ? { ...day, timeSlots: day.timeSlots.filter((slot) => slot !== slotToRemove) } : day,
      ),
    )

    // Update structured data
    setStructuredTimeSlots((prev) =>
      prev
        .map((item) =>
          item.day === dayName ? { ...item, timeSlots: item.timeSlots.filter((slot) => slot !== slotToRemove) } : item,
        )
        .filter((item) => item.timeSlots.length > 0),
    )

    const updatedDay = daysData.find((day) => day.name === dayName)
    if (updatedDay && updatedDay.timeSlots.filter((slot) => slot !== slotToRemove).length === 0) {
      setIsViewSlotsModalOpen(false)
    }
  }

  const addTimeSlot = (dayIndex: number) => {
    setSelectedDay(daysData[dayIndex].name)
    setSelectedTimeSlots([])
    setIsTimeSlotModalOpen(true)
  }

  const toggleTimeSlot = (slot: string) => {
    setSelectedTimeSlots((prev) => (prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]))
  }

  const saveTimeSlots = () => {
    const dayIndex = daysData.findIndex((day) => day.name === selectedDay)
    if (dayIndex !== -1) {
      setDaysData((prev) =>
        prev.map((day, index) =>
          index === dayIndex ? { ...day, timeSlots: [...new Set([...day.timeSlots, ...selectedTimeSlots])] } : day,
        ),
      )

      // Update structured data
      setStructuredTimeSlots((prev) => {
        const existingIndex = prev.findIndex((item) => item.day === selectedDay)
        const newTimeSlots = [...new Set([...selectedTimeSlots])]

        if (existingIndex >= 0) {
          return prev.map((item, index) =>
            index === existingIndex ? { ...item, timeSlots: [...new Set([...item.timeSlots, ...newTimeSlots])] } : item,
          )
        } else {
          return [...prev, { day: selectedDay, timeSlots: newTimeSlots }]
        }
      })
    }
    setSelectedTimeSlots([])
    setIsTimeSlotModalOpen(false)
  }

  const openSpecificDateModal = () => {
    setIsSpecificDateModalOpen(true)
    setSelectedSpecificTimeSlots([])
    // Don't reset selectedDate - keep it if already set
  }

  const toggleSpecificTimeSlot = (slot: string) => {
    setSelectedSpecificTimeSlots((prev) => (prev.includes(slot) ? prev.filter((s) => s !== slot) : [...prev, slot]))
  }

  const saveSpecificDateTimeSlots = () => {
    if (selectedDate && selectedSpecificTimeSlots.length > 0) {
      const dateString = selectedDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })

      setStructuredSpecificDateSlots((prev) => {
        const existingIndex = prev.findIndex((item) => item.date === dateString)
        const newTimeSlots = [...new Set([...selectedSpecificTimeSlots])]

        if (existingIndex >= 0) {
          return prev.map((item, index) =>
            index === existingIndex ? { ...item, timeSlots: [...new Set([...item.timeSlots, ...newTimeSlots])] } : item,
          )
        } else {
          return [...prev, { date: dateString, timeSlots: newTimeSlots }]
        }
      })
    }

    setSelectedSpecificTimeSlots([])
    setIsSpecificDateModalOpen(false)
  }

  // Helper function to convert FormData to the expected app state format
  const convertFormDataToAppState = (formData: FormData) => ({
    title: formData.title,
    weight: typeof formData.weight === "string" ? Number.parseFloat(formData.weight) || 0 : formData.weight,
    itemWorth: typeof formData.itemWorth === "string" ? Number.parseFloat(formData.itemWorth) || 0 : formData.itemWorth,
    description: formData.description,
    image: formData.image || null,
    category: formData.category,
    condition: formData.condition,
    specificDate: formData.specificDate,
    timeSlots: formData.timeSlots,
    province: formData.province,
    zipCode: formData.zipCode,
    address: formData.address,
  })

  const validateCurrentStep = async () => {
    let fieldsToValidate: (keyof FormData)[] = []

    switch (currentStep) {
      case 0:
        fieldsToValidate = ["title", "weight", "itemWorth", "description", "image"]
        break
      case 1:
        fieldsToValidate = ["category", "condition"]
        break
      case 2:
        // Custom validation for time slots
        const hasWeeklySlots = structuredTimeSlots.length > 0
        const hasSpecificDateSlots = structuredSpecificDateSlots.length > 0

        if (!hasWeeklySlots && !hasSpecificDateSlots) {
          alert("Please add at least one time slot for weekly availability or select a specific date with time slots.")
          return false
        }

        return true
      case 3:
        fieldsToValidate = ["province", "zipCode", "address"]
        break
    }

    return await trigger(fieldsToValidate)
  }

  const handleNext = async () => {
    const isValid = await validateCurrentStep()

    if (isValid) {
      const currentValues = form.getValues()
      const convertedFormData = convertFormDataToAppState(currentValues)
      const updatedFormData = {
        ...itemListingFormData,
        ...convertedFormData,
        // Ensure time slot data is preserved
        timeSlots: structuredTimeSlots,
        specificDate: structuredSpecificDateSlots,
        image: convertedFormData.image === null ? undefined : convertedFormData.image,
      }
      setItemListingFormData(updatedFormData)

      if (currentStep < steps.length - 1) {
        setCurrentStep((prev) => prev + 1)
      }
    }
  }

  const handlePrevious = () => {
    if (currentStep > 0) {
      const currentValues = form.getValues()
      const convertedFormData = convertFormDataToAppState(currentValues)
      const updatedFormData = {
        ...itemListingFormData,
        ...convertedFormData,
        // Ensure time slot data is preserved
        timeSlots: structuredTimeSlots,
        specificDate: structuredSpecificDateSlots,
      }
      setItemListingFormData({
        ...updatedFormData,
        image: updatedFormData.image === null ? undefined : updatedFormData.image,
      })
      setCurrentStep((prev) => prev - 1)
    }
  }

  const handleFinalSubmit = handleSubmit(async (data) => {
    const convertedData = convertFormDataToAppState(data)

    try {
      const transformedData: AddItemData = {
        title: convertedData.title,
        weight:
          typeof convertedData.weight === "string"
            ? Number.parseFloat(convertedData.weight) || 0
            : convertedData.weight,
        itemWorth:
          typeof convertedData.itemWorth === "string"
            ? Number.parseFloat(convertedData.itemWorth) || 0
            : convertedData.itemWorth,
        description: convertedData.description,
        image: convertedData.image as File,
        category: convertedData.category,
        condition: convertedData.condition,
        // Use structured data for final submission
        specificDate: structuredSpecificDateSlots.length > 0 ? structuredSpecificDateSlots : undefined,
        timeSlots: structuredTimeSlots.length > 0 ? structuredTimeSlots : undefined,
        province: convertedData.province,
        zipCode: convertedData.zipCode,
        address: convertedData.address,
      }

      const validatedData = addItemSchema.parse(transformedData)
      setIsSubmitting(true)

      await new Promise((resolve) => setTimeout(resolve, 2000))

      console.log("Form submitted:", validatedData)
      alert("Form submitted successfully!")

      // Reset everything after successful submission
      const resetData: FormData = {
        title: "",
        weight: "",
        itemWorth: "",
        description: "",
        image: undefined,
        category: "",
        condition: "",
        specificDate: [],
        timeSlots: [],
        province: "",
        zipCode: "",
        address: "",
      }

      setItemListingFormData({
        title: "",
        weight: 0,
        itemWorth: 0,
        description: "",
        image: undefined,
        category: "",
        condition: "",
        specificDate: [],
        timeSlots: [],
        province: "",
        zipCode: "",
        address: "",
      })

      // Reset local time slot state
      setStructuredTimeSlots([])
      setStructuredSpecificDateSlots([])
      setDaysData(initialDaysData)
      setSelectedDate(undefined)
      setIsInitialized(false) // Reset initialization flag

      setCurrentStep(0)
      reset(resetData)
      closeAddItem()
    } catch (err) {
      console.error("Validation error:", err)
      alert("Please check all fields and try again.")
    } finally {
      setIsSubmitting(false)
    }
  })

  const renderStepContent = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="space-y-8">
            <FormField
              control={control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-app-black">Title</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="What item are you giving away?"
                      {...field}
                      value={field.value || ""}
                      className="py-6 rounded-lg shadow-none"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 items-baseline gap-8 md:gap-4">
              <FormField
                control={control}
                name="weight"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-app-black">Weight (KG)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.1"
                        placeholder="0.0"
                        {...field}
                        value={field.value === 0 || field.value === "" ? "" : field.value.toString()}
                        onChange={(e) =>
                          field.onChange(e.target.value === "" ? "" : Number.parseFloat(e.target.value) || "")
                        }
                        className="py-6 rounded-lg shadow-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="itemWorth"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-app-black">Item Worth (€)</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        step="0.01"
                        placeholder="0.00"
                        {...field}
                        value={field.value === 0 || field.value === "" ? "" : field.value.toString()}
                        onChange={(e) =>
                          field.onChange(e.target.value === "" ? "" : Number.parseFloat(e.target.value) || "")
                        }
                        className="py-6 rounded-lg shadow-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-app-black">Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Provide details about the item, including brand, age, dimensions, etc."
                      rows={6}
                      {...field}
                      value={field.value || ""}
                      className="shadow-none h-44"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <div
                      className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-gray-400 transition-colors cursor-pointer"
                      onDragOver={(e) => {
                        e.preventDefault()
                        e.currentTarget.classList.add("border-blue-400", "bg-blue-50")
                      }}
                      onDragLeave={(e) => {
                        e.preventDefault()
                        e.currentTarget.classList.remove("border-blue-400", "bg-blue-50")
                      }}
                      onDrop={(e) => {
                        e.preventDefault()
                        e.currentTarget.classList.remove("border-blue-400", "bg-blue-50")
                        const files = e.dataTransfer.files
                        if (files && files[0] && files[0].type.startsWith("image/")) {
                          field.onChange(files[0])
                        }
                      }}
                      onClick={() => document.getElementById("image-upload")?.click()}
                    >
                      <Upload className="mx-auto h-6 w-6 text-gray-400" />
                      <div className="mt-4">
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            const file = e.target.files?.[0]
                            if (file) field.onChange(file)
                          }}
                          className="hidden"
                          id="image-upload"
                        />
                        <p className="text-app-black font-medium mb-2 sm:block hidden">
                          Drag and drop files here, or click to browse
                        </p>
                        <p className="text-app-black font-medium mb-2 sm:hidden block">Tap to upload file</p>
                        <p className="mt-1 text-xs text-gray-500">
                          Upload clear photos of your item (up to 3) PNG, JPG, GIF up to 10MB
                        </p>
                        {field.value && (
                          <p className="mt-2 text-sm text-green-600 font-medium">
                            Selected: {(field.value as File)?.name}
                          </p>
                        )}
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 1:
        return (
          <div className="space-y-8">
            <FormField
              control={control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-app-black">Category</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || ""}>
                    <FormControl>
                      <SelectTrigger className="w-full py-6 shadow-none">
                        <SelectValue placeholder="Select a category" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="shadow-xl border-none px-1 py-2">
                      {categories.map((cat) => (
                        <SelectItem key={cat} value={cat} className="py-3 px-4">
                          {cat}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="condition"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-app-black">Condition</FormLabel>
                  <Select onValueChange={field.onChange} value={field.value || ""}>
                    <FormControl>
                      <SelectTrigger className="w-full py-6 shadow-none">
                        <SelectValue placeholder="Select condition" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="shadow-xl border-none px-1 py-2">
                      {["New", "Good", "Fair", "Worn", "Needs repair"].map((condition) => (
                        <SelectItem key={condition} value={condition} className="py-3 px-4">
                          {condition}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        )

      case 2:
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h4 className="font-semibold text-md">Add Availability</h4>
              <button
                className="cursor-pointer text-sm text-[#0D9488] underline font-semibold"
                onClick={openSpecificDateModal}
                type="button"
              >
                Select specific date
              </button>
            </div>

            <div className="space-y-4">
              {daysData.map((day, dayIndex) => (
                <div key={day.name} className="border rounded-xl p-4 h-14 flex flex-row items-center justify-between">
                  <span className="text-gray-700 text-sm font-medium w-24">{day.name}</span>

                  <div className="flex-1 flex items-center justify-end space-x-4">
                    {day.timeSlots.length > 0 && (
                      <div className="flex items-center space-x-2">
                        {day.timeSlots.slice(0, 2).map((slot, slotIndex) => (
                          <Badge
                            key={slotIndex}
                            variant="secondary"
                            className="bg-gray-50 rounded-full text-gray-700 hover:bg-gray-200 text-xs px-3 py-2"
                          >
                            {slot}
                            <button
                              onClick={() => removeTimeSlot(dayIndex, slotIndex)}
                              className="ml-2 hover:text-gray-900"
                              type="button"
                            >
                              <X className="h-4 w-4" />
                            </button>
                          </Badge>
                        ))}
                        {day.timeSlots.length > 2 && (
                          <button
                            className="text-gray-500 hover:text-gray-700 text-sm"
                            onClick={() => viewAllSlots(day.name)}
                            type="button"
                          >
                            ({day.timeSlots.length - 2} more)
                          </button>
                        )}
                      </div>
                    )}
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => addTimeSlot(dayIndex)}
                      className="hover:bg-gray-50 cursor-pointer w-8 h-8 flex items-center justify-center rounded-lg"
                      type="button"
                    >
                      <PlusCircle className="h-5 w-5 text-gray-600" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>

            {/* Show specific date slots if any */}
            {structuredSpecificDateSlots.length > 0 && (
              <div className="space-y-3">
                <h5 className="font-medium text-gray-700">Specific Dates:</h5>
                {structuredSpecificDateSlots.map((dateSlot, dateIndex) => (
                  <div key={dateIndex} className="border rounded-lg p-4">
                    <h6 className="font-medium text-gray-700 mb-2">{dateSlot.date}</h6>
                    <div className="flex flex-wrap gap-2">
                      {dateSlot.timeSlots.map((slot, slotIndex) => (
                        <Badge
                          key={slotIndex}
                          variant="secondary"
                          className="bg-gray-50 text-gray-700 hover:bg-gray-200 px-3 py-2"
                        >
                          {slot}
                          <button
                            onClick={() => {
                              // Remove specific time slot for this date
                              setStructuredSpecificDateSlots((prev) =>
                                prev
                                  .map((item) =>
                                    item.date === dateSlot.date
                                      ? { ...item, timeSlots: item.timeSlots.filter((s) => s !== slot) }
                                      : item,
                                  )
                                  .filter((item) => item.timeSlots.length > 0),
                              )
                            }}
                            className="ml-2 hover:text-gray-900"
                            type="button"
                          >
                            <X className="h-3 w-3" />
                          </button>
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Show validation message if no slots are selected */}
            {daysData.every((day) => day.timeSlots.length === 0) && structuredSpecificDateSlots.length === 0 && (
              <div className="text-sm text-[#2563EB] bg-[#E7EFF9] p-3 rounded-lg border border-[#D4E6FF]">
                Please add at least one time slot to continue.
              </div>
            )}
          </div>
        )

      case 3:
        return (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 items-baseline gap-6">
              <FormField
                control={control}
                name="province"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-app-black">Province</FormLabel>
                    <Select onValueChange={field.onChange} value={field.value || ""}>
                      <FormControl>
                        <SelectTrigger className="py-6 w-full shadow-none">
                          <SelectValue placeholder="Select a province" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                        {provinces.map((province) => (
                          <SelectItem key={province} value={province} className="py-3 px-4">
                            {province}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={control}
                name="zipCode"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-app-black">Zip Code</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="000-000"
                        {...field}
                        value={field.value || ""}
                        className="py-6 rounded-lg shadow-none"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-app-black">Address</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="e.g 3B Oakland, Apartment 4"
                      {...field}
                      value={field.value || ""}
                      className="shadow-none py-6"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="px-6 py-8 bg-[#E7EFF9] rounded-lg border border-[#D4E6FF]">
              <h4 className="text-[#2563EB] font-semibold mb-4">Pickup Safety Tips</h4>
              <ul className="pl-6 text-sm grid gap-1 text-[#2563EB] list-disc pl-5 space-y-1">
                <li>Meet in a public place when possible</li>
                <li>Consider contactless pickup options</li>
                <li>Update your availability regularly</li>
              </ul>
            </div>
          </div>
        )

      default:
        return null
    }
  }

  return (
    <>
      {/* Mobile Header */}
      <div className="md:hidden px-4 flex items-center m-0 justify-between py-4 border-b bg-white sticky top-0 z-10">
        <div className="flex items-center space-x-6">
          <button onClick={() => (currentStep === 0 ? closeAddItem() : handlePrevious())} className="cursor-pointer flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.99982 11.9998H19.9998"
                  stroke="#626262"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7"
                  stroke="#626262"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          <h4 className="text-lg font-semibold text-gray-900">{steps[currentStep].title}</h4>
        </div>
        {/* Mobile Progress Indicators */}
        <div className="flex items-center justify-center space-x-2">
          {steps.map((_, index) => (
            <div
              key={index}
              className={`w-5 h-2 transition-all rounded-xl duration-300 ${index <= currentStep ? "bg-[#0D9488]" : "bg-gray-300"
                }`}
            />
          ))}
        </div>
      </div>




      {/* Desktop Title */}
      <h4 className="text-xl text-app-black font-semibold hidden md:block">List an Item</h4>

      <div className="border-0 sm:border rounded-none sm:rounded-lg pb-4">
        {/* Desktop Tab Navigation */}
        <div className="hidden md:block">
          <div className="flex border-b border-gray-200">
            {steps.map((step, index) => {
              const isCompleted = index < currentStep
              const isCurrent = index === currentStep
              return (
                <div
                  key={index}
                  className={`${index === 0 ? "rounded-tl-lg border-l" : `${index === 3 && "rounded-tr-lg"}`} border-r border-t border-b flex-1 px-4 py-3 text-center transition-all duration-300 ${isCompleted || isCurrent
                    ? "border-[#85C9C3] bg-[#E6F8F4] text-[#0D9488] font-medium"
                    : "border-transparent text-gray-500 hover:text-gray-700"
                    }`}
                >
                  <span className="text-sm">{step.title}</span>
                </div>
              )
            })}
          </div>
        </div>

        {/* Form Content */}
        <Form {...form}>
          <div className="space-y-6 flex-1">
            <div className="h-full px-4 sm:px-6 py-8 m-0  sm:max-h-96 lg:max-h-86 overflow-auto scrollbar-hide">
              {renderStepContent()}
            </div>

            {/* Navigation Buttons */}
            <div className="justify-end pt-6 border-0 md:border-t px-4 md:px-6">
              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={handlePrevious}
                  disabled={currentStep === 0}
                  variant="secondary"
                  className={`${currentStep >= 1 && "cursor-pointer"} flex items-center py-6 shadow-none hidden sm:flex`}
                >
                  Back
                </Button>

                {currentStep < steps.length - 1 ? (
                  <Button
                    variant="primary"
                    type="button"
                    onClick={handleNext}
                    className="py-6 w-full sm:w-auto bg-[#0D9488] hover:bg-[#0D9488]/90"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={handleFinalSubmit}
                    disabled={isSubmitting}
                    className="py-6 w-full sm:w-auto bg-[#0D9488] hover:bg-[#0D9488]/90"
                  >
                    {isSubmitting ? "Listing..." : "List Item"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Form>

        {/* All the existing modals remain the same */}
        {/* Time Slot Selection Modal */}
        <TimeSlotSelectModal open={isTimeSlotModalOpen} onOpenChange={setIsTimeSlotModalOpen}>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsTimeSlotModalOpen(false)} className="cursor-pointer flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.99982 11.9998H19.9998"
                  stroke="#626262"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7"
                  stroke="#626262"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h4 className="text-lg font-semibold">Set {selectedDay} Availability</h4>
          </div>

          <div className="py-4">
            <h4 className="text-sm font-medium text-gray-700 py-4 text-center bg-gray-50 rounded-lg mb-6">
              Available Time Slots
            </h4>
            <div className="grid grid-cols-2 gap-2 max-h-60 scrollbar-hide overflow-y-auto">
              {availableTimeSlots.map((slot, index) => {
                const isSelected = selectedTimeSlots.includes(slot)
                const isAlreadyAdded = daysData.find((day) => day.name === selectedDay)?.timeSlots.includes(slot)

                return (
                  <Button
                    key={index}
                    variant={isSelected ? "primary" : "outline"}
                    className={`text-sm py-6 px-3 shadow-none ${isSelected
                      ? "bg-[#E6F8F4] hover:bg-[#E6F8F4] text-[#0D9488] border-[#0D9488] border"
                      : "hover:bg-[#E6F8F4] hover:text-[#0D9488] hover:border-[#0D9488]"
                      } ${isAlreadyAdded ? "opacity-50 cursor-not-allowed" : ""}`}
                    onClick={() => !isAlreadyAdded && toggleTimeSlot(slot)}
                    disabled={isAlreadyAdded}
                    type="button"
                  >
                    <div className="flex items-center justify-center space-x-2">
                      <span>{slot}</span>
                      {isAlreadyAdded && <span className="text-xs text-gray-500">(Added)</span>}
                    </div>
                  </Button>
                )
              })}
            </div>
          </div>

          <div className="w-full pt-4">
            <Button
              variant="primary"
              className=" disabled:opacity-50 disabled:cursor-not-allowed w-full py-6"
              onClick={saveTimeSlots}
              disabled={selectedTimeSlots.length === 0}
              type="button"
            >
              Done
            </Button>
          </div>
        </TimeSlotSelectModal>

        {/* View All Slots Modal */}
        <TimeSlotSelectModal open={isViewSlotsModalOpen} onOpenChange={setIsViewSlotsModalOpen}>
          <div className="flex items-center gap-4">
            <button onClick={() => setIsViewSlotsModalOpen(false)} className="cursor-pointer flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.99982 11.9998H19.9998"
                  stroke="#626262"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7"
                  stroke="#626262"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h4 className="text-lg font-semibold">{viewSlotsDay} - All Time Slots</h4>
          </div>

          <div className="py-4">
            <div className="grid grid-cols-3 gap-4 m-0 scrollbar-hide items-center justify-center max-h-60 overflow-y-auto">
              {daysData
                .find((day) => day.name === viewSlotsDay)
                ?.timeSlots.map((slot, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="w-full bg-gray-100 rounded-full py-4 text-gray-700 px-4 flex items-center justify-between"
                  >
                    <span>{slot}</span>
                    <button
                      onClick={() => removeTimeSlotByName(viewSlotsDay, slot)}
                      className="ml-2 hover:text-gray-600 text-gray-500"
                      type="button"
                    >
                      <X className="h-4 w-4" />
                    </button>
                  </Badge>
                )) || []}
            </div>
            {daysData.find((day) => day.name === viewSlotsDay)?.timeSlots.length === 0 && (
              <p className="text-gray-500 text-center py-4">No time slots added yet.</p>
            )}
          </div>

          <div className="flex justify-end pt-4">
            <Button
              className="bg-[#0D9488] hover:bg-[#0D9488]/90 py-6 w-full"
              onClick={() => setIsViewSlotsModalOpen(false)}
              type="button"
            >
              Done
            </Button>
          </div>
        </TimeSlotSelectModal>

        {/* Specific Date Modal */}
        <TimeSlotSelectModal open={isSpecificDateModalOpen} onOpenChange={setIsSpecificDateModalOpen}>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsSpecificDateModalOpen(false)}
              className="cursor-pointer flex items-center gap-2"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3.99982 11.9998H19.9998"
                  stroke="#626262"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M8.99963 17C8.99963 17 3.99968 13.3176 3.99966 12C3.99965 10.6824 8.99966 7 8.99966 7"
                  stroke="#626262"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <h4 className="text-lg font-semibold">Select Specific Date & Time</h4>
          </div>

          <div className="py-4 space-y-6">
            {/* Date Picker */}
            <div>
              <h4 className="text-sm font-medium text-gray-700 mb-3">Choose Date</h4>
              <DatePicker
                date={selectedDate}
                onSelect={setSelectedDate}
                placeholder="Select a date"
                disablePastDates={true}
              />
            </div>

            {/* Time Slots - Only show when date is selected */}

            <div>
              <h4 className="text-sm font-medium text-gray-700 py-4 text-center bg-gray-50 rounded-lg mb-6">
                Available Time Slots
              </h4>
              <div className="grid grid-cols-2 gap-2 max-h-44 overflow-y-auto scrollbar-hide">
                {availableTimeSlots.map((slot, index) => {
                  const isSelected = selectedSpecificTimeSlots.includes(slot)

                  // Check if this time slot is already added for the selected date
                  const selectedDateString = selectedDate?.toLocaleDateString("en-US", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })

                  const isAlreadyAdded =
                    structuredSpecificDateSlots
                      .find((item) => item.date === selectedDateString)
                      ?.timeSlots.includes(slot) || false

                  return (
                    <Button
                      key={index}
                      variant={isSelected ? "default" : "outline"}
                      className={`text-sm py-6 px-3 shadow-none ${isSelected
                        ? "bg-[#E6F8F4] hover:bg-[#E6F8F4] text-[#0D9488] border-[#0D9488] border"
                        : "hover:bg-[#E6F8F4] hover:text-[#0D9488] hover:border-[#0D9488]"
                        } ${isAlreadyAdded ? "opacity-50 cursor-not-allowed" : ""}`}
                      onClick={() => !isAlreadyAdded && toggleSpecificTimeSlot(slot)}
                      disabled={isAlreadyAdded}
                      type="button"
                    >
                      <div className="flex items-center justify-center space-x-2">
                        <span>{slot}</span>
                        {isAlreadyAdded && <span className="text-xs text-gray-500">(Added)</span>}
                      </div>
                    </Button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2 pt-4">
            <Button
              variant="primary"
              className="w-full py-6"
              onClick={saveSpecificDateTimeSlots}
              disabled={!selectedDate || selectedSpecificTimeSlots.length === 0}
              type="button"
            >
              Add Time Slots
            </Button>
          </div>
        </TimeSlotSelectModal>
      </div>
    </>
  )
}

export default ListingForm
