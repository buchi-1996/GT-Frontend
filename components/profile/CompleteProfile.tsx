"use client"

import React from 'react'
import { Card, CardContent } from '../ui/card'
import CircularProgressWithCustomLabelDemo from './CompletionProgress'
import { ChevronRight} from 'lucide-react'
import Link from 'next/link'

const CompleteProfile = () => {
    return (
        <div className="flex flex-col gap-6 justify-between">
            <div className="flex-1 h-full flex flex-col gap-6">
                <Card className="bg-gradient-to-b w-full self-start from-[#E4E9CF] to-[#CCECE9] border-0 shadow-none py-5">
                    <CardContent className="flex justify-between gap-2 px-6">
                        <div className='grid gap-4'>
                            <p className='text-[#222222] font-semibold text-[1rem]'>Hi Joe, continue setting up your new account</p>
                            <span className="text-[#626262] text-md">3 of 5 task completed</span>
                        </div>
                        <div className='w-24'>
                            <CircularProgressWithCustomLabelDemo />
                        </div>
                    </CardContent>
                </Card>
                <ul className='grid gap-4 '>
                    <li>
                        <Link href="#" className="w-full">
                            <Card className="bg-[#ffffff] shadow-none border w-full h-auto py-6 border-gray-200">
                                <CardContent className="px-3 sm:px-5">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-[#222222]">Set up profile</p>
                                        <ChevronRight className="w-5 h-5 text-[#626262]" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="w-full">
                            <Card className="bg-[#ffffff] shadow-none border w-full h-auto py-6 border-gray-200">
                                <CardContent className="px-3 sm:px-5">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-[#222222]">Create listing</p>
                                        <ChevronRight className="w-5 h-5 text-[#626262]" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="w-full">
                            <Card className="bg-[#ffffff] shadow-none border w-full h-auto py-6 border-gray-200">
                                <CardContent className="px-3 sm:px-5">
                                    <div className="flex items-center justify-between">
                                        <p className="text-sm text-[#222222]">Verify ID for badges</p>
                                        <ChevronRight className="w-5 h-5 text-[#626262]" />
                                    </div>
                                </CardContent>
                            </Card>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className='grid gap-4 mt-2 md:mt-20'>
                <h4 className="text-md font-semibold text-app-black">Need Help?</h4>
                <Link href="/profile/edit" className="w-full">
                    <Card className="bg-[#ffffff] shadow-none border w-full h-auto py-6 border-gray-200">
                        <CardContent className="px-3 sm:px-5">
                            <div className="flex items-center justify-between">
                                <div className='flex items-center gap-2 justify-between'>
                                    <span>
                                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M21 5.8999V8.1499H3V5.8999C3 5.70099 3.07902 5.51022 3.21967 5.36957C3.36032 5.22892 3.55109 5.1499 3.75 5.1499H20.25C20.4489 5.1499 20.6397 5.22892 20.7803 5.36957C20.921 5.51022 21 5.70099 21 5.8999Z" fill="black" fillOpacity="0.04" />
                                            <path d="M20.25 4.3999H3.75C3.35218 4.3999 2.97064 4.55794 2.68934 4.83924C2.40804 5.12055 2.25 5.50208 2.25 5.8999V19.3999C2.25 19.7977 2.40804 20.1793 2.68934 20.4606C2.97064 20.7419 3.35218 20.8999 3.75 20.8999H20.25C20.6478 20.8999 21.0294 20.7419 21.3107 20.4606C21.592 20.1793 21.75 19.7977 21.75 19.3999V5.8999C21.75 5.50208 21.592 5.12055 21.3107 4.83924C21.0294 4.55794 20.6478 4.3999 20.25 4.3999ZM20.25 5.8999V7.3999H3.75V5.8999H20.25ZM20.25 19.3999H3.75V8.8999H20.25V19.3999ZM16.5 11.1499C16.5 12.3434 16.0259 13.488 15.182 14.3319C14.3381 15.1758 13.1935 15.6499 12 15.6499C10.8065 15.6499 9.66193 15.1758 8.81802 14.3319C7.97411 13.488 7.5 12.3434 7.5 11.1499C7.5 10.951 7.57902 10.7602 7.71967 10.6196C7.86032 10.4789 8.05109 10.3999 8.25 10.3999C8.44891 10.3999 8.63968 10.4789 8.78033 10.6196C8.92098 10.7602 9 10.951 9 11.1499C9 11.9456 9.31607 12.7086 9.87868 13.2712C10.4413 13.8338 11.2044 14.1499 12 14.1499C12.7957 14.1499 13.5587 13.8338 14.1213 13.2712C14.6839 12.7086 15 11.9456 15 11.1499C15 10.951 15.079 10.7602 15.2197 10.6196C15.3603 10.4789 15.5511 10.3999 15.75 10.3999C15.9489 10.3999 16.1397 10.4789 16.2803 10.6196C16.421 10.7602 16.5 10.951 16.5 11.1499Z" fill="#626262" />
                                        </svg>
                                    </span>
                                    <p className="text-sm text-[#222222]">Visit our Help Center</p>
                                </div>
                                <ChevronRight className="w-5 h-5 text-[#626262]" />
                            </div>
                        </CardContent>
                    </Card>
                </Link>
            </div>

        </div>
    )
}

export default CompleteProfile