"use client"

import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { ChevronRight, Clock, StarIcon, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Badge } from '../ui/badge'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import Image from 'next/image'
import SortableList from './SortableList'
import { useUIState } from '@/hooks/useAppState'
import { useMediaQuery } from '@/hooks/use-media-query'
import ResponsiveModal from '../modal/ResponsiveModal'
import MatchedCard from './MatchedCard'

const items = [
    {
        id: "vintage-lamp",
        title: "Vintage Desk Lamp",
        status: "Needs Repair",
        category: "Home & Furniture",
        interestedCount: 5,
        image: "/assets/giver-items/Frame 2087328010-1.png",
    },
    {
        id: "office-chair",
        title: "Ergonomic Office Chair",
        status: "New",
        category: "Kitchenware",
        interestedCount: 3,
        image: "/assets/giver-items/Frame 2087328010-2.png",
    },
    {
        id: "coffee-table",
        title: "Wooden Coffee Table",
        status: "Fair",
        category: "Home & Furniture",
        interestedCount: 7,
        image: "/assets/giver-items/Frame 2087328010-3.png",
    },
    {
        id: "bookshelf",
        title: "5-Tier Bookshelf",
        status: "Good",
        category: "Home & Furniture",
        interestedCount: 2,
        image: "/assets/giver-items/Frame 2087328010-4.png",
    },
    {
        id: "dining-set",
        title: "Dining Table Set",
        status: "Like New",
        category: "Home & Furniture",
        interestedCount: 4,
        image: "/assets/giver-items/Frame 2087328010-5.png",
    },
]

const matchedUsers = [
    {
        id: "sarah",
        name: "Sarah Johnson",
        rating: 5.0,
        distance: "2.4km away",
        requestedTime: "1 day ago",
        joinedTime: "2 months ago",
        pickups: 3,
        noShowRecord: 0,
        message: "Hi there! I've been looking for a vintage desk lamp just like this for my home office. I would really appreciate it and would be able to pick it up anytime. Thanks for considering!",
        avatarFallback: "SJ",
        avatarBg: "bg-[#0d9488]"
    },
    {
        id: "michael",
        name: "Michael Chen",
        rating: 5.0,
        distance: "2.4km away",
        requestedTime: "1 day ago",
        joinedTime: "2 months ago",
        pickups: 3,
        noShowRecord: 0,
        message: "Hi there! I've been looking for a vintage desk lamp just like this for my home office. I would really appreciate it and would be able to pick it up anytime. Thanks for considering!",
        avatarFallback: "M",
        avatarBg: "bg-[#4c21a8]"
    },
    {
        id: "emma",
        name: "Emma Wilson",
        rating: 5.0,
        distance: "2.4km away",
        requestedTime: "1 day ago",
        joinedTime: "2 months ago",
        pickups: 3,
        noShowRecord: 0,
        message: "Hi there! I've been looking for a vintage desk lamp just like this for my home office. I would really appreciate it and would be able to pick it up anytime. Thanks for considering!",
        avatarFallback: "E",
        avatarBg: "bg-[#c2410c]"
    }
]

const getStatusColor = (status: string) => {
    switch (status) {
        case "Needs Repair":
            return "bg-[#ffe8e8] text-[#ed110e]"
        case "New":
            return "bg-[#E2F4E8] text-[#009975]"
        case "Fair":
            return "bg-[#F3EAFD] text-[#8E6ADD]"
        case "Good":
            return "bg-[#FFEDE1] text-[#FB923C]"
        case "Like New":
            return "bg-[#E7EFF9] text-[#2563EB]"
        default:
            return "bg-[#f8f9fa] text-[#6c757d]"
    }
}


