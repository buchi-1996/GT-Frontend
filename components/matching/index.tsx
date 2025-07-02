"use client"

import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { ChevronRight, Clock, Star, Users } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { Button } from '../ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { Badge } from '../ui/badge'
import Image from 'next/image'


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
        category: "Kitchen ware",
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




    return (
        <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full ">
                 <TabsList className="grid w-fit grid-cols-2 mb-6 gap-6 bg-gray-50 p-1 h-auto bg-transparent rounded-lg">
              <TabsTrigger
                value="pending"
                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-600 hover:bg-gray-50 rounded-md px-3 py-2"
              >
                Pending
              </TabsTrigger>
              <TabsTrigger
                value="matched"
                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-600 hover:bg-gray-50 rounded-md px-3 py-2"
              >
                Matched
              </TabsTrigger>
            </TabsList>

                <TabsContent value="pending" className="grid gap-8">
                    {items.map((item) => (
                        <Card key={item.id} className=" px-6 bg-transparent border-b  shadow-none cursor-pointer" onClick={() => handleItemClick(item.id)}>
                            <CardContent className="p-0">
                                <div className="flex items-center justify-between gap-4">
                                    <div className='flex flex-col xl:flex-row items-start gap-4'>
                                        <Image
                                        width={200}
                                        height={200}
                                        src={item.image || "/placeholder.svg"}
                                        alt={item.title}
                                        className="w-24 h-18 rounded-lg object-cover"
                                    />
                                    <div className="flex-1">
                                        <h2 className="text-lg font-semibold text-[#222222] mb-2">{item.title}</h2>
                                        <div className="flex items-center gap-3">
                                            <Badge className={`${getStatusColor(item.status)} py-2 px-3 rounded-full`}>{item.status}</Badge>
                                            <span className="text-[#626262] text-xs font-semibold bg-gray-50 py-2 px-3 rounded-full">{item.category}</span>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="flex items-center gap-2 bg-[#E6F8F4] p-3 rounded-full text-[#0d9488]">
                                        <Users className="w-5 h-5" />
                                        <span className="text-sm font-semibold">{item.interestedCount}</span>
                                        <ChevronRight
                                            className={`w-5 h-5 ${expandedItem === item.id ? "rotate-90 text-[#0d9488]" : "text-[#0d9488]"
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
                                        <div className="border-b pb-12">
                                            <div className="flex flex-col xl:flex-row items-start gap-4 mb-4">
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
                                                            <span className="text-sm text-[#626262]">• 2.4km away</span>
                                                            <span className="text-sm text-[#626262]">• Requested 1 day ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1 text-sm text-[#626262]">
                                                    <Clock className="w-4 h-4" />
                                                    <span>Joined 2 months ago</span>
                                                </div>
                                            </div>

                                            <div className='grid gap-4 p-4 bg-gray-50  rounded-xl'>
                                                <p className="  text-[#383838] text-sm mb-4">
                                                "Hi there! I've been looking for a {item.title.toLowerCase()} just like this for my home
                                                office. I would really appreciate it and would be able to pick it up anytime. Thanks for
                                                considering!"
                                            </p>
                                            <div className='flex flex-col xl:flex-row items-center gap-6'>
                                                <div className="flex flex-col xl:flex-row flex-1 w-full gap-6">
                                                    <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                        <div className="text-sm text-[#626262] whitespace-nowrap">No. of pickups</div>
                                                        <div className="text-xl font-semibold text-[#222222]">3</div>
                                                    </div>
                                                    <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                        <div className="text-sm text-[#626262] whitespace-nowrap">No-Show Record</div>
                                                        <div className="text-xl font-semibold text-[#222222]">0</div>
                                                    </div>
                                                </div>
                                                <Button variant="primary" className="py-6 w-full xl:w-44">Accept</Button>
                                            </div>
                                                
                                            </div>
                                        
                                        </div>

                                        <div className="border-b pb-12">
                                            <div className="flex flex-col xl:flex-row items-start gap-4 mb-4">
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
                                                            <span className="text-sm text-[#626262]">• 2.4km away</span>
                                                            <span className="text-sm text-[#626262]">• Requested 1 day ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1 text-sm text-[#626262]">
                                                    <Clock className="w-4 h-4" />
                                                    <span>Joined 2 months ago</span>
                                                </div>
                                            </div>

                                            <div className='grid gap-4 p-4 bg-gray-50  rounded-xl'>
                                                <p className="  text-[#383838] text-sm mb-4">
                                                "Hi there! I've been looking for a {item.title.toLowerCase()} just like this for my home
                                                office. I would really appreciate it and would be able to pick it up anytime. Thanks for
                                                considering!"
                                            </p>
                                            <div className='flex flex-col xl:flex-row items-center gap-6'>
                                                <div className="flex flex-col xl:flex-row flex-1 w-full gap-6">
                                                    <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                        <div className="text-sm text-[#626262] whitespace-nowrap">No. of pickups</div>
                                                        <div className="text-xl font-semibold text-[#222222]">3</div>
                                                    </div>
                                                    <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                        <div className="text-sm text-[#626262] whitespace-nowrap">No-Show Record</div>
                                                        <div className="text-xl font-semibold text-[#222222]">0</div>
                                                    </div>
                                                </div>
                                                <Button variant="primary" className="py-6 w-full xl:w-44">Accept</Button>
                                            </div>
                                                
                                            </div>
                                        
                                        </div>
                                        <div className="rounded-xl">
                                            <div className="flex flex-col xl:flex-row items-start gap-4 mb-4">
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
                                                            <span className="text-sm text-[#626262]">• 2.4km away</span>
                                                            <span className="text-sm text-[#626262]">• Requested 1 day ago</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-1 text-sm text-[#626262]">
                                                    <Clock className="w-4 h-4" />
                                                    <span>Joined 2 months ago</span>
                                                </div>
                                            </div>

                                            <div className='grid gap-4 p-4 bg-gray-50  rounded-xl'>
                                                <p className="  text-[#383838] text-sm mb-4">
                                                "Hi there! I've been looking for a {item.title.toLowerCase()} just like this for my home
                                                office. I would really appreciate it and would be able to pick it up anytime. Thanks for
                                                considering!"
                                            </p>
                                            <div className='flex flex-col xl:flex-row items-center gap-6'>
                                                <div className="flex flex-col xl:flex-row flex-1 w-full gap-6">
                                                    <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                        <div className="text-sm text-[#626262] whitespace-nowrap">No. of pickups</div>
                                                        <div className="text-xl font-semibold text-[#222222]">3</div>
                                                    </div>
                                                    <div className="flex flex-1 py-2 px-6 items-center bg-white justify-between rounded-lg">
                                                        <div className="text-sm text-[#626262] whitespace-nowrap">No-Show Record</div>
                                                        <div className="text-xl font-semibold text-[#222222]">0</div>
                                                    </div>
                                                </div>
                                                <Button variant="primary" className="py-6 w-full xl:w-44">Accept</Button>
                                            </div>
                                                
                                            </div>
                                        
                                        </div>
                                    </>
                                </div>
                            )}
                        </Card>
                    ))}
                </TabsContent>

                <TabsContent value="matched">
                    <div className="text-center py-12">
                        <p className="text-[#626262]">No matched items yet.</p>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    )
}

export default MactchingView