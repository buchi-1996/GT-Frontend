"use client"

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { FormField, FormItem, FormLabel, FormControl } from "@/components/ui/form"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { z } from 'zod';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';


const notificationsViewSchema = z.object({
    emailNotifications: z.boolean().optional(),
    smsNotifications: z.boolean().optional(),
    pushNotifications: z.boolean().optional(),
    notificationFrequency: z.string().optional(),
    newInterestReceivedAlert: z.boolean().optional(),
    pickupRemindersAlert: z.boolean().optional(),
    feedbackAndThankyouNotesAlert: z.boolean().optional(),
    weeklyDigestSettings: z.object({
        dayOfWeek: z.string(),
        time: z.string()
    }).optional()

})

type NotificationsViewSchemaData = z.infer<typeof notificationsViewSchema>;

const NotificationsView = () => {



    const form = useForm<NotificationsViewSchemaData>({
        resolver: zodResolver(notificationsViewSchema),
        defaultValues: {
            emailNotifications: true,
            smsNotifications: false,
            pushNotifications: true,
            notificationFrequency: "",
            newInterestReceivedAlert: true,
            pickupRemindersAlert: false,
            feedbackAndThankyouNotesAlert: true,
            weeklyDigestSettings: {
                dayOfWeek: "",
                time: ""
            }

        }
    })


    const onSubmit = (data: NotificationsViewSchemaData) => {
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
                        <h3 className="font-semibold text-[#222222] mb-8">Notification Channels</h3>
                        <div className="grid gap-6">
                            <FormField
                                control={form.control}
                                name="emailNotifications"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Email Notifications</h4>
                                                <p className="text-sm text-[#626262]">Receive notifications via email</p>
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
                                name="smsNotifications"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">SMS Notifications</h4>
                                                <p className="text-sm text-[#626262]">Receive notifications via text message</p>
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
                                name="pushNotifications"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Push Notifications</h4>
                                                <p className="text-sm text-[#626262]">Receive notifications on your device</p>
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
                    <div className='py-6 border-b'>
                        <h3 className="font-semibold text-[#222222] mb-8">Notification Frequency</h3>
                        <FormField
                            control={form.control}
                            name="notificationFrequency"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <RadioGroup value={field.value || ""} onValueChange={field.onChange} className='grid gap-6'>
                                            <div className="flex items-start gap-3">
                                                <RadioGroupItem value="reschedule with the same person" className="ring ring-app-primary  text-app-primary" id="reschedule" />
                                                <Label htmlFor="reschedule" className="text-gray-500 grid gap-2">
                                                    <h4 className='text-gray-800 font-semibold'>Real-time</h4>
                                                    <p className='text-sm text-gray-500'>Receive notifications immediately</p>
                                                </Label>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <RadioGroupItem value="daily_digest" className="ring ring-app-primary  text-app-primary" id="daily_digest" />
                                                <Label htmlFor="daily_digest" className="text-gray-500 grid gap-2">
                                                    <h4 className='text-gray-800 font-semibold'>Daily Digest</h4>
                                                    <p className='text-sm text-gray-500'>Get a summary once per day</p>
                                                </Label>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <RadioGroupItem value="weekly_summary" className="ring ring-app-primary  text-app-primary" id="weekly_summary" />
                                                <Label htmlFor="weekly_summary" className="text-gray-500 grid gap-2">
                                                    <h4 className='text-gray-800 font-semibold'>Weekly Summary</h4>
                                                    <p className='text-sm text-gray-500'>Get a summary once per week</p>
                                                </Label>
                                            </div>
                                            <div className={`${field.value === "weekly_summary" ? 'block' : "hidden"} p-4 border rounded-lg`}>
                                                <h3 className="font-semibold text-[#222222] mb-8">Weekly Digest Settings</h3>
                                                <div className='grid grid-cols-1 md:grid-cols-2 items-baseline gap-8 md:gap-6'>
                                                    <FormField
                                                        control={form.control}
                                                        name="weeklyDigestSettings.dayOfWeek"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-gray-500">Day of Week</FormLabel>
                                                                <FormControl>
                                                                    <Select onValueChange={field.onChange} value={field.value || ""}>
                                                                        <FormControl>
                                                                            <SelectTrigger className="py-6 w-full shadow-none">
                                                                                <SelectValue placeholder="Select an option" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                                                                            <SelectItem value="monday" className="py-3 px-4">Monday</SelectItem>
                                                                            <SelectItem value="tuesday" className="py-3 px-4">Tuesday</SelectItem>
                                                                            <SelectItem value="wednesday" className="py-3 px-4">Wednesday</SelectItem>
                                                                        </SelectContent>
                                                                    </Select>
                                                                </FormControl>
                                                            </FormItem>
                                                        )}
                                                    />
                                                    <FormField
                                                        control={form.control}
                                                        name="weeklyDigestSettings.time"
                                                        render={({ field }) => (
                                                            <FormItem>
                                                                <FormLabel className="text-gray-500">Time</FormLabel>
                                                                <FormControl>
                                                                    <Select onValueChange={field.onChange} value={field.value || ""}>
                                                                        <FormControl>
                                                                            <SelectTrigger className="py-6 w-full shadow-none">
                                                                                <SelectValue placeholder="Select an option" />
                                                                            </SelectTrigger>
                                                                        </FormControl>
                                                                        <SelectContent className="shadow-xl w-full border-none px-1 py-2">
                                                                            <SelectItem value="11:00" className="py-3 px-4">11:00</SelectItem>
                                                                            <SelectItem value="13:00" className="py-3 px-4">13:00</SelectItem>
                                                                            <SelectItem value="16:00" className="py-3 px-4">16:00</SelectItem>
                                                                        </SelectContent>
                                                                    </Select>
                                                                </FormControl>
                                                            </FormItem>
                                                        )}
                                                    />
                                                </div>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>
                            )}
                        />


                    </div>
                    <div className='py-6  border-b '>
                        <h3 className="font-semibold text-[#222222] mb-8">Alert Types</h3>
                        <div className="grid gap-6">
                            <FormField
                                control={form.control}
                                name="newInterestReceivedAlert"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">New Interests Received</h4>
                                                <p className="text-sm text-[#626262]">When someone shows interest in your items</p>
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
                                name="pickupRemindersAlert"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Scheduled Pick-up Reminders</h4>
                                                <p className="text-sm text-[#626262]">Reminders about upcoming pickups</p>
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
                                name="feedbackAndThankyouNotesAlert"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Feedback & Thank-you Notes</h4>
                                                <p className="text-sm text-[#626262]">When receivers leave feedback or thank you</p>
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

export default NotificationsView