"use client"

import React, { useState } from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Button } from '../ui/button';

import { useAppDispatch } from '@/hooks/redux-hooks';
import { showRatingModal } from '@/redux/slices/modalSlice';


interface PickupItemprops {
    id: string;
    title: string;
    image: string;
    status: string;
    pickupDate: string;
    location: string;
    giver: string;
    rating: number;
}


const tabs = [
    { id: "all", label: "All" },
    { id: "scheduled", label: "Scheduled" },
    { id: "picked-up", label: "Picked up" },
    { id: "no-show", label: "No-show" },
    { id: "pending", label: "Pending" },
]


const getStatusColor = (status: string) => {
    switch (status) {
        case "scheduled":
            return "bg-[#F3EAFD] text-[#8E6ADD]"
        case "picked-up":
            return "bg-[#E2F4E8] text-[#009975]"
        case "no-show":
            return "bg-[#FFDDDD] text-[#C00F0C]"
        case "pending":
            return "bg-[#E7EFF9] text-[#2563EB]"
        case "resolved":
            return "bg-[#E2F4E8] text-[#009975]"
        default:
            return "bg-gray-100 text-gray-800"
    }
}

const getStatusText = (status: string) => {
    switch (status) {
        case "scheduled":
            return "Scheduled"
        case "picked-up":
            return "Picked up"
        case "no-show":
            return "No-show"
        case "pending":
            return "Pending confirmation"
        case "resolved":
            return "Resolved"
        default:
            return status
    }
}