const MactchingView = () => {
    const [activeTab, setActiveTab] = useState("pending")
    const [openItemId, setOpenItemId] = useState<string | null>(null)
    const [isGiftedModal, setIsGiftedModal] = useState(false)


    const { openCriteria, setOpenCriteria, openSheet, setIsSheetOpen, isOpen, setIsOpen } = useUIState()
    const isMobile = useMediaQuery("(max-width: 1280px)")

    const handleCriteriaShow = () => {
        if (isMobile) {
            openSheet(<SortableList />)
            setIsSheetOpen(true)
        }
        setOpenCriteria(true)
    }

    const handleItemToggle = (itemId: string) => {
        setOpenItemId(openItemId === itemId ? null : itemId)
    }

    const handleOpenchange = () => {
        setIsOpen(false)
    }

    const handleGiftItemClose = () => {
        setIsGiftedModal(false)
    }

    const handleGiftItem = () => {
        console.log("Item gifted successfully!");
        setIsOpen(false);
        setIsGiftedModal(true);
    }



    return (
        <div className="min-h-screen flex flex-row items-start gap-10">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-fit grid-cols-2 mb-6 gap-6 bg-gray-50 p-1 h-auto bg-transparent rounded-lg">
                    <TabsTrigger
                        value="pending"
                        className="data-[state=active]:bg-green-bg data-[state=active]:text-green-text data-[state=active]:shadow-none bg-transparent text-gray-600 hover:bg-gray-50 rounded-md px-3 py-2 text-[0.9rem]"
                    >
                        Pending
                    </TabsTrigger>
                    <TabsTrigger
                        value="matched"
                        className="data-[state=active]:bg-green-bg data-[state=active]:text-green-text data-[state=active]:shadow-none bg-transparent text-gray-400 hover:bg-gray-50 rounded-md px-3 py-2 text-[0.9rem]"
                    >
                        Matched
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="pending" className="mt-0">
                    <div className="flex gap-10">
                        {/* Main content area */}
                        <div className="flex-1">
                            <div className="grid gap-6 md:gap-8">
                                {items.map((item) => (
                                    <Collapsible
                                        key={item.id}
                                        open={openItemId === item.id}
                                        onOpenChange={() => handleItemToggle(item.id)}
                                    >
                                        <Card className="relative overflow-hidden w-full xl:min-w-[550px] pt-3 pb-2 md:pt-6 md:pb-4 px-3 md:px-6 bg-transparent border-b shadow-none">
                                            <CardContent className="p-0">
                                                <CollapsibleTrigger className="w-full cursor-pointer">
                                                    <div className="flex items-center lg:items-center justify-between gap-4">
                                                        <div className='flex flex-row items-center lg:items-start gap-4 md:gap-6'>
                                                            <Image
                                                                width={200}
                                                                height={200}
                                                                src={item.image || "/placeholder.svg"}
                                                                alt={item.title}
                                                                className="w-20 md:w-24 h-16 md:h-18 rounded-lg object-cover"
                                                            />
                                                            <div className="flex-1 text-left">
                                                                <h2 className="text-sm lg:text-lg font-semibold text-[#222222] mb-2 truncate w-38 lg:w-full">{item.title}</h2>
                                                                <div className="flex items-start lg:items-center gap-2 md:gap-3">
                                                                    <Badge className={`${getStatusColor(item.status)} py-1 md:py-2 px-2 md:px-3 rounded-full text-[0.6rem] md:text-sm`}>{item.status}</Badge>
                                                                    <Badge className="text-[#626262] bg-gray-50 py-1 md:py-2 px-2 md:px-3 rounded-full text-[0.6rem] md:text-sm ">{item.category}</Badge>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="absolute top-0 right-0 lg:relative flex items-center gap-2 bg-[#E6F8F4] p-2 md:p-3 rounded-bl-lg lg:rounded-full text-[#0d9488]">
                                                            <Users className="w-3 md:w-5 h-3 md:h-5" />
                                                            <span className="text-xs md:text-sm font-semibold">{item.interestedCount}</span>
                                                            <ChevronRight
                                                                className={`w-4 md:w-5 h-4 md:h-5 transition-transform duration-200 ${openItemId === item.id ? "rotate-90 text-[#0d9488]" : "text-[#0d9488]"
                                                                    }`}
                                                            />
                                                        </div>
                                                    </div>
                                                </CollapsibleTrigger>

                                                <CollapsibleContent className="border-t border-[#f1f1f1] mt-2 md:mt-3 pt-6 space-y-10">
                                                    {matchedUsers.map((user, index) => (
                                                        <div key={user.id} className={`@container ${index < matchedUsers.length - 1 ? 'border-b pb-12' : ''}`}>
                                                            <div className="flex flex-col justify-between @xl:flex-row items-start gap-4 mb-4">
                                                                <div className='flex gap-4 flex-row items-start'>
                                                                    <Avatar className="w-10 md:w-12 h-10 md:h-12">
                                                                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                                                        <AvatarFallback className={`${user.avatarBg} text-white`}>{user.avatarFallback}</AvatarFallback>
                                                                    </Avatar>
                                                                    <div className="flex-1">
                                                                        <div className="flex flex-col gap-1 mb-1">
                                                                            <h3 className="text-sm md:text-md font-semibold text-[#222222]">{user.name}</h3>
                                                                            <div className='flex items-center-safe'>
                                                                                <div className="flex items-center gap-1 mr-1">
                                                                                    <StarIcon className="w-4 h-4 stroke-0 fill-amber-300 text-[#E8B931]" />
                                                                                    <span className="text-xs md:text-sm font-medium">{user.rating}</span>
                                                                                </div>
                                                                                <span className="text-xs md:text-sm text-nowrap text-[#626262] mr-1">• {user.distance}</span>
                                                                                <span className="text-xs md:text-sm text-nowrap text-[#626262]">• {!isMobile && 'Requested'} {user.requestedTime}</span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div className="flex items-center gap-1 text-sm text-[#626262]">
                                                                    <Clock className="w-4 h-4" />
                                                                    <span className="text-xs md:text-sm text-nowrap">Joined {user.joinedTime}</span>
                                                                </div>
                                                            </div>

                                                            <div className='grid gap-4 p-4 bg-gray-50 rounded-xl'>
                                                                <p className="text-[#383838] text-sm mb-4">
                                                                    &quot;{user.message}&quot;
                                                                </p>
                                                                <div className='@container'>
                                                                    <div className='@container flex flex-col @xl:flex-row items-center gap-6'>
                                                                        <div className="flex flex-col @xl:flex-row flex-1 w-full gap-4 md:gap-6">
                                                                            <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                                                <div className="text-sm text-[#626262] whitespace-nowrap">No. of pickups</div>
                                                                                <div className="text-xl font-semibold text-[#222222]">{user.pickups}</div>
                                                                            </div>
                                                                            <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                                                <div className="text-sm text-[#626262] whitespace-nowrap">No-Show Record</div>
                                                                                <div className="text-xl font-semibold text-[#222222]">{user.noShowRecord}</div>
                                                                            </div>
                                                                        </div>
                                                                        <Button onClick={() => setIsOpen(true)} variant="primary" className="py-6 w-full @xl:w-44">Accept</Button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    ))}
                                                </CollapsibleContent>
                                            </CardContent>
                                        </Card>
                                    </Collapsible>
                                ))}
                            </div>
                        </div>

                        {openCriteria && (<div className="hidden xl:block bg-white z-10">
                            <div className="h-120 rounded-lg overflow-auto bg-white border scrollbar-hide sticky top-44 p-6 pt-0">
                                <SortableList />
                            </div>
                        </div>)}



                    </div>
                </TabsContent>

                {/* <TabsContent value="pending" className=" flex gap-10 flex-row items-start">
                    <div className='flex-1 grid gap-6 md:gap-8'>
                        {items.map((item) => (
                            <Collapsible
                                key={item.id}
                                open={openItemId === item.id}
                                onOpenChange={() => handleItemToggle(item.id)}
                            >
                                <Card className="relative overflow-hidden w-full xl:min-w-[550px] pt-3 pb-2 md:pt-6 md:pb-4 px-3 md:px-6 bg-transparent border-b shadow-none">
                                    <CardContent className="p-0">
                                        <CollapsibleTrigger className="w-full cursor-pointer">
                                            <div className="flex items-center lg:items-center justify-between gap-4">
                                                <div className='flex flex-row items-center lg:items-start gap-4 md:gap-6'>
                                                    <Image
                                                        width={200}
                                                        height={200}
                                                        src={item.image || "/placeholder.svg"}
                                                        alt={item.title}
                                                        className="w-20 md:w-24 h-16 md:h-18 rounded-lg object-cover"
                                                    />
                                                    <div className="flex-1 text-left">
                                                        <h2 className="text-sm lg:text-lg font-semibold text-[#222222] mb-2 truncate w-38 lg:w-full">{item.title}</h2>
                                                        <div className="flex items-start lg:items-center gap-2 md:gap-3">
                                                            <Badge className={`${getStatusColor(item.status)} py-1 md:py-2 px-2 md:px-3 rounded-full text-[0.6rem] md:text-sm`}>{item.status}</Badge>
                                                            <Badge className="text-[#626262] bg-gray-50 py-1 md:py-2 px-2 md:px-3 rounded-full text-[0.6rem] md:text-sm ">{item.category}</Badge>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="absolute top-0 right-0 lg:relative flex items-center gap-2 bg-[#E6F8F4] p-2 md:p-3 rounded-bl-lg lg:rounded-full text-[#0d9488]">
                                                    <Users className="w-3 md:w-5 h-3 md:h-5" />
                                                    <span className="text-xs md:text-sm font-semibold">{item.interestedCount}</span>
                                                    <ChevronRight
                                                        className={`w-4 md:w-5 h-4 md:h-5 transition-transform duration-200 ${openItemId === item.id ? "rotate-90 text-[#0d9488]" : "text-[#0d9488]"
                                                            }`}
                                                    />
                                                </div>
                                            </div>
                                        </CollapsibleTrigger>

                                        <CollapsibleContent className="border-t border-[#f1f1f1] mt-2 md:mt-3 pt-6 space-y-10">
                                            {matchedUsers.map((user, index) => (
                                                <div key={user.id} className={`@container ${index < matchedUsers.length - 1 ? 'border-b pb-12' : ''}`}>
                                                    <div className="flex flex-col justify-between @xl:flex-row items-start gap-4 mb-4">
                                                        <div className='flex gap-4 flex-row items-start'>
                                                            <Avatar className="w-10 md:w-12 h-10 md:h-12">
                                                                <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                                                <AvatarFallback className={`${user.avatarBg} text-white`}>{user.avatarFallback}</AvatarFallback>
                                                            </Avatar>
                                                            <div className="flex-1">
                                                                <div className="flex flex-col gap-1 mb-1">
                                                                    <h3 className="text-sm md:text-md font-semibold text-[#222222]">{user.name}</h3>
                                                                    <div className='flex items-center-safe'>
                                                                        <div className="flex items-center gap-1 mr-1">
                                                                            <StarIcon className="w-4 h-4 stroke-0 fill-amber-300 text-[#E8B931]" />
                                                                            <span className="text-xs md:text-sm font-medium">{user.rating}</span>
                                                                        </div>
                                                                        <span className="text-xs md:text-sm text-nowrap text-[#626262] mr-1">• {user.distance}</span>
                                                                        <span className="text-xs md:text-sm text-nowrap text-[#626262]">• {!isMobile && 'Requested'} {user.requestedTime}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center gap-1 text-sm text-[#626262]">
                                                            <Clock className="w-4 h-4" />
                                                            <span className="text-xs md:text-sm text-nowrap">Joined {user.joinedTime}</span>
                                                        </div>
                                                    </div>

                                                    <div className='grid gap-4 p-4 bg-gray-50 rounded-xl'>
                                                        <p className="text-[#383838] text-sm mb-4">
                                                            &quot;{user.message}&quot;
                                                        </p>
                                                        <div className='@container'>
                                                            <div className='@container flex flex-col @xl:flex-row items-center gap-6'>
                                                                <div className="flex flex-col @xl:flex-row flex-1 w-full gap-4 md:gap-6">
                                                                    <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                                        <div className="text-sm text-[#626262] whitespace-nowrap">No. of pickups</div>
                                                                        <div className="text-xl font-semibold text-[#222222]">{user.pickups}</div>
                                                                    </div>
                                                                    <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                                        <div className="text-sm text-[#626262] whitespace-nowrap">No-Show Record</div>
                                                                        <div className="text-xl font-semibold text-[#222222]">{user.noShowRecord}</div>
                                                                    </div>
                                                                </div>
                                                                <Button onClick={() => setIsOpen(true)} variant="primary" className="py-6 w-full @xl:w-44">Accept</Button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </CollapsibleContent>
                                    </CardContent>
                                </Card>
                            </Collapsible>
                        ))}
                    </div> */}
                {/* {openCriteria && (
                        <div className='hidden xl:block sticky border rounded-lg p-6 top-40 '>
                                <SortableList />
                        </div>
                    )} */}
              
                {(!openCriteria || isMobile) && (
                    <Button onClick={handleCriteriaShow} variant="secondary" size="lg" className="rounded-full cursor-pointer bg-white py-6 hover:bg-white hover:scale-105 transform transition-all ease-in-out duration-300ms shadow-2xl fixed bottom-10 right-5">
                        <span>
                            <svg width="44" height="44" className="w-44 h-44 text-gray-900" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12Z" stroke="currentColor" strokeWidth="1.5" />
                                <path d="M12.2422 17V12C12.2422 11.5286 12.2422 11.2929 12.0957 11.1464C11.9493 11 11.7136 11 11.2422 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M11.9922 8H12.0012" stroke="#626262" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </span>
                        Selection Criteria
                    </Button>
                )}

                <TabsContent value="matched">
                    <div className='grid gap-6'>
                        <MatchedCard />
                        <MatchedCard />
                    </div>
                </TabsContent>
            </Tabs>
            {/* Accept Modal */}

            <ResponsiveModal open={isOpen} close={handleOpenchange} className='py-6 md:py-20'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" fill="none"><rect width="80" height="80" fill="#F1F3DE" rx="40" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.219" d="M49.407 57.416v-4.355c0-2.666-1.2-5.28-3.626-6.386-2.959-1.348-6.507-2.134-10.322-2.134-3.815 0-7.364.786-10.323 2.134-2.425 1.106-3.625 3.72-3.625 6.386v4.355M57.99 57.418v-4.355c0-2.666-1.2-5.28-3.626-6.385a21.84 21.84 0 0 0-1.739-.703M35.459 38.105a7.51 7.51 0 1 0 0-15.021 7.51 7.51 0 0 0 0 15.02ZM46.188 23.393a7.514 7.514 0 0 1 0 14.398" /></svg>
                    </span>
                    <h4 className='text-xl font-semibold'>Are you sure?</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>Accepting to gift a recipient will automatically reject other request</p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={() => setIsOpen(false)} variant="secondary" className='w-28 py-6 px-6 cursor-pointer'>Go Back</Button>
                        <Button onClick={handleGiftItem} variant="primary" className='w-28 py-6 px-6'>Gift Item</Button>
                    </div>
                </div>
            </ResponsiveModal>

            {/* Successfully Accepted user */}
            <ResponsiveModal open={isGiftedModal} close={handleGiftItemClose} className='py-6 md:py-20'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="100" fill="none"><path fill="#FF6D83" d="M3.281 38.73a4.155 4.155 0 1 1 1.75 8.124 4.155 4.155 0 0 1-1.75-8.123Z" /><path fill="#4671FF" d="M91.044 25.745a4.093 4.093 0 1 1 1.725 8.003 4.093 4.093 0 0 1-1.725-8.003Z" /><path fill="#FFB636" d="M51.314.614a4.276 4.276 0 1 1 1.8 8.362 4.276 4.276 0 0 1-1.8-8.362Z" /><path fill="#4671FF" d="M30.439 91.025a4.276 4.276 0 1 1 1.801 8.361 4.277 4.277 0 0 1-1.801-8.361Z" /><path fill="#AD8FE6" stroke="#AD8FE6" stroke-width=".377" d="M88.905 71.18a4.149 4.149 0 1 1 1.746 8.113 4.149 4.149 0 0 1-1.746-8.112Z" /><path fill="#14AE7D" d="M58.222 16.82c19.245 5.157 30.665 24.937 25.509 44.181-5.157 19.245-24.938 30.665-44.182 25.508C20.305 81.352 8.884 61.572 14.04 42.33c5.156-19.245 24.937-30.665 44.181-25.509Z" /><path fill="#fff" d="M42.907 65.372a1.017 1.017 0 0 1-1.424-.06L28.388 51.328a2.793 2.793 0 0 1-.608-1.973 2.8 2.8 0 0 1 .919-1.852 2.903 2.903 0 0 1 1.956-.743 2.907 2.907 0 0 1 1.952.76l9.437 10.077c.252.27.675.287.949.04l19.792-17.872a2.907 2.907 0 0 1 2.008-.593c.723.057 1.396.38 1.887.905a2.8 2.8 0 0 1 .76 1.922 2.793 2.793 0 0 1-.77 1.915L42.906 65.372Z" /><path stroke="#FF6E83" stroke-linecap="round" stroke-width="2.143" d="M20.834 15.332c-.66-2.45-2.229-5.7-5.95-7.768" /><path fill="#AD8FE6" d="M16.643 86.989c-.718.119-1.758.058-3.223-.263-8.31-1.824-.912 5.37-.912 5.37s1.894 3.718-1.73 2.808" /><path stroke="#AD8FE6" strokeLinecap="round" strokeWidth="2.027" d="M16.643 86.989c-.718.119-1.758.058-3.223-.263-8.31-1.824-.912 5.37-.912 5.37s1.894 3.718-1.73 2.808" /><path stroke="#FFB636" stroke-linecap="round" stroke-width="1.832" d="M83.127 11.48c2.277-.83 4.95-.007 7.54 5.027 4.883 9.487-6.64 7.553-5.97 1.64" /><path fill="#4671FF" d="M74.115 87.426c.649 1.803 2.41 3.918 6.791 5.378a32.5 32.5 0 0 1 1.412.505" /><path stroke="#6EB9FF" stroke-linecap="round" stroke-width="2.027" d="M74.115 87.426c.649 1.803 2.41 3.918 6.791 5.378a32.5 32.5 0 0 1 1.412.505" /></svg>
                    </span>
                    <h4 className='text-xl font-semibold'>Thanks for giving!</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>Kindly arrange pickup with Sarah Johnson</p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={() => setIsGiftedModal(false)} variant="primary" className='py-6 px-6'>Send Message</Button>
                    </div>
                </div>
            </ResponsiveModal>


        </div>
    )



}

export default MactchingView