"use client"

import React, { useCallback, useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Trash2, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import Image from "next/image";
import { Plus } from 'lucide-react';
import { DatePicker } from "../DatePicker";
import { useMediaQuery } from "@/hooks/use-media-query";
import { itemListingSchema, ItemListingSchemaData, ListedItem } from "@/lib/schema";
import ResponsiveModal from "../modal/ResponsiveModal";
import { conditionOptions } from "@/lib/data"
import { Switch } from "../ui/switch"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { toast } from "sonner"
import { Label } from "../ui/label"
import { useAppDispatch, useAppSelector } from "@/hooks/redux-hooks"
import { setListedItems } from "@/redux/slices/listingSlice"
import { showItemListingModal } from "@/redux/slices/modalSlice"

// Type definitions
type DayFull = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

interface TimeSlot {
    start: string;
    end: string;
}


interface DaySchedule {
    enabled: boolean
    slots: TimeSlot[]
}


interface WeeklySchedule {
    day: DayFull;
    timeSlots: TimeSlot[];
}

interface CustomDate {
    date: Date;
    timeSlots: TimeSlot[];
}

interface Availability {
    weeklySchedule: WeeklySchedule[];
    customDates: CustomDate[];
}

interface CustomDateEntry {
    date: string
    slots: TimeSlot[]
}



interface MultiStepFormProps {
    isEditMode?: boolean;
    itemToEdit?: ListedItem;
}




// Zod schema


const categories = ["Electronics", "Furniture", "Clothing", "Books", "Sports", "Home & Garden"]
const colors = ["red", "blue", "green", "yellow", "black", "white", "gray", "brown", "orange", "purple", "pink", "multicolor"]
const provinces = [
    "Drenthe",
    "Flevoland",
    "Friesland",
    "Gelderland",
    "Groningen",
    "Limburg",
    "Noord-Brabant",
    "Noord-Holland",
    "Overijssel",
    "Utrecht",
    "Zeeland",
    "Zuid-Holland",
];

const timeOptions = [
    "8:00 am",
    "9:00 am",
    "10:00 am",
    "11:00 am",
    "12:00 pm",
    "1:00 pm",
    "2:00 pm",
    "3:00 pm",
    "4:00 pm",
    "5:00 pm",
    "6:00 pm",
]

interface StepsObject {
    id: number;
    title: string
    fields: string[]
}

const steps: StepsObject[] = [
    { id: 1, title: "Basic Details", fields: ["title", "weight", "itemWorth", "itemColor", "description", "images"] },
    { id: 2, title: "Categories", fields: ["category", "condition"] },
    { id: 3, title: "Time Slot", fields: ["availability"] },
    { id: 4, title: "Pickup Details", fields: ["province", "postCode", "address"] }
]

const MultiStepForm = ({ itemToEdit }: MultiStepFormProps) => {
    const {listedItems, isEditMode} = useAppSelector((state) => state.listing)

    const dispatch = useAppDispatch()

    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    // Availability state
    const [availabilityType, setAvailabilityType] = useState("weekly")
    const [customDates, setCustomDates] = useState<CustomDateEntry[]>([])


    const [schedule, setSchedule] = useState<Record<string, DaySchedule>>({
        Monday: {
            enabled: true,
            slots: [
                { start: "9:00 am", end: "5:00 pm" },
            ],
        },
        Tuesday: { enabled: true, slots: [{ start: "8:00 am", end: "5:00 pm" }] },
        Wednesday: { enabled: true, slots: [{ start: "9:00 am", end: "5:00 pm" }] },
        Thursday: { enabled: true, slots: [{ start: "9:00 am", end: "5:00 pm" }] },
        Friday: { enabled: true, slots: [{ start: "9:00 am", end: "5:00 pm" }] },
        Saturday: { enabled: false, slots: [{ start: "9:00 am", end: "5:00 pm" }] },
        Sunday: { enabled: false, slots: [{ start: "9:00 am", end: "5:00 pm" }] },
    })








    const toggleDay = (day: string) => {
        setSchedule((prev) => ({
            ...prev,
            [day]: { ...prev[day], enabled: !prev[day].enabled },
        }))
    }


    const addTimeSlot = (day: string) => {
        setSchedule((prev) => ({
            ...prev,
            [day]: {
                ...prev[day],
                slots: [...prev[day].slots, { start: "9:00 am", end: "5:00 pm" }],
            },
        }))

    }

    const removeTimeSlot = (day: string, index: number) => {
        setSchedule((prev) => ({
            ...prev,
            [day]: {
                ...prev[day],
                slots: prev[day].slots.filter((_, i) => i !== index),
            },
        }))

        
    }


    const updateTimeSlot = (day: string, slotIndex: number, field: "start" | "end", value: string) => {
        setSchedule((prev) => ({
            ...prev,
            [day]: {
                ...prev[day],
                slots: prev[day].slots.map((slot, i) => (i === slotIndex ? { ...slot, [field]: value } : slot)),
            },
        }))
        
    }


    const addCustomTimeSlot = (dateIndex: number) => {
        setCustomDates((prev) =>
            prev.map((entry, i) =>
                i === dateIndex ? { ...entry, slots: [...entry.slots, { start: "9:00 am", end: "5:00 pm" }] } : entry,
            ),
        )
     
    }


    const removeCustomTimeSlot = (dateIndex: number, slotIndex: number) => {
        setCustomDates((prev) =>
            prev.map((entry, i) =>
                i === dateIndex ? { ...entry, slots: entry.slots.filter((_, si) => si !== slotIndex) } : entry,
            ),
        )
   
    }


    const updateCustomTimeSlot = (dateIndex: number, slotIndex: number, field: "start" | "end", value: string) => {
        setCustomDates((prev) =>
            prev.map((entry, i) =>
                i === dateIndex
                    ? {
                        ...entry,
                        slots: entry.slots.map((slot, si) => (si === slotIndex ? { ...slot, [field]: value } : slot)),
                    }
                    : entry,
            ),
        )
    }


    const removeCustomDate = (dateIndex: number) => {
        setCustomDates((prev) => prev.filter((_, i) => i !== dateIndex))

    }

    const handleDateSelect = (selectedDate: Date | undefined) => {
        if (selectedDate) {
            const formattedDate = selectedDate.toLocaleDateString("en-GB") // DD/MM/YYYY format
            const newCustomDate: CustomDateEntry = {
                date: formattedDate,
                slots: [{ start: "9:00 am", end: "5:00 pm" }], // Default time slot when date is selected
            }
            setCustomDates((prev) => [...prev, newCustomDate])
        }
    }

    // Get availability data in required format
    const getAvailabilityData = useCallback((): Availability => {
        const availability: Availability = {
            weeklySchedule: [],
            customDates: []
        }

        const weeklySchedule: WeeklySchedule[] = []
        Object.entries(schedule).forEach(([dayName, daySchedule]) => {
            if (daySchedule.enabled && daySchedule.slots.length > 0) {
                weeklySchedule.push({
                    day: dayName.toLowerCase() as WeeklySchedule["day"],
                    timeSlots: daySchedule.slots,
                })
            }
        })

        if (weeklySchedule.length > 0) {
            availability.weeklySchedule = weeklySchedule
        }

        if (customDates.length > 0) {
            const customDatesData: CustomDate[] = customDates.map((entry) => ({
                date: new Date(entry.date.split("/").reverse().join("-")), // Convert DD/MM/YYYY to Date
                timeSlots: entry.slots,
            }))
            availability.customDates = customDatesData
        }

        return availability
    }, [schedule, customDates])


    const getDefaultValues = () => {
        if (isEditMode && itemToEdit) {
            return {
                title: itemToEdit.title || "",
                description: itemToEdit.description || "",
                weight: itemToEdit.weight || 0,
                itemWorth: itemToEdit.itemWorth || 0,
                itemColor: itemToEdit.itemColor || undefined,
                category: itemToEdit.category || "",
                condition: itemToEdit.condition || "",
                availability: itemToEdit.availability || {
                    weeklySchedule: [],
                    customDates: []
                },
                images: [], // New images will be handled separately
                province: itemToEdit.province || "",
                postCode: itemToEdit.postCode || "",
                address: itemToEdit.address || ""
            };
        }

        return {
            title: "",
            description: "",
            weight: undefined,
            itemWorth: undefined,
            itemColor: undefined,
            category: "",
            condition: "",
            availability: {
                weeklySchedule: [] as WeeklySchedule[],
                customDates: [] as CustomDate[]
            },
            images: [],
            province: "",
            postCode: "",
            address: ""
        };
    };


    const form = useForm<ItemListingSchemaData>({
        mode: "onChange",
        resolver: zodResolver(itemListingSchema),
        defaultValues: getDefaultValues()
    });





    const handleConfirmSubmit = () => {
        setShowConfirmModal(true)
    }


    const handleSuccessClose = () => {
        setShowSuccessModal(false)
        dispatch(showItemListingModal(false))
    }


    const handleFinalSubmit = async () => {
        // Update form data with current availability state

        const data = form.getValues()

        setIsSubmitting(true)
        setShowConfirmModal(false)

        // Get current availability data and update form
        const currentAvailabilityData = getAvailabilityData();

        await new Promise((resolve) => setTimeout(resolve, 2000))

        const imageUrls = data.images.map((file) => URL.createObjectURL(file))
        const finalData = {
            ...data,
            id: Date.now().toString(),
            imageUrls,
            status: "under-review" as const,
            availability: currentAvailabilityData
        };



        dispatch(setListedItems([...listedItems, finalData]))
        setShowSuccessModal(true)
        console.log('Form submitted:', finalData);
    }


    const handleSaveAsDraft = () => {
        const data = form.getValues()
        // Get current availability data and update form
        const currentAvailabilityData = getAvailabilityData();
        const imageUrls = data.images.map((file) => URL.createObjectURL(file))
        const finalData = {
            ...data,
            id: Date.now().toString(),
            imageUrls,
            status: "draft" as const,
            availability: currentAvailabilityData
        };
        dispatch(setListedItems([...listedItems, finalData]))
        setShowConfirmModal(false)
        dispatch(showItemListingModal(false))
        console.log('Form submitted:', finalData);
    }




    // Helper function to convert time strings to minutes for comparison
    const convertTimeToMinutes = (timeString: string): number => {
        const [time, period] = timeString.toLowerCase().split(' ');
        const [hoursStr, minutesStr = '0'] = time.split(':');
        const hours = parseInt(hoursStr, 10);
        const minutes = parseInt(minutesStr, 10);

        let totalMinutes = hours * 60 + minutes;

        // Handle AM/PM conversion
        if (period === 'pm' && hours !== 12) {
            totalMinutes += 12 * 60; // Add 12 hours for PM (except 12 PM)
        } else if (period === 'am' && hours === 12) {
            totalMinutes = minutes; // 12 AM is actually 0 hours
        }

        return totalMinutes;
    };

    // Helper function to check for duplicate time slots
    const checkDuplicateSlots = (slots: TimeSlot[]): boolean => {
        const slotStrings = slots.map(slot => `${slot.start}-${slot.end}`);
        const uniqueSlots = new Set(slotStrings);
        return slotStrings.length !== uniqueSlots.size;
    };
    // Updated handleNext function with comprehensive validation
    const handleNext = React.useCallback(async () => {
        const fields = steps[currentStep - 1].fields;
        console.log(fields);

        // Update form with current availability
        const currentAvailabilityData = getAvailabilityData();
        form.setValue('availability', currentAvailabilityData);

        if (currentStep === 3) {
            // Check if either weekly schedule or custom dates have time slots
            if (currentAvailabilityData.weeklySchedule.length === 0 && currentAvailabilityData.customDates.length === 0) {
                toast.error("Please add at least one availability time slot", {
                    id: "add-time-slot"
                });
                return;
            }

            // Validate weekly schedule time slots (from schedule state)
            for (const [dayName, daySchedule] of Object.entries(schedule)) {
                // Only validate enabled days
                if (daySchedule.enabled && daySchedule.slots.length > 0) {
                    // Check for invalid time ranges (start >= end)
                    for (const slot of daySchedule.slots) {
                        const startTime = convertTimeToMinutes(slot.start);
                        const endTime = convertTimeToMinutes(slot.end);

                        if (startTime >= endTime) {
                            toast.error(`End time must be after start time for ${dayName}`, {
                                id: "end-comes-after"
                            });
                            return;
                        }
                    }

                    // Check for duplicate time slots within the same day
                    if (checkDuplicateSlots(daySchedule.slots)) {
                        toast.error(`Duplicate time slots found for ${dayName}. Please remove duplicates.`, {
                            id: "duplicate-weekly-slots"
                        });
                        return;
                    }
                }
            }

            // Validate custom date time slots (from customDates state)
            for (const customDateEntry of customDates) {
                const dateString = customDateEntry.date;

                // Check for invalid time ranges (start >= end)
                for (const slot of customDateEntry.slots) {
                    const startTime = convertTimeToMinutes(slot.start);
                    const endTime = convertTimeToMinutes(slot.end);

                    if (startTime >= endTime) {
                        toast.error(`End time must be after start time for ${dateString}`, {
                            id: "end-comes-after"
                        });
                        return;
                    }
                }

                // Check for duplicate time slots within the same custom date
                if (checkDuplicateSlots(customDateEntry.slots)) {
                    toast.error(`Duplicate time slots found for ${dateString}. Please remove duplicates.`, {
                        id: "duplicate-custom-slots"
                    });
                    return;
                }

                // Optional: Check if custom date is in the past
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                const entryDate = new Date(customDateEntry.date.split("/").reverse().join("-")); // Convert DD/MM/YYYY to Date

                if (entryDate < today) {
                    toast.error(`Custom date ${dateString} cannot be in the past`, {
                        id: "past-date-error"
                    });
                    return;
                }
            }

            // Check for overlapping time slots across different days/dates (optional)
            // This validates against the actual state data structure
            const allSlots: Array<{ type: 'weekly' | 'custom', identifier: string, slots: TimeSlot[] }> = [];

            // Add weekly slots from schedule state
            Object.entries(schedule).forEach(([dayName, daySchedule]) => {
                if (daySchedule.enabled && daySchedule.slots.length > 0) {
                    allSlots.push({
                        type: 'weekly',
                        identifier: dayName,
                        slots: daySchedule.slots
                    });
                }
            });

            // Add custom date slots from customDates state
            customDates.forEach(customDateEntry => {
                if (customDateEntry.slots.length > 0) {
                    allSlots.push({
                        type: 'custom',
                        identifier: customDateEntry.date,
                        slots: customDateEntry.slots
                    });
                }
            });

            // Optional: Check for overlapping slots within the same time period
            // (This is more complex and depends on your business logic)

            // Trigger validation for availability
            const isAvailabilityValid = await form.trigger('availability');
            if (!isAvailabilityValid) {
                return;
            }

            // Move to next step
            setCurrentStep(prev => prev + 1);
            return;
        }

        // For other steps, validate normally
        const isValid = await form.trigger(fields as (keyof ItemListingSchemaData)[]);
        console.log('isValid', isValid);

        if (isValid) {
            setCurrentStep(prev => prev + 1);
        }
    }, [currentStep, form, schedule, customDates, getAvailabilityData]);








    const handlePrevious = () => {
        setCurrentStep(prev => prev - 1)
    }

    return (
        <div className="flex flex-col gap-6">
            {/* Desktop Title */}
            <h4 className="px-2 text-xl text-app-black font-semibold">List an Item</h4>

            {/* Desktop Tab Navigation */}
            <div className=" h-fit px-2 m-0">
                <div className="grid grid-cols-4 border-b border-t border-t-transparent h-fit">
                    {steps.map((step, index) => {
                        const isCompleted = index < currentStep
                        const isCurrent = index === currentStep - 1
                        return (
                            <div
                                key={index}
                                className={`${index === 0 ? "rounded-tl-lg border-l" : `${index === 3 && "rounded-tr-lg"}`}  border-r border-t border-b flex-1  py-2 md:py-3 text-center transition-all duration-300 ${isCompleted || isCurrent
                                    ? "border-[#85C9C3] bg-[#E6F8F4] text-[#0D9488] font-medium"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                <span className="text-sm">{isDesktop ? step.title : step.title.length === 10 ? step.title.slice(0, 3) : step.title.split(' ')[0]}</span>
                            </div>
                        )
                    })}
                </div>
            </div>

            <Form {...form}>
                <form className="w-full pb-6 flex flex-1 flex-col">
                    <div className="px-2 w-full items-start min-h-96 md:max-h-96 overflow-auto scrollbar-hide flex flex-col gap-8">
                        {currentStep === 1 && <div className="w-full grid gap-8">
                            <FormField
                                control={form.control}
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
                                    control={form.control}
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
                                                    value={field.value}
                                                    onChange={(e) => field.onChange(e.target.value)
                                                    }
                                                    className="py-6 rounded-lg shadow-none"
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />

                                <FormField
                                    control={form.control}
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
                                                    value={field.value}
                                                    onChange={(e) => field.onChange(e.target.value)
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
                                control={form.control}
                                name="itemColor"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-app-black">Item Color</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value || ""}>
                                            <FormControl>
                                                <SelectTrigger className="w-full py-6 shadow-none">
                                                    <SelectValue placeholder="Select a color" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="shadow-xl border-none px-1 py-2">
                                                <SelectItem defaultChecked value="select_color" className="py-3 px-4">
                                                    Select a color
                                                </SelectItem>
                                                {colors.map((color) => (
                                                    <SelectItem key={color} value={color} className="py-3 px-4">
                                                        {color}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
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
                                control={form.control}
                                name="images"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel>Images (Up to 10)</FormLabel>
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
                                                    const files = Array.from(e.dataTransfer.files).filter((file) => file.type.startsWith("image/"))
                                                    const currentFiles = field.value || []
                                                    const updatedFiles = [...currentFiles, ...files].slice(0, 10)
                                                    field.onChange(updatedFiles)
                                                }}
                                                onClick={() => document.getElementById("image-upload")?.click()}
                                            >
                                                <Upload className="mx-auto h-6 w-6 text-gray-400" />
                                                <div className="mt-4">
                                                    <Input
                                                        type="file"
                                                        accept="image/*"
                                                        multiple
                                                        onChange={(e) => {
                                                            const selectedFiles = Array.from(e.target.files ?? [])
                                                            const currentFiles = field.value || []
                                                            const updatedFiles = [...currentFiles, ...selectedFiles]
                                                            field.onChange(updatedFiles)
                                                        }}
                                                        className="hidden"
                                                        id="image-upload"
                                                    />
                                                    <p className="text-app-black font-medium mb-2 sm:block hidden">
                                                        Drag and drop files here, or click to browse
                                                    </p>
                                                    <p className="text-app-black font-medium mb-2 sm:hidden block">Tap to upload file</p>
                                                    <p className="mt-1 text-xs text-gray-500">
                                                        Upload clear photos of your item (up to 10) PNG, JPG, GIF up to 10MB each
                                                    </p>

                                                    {field.value && field.value.length > 0 && (
                                                        <div className="mt-4 space-y-2">
                                                            <p className="text-sm font-medium text-green-600">
                                                                {field.value.length} image{field.value.length > 1 ? "s" : ""} selected
                                                            </p>
                                                            <div className="grid grid-cols-2 sm:grid-cols-3 mt-4 gap-4">
                                                                {field.value.map((file: File, index: number) => (
                                                                    <div key={index} className="relative">
                                                                        <div className="grid gap-2 items-center bg-green-50 rounded-lg border border-green-200 rounded p-2 w-full">
                                                                            <div className="flex gap-2 items-center justify-between">
                                                                                <span className="text-xs text-green-700 truncate max-w-18 md:max-w-24">{file.name}</span>
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={(e) => {
                                                                                        e.stopPropagation()
                                                                                        const updatedFiles = field.value?.filter((_, i) => i !== index) || []
                                                                                        field.onChange(updatedFiles)
                                                                                    }}
                                                                                    className="text-green-600 hover:text-green-800"
                                                                                >
                                                                                    <X className="h-4 w-4" />
                                                                                </button>
                                                                            </div>
                                                                            <Image src={URL.createObjectURL(file)} alt={file.name} width={100} height={100} className="w-full rounded-lg h-24 object-cover" />

                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>}
                        {currentStep === 2 && <div className="w-full space-y-8">
                            <FormField
                                control={form.control}
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
                                control={form.control}
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
                                                {conditionOptions.map((condition) => (
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
                        </div>}

                        {currentStep === 3 && (
                            <>


                                <div className="w-full">
                                    <div className="space-y-6">
                                        {/* Set weekly availability */}
                                        <div className="space-y-4 bg-gray-50  px-3 py-4 md:px-5 rounded-lg" onClick={() => setAvailabilityType("weekly")}>
                                            <div className="flex items-center space-x-3 " >
                                                <div
                                                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${availabilityType === "weekly" ? "border-[#0d9488] bg-[#0d9488]" : "border-[#d9d9d9]"
                                                        }`}
                                                >
                                                    {availabilityType === "weekly" && <div className="w-2 h-2 bg-white rounded-full" />}
                                                </div>
                                                <span className="font-medium text-sm md:text-[0.9rem]">Set weekly availability</span>
                                            </div>

                                            {availabilityType === "weekly" && (
                                                <ul className="grid divide-y max-h-54 overflow-y-auto bg-white rounded-lg">
                                                    {Object.entries(schedule).map(([day, daySchedule]) => (
                                                        <li key={day} className="min-h-14 space-y-2 px-2 md:px-4 ">
                                                            <div className="grid grid-cols-6 place-items-start gap-1 md:gap-4 py-4">
                                                                <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row items-center gap-2">
                                                                    <Switch
                                                                        checked={daySchedule.enabled}
                                                                        onCheckedChange={() => toggleDay(day)}
                                                                        className="data-[state=checked]:bg-[#0d9488]"
                                                                    />
                                                                    <Label htmlFor="monday" className="text-xs md:text-[0.9rem]">{isDesktop ? day : day.slice(0, 3)}</Label>
                                                                </div>

                                                                {daySchedule.enabled && (
                                                                    <div className="col-span-5 md:col-span-4 ml-auto space-y-2">
                                                                        {daySchedule.slots.map((slot, slotIndex) => (
                                                                            <div key={slotIndex} className="flex items-center space-x-2">
                                                                                <DropdownMenu>
                                                                                    <DropdownMenuTrigger asChild>
                                                                                        <Button
                                                                                            variant="outline"
                                                                                            className={`text-xs md:text-sm w-[80px] md:w-auto md:min-w-[100px] shadow-none text-gray-500`}
                                                                                        >
                                                                                            {slot.start}
                                                                                        </Button>
                                                                                    </DropdownMenuTrigger>
                                                                                    <DropdownMenuContent>
                                                                                        {timeOptions.map((time) => (
                                                                                            <DropdownMenuItem
                                                                                                key={time}
                                                                                                onClick={() => updateTimeSlot(day, slotIndex, "start", time)}
                                                                                                className="flex items-center justify-between"
                                                                                            >
                                                                                                {time}
                                                                                            </DropdownMenuItem>
                                                                                        ))}
                                                                                    </DropdownMenuContent>
                                                                                </DropdownMenu>

                                                                                <span className="text-[#757575]">–</span>

                                                                                <DropdownMenu>
                                                                                    <DropdownMenuTrigger asChild>
                                                                                        <Button
                                                                                            variant="outline"
                                                                                            className="text-xs md:text-sm w-[80px] md:w-auto md:min-w-[100px] shadow-none text-gray-500"
                                                                                        >
                                                                                            {slot.end}
                                                                                        </Button>
                                                                                    </DropdownMenuTrigger>
                                                                                    <DropdownMenuContent>
                                                                                        {timeOptions.map((time) => (
                                                                                            <DropdownMenuItem
                                                                                                key={time}
                                                                                                onClick={() => updateTimeSlot(day, slotIndex, "end", time)}
                                                                                            >
                                                                                                {time}
                                                                                            </DropdownMenuItem>
                                                                                        ))}
                                                                                    </DropdownMenuContent>
                                                                                </DropdownMenu>

                                                                                {slotIndex === daySchedule.slots.length - 1 && (
                                                                                    <button
                                                                                        onClick={() => addTimeSlot(day)}
                                                                                        className="p-1 cursor-pointer text-[#757575] hover:text-[#0d9488] transition-colors"
                                                                                    >
                                                                                        <Plus size={16} />
                                                                                    </button>
                                                                                )}

                                                                                {daySchedule.slots.length > 1 && (
                                                                                    <button
                                                                                        type="button"
                                                                                        onClick={() => removeTimeSlot(day, slotIndex)}
                                                                                        className="cursor-pointer text-[#757575] hover:text-red-500 transition-colors"
                                                                                    >
                                                                                        <Trash2 size={16} />
                                                                                    </button>
                                                                                )}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                )}
                                                            </div>


                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>

                                        {/* Custom date and time option */}
                                        <div className="space-y-4  px-3 py-4 md:px-5 bg-gray-50 rounded-lg" onClick={() => setAvailabilityType("custom")}>
                                            <div
                                                className="flex items-center space-x-3 rounded-lg overflow-y-auto">
                                                <div
                                                    className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${availabilityType === "custom" ? "border-[#0d9488] bg-[#0d9488]" : "border-[#d9d9d9]"
                                                        }`}
                                                >
                                                    {availabilityType === "custom" && <div className="w-2 h-2 bg-white rounded-full" />}
                                                </div>
                                                <span className="font-medium text-sm md:text-[0.9rem]">Set multiple custom date and time</span>
                                            </div>

                                            {availabilityType === "custom" && (
                                                <div className="space-y-4">
                                                    {/* Date picker input */}
                                                    <div className="w-full">
                                                        <DatePicker placeholder="Select a date" onSelect={handleDateSelect} />
                                                    </div>

                                                    <div className="bg-white rounded-lg">
                                                        {/* Custom date entries */}
                                                        {customDates.length > 0 && (
                                                            <ul className="divide-y max-h-52 overflow-y-auto">
                                                                {customDates.map((dateEntry, dateIndex) => (
                                                                    <li key={dateIndex} className="space-y-2">
                                                                        <div className="relative flex items-start gap-2 md:grid grid-cols-6 place-items-start px-2 py-4">
                                                                            <div className="col-span-2 flex flex-row items-center gap-1 md:gap-4">
                                                                                <button
                                                                                    type="button"
                                                                                    onClick={() => removeCustomDate(dateIndex)}
                                                                                    className="p-1 text-[#757575] hover:text-red-500 transition-colors"
                                                                                >
                                                                                    <X size={16} />
                                                                                </button>
                                                                                <span className="text-xs md:text-sm font-semibold">{isDesktop ? dateEntry.date : `${dateEntry.date.split('/')[0]}/${dateEntry.date.split('/')[1]}`}</span>
                                                                            </div>
                                                                            <div className="col-sapn-5 md:col-span-4 ml-auto space-y-2">
                                                                                {dateEntry.slots.map((slot, slotIndex) => (
                                                                                    <div key={slotIndex} className="flex items-center space-x-2">
                                                                                        <DropdownMenu>
                                                                                            <DropdownMenuTrigger asChild>
                                                                                                <Button
                                                                                                    variant="outline"
                                                                                                    className="text-xs md:text-sm w-[80px] md:w-auto md:min-w-[100px] shadow-none text-gray-500"
                                                                                                >
                                                                                                    {slot.start}
                                                                                                </Button>
                                                                                            </DropdownMenuTrigger>
                                                                                            <DropdownMenuContent>
                                                                                                {timeOptions.map((time) => (
                                                                                                    <DropdownMenuItem
                                                                                                        key={time}
                                                                                                        onClick={() => updateCustomTimeSlot(dateIndex, slotIndex, "start", time)}
                                                                                                    >
                                                                                                        {time}
                                                                                                    </DropdownMenuItem>
                                                                                                ))}
                                                                                            </DropdownMenuContent>
                                                                                        </DropdownMenu>

                                                                                        <span className="text-[#757575]">–</span>

                                                                                        <DropdownMenu>
                                                                                            <DropdownMenuTrigger asChild>
                                                                                                <Button
                                                                                                    variant="outline"
                                                                                                    className="text-xs md:text-sm w-[80px] md:w-auto md:min-w-[100px] shadow-none text-gray-500"
                                                                                                >
                                                                                                    {slot.end}
                                                                                                </Button>
                                                                                            </DropdownMenuTrigger>
                                                                                            <DropdownMenuContent>
                                                                                                {timeOptions.map((time) => (
                                                                                                    <DropdownMenuItem
                                                                                                        key={time}
                                                                                                        onClick={() => updateCustomTimeSlot(dateIndex, slotIndex, "end", time)}
                                                                                                    >
                                                                                                        {time}
                                                                                                    </DropdownMenuItem>
                                                                                                ))}
                                                                                            </DropdownMenuContent>
                                                                                        </DropdownMenu>

                                                                                        {slotIndex === dateEntry.slots.length - 1 && (
                                                                                            <button
                                                                                                type="button"
                                                                                                onClick={() => addCustomTimeSlot(dateIndex)}
                                                                                                className="p-1 text-[#757575] hover:text-[#0d9488] transition-colors"
                                                                                            >
                                                                                                <Plus size={16} />
                                                                                            </button>
                                                                                        )}

                                                                                        {dateEntry.slots.length > 1 && (
                                                                                            <button
                                                                                                type="button"
                                                                                                onClick={() => removeCustomTimeSlot(dateIndex, slotIndex)}
                                                                                                className="text-[#757575] hover:text-red-500 transition-colors"
                                                                                            >
                                                                                                <Trash2 size={16} />
                                                                                            </button>
                                                                                        )}
                                                                                    </div>
                                                                                ))}
                                                                            </div>
                                                                        </div>

                                                                    </li>
                                                                ))}
                                                            </ul>
                                                        )}
                                                    </div>

                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )}


                        {currentStep === 4 && <div className="w-full space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 items-baseline gap-6">
                                <FormField
                                    control={form.control}
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
                                    control={form.control}
                                    name="postCode"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-app-black">Post Code</FormLabel>
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
                                control={form.control}
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
                        </div>}
                    </div>
                    <div className="px-2 flex mt-auto justify-between pt-4">
                        <Button
                            type="button"
                            onClick={handlePrevious}
                            disabled={currentStep === 1}
                            variant="secondary"
                            className={`${currentStep > 1 && "cursor-pointer"} flex items-center py-6 shadow-none `}
                        >
                            Back
                        </Button>


                        {currentStep < 4 && <Button
                            variant="primary"
                            type="button"
                            onClick={handleNext}
                            className="py-6 w-auto bg-[#0D9488] hover:bg-[#0D9488]/90"
                        >
                            Continue
                        </Button>}

                        {currentStep === 4 && <Button
                            variant="primary"
                            type="button"
                            onClick={handleConfirmSubmit}
                            disabled={isSubmitting}
                            className="py-6 w-auto bg-[#0D9488] hover:bg-[#0D9488]/90"
                        >
                            List Item
                        </Button>}

                    </div>
                </form>
            </Form>
            <ResponsiveModal open={showConfirmModal} close={setShowConfirmModal}>
                <div className="flex flex-col items-center max-w-md mx-auto py-12 justify-center text-center space-y-4">
                    <Image
                        src="/assets/icons/listing-icon.svg"
                        alt="No items found"
                        width={200}
                        height={200}
                        className="mb-4 w-22 h-22"
                    />
                    <h3 className="text-lg font-semibold text-gray-900">Are you sure?</h3>
                    <p className="text-gray-600 my-4 ">Your item will be sent for review before it gets published. You can save and list later.</p>

                    <div className="grid grid-cols-2 w-full mt-4 gap-4">
                        <Button variant="outline" onClick={handleSaveAsDraft} className="py-6 shadow-none">
                            Save as Draft
                        </Button>
                        <Button
                            type="button"
                            variant="primary"
                            onClick={handleFinalSubmit}
                            disabled={isSubmitting}
                            className="py-6"
                        >
                            {isSubmitting ? "Submitting..." : "Yes, Sure"}
                        </Button>

                    </div>
                </div>
            </ResponsiveModal>
            <ResponsiveModal close={() => { }} open={showSuccessModal} >
                <div className="flex flex-col items-center justify-center text-center space-y-4 py-12">
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="110" height="111" fill="none"><rect width="82.687" height="109.9" x=".778" y=".551" fill="url(#a)" rx="8.373" /><rect width="30.353" height="4.187" x="19.095" y="74.863" fill="#C9D377" rx="1.047" /><path fill="#C9D377" d="M51.542 74.863h13.607v4.187H51.542z" /><rect width="46.053" height="4.187" x="19.095" y="83.238" fill="#C9D377" rx="1.047" /><rect width="46.053" height="4.187" x="19.095" y="91.609" fill="#C9D377" rx="1.047" /><rect width="55" height="43" x="16.747" y="21.828" fill="#C9D377" rx="8" /><path stroke="#7C843D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m37.247 47.163 3.725-3.725a1.51 1.51 0 0 1 2.134 0l3.308 3.308m0 0 1.25 1.25m-1.25-1.25 1.641-1.641a1.509 1.509 0 0 1 2.134 0l2.058 2.058M47.664 40.493a.417.417 0 0 0 0-.833m0 .834a.417.417 0 0 1 0-.834m0 .834v-.834" /><path stroke="#7C843D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M37.829 50.283c-.998-1.169-.998-2.931-.998-6.456 0-3.525 0-5.287.998-6.456.142-.166.296-.32.462-.463 1.17-.998 2.931-.998 6.456-.998 3.525 0 5.287 0 6.456.998.166.142.32.297.463.463.998 1.169.998 2.931.998 6.456 0 3.525 0 5.287-.998 6.456-.142.166-.297.32-.463.462-1.169.998-2.931.998-6.456.998-3.525 0-5.287 0-6.456-.998a4.162 4.162 0 0 1-.462-.462Z" /><g clipPath="url(#b)"><rect width="38.493" height="5.309" x="18.044" y="53.406" fill="#E9EBED" rx="1.327" /></g><rect width="33.493" height="33.493" x="51.956" y="53.262" stroke="#B6CC5E" strokeWidth="1.047" rx="16.747" /><path fill="#F1F3DE" stroke="#7C843D" strokeWidth=".386" d="m86.751 93.622 5.278-5.465a1.459 1.459 0 0 1 2.062-.037l12.622 12.189a3.109 3.109 0 0 1 .076 4.396l-2.984 3.09a3.108 3.108 0 0 1-4.396.077L86.787 95.684a1.458 1.458 0 0 1-.036-2.062Z" /><mask id="c" fill="#fff"><path d="m80.363 87.453 5.353-5.543 6.308 6.092-5.353 5.543-6.308-6.092Z" /></mask><path fill="#989F42" d="m80.363 87.453 5.353-5.543 6.308 6.092-5.353 5.543-6.308-6.092Z" /><path fill="#7C843D" d="m85.716 81.91-.268.278 6.308 6.092.268-.278.268-.277-6.308-6.092-.268.277Zm.956 11.635.268-.278-6.309-6.091-.268.277-.268.278 6.308 6.092.268-.278Z" mask="url(#c)" /><mask id="d" fill="#fff"><path d="M90.592 70.224c0 11.97-9.703 21.672-21.673 21.672-11.97 0-21.673-9.703-21.673-21.672 0-11.97 9.703-21.673 21.673-21.673 11.97 0 21.673 9.703 21.673 21.673Zm-38.496 0c0 9.29 7.532 16.823 16.823 16.823s16.823-7.532 16.823-16.823c0-9.292-7.532-16.824-16.823-16.824s-16.823 7.532-16.823 16.824Z" /></mask><path fill="#F1F3DE" stroke="#7C843D" stroke-width=".772" d="M90.592 70.224c0 11.97-9.703 21.672-21.673 21.672-11.97 0-21.673-9.703-21.673-21.672 0-11.97 9.703-21.673 21.673-21.673 11.97 0 21.673 9.703 21.673 21.673Zm-38.496 0c0 9.29 7.532 16.823 16.823 16.823s16.823-7.532 16.823-16.823c0-9.292-7.532-16.824-16.823-16.824s-16.823 7.532-16.823 16.824Z" mask="url(#d)" /><defs><linearGradient id="a" x1="42.122" x2="42.122" y1=".551" y2="110.451" gradientUnits="userSpaceOnUse"><stop stopColor="#CCECE9" /><stop offset="1" stopColor="#E4E9CF" /></linearGradient><clipPath id="b"><rect width="34.54" height="34.54" x="51.433" y="52.738" fill="#fff" rx="17.27" /></clipPath></defs></svg>
                    </span>
                    <h3 className="text-xl my-4 font-semibold text-gray-900">Item verification in progress...</h3>
                    <p className="text-gray-600">
                        We&apos;ll notify you once your item has been published
                    </p>

                    <div className="pt-4">
                        <Button variant="primary" onClick={handleSuccessClose} className="py-6 w-full sm:w-44">
                            Got it
                        </Button>
                    </div>
                </div>
            </ResponsiveModal>
        </div >
    )
}

export default MultiStepForm