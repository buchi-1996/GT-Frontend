"use client"

import React from 'react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Badge } from '../ui/badge'
import { Button } from '../ui/button'
import { useMediaQuery } from '@/hooks/use-media-query'
import { useUIState } from '@/hooks/useAppState'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../ui/hover-card'




const MatchedCard = () => {
    const { setIsUnmatchedModal } = useUIState()


    return (
        <div className='rounded-xl border overflow-hidden'>
            <div className='relative'>
                <Image
                    src="/assets/pickup-items/26d5c2792470ae73a928ea3596432d5ae1d5b71d.png"
                    alt="Matched Item"
                    width={1000}
                    height={1000}
                    className="w-full h-48 object-cover"
                />
                <Badge className={`absolute bottom-5 right-5 font-semibold bg-[#F3EAFD] text-[#8E6ADD]  py-1 border-none px-2 lg:px-3 rounded-full text-xs lg:text-sm`}>Fair</Badge>
            </div>
            <div className='p-5'>
                <HoverCard>
                    <HoverCardTrigger className='cursor-default'>
                        <h4 className='font-[500px] text-md'>Sdorens 118&quot; Sofa Couch</h4>
                        <div className='flex gap-2 border-b pb-3 flex-row items-center'>
                            <Avatar className="w-6 h-6">
                                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                <AvatarFallback className="bg-[#0d9488] text-xs text-white">SJ</AvatarFallback>
                            </Avatar>
                            <div className='flex items-baseline  justify-between w-full'>
                                <h3 className="font-normal text-xs capitalize text-nowrap text-gray-500 flex gap-2 ">Sarah Johnson <span className='flex gap-2 items-center'>• 4 pickups • 0 no-show</span></h3>
                            </div>
                        </div>
                    </HoverCardTrigger>
                    <HoverCardContent align="start" className="w-80 shadow-2xl shadow-[#eeeeee] border-none">
                        <ul className="flex flex-col justify-between gap-4">
                            <li className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#14AE7D" strokeLinecap="round" strokeLinejoin="round" d="M10.666 1.334v2.667M5.333 1.334v2.667M8.667 2.666H7.333c-2.514 0-3.77 0-4.552.781C2 4.228 2 5.485 2 8v1.334c0 2.514 0 3.77.781 4.552.781.781 2.038.781 4.552.781h1.334c2.514 0 3.77 0 4.552-.781.781-.781.781-2.038.781-4.552V7.999c0-2.514 0-3.77-.781-4.552-.781-.781-2.038-.781-4.552-.781ZM2 6.666h12" /></svg>
                                </span>
                                <span className="text-sm text-gray-600">Member since January 2025</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" d="M8 14.666c-.545 0-1.067-.22-2.109-.66C3.297 12.91 2 12.362 2 11.44V4.666m6 10c.545 0 1.067-.22 2.109-.66C12.703 12.91 14 12.362 14 11.44V4.666m-6 10V7.569M5.55 6.462l-1.947-.943C2.534 5.002 2 4.743 2 4.334c0-.41.534-.668 1.603-1.185l1.948-.943C6.753 1.625 7.354 1.334 8 1.334c.646 0 1.247.29 2.45.872l1.947.943C13.466 3.666 14 3.925 14 4.334c0 .41-.534.668-1.603 1.185l-1.948.943c-1.202.581-1.803.872-2.449.872-.646 0-1.247-.29-2.45-.872ZM4 8l1.333.667M11.334 2.666 4.667 5.999" /></svg>
                                </span>
                                <span className="text-sm text-gray-600">4 pickups</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#C00F0C" strokeLinecap="round" strokeLinejoin="round" d="M3.35 14c.012-1.157.012-2.297.007-3.386m0 0c-.015-3.64-.082-6.706.106-7.919.244-1.575 2.799-.142 5.85 1.037l1.375.593c1.012.436 2.457 1.21 1.822 2.116-.261.372-.804.799-1.805 1.27l-7.348 2.903Z" /></svg>
                                </span>
                                <span className="text-sm text-gray-600">0 no-show</span>
                            </li>
                            <li className="flex gap-2 items-center">
                                <span>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.50197 2.79723L2.68339 3.27209C2.0246 3.65425 1.6952 3.84533 1.5141 4.16322C1.33301 4.4811 1.33301 4.86822 1.33301 5.64245V11.0855C1.33301 12.1028 1.33301 12.6115 1.56118 12.8945C1.71301 13.0829 1.92578 13.2095 2.16101 13.2515C2.51451 13.3146 2.94733 13.0635 3.81292 12.5614C4.40071 12.2204 4.96641 11.8663 5.66959 11.9623C5.98945 12.006 6.29455 12.1577 6.90474 12.4611L9.44734 13.7253C9.99727 13.9988 10.0023 14 10.6139 14H11.9997C13.2567 14 13.8853 14 14.2758 13.6009C14.6663 13.2017 14.6663 12.5593 14.6663 11.2745V6.781C14.6663 5.49615 14.6663 4.85373 14.2758 4.45459C13.8853 4.05544 13.2567 4.05544 11.9997 4.05544H10.6139C10.0023 4.05544 9.99727 4.05426 9.44734 3.7808L7.22627 2.67642C6.2989 2.21531 5.83522 1.98476 5.34126 2.00078C4.84729 2.01681 4.39885 2.27695 3.50197 2.79723Z" stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M5.33301 2V11.6667" stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M10 4.33398V13.6673" stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>

                                </span>
                                <span className="text-sm text-gray-600">2.4km away</span>
                            </li>
                        </ul>
                    </HoverCardContent>
                </HoverCard>
                <div className='grid grid-cols-2 gap-4 mt-4'>
                    <Button variant="secondary" className='py-5'>Send Message</Button>
                    <Button onClick={()=> setIsUnmatchedModal(true)} variant="destructive" className='py-5'>Un-Match</Button>
                </div>
            </div>
        </div >
    )
}

export default MatchedCard