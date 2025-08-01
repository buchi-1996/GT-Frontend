"use client"

import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form'
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react'
import { FormField, FormItem, FormControl} from "@/components/ui/form"
import { z } from 'zod';
import { Switch } from '@/components/ui/switch';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

const privacyVisibilitySchema = z.object({
    profileVisibility: z.string().optional(),
    showPastGivingHistory: z.boolean().optional(),
    showAchievements: z.boolean().optional(),
    allowPublicAcknowledgments: z.boolean().optional(),
    allowAnalytics: z.boolean().optional(),
    personalizedContents: z.boolean().optional(),


})

type PrivacyVisibilitySchemaData = z.infer<typeof privacyVisibilitySchema>;



const PrivacyAndVisibilityView = () => {


    const form = useForm<PrivacyVisibilitySchemaData>({
        resolver: zodResolver(privacyVisibilitySchema),
        defaultValues: {
            profileVisibility: "",
            showPastGivingHistory: true,
            showAchievements: false,
            allowPublicAcknowledgments: true,
            allowAnalytics: true,
            personalizedContents: false
        }
    })


    const onSubmit = (data: PrivacyVisibilitySchemaData) => {
        // handle form submission, e.g., send data to API or update state
        console.log('Form submitted:', data);
    };

    return (
        <div className='p-4 md:p-6 rounded-lg border'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className='grid hidden lg:block pb-6'>
                        <h4 className='text-md sm:text-[1.2rem] font-semibold text-[#222222]'>Privacy & Visibility Settings</h4>
                        <p className='text-gray-500 text-sm'>Control who can see your information and how it's used</p>
                    </div>
                    <div className='py-6  border-t-0 lg:border-t'>
                        <h3 className="font-semibold text-[#222222] mb-8">Profile Visibility</h3>
                        <FormField
                            control={form.control}
                            name="profileVisibility"
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <RadioGroup value={field.value || ""} onValueChange={field.onChange} className='grid gap-6'>
                                            <div className="flex items-start gap-3">
                                                <RadioGroupItem value="reschedule with the same person" className="ring ring-app-primary  text-app-primary" id="reschedule" />
                                                <Label htmlFor="reschedule" className="text-gray-500 grid gap-2">
                                                    <h4 className='text-gray-800 font-semibold'>Public</h4>
                                                    <p className='text-sm text-gray-500'>Anyone can view your profile</p>
                                                </Label>
                                            </div>

                                            <div className="flex items-start gap-3">
                                                <RadioGroupItem value="daily_digest" className="ring ring-app-primary  text-app-primary" id="daily_digest" />
                                                <Label htmlFor="daily_digest" className="text-gray-500 grid gap-2">
                                                    <h4 className='text-gray-800 font-semibold'>GT Members Only</h4>
                                                    <p className='text-sm text-gray-500'>Only GT members can view your profile</p>
                                                </Label>
                                            </div>
                                            <div className="flex items-start gap-3">
                                                <RadioGroupItem value="weekly_summary" className="ring ring-app-primary  text-app-primary" id="weekly_summary" />
                                                <Label htmlFor="weekly_summary" className="text-gray-500 grid gap-2">
                                                    <h4 className='text-gray-800 font-semibold'>Private</h4>
                                                    <p className='text-sm text-gray-500'>Only you can view your full profile</p>
                                                </Label>
                                            </div>
                                        </RadioGroup>
                                    </FormControl>
                                </FormItem>
                            )}
                        />


                    </div>
                    <div className='py-6 border-b '>
                        <h3 className="font-semibold text-[#222222] mb-8">Information Display</h3>
                        <div className="grid gap-6">
                            <FormField
                                control={form.control}
                                name="showPastGivingHistory"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Show Past Giving History</h4>
                                                <p className="text-sm text-[#626262]">Display your previous donations and items shared</p>
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
                                name="showAchievements"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Show Badge Achievements</h4>
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

                        </div>

                    </div>
                    <div className='py-6  border-b '>
                        <h3 className="font-semibold text-[#222222] mb-8">Public Recognition</h3>
                        <div className="grid gap-6">
                            <FormField
                                control={form.control}
                                name="allowPublicAcknowledgments"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Allow Public Acknowledgments</h4>
                                                <p className="text-sm text-[#626262]">Allow GT to mention you in campaigns and social media</p>
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
                            <div className="px-4 md:px-6 py-6 bg-[#E7EFF9] rounded-lg border border-[#D4E6FF]">
                                <p className="text-sm leading-6 text-[#2563EB]"> When enabled, GT may feature your giving activities in  community highlights, newsletters, or social media posts to inspire  others. Your full personal information will never be shared without  additional consent.</p>
                            </div>
                        </div>
                    </div>

                      <div className='py-6 border-b '>
                        <h3 className="font-semibold text-[#222222] mb-8">Data Usage Preferences</h3>
                        <div className="grid gap-6">
                            <FormField
                                control={form.control}
                                name="allowAnalytics"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Allow Analytics Data Collection</h4>
                                                <p className="text-sm text-[#626262]">Help improve GT by sharing anonymous usage data</p>
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
                                name="personalizedContents"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="bg-[#f9fafb] p-4 rounded-lg flex items-center  gap-4 justify-between">
                                            <div>
                                                <h4 className="font-semibold text-sm text-[#222222] mb-1">Personalized Content & Recommendations</h4>
                                                <p className="text-sm text-[#626262]">Receive content tailored to your interests and giving history</p>
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

export default PrivacyAndVisibilityView