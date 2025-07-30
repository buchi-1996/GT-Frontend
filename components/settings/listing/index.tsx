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
    defaultCategory: z.string(),
    defaultCondition: z.string(),
    setDaily: z.boolean().optional(),
    setWeekly: z.boolean().optional(),
    setWeekend: z.boolean().optional(),
    autoRepost: z.boolean().optional()

});

type ListingFormSchema = z.infer<typeof listingFormSchema>;



const ListingView = () => {

    const form = useForm<ListingFormSchema>({
        resolver: zodResolver(listingFormSchema),
        defaultValues: {
            defaultCategory: "",
            defaultCondition: "",
            setDaily: false,
            setWeekly: true,
            setWeekend: true,
            autoRepost: true
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
                        <h4 className='text-md sm:text-[1.2rem] font-semibold text-[#222222]'>Item Listing Preferences</h4>
                        <p className='text-gray-500 text-sm'>Set default settings for your item listings</p>
                    </div>
                    <div className='py-6 border-t-0 lg:border-t border-t-0 lg:border-b '>
                        <h3 className="font-semibold text-[#222222] mb-8">Default Listings</h3>

                        <div className="grid grid-cols-2 items-baseline gap-y-8 gap-x-4 pb-2">
                            <FormField
                                control={form.control}
                                name="defaultCategory"
                                render={({ field }) => (
                                    <FormItem className="col-span-2 lg:col-auto">
                                        <FormLabel className="text-gray-500">Default Category</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value || ""}>
                                            <FormControl>
                                                <SelectTrigger className="py-6 w-full shadow-none">
                                                    <SelectValue placeholder="Select an option" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                                                <SelectItem value="electronics" className="py-3 px-4">Electronics</SelectItem>
                                                <SelectItem value="home_and_furniture" className="py-3 px-4">Home & Funitures</SelectItem>
                                                <SelectItem value="Office" className="py-3 px-4">Office</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="defaultCondition"
                                render={({ field }) => (
                                    <FormItem className="col-span-2 lg:col-auto">
                                        <FormLabel className="text-gray-500">Default Condition</FormLabel>
                                        <Select onValueChange={field.onChange} value={field.value || ""}>
                                            <FormControl>
                                                <SelectTrigger className="py-6 w-full shadow-none">
                                                    <SelectValue placeholder="Select an option" />
                                                </SelectTrigger>
                                            </FormControl>
                                            <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                                                <SelectItem value="male" className="py-3 px-4">Good</SelectItem>
                                                <SelectItem value="female" className="py-3 px-4">Needs Repair</SelectItem>
                                                <SelectItem value="other" className="py-3 px-4">Like New</SelectItem>
                                            </SelectContent>
                                        </Select>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                    </div>


                    <div className='grid border-b gap-4 py-6'>
                        <h3 className="font-semibold text-[#222222] mb-6">Pickup Availability Settings</h3>
                        <div className='grid gap-4'>
                            <FormField
                                control={form.control}
                                name="setDaily"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Set availability per day</h4>
                                                <p className="text-sm text-[#626262]">Mon, tue, wed, thu, fri, sat, sun pickup times</p>
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
                            <FormField
                                control={form.control}
                                name="setWeekly"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Weekday availability</h4>
                                                <p className="text-sm text-[#626262]">Monday through Friday pickup times</p>
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
                            <FormField
                                control={form.control}
                                name="setWeekend"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Weekend availability</h4>
                                                <p className="text-sm text-[#626262]">Saturday and Sunday pickup times</p>
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
                    </div>
                    <div className='grid border-b gap-4 py-6'>
                        <h3 className="font-semibold text-[#222222] mb-6">Auto-Management Settings</h3>
                        <div className='grid gap-4'>
                            <FormField
                                control={form.control}
                                name="autoRepost"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Auto-repost expired listings</h4>
                                                <p className="text-sm text-[#626262]">Automatically repost listings after 48hrs of expiring </p>
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

export default ListingView