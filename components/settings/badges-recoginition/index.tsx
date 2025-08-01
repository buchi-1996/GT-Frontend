"use client"

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { FormField, FormItem, FormControl } from "@/components/ui/form"
import { z } from 'zod';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const badgesAndRecognitionSchema = z.object({
    showBadgesOnProfile: z.boolean().optional(),
    allowBadgeSharing: z.boolean().optional(),
    showAchievements: z.boolean().optional(),
    badgeEarnedNotification: z.boolean().optional(),
    badgeSuggestions: z.boolean().optional(),


})

type BadgesAndRecognitionSchemaData = z.infer<typeof badgesAndRecognitionSchema>;
const BadgesAndRecognitionView = () => {


    const form = useForm<BadgesAndRecognitionSchemaData>({
        resolver: zodResolver(badgesAndRecognitionSchema),
        defaultValues: {
            showBadgesOnProfile: true,
            allowBadgeSharing: false,
            badgeEarnedNotification: true,
            badgeSuggestions: false,
        }
    })


    const onSubmit = (data: BadgesAndRecognitionSchemaData) => {
        // handle form submission, e.g., send data to API or update state
        console.log('Form submitted:', data);
    };


    return (
        <div className='p-4 md:p-6 rounded-lg border'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='grid hidden lg:block pb-6'>
                        <h4 className='text-md sm:text-[1.2rem] font-semibold text-[#222222]'>Badges & Recognition Settings</h4>
                        <p className='text-gray-500 text-sm'>Manage how badges are displayed and when you&apos;re notified about achievements</p>
                    </div>
                    <div className='py-6  border-t-0 lg:border-t border-b'>
                        <h3 className="font-semibold text-[#222222] mb-8">Badge Display Settings Visibility</h3>
                        <div className="grid gap-6">
                            <FormField
                                control={form.control}
                                name="showBadgesOnProfile"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Show Badges on Profile</h4>
                                                <p className="text-sm text-[#626262]">Display your earned badges on your profile page</p>
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
                                name="allowBadgeSharing"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Allow Badge Sharing</h4>
                                                <p className="text-sm text-[#626262]">Let others share screenshots of your badge achievements</p>
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
                    <div className='py-6 border-b '>
                        <h3 className="font-semibold text-[#222222] mb-8">Badge Notifications</h3>
                        <div className="grid gap-6">
                            <FormField
                                control={form.control}
                                name="badgeEarnedNotification"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Badge Earned Notifications</h4>
                                                <p className="text-sm text-[#626262]">Get notified when you earn a new badge</p>
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
                                name="badgeSuggestions"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Badge Suggestions</h4>
                                                <p className="text-sm text-[#626262]">Receive suggestions on badges you can earn based on your activity</p>
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

export default BadgesAndRecognitionView