"use client"

import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { ChevronRight, Clock, Star, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Badge } from '../ui/badge'
import Image from 'next/image'
import SortableList from './SortableList'
import { useUIState } from '@/hooks/useAppState'
import { useMediaQuery } from '@/hooks/use-media-query'
import ResponsiveModal from '../modal/ResponsiveModal'
import { Label } from '../ui/label'
import { RadioGroup, RadioGroupItem } from '../ui/radio-group'
import { Textarea } from '../ui/textarea'
import ResponsiveAlert from '../modal/ResponsiveAlert'



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
    const [expandedItem, setExpandedItem] = useState<string | null>(null)
    const [isGiftedModal, setIsGiftedModal] = useState(false)
    const [isUnmatchedModal, setIsUnmatchedModal] = useState(false)
    const [reasonModal, setReasonModal] = useState(false)
    const [feedBackModal, setFeedBackModal] = useState(false)
    const [isRelisted, setIsRelisted] = useState(false)
    const [isArchived, setIsArchived] = useState(false)

    const [selectedValue, setSelectedValue] = useState('');

    const { openCriteria, setOpenCriteria, openSheet, setIsSheetOpen, isOpen, setIsOpen } = useUIState()
    const isMobile = useMediaQuery("(max-width: 1280px)")



    const handleCriteriaShow = () => {
        if (isMobile) {
            openSheet(<SortableList />)
            setIsSheetOpen(true)
        }
        setOpenCriteria(true)
    }



    const handleItemClick = (itemId: string) => {
        // If clicking on the same item, close it. Otherwise, close all and open the clicked one
        if (expandedItem === itemId) {
            setExpandedItem(null)
        } else {
            setExpandedItem(itemId)
        }
    }

    const handleExpandedContentClick = (e: React.MouseEvent) => {
        // Prevent the click from bubbling up to the card
        e.stopPropagation()
    }


    const handleOpenchange = () => {
        setIsOpen(false)
    }

    const handleGiftItemClose = () => {
        setIsGiftedModal(false)
    }


    const handleGiftItem = () => {
        // Logic to handle gifting the item
        // This could involve updating the item's status, notifying the user, etc.
        console.log("Item gifted successfully!");
        setIsOpen(false); // Close the modal after gifting
        setIsGiftedModal(true); // Set a state to indicate the item has been gifted
    }


    const handleUnmatchClose = () => {
        setIsUnmatchedModal(false);
    }

    const handleUnmatch = () => {
        // Logic to handle un-matching the recipient
        // This could involve updating the item's status, notifying the user, etc.
        console.log("Item un-matched successfully!");
        setIsUnmatchedModal(false); // Set a state to indicate the item has been un-matched
        setReasonModal(true); // Open the reason modal after un-matching
    }


    const handleReasonModalClose = () => {
        setReasonModal(false);
    }

    const handleReasonSubmit = () => {
        console.log('Submitted reason')
        setReasonModal(false)
        setFeedBackModal(true); // Open the feedback modal after submitting the reason
    }


   

    const handleArchive = () => {
        console.log('Archived')
        setFeedBackModal(false)
        setIsArchived(true)
    }

    const handleRelist = () => {
        console.log('Archived')
        setFeedBackModal(false)
        setIsRelisted(true)
    }




    return (
        <div className="flex-1 flex flex-row items-start gap-10">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-fit grid-cols-2 mb-6 gap-6 bg-gray-50 p-1 h-auto bg-transparent rounded-lg">
                    <TabsTrigger
                        value="pending"
                        className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-600 hover:bg-gray-50 rounded-md px-3 py-2"
                    >
                        Pending
                    </TabsTrigger>
                    <TabsTrigger
                        value="matched"
                        className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-400 hover:bg-gray-50 rounded-md px-3 py-2"
                    >
                        Matched
                    </TabsTrigger>
                </TabsList>

                <TabsContent value="pending" className="flex gap-10 flex-row items-start">
                    <div className='flex-1  grid gap-8'>
                        {items.map((item) => (
                            <Card key={item.id} className="w-full xl:min-w-[550px] py-3 md:py-6 px-3 md:px-6 bg-transparent border-b  shadow-none cursor-pointer" onClick={() => handleItemClick(item.id)}>
                                <CardContent className="p-0">
                                    <div className="flex items-start lg:items-center justify-between gap-4">
                                        <div className='flex flex-row items-start lg:items-start gap-6'>
                                            <Image
                                                width={200}
                                                height={200}
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.title}
                                                className="w-24 h-18 rounded-lg object-cover"
                                            />
                                            <div className="flex-1">
                                                <h2 className="text-sm lg:text-lg font-semibold text-[#222222] mb-2">{item.title}</h2>
                                                <div className="flex items-start lg:items-center gap-2 md:gap-3">
                                                    <Badge className={`${getStatusColor(item.status)} py-1 md:py-2 px-2 md:px-3 rounded-full text-xs md:text-sm`}>{item.status}</Badge>
                                                    <Badge className="hidden lg:block text-[#626262] bg-gray-50 py-1 md:py-2 px-2 md:px-3 rounded-full text-xs md:text-sm ">{item.category}</Badge>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-2 bg-[#E6F8F4] p-2 md:p-3 rounded-full text-[#0d9488]">
                                            <Users className="w-4 md:w-5 h-4 md:h-5" />
                                            <span className="text-xs md:text-sm font-semibold">{item.interestedCount}</span>
                                            <ChevronRight
                                                className={`w-4 md:w-5 h-4 md:h-5 ${expandedItem === item.id ? "rotate-90 text-[#0d9488]" : "text-[#0d9488]"
                                                    }`}
                                            />
                                        </div>
                                    </div>
                                </CardContent>

                                {/* Expanded Content - Inside the same card */}
                                {expandedItem === item.id && (
                                    <div onClick={handleExpandedContentClick} className="border-t border-[#f1f1f1] pt-6 space-y-10">
                                        <>
                                            {/* Sarah Johnson */}
                                            <div className="@container border-b pb-12">
                                                <div className="flex flex-col justify-between @xl:flex-row items-start gap-4 mb-4">
                                                    <div className='flex gap-4 flex-row items-start'>
                                                        <Avatar className="w-12 h-12">
                                                            <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                                            <AvatarFallback className="bg-[#0d9488] text-white">SJ</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1">
                                                            <div className="flex flex-col gap-1 mb-1">
                                                                <h3 className="font-semibold text-[#222222]">Sarah Johnson</h3>
                                                                <div className='flex gap-2'>
                                                                    <div className="flex items-center gap-2">
                                                                        <Star className="w-4 h-4 fill-[#e8b931] text-[#e8b931]" />
                                                                        <span className="text-sm font-medium">5.0</span>
                                                                    </div>
                                                                    <span className="text-sm text-nowrap text-[#626262]">• 2.4km away</span>
                                                                    <span className="text-sm text-nowrap text-[#626262]">• Requested 1 day ago</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-sm text-[#626262]">
                                                        <Clock className="w-4 h-4" />
                                                        <span className="text-nowrap">Joined 2 months ago</span>
                                                    </div>
                                                </div>

                                                <div className='grid gap-4 p-4 bg-gray-50  rounded-xl'>
                                                    <p className="  text-[#383838] text-sm mb-4">
                                                        &quot;Hi there! I&apos;ve been looking for a {item.title.toLowerCase()} just like this for my home
                                                        office. I would really appreciate it and would be able to pick it up anytime. Thanks for
                                                        considering!&quot;
                                                    </p>
                                                    <div className='@container'>
                                                        <div className='@container flex flex-col @xl:flex-row items-center gap-6'>
                                                            <div className="flex flex-col @xl:flex-row flex-1 w-full gap-6">
                                                                <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                                    <div className="text-sm text-[#626262] whitespace-nowrap">No. of pickups</div>
                                                                    <div className="text-xl font-semibold text-[#222222]">3</div>
                                                                </div>
                                                                <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                                    <div className="text-sm text-[#626262] whitespace-nowrap">No-Show Record</div>
                                                                    <div className="text-xl font-semibold text-[#222222]">0</div>
                                                                </div>
                                                            </div>
                                                            <Button onClick={() => setIsOpen(true)} variant="primary" className="py-6 w-full @xl:w-44">Accept</Button>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                            {/* Michael Chen */}
                                            <div className="@container border-b pb-12">
                                                <div className="flex flex-col justify-between @xl:flex-row items-start gap-4 mb-4">
                                                    <div className='flex gap-4 flex-row items-start'>
                                                        <Avatar className="w-12 h-12">
                                                            <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                                            <AvatarFallback className="bg-[#4c21a8] text-white">M</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1">
                                                            <div className="flex flex-col gap-1 mb-1">
                                                                <h3 className="font-semibold text-[#222222]">Michael Chen</h3>
                                                                <div className='flex gap-2'>
                                                                    <div className="flex items-center gap-2">
                                                                        <Star className="w-4 h-4 fill-[#e8b931] text-[#e8b931]" />
                                                                        <span className="text-sm font-medium">5.0</span>
                                                                    </div>
                                                                    <span className="text-sm text-nowrap text-[#626262]">• 2.4km away</span>
                                                                    <span className="text-sm text-nowrap text-[#626262]">• Requested 1 day ago</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-sm text-[#626262]">
                                                        <Clock className="w-4 h-4" />
                                                        <span className="text-nowrap">Joined 2 months ago</span>
                                                    </div>
                                                </div>

                                                <div className='grid gap-4 p-4 bg-gray-50  rounded-xl'>
                                                    <p className="  text-[#383838] text-sm mb-4">
                                                        &quot;Hi there! I&apos;ve been looking for a {item.title.toLowerCase()} just like this for my home
                                                        office. I would really appreciate it and would be able to pick it up anytime. Thanks for
                                                        considering!&quot;
                                                    </p>
                                                    <div className='@container'>
                                                        <div className='@container flex flex-col @xl:flex-row items-center gap-6'>
                                                            <div className="flex flex-col @xl:flex-row flex-1 w-full gap-6">
                                                                <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                                    <div className="text-sm text-[#626262] whitespace-nowrap">No. of pickups</div>
                                                                    <div className="text-xl font-semibold text-[#222222]">3</div>
                                                                </div>
                                                                <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                                    <div className="text-sm text-[#626262] whitespace-nowrap">No-Show Record</div>
                                                                    <div className="text-xl font-semibold text-[#222222]">0</div>
                                                                </div>
                                                            </div>
                                                            <Button onClick={() => setIsOpen(true)} variant="primary" className="py-6 w-full @xl:w-44">Accept</Button>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>

                                            {/* Emma Wilson */}
                                            <div className="@container rounded-xl">
                                                <div className="flex flex-col justify-between @xl:flex-row items-start gap-4 mb-4">
                                                    <div className='flex gap-4 flex-row items-start'>
                                                        <Avatar className="w-12 h-12">
                                                            <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                                            <AvatarFallback className="bg-[#c2410c] text-white">E</AvatarFallback>
                                                        </Avatar>
                                                        <div className="flex-1">
                                                            <div className="flex flex-col gap-1 mb-1">
                                                                <h3 className="font-semibold text-[#222222]">Emma Wilson</h3>
                                                                <div className='flex gap-2'>
                                                                    <div className="flex items-center gap-2">
                                                                        <Star className="w-4 h-4 fill-[#e8b931] text-[#e8b931]" />
                                                                        <span className="text-sm font-medium">5.0</span>
                                                                    </div>
                                                                    <span className="text-sm text-nowrap text-[#626262]">• 2.4km away</span>
                                                                    <span className="text-sm text-nowrap text-[#626262]">• Requested 1 day ago</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-1 text-sm text-[#626262]">
                                                        <Clock className="w-4 h-4" />
                                                        <span className="text-nowrap">Joined 2 months ago</span>
                                                    </div>
                                                </div>

                                                <div className='grid gap-4 p-4 bg-gray-50  rounded-xl'>
                                                    <p className="  text-[#383838] text-sm mb-4">
                                                        &quot;Hi there! I&apos;ve been looking for a {item.title.toLowerCase()} just like this for my home
                                                        office. I would really appreciate it and would be able to pick it up anytime. Thanks for
                                                        considering!&quot;
                                                    </p>
                                                    <div className='@container'>
                                                        <div className='@container flex flex-col @xl:flex-row items-center gap-6'>
                                                            <div className="flex flex-col @xl:flex-row flex-1 w-full gap-6">
                                                                <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                                    <div className="text-sm text-[#626262] whitespace-nowrap">No. of pickups</div>
                                                                    <div className="text-xl font-semibold text-[#222222]">3</div>
                                                                </div>
                                                                <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                                    <div className="text-sm text-[#626262] whitespace-nowrap">No-Show Record</div>
                                                                    <div className="text-xl font-semibold text-[#222222]">0</div>
                                                                </div>
                                                            </div>
                                                            <Button onClick={() => setIsOpen(true)} variant="primary" className="py-6 w-full @xl:w-44">Accept</Button>
                                                        </div>
                                                    </div>

                                                </div>

                                            </div>
                                        </>
                                    </div>
                                )}
                            </Card>
                        ))}
                    </div>

                    {openCriteria && (
                        <div className='hidden transition-all ease-out duration-300ms  xl:block p-6 overflow-hidden border rounded-lg w-[auto]'>
                            <SortableList />
                        </div>
                    )}
                    {(!openCriteria || isMobile) && (
                        <Button onClick={handleCriteriaShow} variant="secondary" size="lg" className="rounded-full cursor-pointer bg-white py-6 hover:bg-white hover:scale-105 z-50 transform transition-all ease-in-out duration-300ms shadow-2xl fixed bottom-10 right-5">
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
                </TabsContent>

                <TabsContent value="matched">
                    {/* <div className="text-center py-12">
                        <p className="text-[#626262]">No matched items yet.</p>
                    </div> */}

                    <div className='grid gap-6'>
                        <Card className="w-full xl:min-w-[550px] py-4 md:py-6 px-4 rounded-lg bg-transparent border-b  shadow-none cursor-pointer" >
                            <CardContent className="p-0">
                                <div className=" flex flex-col 2xl:flex-row items-start 2xl:items-center justify-between gap-4">
                                    <div className='flex flex-row items-start lg:items-start gap-6'>
                                        <Image
                                            width={200}
                                            height={200}
                                            src={"/assets/giver-items/Frame 2087328010-2.png"}
                                            alt="Item Image"
                                            className="w-24 h-18 rounded-lg object-cover"
                                        />
                                        <div className="flex-1">
                                            <h2 className="text-md lg:text-lg font-semibold text-[#222222] mb-2">Vintage Desk Lamp</h2>
                                            <div className='flex flex-row items-start xl:items-center gap-4'>
                                                <div className='flex gap-3 flex-row items-center'>
                                                    <Avatar className="w-6 h-6">
                                                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                                        <AvatarFallback className="bg-[#0d9488] text-xs text-white">SJ</AvatarFallback>
                                                    </Avatar>
                                                    <h3 className="font-normal capitalize text-nowrap text-gray-500">Sarah Johnson</h3>
                                                </div>
                                                <div className='hidden my-2 sm:my-0 flex-wrap xl:flex xl:border-l xl:pl-3  items-center gap-4'>
                                                    <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>10 pickups</Badge>
                                                    <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>2 no-show</Badge>
                                                    <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>Joined 6 months ago</Badge>
                                                    <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>5km away</Badge>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex xl:hidden my-2 md:my-0 flex-wrap flex items-center gap-4'>
                                        <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>10 pickups</Badge>
                                        <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>2 no-show</Badge>
                                        <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>Joined 6 months ago</Badge>
                                        <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>5km away</Badge>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <Button onClick={() => setIsUnmatchedModal(true)} variant="destructive" className='bg-[#ffe8e8] text-red-500 shadow-none py-6 px-6 cursor-pointer'>Un-Match</Button>
                                        <Button variant="primary" className='py-6 px-6'>Send Message</Button>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
                        <Card className="w-full xl:min-w-[550px] py-4 md:py-6 px-4 rounded-lg bg-transparent border-b  shadow-none cursor-pointer" >
                            <CardContent className="p-0">
                                <div className=" flex flex-col 2xl:flex-row items-start 2xl:items-center justify-between gap-4">
                                    <div className='flex flex-row items-start lg:items-start gap-6'>
                                        <Image
                                            width={200}
                                            height={200}
                                            src={"/assets/giver-items/Frame 2087328010-1.png"}
                                            alt="Item Image"
                                            className="w-24 h-18 rounded-lg object-cover"
                                        />
                                        <div className="flex-1">
                                            <h2 className="text-md lg:text-lg font-semibold text-[#222222] mb-2">Kitchen Blender</h2>
                                            <div className='flex flex-row items-start xl:items-center gap-4'>
                                                <div className='flex gap-3 flex-row items-center'>
                                                    <Avatar className="w-6 h-6">
                                                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                                        <AvatarFallback className="bg-[#0d9488] text-xs text-white">SJ</AvatarFallback>
                                                    </Avatar>
                                                    <h3 className="font-normal capitalize text-nowrap text-gray-500">Sarah Johnson</h3>
                                                </div>
                                                <div className='hidden my-2 sm:my-0 flex-wrap xl:flex xl:border-l xl:pl-3  items-center gap-4'>
                                                    <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>10 pickups</Badge>
                                                    <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>2 no-show</Badge>
                                                    <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>Joined 6 months ago</Badge>
                                                    <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>5km away</Badge>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='flex xl:hidden my-2 md:my-0 flex-wrap flex items-center gap-4'>
                                        <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>10 pickups</Badge>
                                        <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>2 no-show</Badge>
                                        <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>Joined 6 months ago</Badge>
                                        <Badge className={`py-1 md:py-1 px-2 md:px-3 rounded-full bg-gray-50 text-gray-500 text-xs md:text-sm`}>5km away</Badge>
                                    </div>
                                    <div className='flex items-center gap-3'>
                                        <Button onClick={() => setIsUnmatchedModal(true)} variant="destructive" className='bg-[#ffe8e8] text-red-500 shadow-none py-6 px-6 cursor-pointer'>Un-Match</Button>
                                        <Button variant="primary" className='py-6 px-6'>Send Message</Button>
                                    </div>
                                </div>

                            </CardContent>
                        </Card>
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

            {/* Unmatch Accepted user */}
            <ResponsiveModal open={isUnmatchedModal} close={handleUnmatchClose} className='py-6 md:py-20'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="87" height="84" fill="none"><rect width="80" height="80" y=".25" fill="#F1F3DE" rx="40" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.219" d="M49.407 57.666v-4.355c0-2.666-1.2-5.28-3.626-6.386-2.959-1.348-6.507-2.134-10.322-2.134-3.815 0-7.364.786-10.323 2.134-2.425 1.106-3.625 3.72-3.625 6.386v4.355M57.99 57.668v-4.355c0-2.666-1.2-5.28-3.626-6.385a21.84 21.84 0 0 0-1.739-.703M35.459 38.355a7.51 7.51 0 1 0 0-15.021 7.51 7.51 0 0 0 0 15.02ZM46.188 23.643a7.514 7.514 0 0 1 0 14.398" /><circle cx="64" cy="60.75" r="21.5" fill="#D33737" stroke="#fff" stroke-width="3" /><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.143" d="M61.809 54.425c1.033 1.033 1.55 1.55 2.191 1.55.642 0 1.158-.517 2.191-1.55l2.192-2.191c.51-.51.765-.765 1.03-.918 1.333-.77 2.43-.006 3.353.917.924.924 1.687 2.022.918 3.354-.153.265-.408.52-.917 1.03l-2.192 2.191c-1.033 1.033-1.55 1.55-1.55 2.192 0 .642.517 1.158 1.55 2.191l2.191 2.192c.51.51.765.764.918 1.03.77 1.333.006 2.43-.918 3.353-.922.924-2.02 1.687-3.353.918-.265-.153-.52-.408-1.03-.918l-2.191-2.191c-1.033-1.033-1.55-1.55-2.192-1.55-.642 0-1.159.517-2.191 1.55l-2.192 2.191c-.51.51-.765.765-1.03.918-1.332.77-2.43.006-3.354-.918-.923-.923-1.686-2.02-.917-3.354.153-.265.408-.52.917-1.029l2.192-2.192c1.033-1.033 1.55-1.55 1.55-2.191 0-.642-.517-1.159-1.55-2.192l-2.192-2.191c-.51-.51-.764-.765-.917-1.03-.77-1.333-.006-2.43.917-3.354.924-.923 2.022-1.686 3.354-.917.265.153.52.408 1.03.917l2.192 2.192Z" /></svg>
                    </span>
                    <h4 className='text-xl font-semibold'>Are you sure?</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>Un-matching the recipient will automatically list the item as available to the public.</p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={() => setIsUnmatchedModal(false)} variant="secondary" className='py-6 px-6 cursor-pointer'>No, Cancel</Button>
                        <Button onClick={handleUnmatch} variant="primary" className='py-6 px-6'>Yes, Un-match</Button>
                    </div>
                </div>
            </ResponsiveModal>

            {/* Reason for Unmatching */}
            <ResponsiveModal open={reasonModal} close={handleReasonModalClose} className="pb-10 px-6">
                <h4 className='font-bold text-xl pb-6 md:pb-0'>Reason for Cancellation</h4>

                <RadioGroup value={selectedValue} onValueChange={setSelectedValue} className='h-96 overflow-y-auto mb-4 scrollbar-hide'>
                    <Label htmlFor="item-not-available" className="flex items-start bg-gray-50 rounded-lg py-6 px-4 space-x-2">
                        <RadioGroupItem value="item not available" className="ring ring-app-primary  text-app-primary" id="item-not-available" />
                        <div className="grid gap-2 items-start">
                            <h4 className='font-[500px] text-[1rem]'>Item no longer available</h4>
                            <p className='text-gray-500 text-sm leading-5'>The item was damaged, lost, or otherwise became unavailaable before the collection</p>
                        </div>
                    </Label>
                    <Label htmlFor="receiver-unresponsive" className="flex items-start bg-gray-50 rounded-lg py-6 px-4 space-x-2">
                        <RadioGroupItem value="Receiver Unresponsiv" className="ring ring-app-primary text-app-primary" id="receiver-unresponsive" />
                        <div className="grid gap-2 items-start">
                            <h4 className='font-[500px] text-[1rem]'>Receiver Unresponsive</h4>
                            <p className='text-gray-500 text-sm leading-5'>The selected Receiver has not responded to confirmation messages or has failed to confirm collection details.</p>
                        </div>
                    </Label>
                    <Label htmlFor="incomplete-or-misleading" className="flex items-start bg-gray-50 rounded-lg py-6 px-4 space-x-2">
                        <RadioGroupItem value="Incomplete or Misleading" className="ring ring-app-primary  text-app-primary" id="incomplete-or-misleading" />
                        <div className="grid gap-2 items-start">
                            <h4 className='font-[500px] text-[1rem]'>Receiver&apos;s Profile Incomplete or Misleading</h4>
                            <p className='text-gray-500 text-sm leading-5'>The Giver identified inconsistencies or missing critical information in the Receiver&apos;s profile.</p>
                        </div>
                    </Label>
                    <Label htmlFor="other" className="w-full flex items-start bg-gray-50 rounded-lg py-6 px-4 space-x-2">
                        <RadioGroupItem value="other" className="ring ring-app-primary text-app-primary" id="other" />
                        <div className="w-full grid gap-2 items-start">
                            <h4 className='font-[500px] text-[1rem]'>Other (please Specify)</h4>
                            <Textarea className='mt-1 min-w-full bg-white shadow-none border-none' placeholder='Provide details about your decision to un-match recipient. ' />
                        </div>
                    </Label>
                </RadioGroup>
                <Button
                    onClick={handleReasonSubmit}
                    disabled={!selectedValue}
                    variant="primary"
                    className='py-6'>Done</Button>
            </ResponsiveModal>


            {/* Feedback Received Alert */}

            <ResponsiveAlert open={feedBackModal} close={()=> {}} className='py-6 md:py-20'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="85" fill="none"><rect width="80.497" height="80.496" x=".738" fill="#F1F3DE" rx="40.248"/><path stroke="#989F42" stroke-linecap="round" stroke-linejoin="round" stroke-width="3.239" d="M50.448 57.773v-4.382c0-2.682-1.208-5.313-3.648-6.425-2.977-1.357-6.548-2.148-10.386-2.148-3.84 0-7.41.79-10.387 2.148-2.44 1.112-3.648 3.743-3.648 6.425v4.382M59.087 57.776v-4.382c0-2.682-1.207-5.312-3.648-6.425a21.966 21.966 0 0 0-1.75-.707M36.414 38.34a7.557 7.557 0 1 0 0-15.113 7.557 7.557 0 0 0 0 15.114ZM47.213 23.54a7.56 7.56 0 0 1 0 14.487"/><path fill="#14AE7D" stroke="#fff" stroke-width="3.019" d="M65.136 39.24c11.948 0 21.633 9.686 21.633 21.634s-9.685 21.634-21.633 21.634c-11.948 0-21.634-9.686-21.634-21.634S53.188 39.24 65.136 39.24Z"/><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.887" d="M77.535 52.815c.537 1.39-.216 2.34-1.674 3.277-1.176.756-2.674 1.575-4.262 2.976-1.556 1.372-3.075 3.025-4.424 4.653a68.725 68.725 0 0 0-3.295 4.324c-.521.743-1.25 1.852-1.25 1.852-.513.812-1.436 1.304-2.425 1.291-.99-.012-1.9-.526-2.39-1.351-1.256-2.11-2.225-2.943-2.67-3.242-1.192-.8-2.59-.919-2.59-2.785 0-1.482 1.251-2.683 2.795-2.683 1.09.04 2.102.469 3 1.072.574.386 1.181.895 1.813 1.567a72.302 72.302 0 0 1 2.639-3.388c1.455-1.755 3.173-3.637 5.016-5.262 1.81-1.597 3.904-3.093 6.124-3.883 1.447-.516 3.056.193 3.593 1.582Z"/></svg>
                    </span>
                    <h4 className='text-xl font-semibold'>Feedback Received</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>What would you like to do with the item.</p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={handleArchive} variant="secondary" className=' w-44 py-6 px-6 cursor-pointer'>Archive</Button>
                        <Button onClick={handleRelist} variant="primary" className=' w-44 py-6 px-6'>Relist</Button>
                    </div>
                </div>
            </ResponsiveAlert>


            {/* Relisting success alert */}

            <ResponsiveAlert open={isRelisted} close={()=> {}} className='py-6 md:py-20'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="85" fill="none"><rect width="80.497" height="80.496" x=".738" fill="#F1F3DE" rx="40.248"/><path stroke="#989F42" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41 60c-1.636 0-3.2-.66-6.326-1.981C26.89 54.731 23 53.088 23 50.323V30m18 30c1.636 0 3.2-.66 6.326-1.981C55.11 54.731 59 53.088 59 50.323V30M41 60V38.71M33.652 35.383l-5.843-2.827C24.603 31.004 23 30.229 23 29s1.603-2.004 4.81-3.556l5.842-2.827C37.258 20.872 39.06 20 41 20c1.94 0 3.742.872 7.348 2.617l5.843 2.827C57.397 26.996 59 27.772 59 29c0 1.229-1.603 2.004-4.81 3.556l-5.842 2.827C44.742 37.128 42.94 38 41 38c-1.94 0-3.742-.872-7.348-2.617Z"/><path stroke="#989F42" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m29 40 4 2"/><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M51 24 31 34"/><path fill="#14AE7D" stroke="#fff" stroke-width="3.019" d="M65.136 39.24c11.948 0 21.633 9.686 21.633 21.634s-9.685 21.634-21.633 21.634c-11.948 0-21.634-9.686-21.634-21.634S53.188 39.24 65.136 39.24Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.887" d="M77.535 52.815c.537 1.39-.216 2.34-1.674 3.277-1.176.756-2.674 1.575-4.262 2.976-1.556 1.372-3.075 3.025-4.424 4.653a68.725 68.725 0 0 0-3.295 4.324c-.521.743-1.25 1.852-1.25 1.852-.513.812-1.436 1.304-2.425 1.291-.99-.012-1.9-.526-2.39-1.351-1.256-2.11-2.225-2.943-2.67-3.242-1.192-.8-2.59-.919-2.59-2.785 0-1.482 1.251-2.683 2.795-2.683 1.09.04 2.102.469 3 1.072.574.386 1.181.895 1.813 1.567a72.302 72.302 0 0 1 2.639-3.388c1.455-1.755 3.173-3.637 5.016-5.262 1.81-1.597 3.904-3.093 6.124-3.883 1.447-.516 3.056.193 3.593 1.582Z"/></svg>
                    </span>
                    <h4 className='text-xl font-semibold'>Item Re-listed</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>Your item has been listed to the public</p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={() => setIsRelisted(false)} variant="primary" className=' w-28 py-6 px-6'>Ok</Button>
                    </div>
                </div>
            </ResponsiveAlert>

        {/* Archived success alert */}
            <ResponsiveAlert open={isArchived} close={()=> {}} className='py-6 md:py-20'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="84" fill="none"><rect width="80.497" height="80.496" x=".875" y=".25" fill="#F1F3DE" rx="40.248"/><path stroke="#989F42" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M41.137 60.25c-1.637 0-3.2-.66-6.326-1.981-7.783-3.288-11.674-4.931-11.674-7.696V30.25m18 30c1.636 0 3.2-.66 6.326-1.981 7.782-3.288 11.674-4.931 11.674-7.696V30.25m-18 30V38.96M33.789 35.633l-5.843-2.827c-3.206-1.552-4.81-2.327-4.81-3.556s1.604-2.004 4.81-3.556l5.843-2.827c3.605-1.745 5.408-2.617 7.348-2.617 1.94 0 3.742.872 7.348 2.617l5.842 2.827c3.206 1.552 4.81 2.328 4.81 3.556 0 1.229-1.604 2.004-4.81 3.556l-5.842 2.827c-3.606 1.745-5.409 2.617-7.348 2.617-1.94 0-3.743-.872-7.348-2.617Z"/><path stroke="#989F42" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m29.137 40.25 4 2"/><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m51.137 24.25-20 10"/><circle cx="65.123" cy="60.748" r="21.5" fill="#D33737" stroke="#fff" stroke-width="3"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.143" d="M62.932 54.423c1.033 1.033 1.55 1.55 2.191 1.55.642 0 1.158-.517 2.191-1.55l2.192-2.191c.51-.51.765-.765 1.03-.918 1.333-.77 2.43-.005 3.353.918.924.923 1.687 2.02.918 3.354-.153.264-.408.52-.917 1.029l-2.192 2.191c-1.033 1.033-1.55 1.55-1.55 2.192 0 .642.517 1.158 1.55 2.191l2.192 2.192c.509.51.764.765.917 1.03.77 1.333.006 2.43-.918 3.353-.922.924-2.02 1.687-3.353.918-.265-.153-.52-.408-1.03-.918l-2.191-2.191c-1.033-1.033-1.55-1.55-2.192-1.55-.642 0-1.159.517-2.192 1.55l-2.191 2.191c-.51.51-.765.765-1.03.918-1.332.77-2.43.006-3.353-.918-.924-.923-1.687-2.02-.918-3.353.153-.265.408-.52.918-1.03l2.191-2.192c1.033-1.033 1.55-1.55 1.55-2.19 0-.643-.517-1.16-1.55-2.193l-2.192-2.191c-.509-.51-.764-.765-.917-1.03-.77-1.333-.005-2.43.918-3.353s2.02-1.687 3.354-.918c.264.153.52.408 1.029.917l2.192 2.192Z"/></svg>
                    </span>
                    <h4 className='text-xl font-semibold'>Item Archived</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>Your item has be saved to draft and is not visible to the public</p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={() => setIsArchived(false)} variant="primary" className=' w-28 py-6 px-6'>Ok</Button>
                    </div>
                </div>
            </ResponsiveAlert>
        </div>
    )



}

export default MactchingView