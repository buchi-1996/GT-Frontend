"use client"

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { z } from 'zod';
import { Switch } from '@/components/ui/switch';
import { Slider } from '@/components/ui/slider';
import { X } from 'lucide-react';



const cancellationFormSchema = z.object({
    enableCancellationReminders: z.boolean().optional(),
    cancelBeforePickupReminder: z.number().optional(),
    savedCancellationReasons: z.string().optional()
})


type CancellationFormSchemaData = z.infer<typeof cancellationFormSchema>;

const CancellationView = () => {

    const form = useForm<CancellationFormSchemaData>({
        resolver: zodResolver(cancellationFormSchema),
        defaultValues: {
            enableCancellationReminders: true,
            cancelBeforePickupReminder: 24,
            savedCancellationReasons: ""
        }
    })

    const onSubmit = (data: CancellationFormSchemaData) => {
        // handle form submission, e.g., send data to API or update state
        console.log('Form submitted:', data);
    };

    return (
        <div className='p-4 md:p-6 rounded-lg border'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='grid hidden lg:block pb-6'>
                        <h4 className='text-md sm:text-[1.2rem] font-semibold text-[#222222]'>Cancellation Preferences</h4>
                        <p className='text-gray-500 text-sm'>Manage your cancellation settings and pre-saved reasons</p>
                    </div>
                    <div className='py-6 border-t-0 lg:border-t  border-b '>
                        <h3 className="font-semibold text-[#222222] mb-8">Cancellation Reminders</h3>
                        <FormField
                            control={form.control}
                            name="enableCancellationReminders"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                        <div>
                                            <h4 className="font-semibold text-sm text-[#222222] mb-1">Enable Cancellation Reminders</h4>
                                            <p className="text-sm text-[#626262]">Get reminders about upcoming pickups you might need to cancel</p>
                                        </div>
                                        <FormControl>
                                            <Switch
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                                className="data-[state=checked]:bg-[#14ae7d]"
                                            />
                                        </FormControl>
                                    </div>
                                </FormItem>
                            )}
                        />
                        <div className='py-6 w-full'>
                            <FormField
                                control={form.control}
                                name="cancelBeforePickupReminder"
                                render={({ field }) => (
                                    <FormItem className="grid gap-6 bg-[#f9fafb] p-4 rounded-lg">
                                        <FormLabel className="font-semibold text-sm text-[#222222] mb-1">Maximum requests per listing</FormLabel>
                                        <div className='flex items-center justify-between gap-6'>
                                            <Slider onValueChange={field.onChange} defaultValue={[field.value ?? 0]} max={100} step={1} />
                                            <h4 className="font-semibold">{field.value}h</h4>
                                        </div>
                                        <p className='text-sm text-gray-500'>You&apos;ll receive a reminder {field.value} hours before scheduled pickups</p>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                        </div>
                    </div>
                    <div className='py-6 w-full'>
                        <h3 className="font-semibold text-[#222222] mb-6">Pre-saved Cancellation Reasons</h3>
                        <p className='text-sm text-[#626262] mb-2'>Add commonly used cancellation reasons for quick selection when needed</p>
                        <FormField
                            control={form.control}
                            name="savedCancellationReasons"
                            render={({ field }) => (
                                <FormItem className='flex items-center gap-4'>
                                    <FormControl>
                                        <Select onValueChange={field.onChange} value={field.value || ""}>
                                            <FormControl>
                                                <SelectTrigger className="py-6 w-full shadow-none">
                                                    <SelectValue placeholder="Select an option" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                                                <SelectItem value="Reason 1" className="py-3 px-4">Reason 1</SelectItem>
                                                <SelectItem value="Reason 2" className="py-3 px-4">Reason 2</SelectItem>
                                                <SelectItem value="Reason 3" className="py-3 px-4">Reason 3</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </FormControl>
                                    <Button variant="primary" className='py-6'>Add</Button>
                                </FormItem>
                            )}
                        />
                        <div className='p-4 border rounded-lg mt-6'>
                            <h3 className="font-semibold text-[#222222] mb-6">Added Reasons</h3>
                            <div className='grid gap-4'>
                                <div className="w-full bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                    <div>
                                        <h4 className="font-semibold text-sm text-[#222222] mb-1">Item no longer available</h4>
                                        <p className="text-sm text-[#626262]">The item was damaged, lost, or otherwise became unavailable before the collection.</p>
                                    </div>
                                    <button className='cursor-pointer'>
                                        <X className='size-5 text-gray-500' />
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div className='p-4 border rounded-lg mt-6'>
                            <h3 className="font-semibold text-[#222222] mb-6">Default Reasons</h3>
                            <div className='grid gap-4'>
                                <div className="w-full bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                    <div>
                                        <h4 className="font-semibold text-sm text-[#222222] mb-1">Item no longer available</h4>
                                        <p className="text-sm text-[#626262]">The item was damaged, lost, or otherwise became unavailable before the collection.</p>
                                    </div>
                                </div>
                                <div className="w-full bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                    <div>
                                        <h4 className="font-semibold text-sm text-[#222222] mb-1">Receiver Unresponsive</h4>
                                        <p className="text-sm text-[#626262]">The selected Receiver has not responded to confirmation messages or has failed to confirm collection details.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="flex justify-end">
                        <Button
                            variant="primary"
                            type="submit"
                            className="py-6 mt-8"
                        >
                            Save Preferences
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default CancellationView