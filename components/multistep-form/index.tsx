"use client"

import React, { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Clock8Icon, Trash2Icon, Upload, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import Image from "next/image";
import { Plus } from 'lucide-react';
import { DatePicker } from "../DatePicker";
import { useMediaQuery } from "@/hooks/use-media-query";
import { Badge } from "../ui/badge";
import { toast } from "sonner";
import { itemListingSchema, ItemListingSchemaData, ListedItem } from "@/lib/schema";
import { useAppState, useUIState } from "@/hooks/useAppState";
import ResponsiveModal from "../modal/ResponsiveModal";

// Type definitions
type DayAbbreviation = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri' | 'Sat' | 'Sun';
type DayFull = 'monday' | 'tuesday' | 'wednesday' | 'thursday' | 'friday' | 'saturday' | 'sunday';

interface TimeSlot {
    start: string;
    end: string;
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

const MultiStepForm = ({ isEditMode, itemToEdit }: MultiStepFormProps) => {
    const { listedItems, setListedItems } = useAppState()
    const { setItemListingModalOpen } = useUIState()
    const [currentStep, setCurrentStep] = useState(1)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const isDesktop = useMediaQuery("(min-width: 768px)")
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [showSuccessModal, setShowSuccessModal] = useState(false)

    // Availability state
    const [selectedMode, setSelectedMode] = useState<'weekdays' | 'custom'>('weekdays');
    const [selectedDays, setSelectedDays] = useState<Set<DayAbbreviation>>(new Set());
    const [customDate, setCustomDate] = useState<Date | undefined>(undefined);
    const [fromTime, setFromTime] = useState<string>('');
    const [toTime, setToTime] = useState<string>('');

    const [availability, setAvailability] = useState<Availability>({
        weeklySchedule: [],
        customDates: []
    });

    const dayMapping: Record<DayAbbreviation, DayFull> = {
        'Mon': 'monday',
        'Tue': 'tuesday',
        'Wed': 'wednesday',
        'Thu': 'thursday',
        'Fri': 'friday',
        'Sat': 'saturday',
        'Sun': 'sunday'
    };

    const days: DayAbbreviation[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const toggleDay = (day: DayAbbreviation) => {
        const newSelected = new Set(selectedDays);
        if (newSelected.has(day)) {
            newSelected.delete(day);
        } else {
            newSelected.add(day);
        }
        setSelectedDays(newSelected);
    };


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
            weight: 0,
            itemWorth: 0,
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

    const addTimeSlot = () => {
        if (!fromTime || !toTime) {
            toast.error("Please select both start and end times", {
                id: "start-end-times"
            })
            return;
        }


        if (fromTime >= toTime) {
            toast.error("End time must be after start time", {
                id: "end-comes-after"
            })
            return;
        }

        const newSlot: TimeSlot = { start: fromTime, end: toTime };

        if (selectedMode === 'weekdays') {
            if (selectedDays.size === 0) {
                toast.error("Please select at least one day", {
                    id: "warning-day-select"
                })
                return;
            }

            // Check for duplicates in weekly schedule
            let hasDuplicate = false;
            selectedDays.forEach((day: DayAbbreviation) => {
                const dayName = dayMapping[day];
                const existingDay = availability.weeklySchedule.find((item: WeeklySchedule) => item.day === dayName);
                if (existingDay) {
                    const duplicate = existingDay.timeSlots.find((slot: TimeSlot) =>
                        slot.start === newSlot.start && slot.end === newSlot.end
                    );
                    if (duplicate) {
                        hasDuplicate = true;
                    }
                }
            });

            if (hasDuplicate) {

                toast.error("This time slot already exists for one or more selected days", {
                    id: "time-slot-exist"
                })

                return;
            }

            const newWeeklySchedule: WeeklySchedule[] = [...availability.weeklySchedule];

            selectedDays.forEach((day: DayAbbreviation) => {
                const dayName = dayMapping[day];
                const existingDayIndex = newWeeklySchedule.findIndex((item: WeeklySchedule) => item.day === dayName);

                if (existingDayIndex >= 0) {
                    newWeeklySchedule[existingDayIndex].timeSlots.push(newSlot);
                } else {
                    newWeeklySchedule.push({
                        day: dayName,
                        timeSlots: [newSlot]
                    } as WeeklySchedule);
                }
            });

            setAvailability({
                ...availability,
                weeklySchedule: newWeeklySchedule
            });
        } else {
            if (!customDate) {
                toast.error("Please select a custom date", {
                    id: "missing-custom-date"
                })

                return;
            }

            const newCustomDates: CustomDate[] = [...availability.customDates];
            const existingDateIndex = newCustomDates.findIndex(
                (item: CustomDate) => item.date.toDateString() === new Date(customDate).toDateString()
            );

            // Check for duplicates in custom dates
            if (existingDateIndex >= 0) {
                const duplicate = newCustomDates[existingDateIndex].timeSlots.find((slot: TimeSlot) =>
                    slot.start === newSlot.start && slot.end === newSlot.end
                );
                if (duplicate) {
                    toast.error("This time slot already exists for the selected date", {
                        id: "custom-date-duplicate"
                    })
                    return;
                }
                newCustomDates[existingDateIndex].timeSlots.push(newSlot);
            } else {
                newCustomDates.push({
                    date: new Date(customDate),
                    timeSlots: [newSlot]
                } as CustomDate);
            }

            setAvailability({
                ...availability,
                customDates: newCustomDates
            });
        }

        // Reset form
        setFromTime('')
        setToTime('')



        if (selectedMode === 'weekdays') {
            setSelectedDays(new Set());
        }
    };

    const removeTimeSlot = (type: 'weekly' | 'custom', index: number, slotIndex?: number) => {
        if (type === 'weekly') {
            const newWeeklySchedule = [...availability.weeklySchedule];
            if (slotIndex !== undefined) {
                newWeeklySchedule[index].timeSlots.splice(slotIndex, 1);
                if (newWeeklySchedule[index].timeSlots.length === 0) {
                    newWeeklySchedule.splice(index, 1);
                }
            } else {
                newWeeklySchedule.splice(index, 1);
            }
            setAvailability({
                ...availability,
                weeklySchedule: newWeeklySchedule
            });
        } else {
            const newCustomDates = [...availability.customDates];
            if (slotIndex !== undefined) {
                newCustomDates[index].timeSlots.splice(slotIndex, 1);
                if (newCustomDates[index].timeSlots.length === 0) {
                    newCustomDates.splice(index, 1);
                }
            } else {
                newCustomDates.splice(index, 1);
            }
            setAvailability({
                ...availability,
                customDates: newCustomDates
            });
        }
    };

    const handleConfirmSubmit = () => {
        setShowConfirmModal(true)
    }


    const handleSuccessClose = () => {
        setShowSuccessModal(false)
        setItemListingModalOpen(false)
    }


    const handleFinalSubmit = async () => {
        // Update form data with current availability state

        const data = form.getValues()

        setIsSubmitting(true)
        setShowConfirmModal(false)


        await new Promise((resolve) => setTimeout(resolve, 2000))

        const imageUrls = data.images.map((file) => URL.createObjectURL(file))
        const finalData = {
            ...data,
            id: Date.now().toString(),
            imageUrls,
            status: "under-review" as const,
            availability: availability
        };

        
        
        setListedItems([...listedItems, finalData])
        setShowSuccessModal(true)
        console.log('Form submitted:', finalData);
    }


    const handleSaveAsDraft = () => {
        const data = form.getValues()
        const imageUrls = data.images.map((file) => URL.createObjectURL(file))
        const finalData = {
            ...data,
            id: Date.now().toString(),
            imageUrls,
            status: "draft" as const,
            availability: availability
        };
        setListedItems([...listedItems, finalData])
        setShowConfirmModal(false)
        setItemListingModalOpen(false)
        console.log('Form submitted:', finalData);
    }


    const handleNext = React.useCallback(async () => {
        const fields = steps[currentStep - 1].fields
        console.log(fields)

        if (currentStep === 3) {
            // Check if either weekly schedule or custom dates have time slots
            const hasWeeklySlots = availability.weeklySchedule.length > 0 &&
                availability.weeklySchedule.some(schedule => schedule.timeSlots.length > 0);
            const hasCustomSlots = availability.customDates.length > 0 &&
                availability.customDates.some(custom => custom.timeSlots.length > 0);

            if (!hasWeeklySlots && !hasCustomSlots) {
                toast.error("Please add at least one availability time slot", {
                    id: "add-time-slot"
                })
                return;
            }

            // Update form with current availability
            form.setValue('availability', availability);

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
        const isValid = await form.trigger(fields as (keyof ItemListingSchemaData)[])
        console.log('isValid', isValid)

        if (isValid) {
            setCurrentStep(prev => prev + 1)
        }
    }, [currentStep, form, availability])

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
                        console.log('first', step.title.slice(0, 3), step.title.length)
                        return (
                            <div
                                key={index}
                                className={`${index === 0 ? "rounded-tl-lg border-l" : `${index === 3 && "rounded-tr-lg"}`}  border-r border-t border-b flex-1  py-2 md:py-3 text-center transition-all duration-300 ${isCompleted || isCurrent
                                    ? "border-[#85C9C3] bg-[#E6F8F4] text-[#0D9488] font-medium"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                                    }`}
                            >
                                <span className="text-sm">{isDesktop ? step.title : step.title.length  === 10 ? step.title.slice(0, 3) : step.title.split(' ')[0]}</span>
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
                        </div>}

                        {currentStep === 3 && (
                            <>
                                {/* Day buttons + Custom toggle */}
                                <div className="flex w-full h-fit items-center gap-1 mb-4">
                                    {days.map((day) => (
                                        <button
                                            type="button"
                                            key={day}
                                            onClick={() => toggleDay(day)}
                                            disabled={selectedMode === 'custom'}
                                            className={`flex-1 py-2 px-3 text-sm rounded ${selectedMode === 'weekdays' && selectedDays.has(day)
                                                ? 'bg-teal-600 text-white'
                                                : selectedMode === 'custom'
                                                    ? 'border text-gray-400 cursor-not-allowed'
                                                    : 'border text-gray-600 hover:bg-gray-200'
                                                }`}
                                        >
                                            {isDesktop ? day : day[0]}
                                        </button>
                                    ))}
                                    <button
                                        type="button"
                                        onClick={() => setSelectedMode(selectedMode === 'custom' ? 'weekdays' : 'custom')}
                                        className={`px-4 py-2 text-sm rounded ${selectedMode === 'custom'
                                            ? 'border border-teal-600 bg-teal-600 text-white'
                                            : 'border text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {isDesktop ? 'Custom' : 'C'} 
                                    </button>
                                </div>

                                {/* Custom Date */}
                                {selectedMode === 'custom' && (
                                    <div className="w-full mb-4">
                                        <FormField
                                            control={form.control}
                                            name="availability.customDates.0.date"
                                            render={({ field }) => (

                                                <FormItem>
                                                    <FormLabel className="text-app-black">Custom Date</FormLabel>
                                                    <DatePicker
                                                        date={field.value}
                                                        onSelect={(date) => {
                                                            field.onChange(date)
                                                            setCustomDate(date)
                                                        }}
                                                        placeholder="DD/MM/YY"
                                                        disablePastDates={true}
                                                    />
                                                    <FormMessage />
                                                </FormItem>
                                            )}
                                        />

                                    </div>
                                )}

                                {/* Time Selection */}
                                <div className="w-full grid gap-4 mb-4">
                                    <div className="flex-1 grid grid-cols-2 items-baseline gap-4">
                                        {/* <FormField
                                        control={form.control}
                                        name={`${selectedMode === "weekdays" ? 'availability.weeklySchedule.0.timeSlots.0.start' : 'availability.customDates.0.timeSlots.0.start'}`}
                                        render={({ field }) => (

                                            <FormItem>
                                                <FormLabel className="text-app-black">From</FormLabel>
                                                <FormControl>
                                                    <div className='w-full space-y-2'>
                                                        <div className='relative'>
                                                            <div className='text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50'>
                                                                <Clock8Icon className='size-4' />
                                                            </div>
                                                            <Input
                                                                type='time'
                                                                id='time-picker'
                                                                {...field}
                                                                value={field.value || ""}
                                                                onChange={(e) => {
                                                                    field.onChange(e); // Update the form field
                                                                    setFromTime(e.target.value); // Update your state
                                                                }}
                                                                // defaultValue='00:00:00'
                                                                className='shadow-none py-6 peer bg-background appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
                                                            />
                                                        </div>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    /> */}
                                        {/* <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>
                                            <input
                                                type="time"
                                                value={fromTime}
                                                onChange={(e) => setFromTime(e.target.value)}
                                                className="appearance-none w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            />
                                        </div> */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">From</label>

                                            <div className='relative'>

                                                <div className='text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50'>
                                                    <Clock8Icon className='size-4' />
                                                </div>
                                                <Input
                                                    type='time'
                                                    id='time-picker'
                                                    value={fromTime}
                                                    onChange={(e) => setFromTime(e.target.value)}
                                                    className='shadow-none py-6 peer bg-background appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
                                                />
                                            </div>
                                        </div>

                                        {/* <FormField
                                        control={form.control}
                                        name={`${selectedMode === "weekdays" ? 'availability.weeklySchedule.0.timeSlots.0.end' : 'availability.customDates.0.timeSlots.0.end'}`}
                                        render={({ field }) => (

                                            <FormItem>
                                                <FormLabel className="text-app-black">To</FormLabel>
                                                <FormControl>
                                                    <div className='w-full space-y-2'>
                                                        <div className='relative'>
                                                            <div className='text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50'>
                                                                <Clock8Icon className='size-4' />
                                                            </div>
                                                            <Input
                                                                type='time'
                                                                id='time-picker'
                                                                {...field}
                                                                value={field.value || ""}

                                                                onChange={(e) => {
                                                                    field.onChange(e); // Update the form field
                                                                    setToTime(e.target.value); // Update your state
                                                                }}
                                                                // defaultValue='00:00:00'
                                                                className='shadow-none py-6 peer bg-background appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
                                                            />
                                                        </div>
                                                    </div>
                                                </FormControl>
                                                <FormMessage />
                                            </FormItem>
                                        )}
                                    /> */}
                                        {/* <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>
                                            <Input
                                                type="time"
                                                value={toTime}
                                                onChange={(e) => setToTime(e.target.value)}
                                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            />
                                        </div> */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">To</label>

                                            <div className='relative'>

                                                <div className='text-muted-foreground pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50'>
                                                    <Clock8Icon className='size-4' />
                                                </div>
                                                <Input
                                                    type='time'
                                                    id='time-picker'
                                                    value={toTime}
                                                    onChange={(e) => setToTime(e.target.value)}
                                                    className='shadow-none py-6 peer bg-background appearance-none ps-9 [&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-calendar-picker-indicator]:appearance-none'
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    {/* Add Button */}
                                    <Button
                                        type="button"
                                        variant="secondary"
                                        onClick={addTimeSlot}
                                        className="w-auto ml-auto place-self-start py-6"
                                    >
                                        <Plus className="w-4 h-4" />
                                        Add
                                    </Button>
                                </div>



                                {/* Display Weekly Schedule */}
                                {availability.weeklySchedule.length > 0 && (
                                    <div className="w-full space-y-4">
                                        <h3 className="font-medium text-gray-900 mb-2">Weekly Schedule:</h3>
                                        {availability.weeklySchedule.map((schedule, index) => (
                                            <div key={index} className="bg-gray-50 p-3 rounded-md mb-2">
                                                <div className="flex w-auto justify-between items-center mb-3">
                                                    <span className="font-medium text-sm text-gray-600 capitalize">{schedule.day}</span>
                                                    <Button
                                                        variant="destructive"
                                                        onClick={() => removeTimeSlot('weekly', index)}
                                                    >
                                                        <Trash2Icon />
                                                    </Button>
                                                </div>
                                                <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                                                    {schedule.timeSlots.map((slot, slotIndex) => (

                                                        <Badge key={slotIndex} className="flex gap-4 justify-between items-center text-sm bg-white rounded-full text-gray-700 px-3 py-2">
                                                            <span>{slot.start} - {slot.end}</span>
                                                            <button
                                                                onClick={() => removeTimeSlot('weekly', index, slotIndex)}
                                                                className="text-gray-400 hover:text-gray-600"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* Display Custom Dates */}
                                {availability.customDates.length > 0 && (
                                    <div className="w-full space-y-4">
                                        <h3 className="font-medium text-gray-900 mb-2">Custom Dates:</h3>
                                        {availability.customDates.map((custom, index) => (
                                            <div key={index} className="bg-blue-50 p-3 rounded-md mb-2">
                                                <div className="flex justify-between items-center mb-2">
                                                    <span className="font-medium text-sm">{custom.date.toDateString()}</span>
                                                    <Button
                                                        variant="destructive"
                                                        onClick={() => removeTimeSlot('custom', index)}
                                                    >
                                                        <Trash2Icon />
                                                    </Button>
                                                </div>
                                                <div className="flex items-center gap-2 md:gap-4 flex-wrap">
                                                    {custom.timeSlots.map((slot, slotIndex) => (

                                                        <Badge key={slotIndex} className="flex gap-4 justify-between items-center text-sm bg-white rounded-full text-gray-700 px-3 py-2">
                                                            <span>{slot.start} - {slot.end}</span>
                                                            <button
                                                                onClick={() => removeTimeSlot('weekly', index, slotIndex)}
                                                                className="text-gray-400 hover:text-gray-600"
                                                            >
                                                                <X className="w-4 h-4" />
                                                            </button>
                                                        </Badge>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
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