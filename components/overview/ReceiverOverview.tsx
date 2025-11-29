"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useAppDispatch } from "@/hooks/redux-hooks"
import { openSheet } from "@/redux/slices/modalSlice"
import ColoredStatsCard from "../usercard/ColoredStatsCard"
import Image from "next/image"
import ItemAds from "../usercard/ItemAds"
import Link from "next/link"
import { Badge } from "../ui/badge"
import { HoverCard, HoverCardContent, HoverCardTrigger } from "../ui/hover-card"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import AllActivities from "../shared/AllActivities"
import { Button } from "../ui/button"


const ReceiverOverview = () => {
    const dispatch = useAppDispatch()


    return (
        <main className="grid gap-10">
            <div className="grid grid-cols-2 xl:grid-cols-5 gap-2 gap-4">
                <ColoredStatsCard
                    href="/receiver/dashboard/requests"
                    title="Active requests"
                    count={3}
                    bgColor="#E2F4E8"
                    Icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#14AE7D" strokeLinejoin="round" strokeWidth="1.25" d="m4.167 5.833-1.016.677c-.728.486-1.092.728-1.289 1.098-.197.37-.196.806-.193 1.676.004 1.047.013 2.114.04 3.194.064 2.562.096 3.843 1.038 4.785.942.942 2.24.975 4.837 1.04 1.616.04 3.217.04 4.832 0 2.597-.065 3.896-.098 4.838-1.04.942-.942.974-2.223 1.038-4.785.027-1.08.036-2.147.04-3.194.003-.87.004-1.306-.193-1.676-.197-.37-.561-.612-1.29-1.098l-1.015-.677" /><path stroke="#14AE7D" strokeLinejoin="round" strokeWidth="1.25" d="m1.667 8.333 5.76 3.457c1.254.752 1.88 1.128 2.573 1.128.692 0 1.319-.377 2.572-1.128l5.761-3.457" /><path stroke="#14AE7D" stroke-width="1.25" d="M4.167 10V5c0-1.571 0-2.357.488-2.845s1.273-.488 2.845-.488h5c1.571 0 2.357 0 2.845.488s.488 1.274.488 2.845v5" /><path stroke="#14AE7D" strokeLinecap="round" strokeWidth="1.25" d="M8.134 5.23c.67-.38 1.256-.227 1.607.017.145.1.217.15.259.15.042 0 .114-.05.259-.15.351-.244.936-.398 1.607-.017.88.5 1.079 2.148-.95 3.54-.387.264-.58.397-.916.397-.335 0-.529-.133-.915-.398-2.03-1.39-1.83-3.04-.95-3.539Z" /></svg>}
                />
                <ColoredStatsCard
                    href="/receiver/dashboard/requests?tab=approved"
                    title="Approved"
                    count={2}
                    bgColor="#E7EFF9"
                    Icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#4671FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M10.834 16.92a2.197 2.197 0 0 1-2.158-.28c-2.351-1.758-7.009-5.777-7.009-9.394 0-2.391 1.754-4.329 4.167-4.329 1.25 0 2.5.417 4.166 2.083 1.667-1.666 2.917-2.083 4.167-2.083 2.412 0 4.167 1.938 4.167 4.329 0 .36-.046.723-.132 1.088" /><path stroke="#4671FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M11.667 14.166s.833 0 1.667 1.667c0 0 2.647-4.167 5-5" /></svg>}
                />
                <ColoredStatsCard
                    href="/receiver/dashboard/pickup?tab=picked-up"
                    title="Items received"
                    count={1}
                    bgColor="#F1F3DE"
                    Icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M17.5 5.833V10m-15-4.167v8.468c0 1.152 1.621 1.837 4.864 3.207 1.303.55 1.954.825 2.636.825V9.462M12.5 15.833s.73 0 1.458 1.667c0 0 2.316-4.167 4.375-5" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M6.938 8.076 4.504 6.9C3.168 6.252 2.5 5.929 2.5 5.417s.668-.835 2.004-1.482l2.434-1.177C8.441 2.03 9.192 1.667 10 1.667c.808 0 1.56.363 3.062 1.09l2.434 1.178c1.336.647 2.004.97 2.004 1.482s-.668.835-2.004 1.482l-2.434 1.177c-1.503.727-2.254 1.091-3.062 1.091-.808 0-1.56-.364-3.062-1.09ZM5 10l1.667.833M14.166 3.333 5.833 7.5" /></svg>}
                />
                <ColoredStatsCard
                    href="/receiver/dashboard/pickup"
                    title="Pickups"
                    count={1}
                    bgColor="#F6EAFD"
                    Icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#B36ADD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M9.167 18.333c-.682 0-1.333-.275-2.636-.825-3.243-1.37-4.864-2.055-4.864-3.207V5.833m7.5 12.5V9.462m0 8.871c.284 0 .539-.048.833-.143m6.667-12.357v3.75M15 15l.755-.754m2.579.754a3.333 3.333 0 1 0-6.667 0 3.333 3.333 0 0 0 6.667 0ZM6.105 8.076 3.671 6.9c-1.336-.647-2.004-.97-2.004-1.482s.668-.835 2.004-1.482l2.434-1.177C7.608 2.03 8.36 1.667 9.167 1.667c.808 0 1.56.363 3.062 1.09l2.434 1.178c1.336.647 2.004.97 2.004 1.482s-.668.835-2.004 1.482L12.23 8.076c-1.503.727-2.254 1.091-3.062 1.091-.808 0-1.56-.364-3.062-1.09ZM4.167 10l1.667.833M13.333 3.333 5 7.5" /></svg>}
                />
                <ColoredStatsCard
                    href="/receiver/dashboard/saved-items"
                    title="Saved Items"
                    count={10}
                    bgColor="#F9EEE7"
                    Icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#F97311" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M8.676 16.64c-2.351-1.758-7.009-5.777-7.009-9.394 0-2.391 1.754-4.329 4.167-4.329 1.25 0 2.5.417 4.166 2.083 1.667-1.666 2.917-2.083 4.167-2.083 2.412 0 4.167 1.938 4.167 4.329 0 3.617-4.658 7.636-7.01 9.394a2.198 2.198 0 0 1-2.648 0Z" /></svg>}
                />

            </div>
            <div className="grid grid-cols-1 items-stretch  xl:grid-cols-2 gap-8">
                {/* Left Column */}
                {/* Recent Activity */}
                <Card className="shadow-none border">
                    <CardHeader className="px-4 md:px-6 py-2">
                        <CardTitle className="flex items-center md:items-start  justify-between text-md sm:text-[1rem] text-[#222222]">
                            <span>Activity History</span>
                            <button onClick={() => dispatch(openSheet({content: <AllActivities />}))} className="cursor-pointer text-sm font-medium text-app-primary">View All</button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 md:px-6 py-2">
                        {/* <div className="text-center text-sm sm:text-md text-[#626262]">No recent activity</div> */}
                        <div className="grid gap-6">
                            <div className="flex gap-4 items-start">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#14AE7D" strokeLinejoin="round" strokeWidth="1.25" d="m4.167 5.833-1.016.677c-.728.486-1.092.728-1.289 1.098-.197.37-.196.806-.193 1.676.004 1.047.013 2.114.04 3.194.064 2.562.096 3.843 1.038 4.785.942.942 2.24.975 4.837 1.04 1.616.04 3.217.04 4.832 0 2.597-.065 3.896-.098 4.838-1.04.942-.942.974-2.223 1.038-4.785.027-1.08.036-2.147.04-3.194.003-.87.004-1.306-.193-1.676-.197-.37-.561-.612-1.29-1.098l-1.015-.677" /><path stroke="#14AE7D" strokeLinejoin="round" strokeWidth="1.25" d="m1.667 8.333 5.76 3.457c1.254.752 1.88 1.128 2.573 1.128.692 0 1.319-.377 2.572-1.128l5.761-3.457" /><path stroke="#14AE7D" stroke-width="1.25" d="M4.167 10V5c0-1.571 0-2.357.488-2.845s1.273-.488 2.845-.488h5c1.571 0 2.357 0 2.845.488s.488 1.274.488 2.845v5" /><path stroke="#14AE7D" strokeLinecap="round" strokeWidth="1.25" d="M8.134 5.23c.67-.38 1.256-.227 1.607.017.145.1.217.15.259.15.042 0 .114-.05.259-.15.351-.244.936-.398 1.607-.017.88.5 1.079 2.148-.95 3.54-.387.264-.58.397-.916.397-.335 0-.529-.133-.915-.398-2.03-1.39-1.83-3.04-.95-3.539Z" /></svg>
                                </span>
                                <div className="grid gap-1">
                                    <h4 className="text-sm text-gray-700 font-medium">You requested for kitchen appliance set</h4>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#F97311" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M8.676 16.64c-2.351-1.758-7.009-5.777-7.009-9.394 0-2.391 1.754-4.329 4.167-4.329 1.25 0 2.5.417 4.166 2.083 1.667-1.666 2.917-2.083 4.167-2.083 2.412 0 4.167 1.938 4.167 4.329 0 3.617-4.658 7.636-7.01 9.394a2.198 2.198 0 0 1-2.648 0Z" /></svg>
                                </span>
                                <div className="grid gap-1">
                                    <h4 className="text-sm text-gray-700 font-medium">Hisense TV added to your saved items</h4>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M17.5 5.833V10m-15-4.167v8.468c0 1.152 1.621 1.837 4.864 3.207 1.303.55 1.954.825 2.636.825V9.462M12.5 15.833s.73 0 1.458 1.667c0 0 2.316-4.167 4.375-5" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M6.938 8.076 4.504 6.9C3.168 6.252 2.5 5.929 2.5 5.417s.668-.835 2.004-1.482l2.434-1.177C8.441 2.03 9.192 1.667 10 1.667c.808 0 1.56.363 3.062 1.09l2.434 1.178c1.336.647 2.004.97 2.004 1.482s-.668.835-2.004 1.482l-2.434 1.177c-1.503.727-2.254 1.091-3.062 1.091-.808 0-1.56-.364-3.062-1.09ZM5 10l1.667.833M14.166 3.333 5.833 7.5" /></svg>
                                </span>
                                <div className="grid gap-1">
                                    <h4 className="text-sm text-gray-700 font-medium">You confirmed pickup for guiter</h4>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m11.44 2.87 1.466 2.958c.2.411.733.806 1.183.882l2.658.445c1.7.286 2.1 1.53.875 2.756l-2.066 2.083c-.35.353-.542 1.034-.434 1.52l.592 2.58c.467 2.042-.608 2.831-2.4 1.764l-2.491-1.487c-.45-.268-1.192-.268-1.65 0l-2.491 1.487c-1.783 1.067-2.867.27-2.4-1.764l.592-2.58c.108-.486-.084-1.167-.434-1.52L2.374 9.911c-1.217-1.227-.825-2.47.875-2.756l2.658-.445c.441-.076.975-.47 1.175-.882L8.548 2.87c.8-1.604 2.1-1.604 2.892 0Z" /></svg>
                                </span>
                                <div className="grid gap-1">
                                    <h4 className="text-sm text-gray-700 font-medium">You gave Sarah 5 star rating</h4>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>

                        </div>
                    </CardContent>
                </Card>
                {/* Your Badges */}
                <Card className="border shadow-none">
                    <CardHeader className="px-4 md:px-6 py-2">
                        <CardTitle className="flex items-center md:items-start justify-between text-md sm:text-[1rem] text-[#222222]">
                            <span>Upcoming pickups</span>
                            <Link href="/receiver/dashboard/pickup" className="cursor-pointer text-sm font-medium text-app-primary">View All</Link>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 md:px-6 pb-2">
                        <ItemAds
                            itemName="Vintage Desk Lamp"
                            itemImage="/assets/giver-items/Frame 2087328010-2.png"
                            pickUpInfo="From Sarah Johnson • Tomorrow at 6:00 PM"
                        />
                        <ItemAds
                            itemName="Kitchen Blender"
                            itemImage="/assets/giver-items/Frame 2087328010-3.png"
                            pickUpInfo="From Emma Davis • Tomorrow at 6:00 PM"
                        />
                        <ItemAds
                            itemName="Pair of Shoes"
                            itemImage="/assets/giver-items/Frame 2087328010-4.png"
                            pickUpInfo="From Emma Davis • Tomorrow at 6:00 PM"
                        />


                    </CardContent>
                </Card>
            </div>
            <div className="hidden xl:block bg-gray-50 rounded-lg p-4 sm:p-6 ">
                <h2 className="text-md sm:text-[1.2rem] font-semibold text-[#222222] mb-4">Recommended for You</h2>
                <div className="grid grid-cols-3 gap-4">
                    <div className='bg-white rounded-xl overflow-hidden'>
                        <div className='relative'>
                            <Image
                                src="/assets/pickup-items/9df6ff8665696f806e931303f6305ec6e85e89d0.png"
                                alt="pickup Item"
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
                                            <h3 className="font-normal text-xs capitalize text-nowrap text-gray-500 flex gap-2 ">Sarah Johnson <span className='flex gap-2 items-center'>• 2.3 miles away</span></h3>
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
                                <Button variant="primary" className='py-5'>View item</Button>
                                <Button variant="secondary" className='py-5'>Save</Button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl overflow-hidden'>
                        <div className='relative'>
                            <Image
                                src="/assets/pickup-items/784da646fdfff6ab6ab6f264d9398ef12487da91.png"
                                alt="pickup Item"
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
                                            <h3 className="font-normal text-xs capitalize text-nowrap text-gray-500 flex gap-2 ">Sarah Johnson <span className='flex gap-2 items-center'>• 2.3 miles away</span></h3>
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
                                <Button variant="primary" className='py-5'>View item</Button>
                                <Button variant="secondary" className='py-5'>Save</Button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl overflow-hidden'>
                        <div className='relative'>
                            <Image
                                src="/assets/pickup-items/25835741f491fb4b75bdc185641ce312b124764a.png"
                                alt="pickup Item"
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
                                            <h3 className="font-normal text-xs capitalize text-nowrap text-gray-500 flex gap-2 ">Sarah Johnson <span className='flex gap-2 items-center'>• 2.3 miles away</span></h3>
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
                                <Button variant="primary" className='py-5'>View item</Button>
                                <Button variant="secondary" className='py-5'>Save</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="block xl:hidden bg-gray-50 w-full overflow-x-hidden rounded-lg py-6">
                <h2 className="mx-4 text-md sm:text-[1.2rem] font-semibold text-[#222222] mb-4">Recommended for You</h2>

                <div className="flex flex-row items-center gap-4 overflow-x-auto scrollbar-hide">
                    <div className='bg-white ml-4 min-w-80 rounded-xl  overflow-hidden'>
                        <div className='relative'>
                            <Image
                                src="/assets/pickup-items/9df6ff8665696f806e931303f6305ec6e85e89d0.png"
                                alt="pickup Item"
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
                                            <h3 className="font-normal text-xs capitalize text-nowrap text-gray-500 flex gap-2 ">Sarah Johnson <span className='flex gap-2 items-center'>• 2.3 miles away</span></h3>
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
                                <Button variant="primary" className='py-5'>View item</Button>
                                <Button variant="secondary" className='py-5'>Save</Button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white min-w-80 rounded-xl overflow-hidden'>
                        <div className='relative'>
                            <Image
                                src="/assets/pickup-items/784da646fdfff6ab6ab6f264d9398ef12487da91.png"
                                alt="pickup Item"
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
                                            <h3 className="font-normal text-xs capitalize text-nowrap text-gray-500 flex gap-2 ">Sarah Johnson <span className='flex gap-2 items-center'>• 2.3 miles away</span></h3>
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
                                <Button variant="primary" className='py-5'>View item</Button>
                                <Button variant="secondary" className='py-5'>Save</Button>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white mr-4 min-w-80 rounded-xl  overflow-hidden'>
                        <div className='relative'>
                            <Image
                                src="/assets/pickup-items/25835741f491fb4b75bdc185641ce312b124764a.png"
                                alt="pickup Item"
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
                                            <h3 className="font-normal text-xs capitalize text-nowrap text-gray-500 flex gap-2 ">Sarah Johnson <span className='flex gap-2 items-center'>• 2.3 miles away</span></h3>
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
                                <Button variant="primary" className='py-5'>View item</Button>
                                <Button variant="secondary" className='py-5'>Save</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )

}

export default ReceiverOverview