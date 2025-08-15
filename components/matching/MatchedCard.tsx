"use client"

import React from 'react'
import { Card, CardContent } from '../ui/card'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { Trash2 } from 'lucide-react'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useUIState } from '@/hooks/useAppState'




const MatchedCard = () => {
    const isMobileBtn = useMediaQuery("(max-width: 768px)")
    const { setIsUnmatchedModal } = useUIState()

    const isIconBtn = isMobileBtn ? 'icon' : "default"

    return (
        <Card className="relative w-full xl:min-w-[550px] py-2 md:py-4 md:py-6 px-2 md:px-4 rounded-lg lg:rounded-none bg-transparent  lg:border-0 lg:border-b shadow-none" >
            <CardContent className="p-0">
                <div className=" flex flex-col 2xl:flex-row items-start 2xl:items-center justify-between gap-4">
                    <div className='border-b md:border-0 pb-3 md:pb-4 md:pb-0 w-full flex flex-row items-center lg:items-start gap-3 md:gap-6'>
                        <Image
                            width={200}
                            height={200}
                            src={"/assets/giver-items/Frame 2087328010-2.png"}
                            alt="Item Image"
                            className="w-20 md:w-24 h-16 md:h-18 rounded-lg object-cover"
                        />
                        <div className="flex-1">
                            <h2 className="text-sm lg:text-lg font-semibold text-[#222222] mb-2 truncate w-38 lg:w-full">Vintage Desk Lamp</h2>
                            <div className='flex flex-row items-start xl:items-center gap-4'>
                                <div className='flex gap-3 flex-row items-center'>
                                    <Avatar className="w-6 h-6">
                                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                        <AvatarFallback className="bg-[#0d9488] text-xs text-white">SJ</AvatarFallback>
                                    </Avatar>
                                    <h3 className="font-semibold text-sm md:text-md capitalize text-nowrap text-gray-500">Sarah Johnson</h3>
                                </div>
                                <div className='hidden my-2 sm:my-0 flex-wrap xl:flex xl:border-l xl:pl-3  items-center gap-4'>
                                    <Badge className={`font-semibold bg-[#2563EB] text-white py-1 lg:py-1 px-2 lg:px-3 rounded-full text-sm lg:text-md`}>10 pickups</Badge>
                                    <Badge className={`font-semibold bg-[#C00F0C] text-white py-1 lg:py-1 px-2 lg:px-3 rounded-full text-sm lg:text-md`}>2 no-show</Badge>
                                    <Badge className={`font-semibold bg-[#7C843D] text-white py-1 lg:py-1 px-2 lg:px-3 rounded-full text-sm lg:text-md`}>Joined 6 months ago</Badge>
                                    <Badge className={`font-semibold bg-[#5B5B5B] text-white py-1 lg:py-1 px-2 lg:px-3 rounded-full text-sm lg:text-md`}>5km away</Badge>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='flex xl:hidden myy-1 md:my-2 md:my-0 flex-wrap flex items-center gap-4'>
                        <Badge className={`font-normal bg-[#2563EB] text-white py-1 lg:py-1 px-2 lg:px-3 rounded-full text-xs`}>10 pickups</Badge>
                                    <Badge className={`font-normal bg-[#C00F0C] text-white py-1 lg:py-1 px-2 lg:px-3 rounded-full text-xs`}>2 no-show</Badge>
                                    <Badge className={`font-normal bg-[#7C843D] text-white py-1 lg:py-1 px-2 lg:px-3 rounded-full text-xs`}>Joined 6 months ago</Badge>
                                    <Badge className={`font-normal bg-[#5B5B5B] text-white py-1 lg:py-1 px-2 lg:px-3 rounded-full text-xs`}>5km away</Badge>
                    </div>
                    <div className='absolute top-3 md:top-6 right-2 md:right-4 xl:top-auto xl:right-auto xl:relative lg:mt-2 flex items-center gap-2 md:gap-3'>
                        <Button onClick={() => setIsUnmatchedModal(true)} variant="destructive" size={isIconBtn} className=' w-8 h-8 md:w-10 md:h-10 lg:h-0 lg:w-auto lg:py-6 bg-[#ffe8e8] text-red-500 shadow-none  cursor-pointer'>
                            <Trash2 size={8} className="size-4 md:size-5 block lg:hidden" />
                            <span className="hidden lg:block">
                                Un-Match
                            </span>
                        </Button>
                        <Button variant="primary" size={isIconBtn} className='py-4 px-[16px] lg:px-auto lg:py-6 w-6 h-6 md:w-10 md:h-10 lg:h-0 lg:w-auto'>
                            <span className="block lg:hidden text-white">
                                <svg
                                    className="size-[17px] m-0 p-0 md:size-[18px] font-bold stroke-2 text-white stroke-white"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="10"
                                    height="10"
                                    viewBox="0 0 24 24"
                                >
                                    <path stroke="currentColor" d="M8.5 14.5h7m-7-5H12"></path>
                                    <path
                                        stroke="currentColor"
                                        d="M14.17 20.89c4.184-.277 7.516-3.657 7.79-7.9.053-.83.053-1.69 0-2.52-.274-4.242-3.606-7.62-7.79-7.899a33 33 0 0 0-4.34 0c-4.184.278-7.516 3.657-7.79 7.9-.053.83-.053 1.69 0 2.52.1 1.545.783 2.976 1.588 4.184.467.845.159 1.9-.328 2.823-.35.665-.526.997-.385 1.237.14.24.455.248 1.084.263 1.245.03 2.084-.322 2.75-.813.377-.279.566-.418.696-.434s.387.09.899.3c.46.19.995.307 1.485.34 1.425.094 2.914.094 4.342 0Z"
                                    ></path>
                                </svg>
                            </span>
                            <span className="hidden lg:block">Send Message</span>
                        </Button>
                    </div>
                </div>

            </CardContent>
        </Card>
    )
}

export default MatchedCard