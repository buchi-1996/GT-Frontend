"use client"

import React, { useState } from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { Button } from '../ui/button';
import ResponsiveModal from '../modal/ResponsiveModal';
import ReceiverTimeScheduler from './ReceiverTimeScheduler';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { showReceiverTimeSchedulerModal, showScheduleSuccessModal } from '@/redux/slices/modalSlice';


interface RequestItemsProps {
    id: string;
    title: string;
    image: string;
    status: string;
    requested: string;
    location: string;
    giver: string;
    rating: number;
}


const tabs = [
    { id: "all", label: "All" },
    { id: "pending", label: "Pending" },
    { id: "approved", label: "Approved" },
    { id: "declined", label: "Declined" },
    { id: "completed", label: "Completed" },
]


const getStatusColor = (status: string) => {
    switch (status) {
        case "approved":
            return "bg-[#E2F4E8] text-[#009975]"
        case "completed":
            return "bg-[#E7EFF9] text-[#2563EB]"
        case "declined":
            return "bg-[#FFDDDD] text-[#C00F0C]"
        case "pending":
            return "bg-[#FFFBD4] text-[#A57403]"
        default:
            return "bg-gray-100 text-gray-800"
    }
}

const getStatusText = (status: string) => {
    switch (status) {
        case "approved":
            return "Approved"
        case "completed":
            return "Completed"
        case "declined":
            return "Declined"
        case "pending":
            return "Pending"
        default:
            return status
    }
}



const RequestView = () => {
    const [requestItems] = useState<RequestItemsProps[]>([
        {
            id: "1",
            title: "Children's Books Collection",
            image: "/assets/pickup-items/9df6ff8665696f806e931303f6305ec6e85e89d0.png",
            status: "approved",
            requested: "2 days ago",
            location: "2.3 miles away",
            giver: "Sarah Johnson",
            rating: 4.5,
        },
        {
            id: "2",
            title: "Insta camera Mini 11",
            image: "/assets/pickup-items/784da646fdfff6ab6ab6f264d9398ef12487da91.png",
            status: "completed",
            requested: "3 hours ago",
            location: "1.2 miles away",
            giver: "Emma Davis",
            rating: 4.5,
        },
        {
            id: "3",
            title: "Winter Clothes Bundle",
            image: "/assets/pickup-items/4d1d66028d5c37b456ea611778fef45294670388.png",
            status: "declined",
            requested: "2 days ago",
            location: "2.3 miles away",
            giver: "Michael Johnson",
            rating: 4.5,
        },
        {
            id: "4",
            title: "Vintage Desk Lamp",
            image: "/assets/pickup-items/7e7d66d9f2a6b4a1d658d5f379d7d17f8c272cbe.png",
            status: "pending",
            requested: "2 days ago",
            location: "2.3 miles away",
            giver: "Sarah Johnson",
            rating: 4.5,
        },
        {
            id: "5",
            title: "Office Chair",
            image: "/assets/pickup-items/26d5c2792470ae73a928ea3596432d5ae1d5b71d.png",
            status: "approved",
            requested: "3 days ago",
            location: "Capitol Hill, Seattle",
            giver: "Sarah Johnson",
            rating: 4.5,
        },

    ])

    const [activeTab, setActiveTab] = useState("all")
    const { receiverTimeSchedulerModalOpen, scheduleSuccessModalOpen } = useAppSelector((state) => state.modal);
    const dispatch = useAppDispatch();
    const filteredItems = requestItems.filter((item) => {
        if (activeTab === "all") return true
        return item.status === activeTab
    })

    const getTabCount = (tabId: string) => {
        if (tabId === "all") return requestItems.length
        return requestItems.filter((item) => item.status === tabId).length
    }

    const getActionButtonsForCard = (status: string) => {
        switch (status) {
            case "approved":
                return (
                    <div className='grid grid-cols-2 w-full gap-3'>
                        <Button variant="secondary" className='py-5 w-full'>Message Giver</Button>
                        <Button onClick={() => dispatch(showReceiverTimeSchedulerModal(true))} variant="primary" className='py-5 w-full'>Schedule Pickup</Button>
                    </div>
                )
            case "completed":
                return (
                    <Button variant="secondary" className='py-5 w-full'>View Rating</Button>
                )
            case "declined":
                return (
                    <Button variant="secondary" className='py-5 w-full'>View Message</Button>
                )
            case "pending":
                return (
                    <div className='rounded-lg bg-gray-50 text-xs md:text-[0.8rem] p-3 text-gray-500'>Request under review...</div>
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

                            <div className='grid gap-2 border-b pb-3 my-3'>
                                <div className="flex items-center gap-2">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" d="M10 6a2 2 0 1 0-4 0 2 2 0 0 0 4 0Z" /><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" d="M14.666 8A6.667 6.667 0 1 0 1.333 8a6.667 6.667 0 0 0 13.333 0Z" /><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" d="M11.334 11.333a3.333 3.333 0 0 0-6.667 0" /></svg>
                                    </span>
                                    <p className="text-xs text-gray-500">From {item.giver}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none"><path stroke="#626262" d="M12 12.836c.83.283 1.333.655 1.333 1.062 0 .886-2.387 1.605-5.333 1.605-2.945 0-5.333-.719-5.333-1.605 0-.407.503-.78 1.333-1.062M10 7.17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" /><path stroke="#626262" d="M8 2.17c2.706 0 5 2.285 5 5.058 0 2.817-2.332 4.793-4.485 6.137a1.03 1.03 0 0 1-1.03 0C5.335 12.008 3 10.055 3 7.228 3 4.455 5.294 2.17 8 2.17Z" /></svg>
                                    </span>
                                    <p className="text-xs text-gray-500">{item.location}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none"><path stroke="currentColor" d="M8 15.503A6.667 6.667 0 1 0 8 2.17a6.667 6.667 0 0 0 0 13.333ZM6.333 7.17l2.334 2.333m2-3.333L7.333 9.503" /></svg>
                                    </span>
                                    <p className="text-xs text-gray-500">Requested {item.requested}</p>
                                </div>
                            </div>
                            {/* action buttons */}
                            <div className='mt-auto'>
                                {getActionButtonsForCard(item.status)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ResponsiveModal open={receiverTimeSchedulerModalOpen} close={() => dispatch(showReceiverTimeSchedulerModal(false))} className="py-10 px-6">
                <ReceiverTimeScheduler />
            </ResponsiveModal>

            <ResponsiveModal open={scheduleSuccessModalOpen} close={() => dispatch(showScheduleSuccessModal(false))} className="max-w-full md:max-w-[500px] py-10 px-6">
                <h4 className='font-semibold text-3xl'>Thanks for your interest in this item 💛</h4>
                <p className='text-gray-500'>We had multiple requests, and the giver has selected someone else this time.<br /><br /> Don&apos;t worry there are always more great items being shared every day!<br /><br />

                Keep browsing and you might find your next favorite thing.</p>
                    <Button variant="primary" className='py-6 w-44 mt-4'>Browse Items</Button>
            </ResponsiveModal>
        </div>
    )
}



export default RequestView