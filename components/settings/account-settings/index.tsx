"use client"

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { z } from 'zod';



const accountSettingsSchema = z.object({
    displayLanguage: z.string(),
    displayCurrency: z.string()

})

type AccountSettingsSchemaData = z.infer<typeof accountSettingsSchema>;

const AccountSettingsView = () => {

    const form = useForm<AccountSettingsSchemaData>({
        resolver: zodResolver(accountSettingsSchema),
        defaultValues: {
            displayLanguage: "",
            displayCurrency: ""

        }
    })


    const onSubmit = (data: AccountSettingsSchemaData) => {
        // handle form submission, e.g., send data to API or update state
        console.log('Form submitted:', data);
    };

    return (
        <div className='p-4 md:p-6 rounded-lg border'>
            <div className='grid hidden lg:block pb-6'>
                <h4 className='text-md sm:text-[1.2rem] font-semibold text-[#222222]'>Account Settings</h4>
                <p className='text-gray-500 text-sm'>Manage your account preferences, data, and connected services</p>
            </div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='py-6 border-t-0 lg:border-t  border-b '>
                        <h3 className="font-semibold text-[#222222] mb-8">Language & Regional Settings</h3>

                        <div className='grid grid-cols-1 lg:grid-cols-2 items-baseline gap-8 md:gap-6'>
                            <FormField
                                control={form.control}
                                name="displayLanguage"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-500">Display Language</FormLabel>
                                        <FormControl>
                                            <Select onValueChange={field.onChange} value={field.value || ""}>
                                                <FormControl>
                                                    <SelectTrigger className="py-6 w-full shadow-none">
                                                        <SelectValue placeholder="English" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                                                    <SelectItem value="english" className="py-3 px-4">English</SelectItem>
                                                    <SelectItem value="dutch" className="py-3 px-4">Dutch</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="displayCurrency"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="text-gray-500">Display Currency (informational only)</FormLabel>
                                        <FormControl>
                                            <Select defaultValue={field.value || ""} onValueChange={field.onChange} value={field.value || ""}>
                                                <FormControl>
                                                    <SelectTrigger className="py-6 w-full shadow-none">
                                                        <SelectValue placeholder="Euro (€)" />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                                                    <SelectItem value="euro" className="py-3 px-4">Euro (€)</SelectItem>
                                                    <SelectItem value="usd" className="py-3 px-4">Usd ($)</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>
                    <div className='py-6 border-b'>
                        <h3 className="font-semibold text-[#222222] mb-8">Connected Social Media</h3>
                        <div className="grid gap-6">
                            <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                <div>
                                    <h4 className="font-semibold text-sm text-[#222222] mb-1">Push Notifications</h4>
                                    <p className="text-sm text-[#626262]">Receive notifications on your device</p>
                                </div>
                                <Button className='cursor-pointer py-5 bg-white text-gray-600 shadow-none border hover:bg-white hover:text-gray-600'>Connect</Button>
                            </div>
                            <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                <div>
                                    <h4 className="font-semibold text-sm text-[#222222] mb-1">Push Notifications</h4>
                                    <p className="text-sm text-[#626262]">Receive notifications on your device</p>
                                </div>
                                <Button className='cursor-pointer py-5 bg-white text-gray-600 shadow-none border hover:bg-white hover:text-gray-600'>Connect</Button>
                            </div>
                            <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                <div>
                                    <h4 className="font-semibold text-sm text-[#222222] mb-1">Push Notifications</h4>
                                    <p className="text-sm text-[#626262]">Receive notifications on your device</p>
                                </div>
                                <Button className='cursor-pointer py-5 bg-white text-red-500 shadow-none border hover:bg-white hover:text-red-500'>Disconnect</Button>
                            </div>
                        </div>
                        <div className="px-4 md:px-6 py-6 bg-[#E7EFF9] rounded-lg border border-[#D4E6FF] mt-8">
                            <p className="text-sm leading-6 text-[#2563EB]"> <span className='font-semibold'>Note</span>: Connecting social media accounts is optional and allows you to easily share your giving activities with your networks to inspire others.</p>
                        </div>
                    </div>
                    <div className='py-6 border-b'>
                        <h3 className="font-semibold text-[#222222] mb-8">Data & Activity Management</h3>
                        <div className="grid gap-6">
                            <div className="bg-[#f9fafb] p-4 rounded-lg flex flex-col lg:flex-row items-center  gap-4 justify-between">
                                <div>
                                    <h4 className="font-semibold text-sm text-[#222222] mb-1">Download Your Data</h4>
                                    <p className="text-sm text-[#626262]">Download a copy of your account data including listings, recipients, and feedback</p>
                                </div>
                                <Button className='cursor-pointer w-full lg:w-auto py-5 bg-white text-gray-600 shadow-none border hover:bg-white hover:text-gray-600'>Download</Button>
                            </div>

                            <div className="bg-[#f9fafb] p-4 rounded-lg flex flex-col lg:flex-row items-center  gap-4 justify-between">
                                <div>
                                    <h4 className="font-semibold text-sm text-[#222222] mb-1">Activity History</h4>
                                    <p className="text-sm text-[#626262]">View your complete giving history, feedback received, and community interactions</p>
                                </div>
                                <Button className='cursor-pointer w-full lg:w-auto py-5 bg-white text-gray-600 shadow-none border hover:bg-white hover:text-gray-600'>View History</Button>
                            </div>
                        </div>

                    </div>
                    <div className='py-6 border-b'>
                        <h3 className="font-semibold text-[#222222] mb-8">Account Actions</h3>
                        <div className="grid gap-6">
                            <div className="bg-[#f9fafb] p-4 rounded-lg flex flex-col lg:flex-row  items-center  gap-4 justify-between">
                                <div>
                                    <h4 className="font-semibold text-sm text-[#222222] mb-1">Deactivate Account</h4>
                                    <p className="text-sm text-[#626262]">Temporarily disable your account. You can reactivate it anytime by logging in.</p>
                                </div>
                                <Button variant="destructive" className='w-full lg:w-auto cursor-pointer py-5'>Deactivate</Button>
                            </div>

                            <div className="bg-[#f9fafb] p-4 rounded-lg flex flex-col lg:flex-row  items-center  gap-4 justify-between">
                                <div>
                                    <h4 className="font-semibold text-sm text-[#222222] mb-1">Delete Account</h4>
                                    <p className="text-sm text-[#626262]">Permanently delete your account and all associated data. This action cannot be undone.</p>
                                </div>
                                <Button className='w-full lg:w-auto cursor-pointer py-5 bg-red-600 text-white shadow-none border hover:bg-red-700 hover:text-white'>Delete</Button>
                            </div>
                        </div>

                    </div>
                    <div className="flex justify-end">
                        <Button
                            variant="primary"
                            type="submit"
                            className="py-6 mt-8"
                        >
                            Save Account Settings
                        </Button>
                    </div>
                </form>
            </Form>
        </div>
    )
}

export default AccountSettingsView