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

const listingFormSchema = z.object({
    enableAutoSelection: z.boolean().optional(),
    maxRequestPerListing: z.string(),
    requireRequestMessage: z.boolean().optional(),


});


type ListingFormSchema = z.infer<typeof listingFormSchema>;
const InterestManagement = () => {

    const form = useForm<ListingFormSchema>({
        resolver: zodResolver(listingFormSchema),
        defaultValues: {
            enableAutoSelection: true,
            maxRequestPerListing: "",
            requireRequestMessage: true
        }
    })

    const onSubmit = (data: ListingFormSchema) => {
        // handle form submission, e.g., send data to API or update state
        console.log('Form submitted:', data);
    };



    return (
        <div className='p-4 md:p-6 rounded-lg border'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='grid hidden lg:block pb-6'>
                        <h4 className='text-md sm:text-[1.2rem] font-semibold text-[#222222]'>Interest Management Settings</h4>
                        <p className='text-gray-500 text-sm'>Configure how you handle interest from receivers</p>
                    </div>
                    <div className='py-6 border-t-0 lg:border-t  border-b '>
                        <h3 className="font-semibold text-[#222222] mb-8">Auto-Selection Settings</h3>
                        <FormField
                            control={form.control}
                            name="enableAutoSelection"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                        <div>
                                            <h4 className="font-semibold text-sm text-[#222222] mb-1">Enable auto-selection</h4>
                                            <p className="text-sm text-[#626262]">Automatically select a receiver when too many show interest</p>
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
                    </div>
                    <div className='py-6 w-full'>
                        <h3 className="font-semibold text-[#222222] mb-8">Request Management</h3>
                        <FormField
                            control={form.control}
                            name="maxRequestPerListing"
                            render={({ field }) => (
                                <FormItem className="mb-6 col-span-2 lg:col-auto">
                                    <FormLabel className="text-gray-500">Maximum requests per listing</FormLabel>
                                    <Select onValueChange={field.onChange} value={field.value || ""}>
                                        <FormControl>
                                            <SelectTrigger className="py-6 w-full shadow-none">
                                                <SelectValue placeholder="Select an option" />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                                            <SelectItem value="1" className="py-3 px-4">1</SelectItem>
                                            <SelectItem value="2" className="py-3 px-4">2</SelectItem>
                                            <SelectItem value="3" className="py-3 px-4">3</SelectItem>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="requireRequestMessage"
                            render={({ field }) => (
                                <FormItem>
                                    <div className="w-full bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                        <div>
                                            <h4 className="font-semibold text-sm text-[#222222] mb-1">Require request message</h4>
                                            <p className="text-sm text-[#626262]">Receivers must explain why they need the item</p>
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
                        <div className="px-4 md:px-6 mt-10 py-6 bg-[#E7EFF9] rounded-lg border border-[#D4E6FF]">
                            <p className="text-sm leading-6 text-[#2563EB]"><span className='font-bold'>Note</span>: You'll always receive notifications when someone  shows interest in your items, regardless of auto-selection settings.  Auto-selection only applies when the interest threshold is reached.</p>
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

export default InterestManagement