const ReceiverPickupView = () => {
    const [pickupItems] = useState<PickupItemprops[]>([
        {
            id: "1",
            title: "Sdorens 118 Sofa Couch",
            image: "/assets/pickup-items/26d5c2792470ae73a928ea3596432d5ae1d5b71d.png",
            status: "scheduled",
            pickupDate: "Oct 1, 2025 @ 14:00",
            location: "3B Gebied Rotterdam Street, South Holland, 3011AD",
            giver: "Sarah Johnson",
            rating: 4.5,
        },
        {
            id: "2",
            title: "Office Chair",
            image: "/assets/pickup-items/298a5bcde4a39366ac3054cd4e4b7b6d3f856897.png",
            status: "pending",
            pickupDate: "Oct 1, 2025 @ 14:00",
            location: "3B Gebied Rotterdam Street, South Holland, 3011AD",
            giver: "Sarah Johnson",
            rating: 4.5,
        },
        {
            id: "3",
            title: "Sdorens 118 Sofa Couch",
            image: "/assets/pickup-items/4238693ee6ba2a233895d815749f8745323d13ed.png",
            status: "picked-up",
            pickupDate: "Oct 1, 2025 @ 14:00",
            location: "3B Gebied Rotterdam Street, South Holland, 3011AD",
            giver: "Sarah Johnson",
            rating: 4.5,
        },
        {
            id: "5",
            title: "Office Chair",
            image: "/assets/pickup-items/cfa5b76f7683cbb3b70e5c6075ef96b40b3c4cc8.png",
            status: "no-show",
            pickupDate: "Oct 1, 2025 @ 14:00",
            location: "3B Gebied Rotterdam Street, South Holland, 3011AD",
            giver: "Sarah Johnson",
            rating: 4.5,
        },
        {
            id: "6",
            title: "Sdorens 118 Sofa Couch",
            image: "/assets/pickup-items/a6caeef3522ab10e25891ab48ea01ad3e52e49a9.png",
            status: "resolved",
            pickupDate: "Oct 1, 2025 @ 14:00",
            location: "3B Gebied Rotterdam Street, South Holland, 3011AD",
            giver: "Sarah Johnson",
            rating: 4.5,
        },
    ])

    const [activeTab, setActiveTab] = useState("all")
    // const { setIsUnmatchedModal, setGiverDisputeModal, setReasonModal, disputeModalOpen, setDisputeModalOpen } = useUIState()
    const dispatch = useAppDispatch();

    const filteredItems = pickupItems.filter((item) => {
        if (activeTab === "all") return true
        return item.status === activeTab
    })

    const getTabCount = (tabId: string) => {
        if (tabId === "all") return pickupItems.length
        return pickupItems.filter((item) => item.status === tabId).length
    }

    const getActionButtonsForCard = (status: string, id: string) => {
        switch (status) {
            case "scheduled":
                return (
                    <div className='grid grid-cols-2 w-full gap-3'>
                        <Button variant="primary" className='py-5 w-full'>View Instructions</Button>
                        <Button variant="secondary" className='py-5 w-full'>Message Giver</Button>
                    </div>
                )
            case "picked-up":
                return (
                    <div className='flex items-center justify-between rounded-lg bg-gray-50 text-xs md:text-[0.8rem] p-3 text-gray-500'>
                        <span>Item successfully received.</span>
                        <button className='text-app-primary p-0' onClick={() => dispatch(showRatingModal(true))}>Rate Giver</button> 
                    </div>
                )
            case "no-show":
                return (
                    <div className='grid grid-cols-2 w-full gap-3'>
                        <Button variant="secondary" className='py-5 w-full'>Archive</Button>
                        <Button variant="primary" className='py-5 w-full'>Relist</Button>
                    </div>
                )
            case "pending":
                return (
                    <div className='grid grid-cols-2 w-full gap-3'>
                        <Button  variant="destructive" className='py-5 w-full'>Mark as No-show</Button>
                        <Button  variant="primary" className='py-5 w-full'>Mark as Picked up</Button>
                    </div>
                )
                case "resolved":
                return (
                    <div className='flex items-center justify-between rounded-lg bg-gray-50 text-xs md:text-[0.8rem] p-3 text-gray-500'>
                        <span>Emergency came up, could not... </span>
                        <button className='text-app-primary p-0'>Read More</button> 
                    </div>
                )
            default:
                return null
        }
    }


    return (
        <div className="min-h-screen">
            <div className="w-full grid gap-10">
                <div className="flex items-center gap-4 justify-between overflow-hidden">
                    <ScrollArea className="w-full overflow-auto">
                        <div className="flex gap-2 md:gap-6 bg-white rounded-lg">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 text-[0.9rem] py-2 whitespace-nowrap rounded-md font-medium transition-colors flex items-center gap-2   ${activeTab === tab.id ? "bg-green-bg text-green-text" : "text-gray-500 hover:text-gray-900"
                                        } `}
                                >
                                    {tab.label}
                                    <Badge variant="secondary" className={`text-gray-600 text-xs ${activeTab === tab.id ? "bg-white text-app-black" : "text-gray-400"}`}>
                                        {getTabCount(tab.id)}
                                    </Badge>
                                </button>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                </div>
            </div>
            {/* Items Grid */}
            <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-6 my-8">
                {filteredItems.map((item) => (
                    <div key={item.id} className="w-full border rounded-lg overflow-hidden">
                        <div className='relative'>
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={1000}
                                height={1000}
                                className="w-full h-48 object-cover"
                            />
                            <Badge className={`absolute bottom-5 right-5 font-semibold text-[#626262] ${getStatusColor(item.status)} py-1 border-none lg:py-1 px-2 lg:px-3 rounded-full text-[0.8rem] lg:text-sm`}>{getStatusText(item.status)}</Badge>
                        </div>
                        <div className='flex flex-col p-4'>
                            <h4 className='font-[500px] text-md'>{item.title}</h4>

                            <div className='grid gap-3 bg-gray-50 p-3 rounded-lg my-3'>
                                <div className='flex gap-2 flex-row items-center'>
                                    <Avatar className="w-6 h-6">
                                        <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                        <AvatarFallback className="bg-[#0d9488] text-xs text-white">SJ</AvatarFallback>
                                    </Avatar>
                                    <div className='flex items-baseline  justify-between w-full'>
                                        <h3 className="font-normal text-xs capitalize text-nowrap text-gray-600 flex gap-2 ">From Sarah Johnson</h3>
                                    </div>
                                </div>
                                
                                <div className="flex items-center gap-2">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" d="M10.667 1.334v2.667M5.334 1.334v2.667M8.667 2.666H7.333c-2.514 0-3.77 0-4.552.781C2 4.228 2 5.485 2 8v1.334c0 2.514 0 3.77.781 4.552.781.781 2.038.781 4.552.781h1.334c2.514 0 3.77 0 4.552-.781.781-.781.781-2.038.781-4.552V7.999c0-2.514 0-3.77-.781-4.552-.781-.781-2.038-.781-4.552-.781ZM2 6.666h12" /></svg>
                                    </span>
                                    <p className="text-xs text-gray-600">Pickup: {item.pickupDate}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#0D9488" d="M10.333 7.333a2.333 2.333 0 1 1-4.667 0 2.333 2.333 0 0 1 4.667 0Z" /><path stroke="#0D9488" d="M8 1.334c3.247 0 6 2.689 6 5.95 0 3.314-2.798 5.64-5.382 7.221a1.256 1.256 0 0 1-1.236 0C4.802 12.908 2 10.61 2 7.285c0-3.262 2.753-5.951 6-5.951Z" /></svg>
                                    </span>
                                    <p className="text-xs text-gray-600">{item.location}</p>
                                </div>
                            </div>
                            {/* action buttons */}
                            <div className='mt-auto'>
                                {getActionButtonsForCard(item.status, item.id)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>            
        </div>
    )
}



export default ReceiverPickupView