"use client"

import {
    Form,
    FormField,
    FormItem,
    FormLabel,
    FormControl,
    FormMessage,
} from "@/components/ui/form"

import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select"

import { useForm } from "react-hook-form"
import { Upload, X } from "lucide-react"
import Image from "next/image"
import { DatePicker } from "@/components/DatePicker"
import { Dispatch, SetStateAction, useState } from "react"

interface VerificationFormProps {
    setVerifyInProgressModal: Dispatch<SetStateAction<boolean>>
    setVerificationModalOpen: Dispatch<SetStateAction<boolean>>
}

type VerifyIdFormValues = {
    idType: string;
    idNumber: string;
    expiryDate: string;
    selfie: File[]; // Array of File objects
};

export default function VerifyIDForm({ setVerifyInProgressModal, setVerificationModalOpen }: VerificationFormProps) {

    const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)

    const form = useForm<VerifyIdFormValues>({
        defaultValues: {
            idType: "",
            idNumber: "",
            expiryDate: "",
            selfie: [],
        },
    })

    const onSubmit = (values: VerifyIdFormValues) => {
        console.log("Form values:", values)
        setVerificationModalOpen(false)
        setVerifyInProgressModal(true)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full">
                <div className="w-full max-h-auto md:max-h-96 overflow-y-auto scrollbar-hide space-y-8 md:space-y-6">

                    {/* ID Type */}
                    <FormField
                        control={form.control}
                        name="idType"
                        rules={{ required: "ID type is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className="text-app-black">ID Type</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl>
                                        <SelectTrigger className="py-6 w-full shadow-none">
                                            <SelectValue placeholder="Select ID type" />
                                        </SelectTrigger>
                                    </FormControl>
                                    <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                                        <SelectItem value="passport">International Passport</SelectItem>
                                        <SelectItem value="driver_license">Driver&apos;s License</SelectItem>
                                        <SelectItem value="national_id">Resident Permit</SelectItem>
                                    </SelectContent>
                                </Select>
                                <FormMessage className="text-left text-sm" />
                            </FormItem>
                        )}
                    />

                    {/* ID Number and Expiry Date Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
                        {/* ID Number */}
                        <FormField
                            control={form.control}
                            name="idNumber"
                            rules={{ required: "ID number is required" }}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="text-app-black">ID Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter ID number" className="py-6 w-full shadow-none" {...field} />
                                    </FormControl>
                                    <FormMessage className="text-left text-sm" />
                                </FormItem>
                            )}
                        />

                        {/* Expiry Date */}
                        <FormItem>
                            <FormLabel className="text-app-black">Expiry Date</FormLabel>
                            <DatePicker
                                date={selectedDate}
                                onSelect={setSelectedDate}
                                placeholder="DD/MM/YY"
                                disablePastDates={true}
                            />
                        </FormItem>
                    </div>

                    {/* Selfie Photo */}
                    <FormField
                        control={form.control}
                        name="selfie"
                        rules={{ required: "Selfie is required" }}
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Upload ID</FormLabel>
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
                                            const updatedFiles = [...currentFiles, ...files].slice(0, 3)
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
                                                    const updatedFiles = [...currentFiles, ...selectedFiles].slice(0, 3)
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
                                                Upload a clear selfie photo PNG, JPG, GIF up to 10MB each
                                            </p>

                                            {field.value && field.value.length > 0 && (
                                                <div className="mt-4 space-y-2">
                                                    <p className="text-sm font-medium text-green-600">
                                                        {field.value.length} image{field.value.length > 1 ? "s" : ""} selected
                                                    </p>
                                                    <div className="grid grid-cols-2 sm:grid-cols-3 mt-4 gap-4">
                                                        {field.value.map((file: File, index: number) => (
                                                            <div key={index} className="relative">
                                                                <div className="grid gap-2 items-center bg-green-50 rounded-lg border border-green-200 p-2 w-full">
                                                                    <div className="flex gap-2 items-center justify-between">
                                                                        <span className="text-xs text-green-700 truncate max-w-32">{file.name}</span>
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
                                <FormMessage className="text-left text-sm" />
                            </FormItem>
                        )}
                    />
                </div>

                <Button variant="primary" type="submit" className="py-6 w-full">
                    Verify
                </Button>
            </form>
        </Form>
    );
}