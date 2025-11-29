"use client"

import React, { useEffect, useState } from 'react'
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { Badge } from '../ui/badge';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { StarIcon } from 'lucide-react';
import { Button } from '../ui/button';
import ResponsiveAlert from '../modal/ResponsiveAlert';
import ResponsiveModal from '../modal/ResponsiveModal';
import { Textarea } from '../ui/textarea';
import { RadioGroup, RadioGroupItem } from '../ui/radio-group';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import FeedbackReceivedAlert from './FeedbackReceivedAlert';
import { GiverNoshowReasons } from '@/lib/data';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { showCounterDisputeModal, showDisputeRaisedModal, showDisputeReasonModal, showRatingModal, showUnmatchModal } from '@/redux/slices/modalSlice';


interface PickupItemprops {
    id: string;
    title: string;
    image: string;
    status: string;
    pickupDate: string;
    location: string;
    receiver: string;
    rating: number;
}


const tabs = [
    { id: "all", label: "All" },
    { id: "scheduled", label: "Scheduled" },
    { id: "picked-up", label: "Picked up" },
    { id: "no-show", label: "No-show" },
    { id: "dispute", label: "Dispute" },
    { id: "pending", label: "Pending" },
]


const getStatusColor = (status: string) => {
    switch (status) {
        case "scheduled":
            return "bg-[#F3EAFD] text-[#8E6ADD] border-green-200"
        case "picked-up":
            return "bg-[#E2F4E8] text-[#009975] border-yellow-200"
        case "no-show":
            return "bg-[#FFDDDD] text-[#C00F0C] border-gray-200"
        case "pending":
            return "bg-[#E7EFF9] text-[#2563EB] border-red-200"
        case "dispute":
            return "bg-[#E7EFF9] text-[#2563EB] border-red-200"
        default:
            return "bg-gray-100 text-gray-800 border-gray-200"
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
        case "dispute":
            return "Dispute"
        case "pending":
            return "Pickup Pending"
        default:
            return status
    }
}



const PickupView = () => {
    const [pickupItems] = useState<PickupItemprops[]>([
        {
            id: "1",
            title: "Sdorens 118 Sofa Couch",
            image: "/assets/pickup-items/26d5c2792470ae73a928ea3596432d5ae1d5b71d.png",
            status: "scheduled",
            pickupDate: "Oct 1, 2025",
            location: "Capitol Hill, Seattle",
            receiver: "John Doe",
            rating: 4.5,
        },
        {
            id: "2",
            title: "Office Chair",
            image: "/assets/pickup-items/298a5bcde4a39366ac3054cd4e4b7b6d3f856897.png",
            status: "picked-up",
            pickupDate: "Oct 1, 2025",
            location: "Capitol Hill, Seattle",
            receiver: "John Doe",
            rating: 4.5,
        },
        {
            id: "3",
            title: "Sdorens 118 Sofa Couch",
            image: "/assets/pickup-items/4238693ee6ba2a233895d815749f8745323d13ed.png",
            status: "pending",
            pickupDate: "Oct 1, 2025",
            location: "Capitol Hill, Seattle",
            receiver: "John Doe",
            rating: 4.5,
        },
        {
            id: "4",
            title: "Vintage Desk Lamp",
            image: "/assets/pickup-items/9df6ff8665696f806e931303f6305ec6e85e89d0.png",
            status: "dispute",
            pickupDate: "Oct 1, 2025",
            location: "Capitol Hill, Seattle",
            receiver: "John Doe",
            rating: 4.5,
        },
        {
            id: "5",
            title: "Office Chair",
            image: "/assets/pickup-items/cfa5b76f7683cbb3b70e5c6075ef96b40b3c4cc8.png",
            status: "no-show",
            pickupDate: "Oct 1, 2025",
            location: "Capitol Hill, Seattle",
            receiver: "John Doe",
            rating: 4.5,
        },
        {
            id: "6",
            title: "Sdorens 118 Sofa Couch",
            image: "/assets/pickup-items/a6caeef3522ab10e25891ab48ea01ad3e52e49a9.png",
            status: "pending",
            pickupDate: "Oct 1, 2025",
            location: "Capitol Hill, Seattle",
            receiver: "John Doe",
            rating: 4.5,
        },
    ])

    const [activeTab, setActiveTab] = useState("all")

    // const { setIsUnmatchedModal, setGiverDisputeModal, setReasonModal, disputeModalOpen, setDisputeModalOpen } = useUIState()
    const dispatch = useAppDispatch();
    const { counterDisputeModalOpen } = useAppSelector((state) => state.modal.dispute);


   


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
                        <Button variant="secondary" className='py-5 w-full'>Send Message</Button>
                        <Button onClick={() => dispatch(showUnmatchModal(true))} variant="destructive" className='py-5 w-full'>Un-Match</Button>
                    </div>
                )
            case "picked-up":
                return (
                    <div className='rounded-lg bg-gray-50 text-xs md:text-[0.8rem] p-3 text-gray-500'>Item successfully received by recipient</div>
                )
            case "no-show":
                return (
                    <div className='grid grid-cols-2 w-full gap-3'>
                        <Button variant="secondary" className='py-5 w-full'>Archive</Button>
                        <Button variant="primary" className='py-5 w-full'>Relist</Button>
                    </div>
                    // <div className='rounded-lg bg-gray-50 text-xs md:text-[0.8rem] p-3 text-gray-500'>Item moved to draft</div>
                )
            case "pending":
                return (
                    <div className='grid grid-cols-2 w-full gap-3'>
                        <Button onClick={() => handleMarkNoShow(id)} variant="destructive_inverted" className='py-5 w-full'>Mark as No-show</Button>
                        <Button onClick={() => handlePickupConfirmation(id)} variant="primary" className='py-5 w-full'>Mark as Picked up</Button>
                    </div>
                )
            case "dispute":
                return (
                    <div className='grid grid-cols-2 w-full gap-3'>
                        <Button onClick={() => dispatch(showDisputeReasonModal(true))} variant="secondary" className='py-5 w-full'>Give Reason</Button>
                        <Button onClick={() => dispatch(showCounterDisputeModal(true))} variant="primary" className='py-5 w-full'>Counter Dispute</Button>
                    </div>
                )
            default:
                return null
        }
    }


    const [confirmPickModal, setConfirmPickupModal] = useState(false)
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [markNoShowModal, setIsMarkNoShowModal] = useState(false)
    const [reportNoShowModal, setReportNoShowModal] = useState(false)
    const [selectedValue, setSelectedValue] = useState('')
    const [selectedDisputeValue, setSelectedDisputeValue] = useState('')
    const [disputeFeedbackReceived, setDisputeFeedbackReceived] = useState(false)

    const [doNextValue, setDoNextValue] = useState('')
    const [doNextModal, setDoNextModal] = useState(false)
    const [noShowUploadedFileName, setNoShowUploadedFileName] = useState('');
    const [disputeUploadedFileName, setDisputeUploadedFileName] = useState('');

    const handleNoShowFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setNoShowUploadedFileName(file.name);
        } else {
            setNoShowUploadedFileName('');
        }
    };

    const handleDisputeFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setDisputeUploadedFileName(file.name);
        } else {
            setDisputeUploadedFileName('');
        }
    };






    const handlePickupConfirmation = (id: string) => {
        console.log(`Pickup confirmed for item with id: ${id}`)
        setConfirmPickupModal(true)
        // Here you can add logic to update the item status to "picked-up"
    }

    const handleMarkNoShow = (id: string) => {
        console.log(`Item to be Marked: ${id}`)
        setIsMarkNoShowModal(true)
        // Here you can add logic to update the item status to "picked-up"
    }

    const handleProceedMarkNoShow = () => {
        setIsMarkNoShowModal(false)
        setReportNoShowModal(true)
    }


    const handleReportNoShowSubmit = () => {
        setReportNoShowModal(false)
        setDoNextModal(true)
        // Submit form here
    }

    const handleConfirmPickup = () => {
        setConfirmPickupModal(false)
        setIsConfirmed(true)
    }

    const handleDoNext = () => {
        setDoNextModal(false)
        // submit form action here
        console.log("Do next action submitted with value:", doNextValue);
    }

    //    Open Receiver dispute Modal on Load
    useEffect(() => {
        dispatch(showDisputeRaisedModal(true))
        // setGiverDisputeModal(true)
    }, [dispatch])

    const handleSubmitDispute = () => {
        // setDisputeModalOpen(false)
        dispatch(showCounterDisputeModal(false))
        setDisputeFeedbackReceived(true)
    }
    const leaveFeedback = () => {
        setIsConfirmed(false)
        dispatch(showRatingModal(true))
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
                            <div className='flex gap-2 border-b pb-3 flex-row items-center'>
                                <Avatar className="w-6 h-6">
                                    <AvatarImage src="/placeholder.svg?height=48&width=48" />
                                    <AvatarFallback className="bg-[#0d9488] text-xs text-white">SJ</AvatarFallback>
                                </Avatar>
                                <div className='flex items-baseline  justify-between w-full'>
                                    <h3 className="font-normal text-xs capitalize text-nowrap text-gray-500 flex gap-2 ">Sarah Johnson <span className='flex gap-2 items-center'>•<StarIcon className="w-4 h-4 stroke-0 fill-amber-300 text-[#E8B931]" /> 5.0</span></h3>
                                    {item.status === "picked-up" && (<Button onClick={() => dispatch(showRatingModal(true))} variant="ghost" className='text-[#0D9488] h-0 cursor-pointer hover:text-[#0D9488] p-0 bg-none hover:bg-none'>Rate</Button>)}
                                </div>
                            </div>
                            <div className='grid gap-2 my-3'>
                                <div className="flex items-center gap-2">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none">
                                            <path
                                                stroke="#626262"
                                                strokeLinecap="round"
                                                d="M12 12.836c.83.283 1.333.655 1.333 1.062 0 .886-2.387 1.605-5.333 1.605-2.945 0-5.333-.719-5.333-1.605 0-.407.503-.78 1.333-1.062"
                                            ></path>
                                            <path stroke="#626262" d="M10 7.17a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"></path>
                                            <path
                                                stroke="#626262"
                                                d="M8 2.17c2.706 0 5 2.285 5 5.058 0 2.817-2.332 4.793-4.485 6.137a1.03 1.03 0 0 1-1.03 0C5.335 12.008 3 10.055 3 7.228 3 4.455 5.294 2.17 8 2.17Z"
                                            ></path>
                                        </svg>
                                    </span>
                                    <p className="text-xs text-gray-500">Capoitol Hill, Seattle</p>
                                </div>
                                {item.status === "dispute" ? (<div className="flex items-center gap-2">
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" d="M8 15.505A6.667 6.667 0 1 0 8 2.172a6.667 6.667 0 0 0 0 13.333ZM8 11.504v-3" /><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M8 6.179v-.007" /></svg>
                                    </span>
                                    <p className="text-xs">Item marked as no show</p>
                                </div>)
                                    : item.status === "no-show" ? (<div className="flex items-center gap-2">
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" d="M8 15.505A6.667 6.667 0 1 0 8 2.172a6.667 6.667 0 0 0 0 13.333ZM8 11.504v-3" /><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M8 6.179v-.007" /></svg>
                                        </span><p className="text-xs">Receiver never showed up</p>
                                    </div>) :
                                        <div className="flex items-center gap-2">
                                            <span>
                                                <svg className="text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="17" fill="none">
                                                    <path
                                                        stroke="currentColor"
                                                        d="M8 15.503A6.667 6.667 0 1 0 8 2.17a6.667 6.667 0 0 0 0 13.333Z"
                                                    ></path>
                                                    <path
                                                        stroke="currentColor"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        d="m6.333 7.17 2.334 2.333m2-3.333L7.333 9.503"
                                                    ></path>
                                                </svg>
                                            </span>
                                            <p className="text-xs">Pickup: {item.pickupDate} at 14:00</p>
                                        </div>}
                            </div>
                            {/* action buttons */}
                            <div className='mt-auto'>
                                {getActionButtonsForCard(item.status, item.id)}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <ResponsiveAlert open={confirmPickModal} close={() => { }} className='py-4 md:py-20'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-2 md:p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="80" height="81" fill="none">
                            <rect width="80" height="80" y="0.5" fill="#F1F3DE" rx="40"></rect>
                            <path
                                stroke="#989F42"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="M42 61c-1.636 0-3.2-.682-6.326-2.047-3.65-1.593-6.443-2.812-8.381-3.953H20m22 6c1.636 0 3.2-.682 6.326-2.047C56.11 55.556 60 53.857 60 51V30M42 61V39m-18-9v6"
                            ></path>
                            <path
                                stroke="#989F42"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="3"
                                d="m34.652 36.383-5.843-2.827C25.603 32.004 24 31.229 24 30s1.603-2.004 4.81-3.556l5.842-2.827C38.258 21.872 40.06 21 42 21s3.742.872 7.348 2.617l5.843 2.827C58.397 27.996 60 28.772 60 30s-1.603 2.004-4.81 3.556l-5.842 2.827C45.742 38.128 43.94 39 42 39s-3.742-.872-7.348-2.617m17.621-11.352L31.734 34.97M20 43h6m-6 6h6"
                            ></path>
                        </svg>
                    </span>
                    <h4 className='text-xl md:text-2xl font-semibold'>Waiting for receiver confirmation</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>You marked the item as picked up. The receiver has been asked to confirm. We&apos;ll auto-marked the item as picked up after 48 hours. </p>
                    <div className='flex items-center justify-center gap-4 mt-2 mb-2 md:mb-0 md:mt-6'>
                        <Button onClick={handleConfirmPickup} variant="primary" className=' w-auto w-24 py-6 px-6'>Ok</Button>
                    </div>
                </div>
            </ResponsiveAlert>

            {/* Pickup confirmed */}
            <ResponsiveAlert open={isConfirmed} close={() => { }} className='py-4 md:py-20'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-4 md:p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="100" fill="none"><path fill="#FF6D83" d="M3.281 38.73a4.155 4.155 0 1 1 1.75 8.124 4.155 4.155 0 0 1-1.75-8.123Z" /><path fill="#4671FF" d="M91.044 25.745a4.093 4.093 0 1 1 1.725 8.003 4.093 4.093 0 0 1-1.725-8.003Z" /><path fill="#FFB636" d="M51.314.614a4.276 4.276 0 1 1 1.8 8.362 4.276 4.276 0 0 1-1.8-8.362Z" /><path fill="#4671FF" d="M30.439 91.025a4.276 4.276 0 1 1 1.801 8.361 4.277 4.277 0 0 1-1.801-8.361Z" /><path fill="#AD8FE6" stroke="#AD8FE6" stroke-width=".377" d="M88.905 71.18a4.149 4.149 0 1 1 1.746 8.113 4.149 4.149 0 0 1-1.746-8.112Z" /><path fill="#14AE7D" d="M58.222 16.82c19.245 5.157 30.665 24.937 25.509 44.181-5.157 19.245-24.938 30.665-44.182 25.508C20.305 81.352 8.884 61.572 14.04 42.33c5.156-19.245 24.937-30.665 44.181-25.509Z" /><path fill="#fff" d="M42.907 65.372a1.017 1.017 0 0 1-1.424-.06L28.388 51.328a2.793 2.793 0 0 1-.608-1.973 2.8 2.8 0 0 1 .919-1.852 2.903 2.903 0 0 1 1.956-.743 2.907 2.907 0 0 1 1.952.76l9.437 10.077c.252.27.675.287.949.04l19.792-17.872a2.907 2.907 0 0 1 2.008-.593c.723.057 1.396.38 1.887.905a2.8 2.8 0 0 1 .76 1.922 2.793 2.793 0 0 1-.77 1.915L42.906 65.372Z" /><path stroke="#FF6E83" stroke-linecap="round" stroke-width="2.143" d="M20.834 15.332c-.66-2.45-2.229-5.7-5.95-7.768" /><path fill="#AD8FE6" d="M16.643 86.989c-.718.119-1.758.058-3.223-.263-8.31-1.824-.912 5.37-.912 5.37s1.894 3.718-1.73 2.808" /><path stroke="#AD8FE6" strokeLinecap="round" strokeWidth="2.027" d="M16.643 86.989c-.718.119-1.758.058-3.223-.263-8.31-1.824-.912 5.37-.912 5.37s1.894 3.718-1.73 2.808" /><path stroke="#FFB636" stroke-linecap="round" stroke-width="1.832" d="M83.127 11.48c2.277-.83 4.95-.007 7.54 5.027 4.883 9.487-6.64 7.553-5.97 1.64" /><path fill="#4671FF" d="M74.115 87.426c.649 1.803 2.41 3.918 6.791 5.378a32.5 32.5 0 0 1 1.412.505" /><path stroke="#6EB9FF" stroke-linecap="round" stroke-width="2.027" d="M74.115 87.426c.649 1.803 2.41 3.918 6.791 5.378a32.5 32.5 0 0 1 1.412.505" /></svg>
                    </span>
                    <h4 className='text-xl md:text-2xl font-semibold'>Pickup Confirmed</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>Thanks! We’ve marked the item as picked up.</p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={() => setIsConfirmed(false)} variant="secondary" className='w-auto md:w-44 py-6 px-6 cursor-pointer'>Done</Button>

                        <Button onClick={leaveFeedback} variant="primary" className='w-auto md:w-44 py-6 px-6'>Leave Feedback</Button>
                    </div>
                </div>
            </ResponsiveAlert>



            {/* <ResponsiveAlert open={feedbackReceivedModal} close={() => { }} className='py-4 md:py-20'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-4 md:p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="100" fill="none"><path fill="#FF6D83" d="M3.281 38.73a4.155 4.155 0 1 1 1.75 8.124 4.155 4.155 0 0 1-1.75-8.123Z" /><path fill="#4671FF" d="M91.044 25.745a4.093 4.093 0 1 1 1.725 8.003 4.093 4.093 0 0 1-1.725-8.003Z" /><path fill="#FFB636" d="M51.314.614a4.276 4.276 0 1 1 1.8 8.362 4.276 4.276 0 0 1-1.8-8.362Z" /><path fill="#4671FF" d="M30.439 91.025a4.276 4.276 0 1 1 1.801 8.361 4.277 4.277 0 0 1-1.801-8.361Z" /><path fill="#AD8FE6" stroke="#AD8FE6" stroke-width=".377" d="M88.905 71.18a4.149 4.149 0 1 1 1.746 8.113 4.149 4.149 0 0 1-1.746-8.112Z" /><path fill="#14AE7D" d="M58.222 16.82c19.245 5.157 30.665 24.937 25.509 44.181-5.157 19.245-24.938 30.665-44.182 25.508C20.305 81.352 8.884 61.572 14.04 42.33c5.156-19.245 24.937-30.665 44.181-25.509Z" /><path fill="#fff" d="M42.907 65.372a1.017 1.017 0 0 1-1.424-.06L28.388 51.328a2.793 2.793 0 0 1-.608-1.973 2.8 2.8 0 0 1 .919-1.852 2.903 2.903 0 0 1 1.956-.743 2.907 2.907 0 0 1 1.952.76l9.437 10.077c.252.27.675.287.949.04l19.792-17.872a2.907 2.907 0 0 1 2.008-.593c.723.057 1.396.38 1.887.905a2.8 2.8 0 0 1 .76 1.922 2.793 2.793 0 0 1-.77 1.915L42.906 65.372Z" /><path stroke="#FF6E83" stroke-linecap="round" stroke-width="2.143" d="M20.834 15.332c-.66-2.45-2.229-5.7-5.95-7.768" /><path fill="#AD8FE6" d="M16.643 86.989c-.718.119-1.758.058-3.223-.263-8.31-1.824-.912 5.37-.912 5.37s1.894 3.718-1.73 2.808" /><path stroke="#AD8FE6" strokeLinecap="round" strokeWidth="2.027" d="M16.643 86.989c-.718.119-1.758.058-3.223-.263-8.31-1.824-.912 5.37-.912 5.37s1.894 3.718-1.73 2.808" /><path stroke="#FFB636" stroke-linecap="round" stroke-width="1.832" d="M83.127 11.48c2.277-.83 4.95-.007 7.54 5.027 4.883 9.487-6.64 7.553-5.97 1.64" /><path fill="#4671FF" d="M74.115 87.426c.649 1.803 2.41 3.918 6.791 5.378a32.5 32.5 0 0 1 1.412.505" /><path stroke="#6EB9FF" stroke-linecap="round" stroke-width="2.027" d="M74.115 87.426c.649 1.803 2.41 3.918 6.791 5.378a32.5 32.5 0 0 1 1.412.505" /></svg>
                    </span>
                    <h4 className='text-xl md:text-2xl font-semibold'>Feedback Received</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>Thank you for taking out time to give a feedback for receiver</p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={() => setFeedbackReceivedModal(false)} variant="primary" className='w-auto md:w-44 py-6 px-6'>Done</Button>
                    </div>
                </div>
            </ResponsiveAlert> */}
            {/* Feedback Received - Mark No show */}
            {/* <FeedbackReceivedAlert
                subtext='Thank you for taking out time to give a feedback for receiver'
                open={feedbackReceivedModal}
                onClose={() => setFeedbackReceivedModal(false)}
                buttonText='Done'
            /> */}

            <ResponsiveModal open={markNoShowModal} close={() => setIsMarkNoShowModal(false)} className='py-4 md:py-14'>
                <div className='flex flex-col items-center gap-3 justify-center text-center p-4 md:p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="89" height="85" fill="none"><rect width="80.497" height="80.496" x=".876" y=".75" fill="#F1F3DE" rx="40.248" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M41.138 60.75c-1.637 0-3.2-.66-6.326-1.981-7.783-3.288-11.674-4.931-11.674-7.696V30.75m18 30c1.636 0 3.2-.66 6.326-1.981 7.782-3.288 11.674-4.931 11.674-7.696V30.75m-18 30V39.46M33.79 36.133l-5.843-2.827c-3.206-1.552-4.81-2.327-4.81-3.556s1.604-2.004 4.81-3.556l5.842-2.827c3.606-1.745 5.41-2.617 7.349-2.617 1.94 0 3.742.872 7.348 2.617l5.842 2.827c3.206 1.552 4.81 2.328 4.81 3.556 0 1.229-1.603 2.004-4.81 3.556l-5.842 2.827c-3.606 1.745-5.409 2.617-7.348 2.617-1.94 0-3.743-.872-7.349-2.617Z" /><path stroke="#989F42" stroke-linecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m29.138 40.75 4 2" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m51.138 24.75-20 10" /><circle cx="65.124" cy="61.248" r="21.5" fill="#D33737" stroke="#fff" strokeWidth="3" /><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.143" d="M62.933 54.923c1.033 1.033 1.55 1.55 2.191 1.55.642 0 1.158-.517 2.191-1.55l2.192-2.191c.51-.51.765-.765 1.03-.918 1.333-.77 2.43-.005 3.353.918.924.923 1.687 2.02.918 3.354-.153.264-.408.52-.917 1.029l-2.192 2.191c-1.033 1.033-1.55 1.55-1.55 2.192 0 .642.517 1.158 1.55 2.191l2.192 2.192c.509.51.764.765.917 1.03.77 1.333.006 2.43-.918 3.353-.922.924-2.02 1.687-3.353.918-.265-.153-.52-.408-1.03-.918l-2.191-2.191c-1.033-1.033-1.55-1.55-2.192-1.55-.642 0-1.159.517-2.191 1.55l-2.192 2.191c-.51.51-.764.765-1.03.918-1.332.77-2.43.006-3.353-.918-.924-.923-1.687-2.02-.918-3.353.153-.265.408-.52.918-1.03l2.191-2.192c1.033-1.033 1.55-1.55 1.55-2.19 0-.643-.517-1.16-1.55-2.193l-2.192-2.191c-.509-.51-.764-.765-.917-1.03-.77-1.333-.006-2.43.918-3.353.923-.923 2.02-1.687 3.353-.918.266.153.52.408 1.03.917l2.192 2.192Z" /></svg>
                    </span>
                    <h4 className='text-xl md:text-2xl font-semibold'>Mark as No-show?</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>You&apos;re reporting that the receiver did not come for the pickup as agreed.</p>
                    <div className="bg-[#FFFBD4] border-[#FDE68A] border-1 rounded-lg p-4 mt-4 max-w-md">
                        <p className="text-[#E5A000] text-sm text-left leading-5">Before reporting: Consider messaging the receiver first. They might have had an emergency or misunderstood the pickup details.</p>
                    </div>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <Button onClick={() => setIsMarkNoShowModal(false)} variant="secondary" className='w-auto md:w-44 py-6 px-6 cursor-pointer'>No, cancel</Button>

                        <Button onClick={handleProceedMarkNoShow} variant="primary" className='w-auto md:w-44 py-6 px-6'>Yes, proceed</Button>
                    </div>
                </div>
            </ResponsiveModal>

            {/* Report No-show */}
            <ResponsiveModal open={reportNoShowModal} close={() => setReportNoShowModal(false)} className="max-w-full md:max-w-[500px] min-h-[90%] md:min-h-auto pb-10 px-6">
                <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="89" height="85" fill="none"><rect width="80.497" height="80.496" x=".876" y=".75" fill="#F1F3DE" rx="40.248" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M41.138 60.75c-1.637 0-3.2-.66-6.326-1.981-7.783-3.288-11.674-4.931-11.674-7.696V30.75m18 30c1.636 0 3.2-.66 6.326-1.981 7.782-3.288 11.674-4.931 11.674-7.696V30.75m-18 30V39.46M33.79 36.133l-5.843-2.827c-3.206-1.552-4.81-2.327-4.81-3.556s1.604-2.004 4.81-3.556l5.842-2.827c3.606-1.745 5.41-2.617 7.349-2.617 1.94 0 3.742.872 7.348 2.617l5.842 2.827c3.206 1.552 4.81 2.328 4.81 3.556 0 1.229-1.603 2.004-4.81 3.556l-5.842 2.827c-3.606 1.745-5.409 2.617-7.348 2.617-1.94 0-3.743-.872-7.349-2.617Z" /><path stroke="#989F42" stroke-linecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m29.138 40.75 4 2" /><path stroke="#989F42" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m51.138 24.75-20 10" /><circle cx="65.124" cy="61.248" r="21.5" fill="#D33737" stroke="#fff" strokeWidth="3" /><path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.143" d="M62.933 54.923c1.033 1.033 1.55 1.55 2.191 1.55.642 0 1.158-.517 2.191-1.55l2.192-2.191c.51-.51.765-.765 1.03-.918 1.333-.77 2.43-.005 3.353.918.924.923 1.687 2.02.918 3.354-.153.264-.408.52-.917 1.029l-2.192 2.191c-1.033 1.033-1.55 1.55-1.55 2.192 0 .642.517 1.158 1.55 2.191l2.192 2.192c.509.51.764.765.917 1.03.77 1.333.006 2.43-.918 3.353-.922.924-2.02 1.687-3.353.918-.265-.153-.52-.408-1.03-.918l-2.191-2.191c-1.033-1.033-1.55-1.55-2.192-1.55-.642 0-1.159.517-2.191 1.55l-2.192 2.191c-.51.51-.764.765-1.03.918-1.332.77-2.43.006-3.353-.918-.924-.923-1.687-2.02-.918-3.353.153-.265.408-.52.918-1.03l2.191-2.192c1.033-1.033 1.55-1.55 1.55-2.19 0-.643-.517-1.16-1.55-2.193l-2.192-2.191c-.509-.51-.764-.765-.917-1.03-.77-1.333-.006-2.43.918-3.353.923-.923 2.02-1.687 3.353-.918.266.153.52.408 1.03.917l2.192 2.192Z" /></svg>
                </span>
                <div className='grid gap-2 my-6 md:my-auto'>
                    <h4 className='font-bold text-xl'>Report No-show</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>Help us decide what happened and decide next steps.</p>
                </div>
                {/* Product Info */}
                <div className="w-full mb-4 md:mb-auto flex items-center gap-3 p-3 bg-[#f9fafb] rounded-lg mt-2">
                    <Image
                        src="/assets/giver-items/Frame 2087328010-2.png"
                        width={400}
                        height={400}
                        alt="Vintage Desk Lamp"
                        className="w-18 h-14 rounded-lg object-cover"
                    />
                    <div className="text-left grid gap-1">
                        <div className="font-medium text-[#222222]">Vintage Desk Lamp</div>
                        <div className="text-sm text-[#878686]">Picked up by Sarah Johnson</div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg pt-5  mb-6 md:mb-auto md:h-64  overflow-y-auto scrollbar-hide">
                    <RadioGroup
                        value={selectedValue}
                        onValueChange={setSelectedValue}
                        className='py-1 grid gap-4 px-6 overflow-y-auto mb-4 scrollbar-hide'
                    >
                        {GiverNoshowReasons.map((option) => (
                            <div key={option.value} className={option.hasTextarea ? "w-full grid gap-2 items-start" : "flex items-center gap-3"}>
                                <div className="flex items-center gap-3 mb-4">
                                    <RadioGroupItem
                                        value={option.value}
                                        className="ring ring-app-primary text-app-primary"
                                        id={option.value}
                                    />
                                    <Label htmlFor={option.value} className="leading-5 text-gray-500">
                                        {option.label}
                                    </Label>
                                </div>

                                {option.hasTextarea && (
                                    <Textarea
                                        rows={7}
                                        className='placeholder:text-gray-400 p-2 mt-1 min-w-full bg-white shadow-none border-none'
                                        placeholder='Please describe what happened'
                                    />
                                )}
                            </div>
                        ))}

                        <Label htmlFor="report-no-show-file" className="mb-6 gap-2 overflow-hidden flex items-center cursor-pointer">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none">
                                    <path stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2.5 13.58 3.725-3.724a1.51 1.51 0 0 1 2.134 0l3.308 3.308m0 0 1.25 1.25m-1.25-1.25 1.641-1.641a1.509 1.509 0 0 1 2.134 0L17.5 13.58" />
                                    <path stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 2.332c-3.525 0-5.287 0-6.456.998-.166.142-.32.297-.462.463-.998 1.169-.998 2.93-.998 6.456 0 3.524 0 5.287.998 6.456.142.166.296.32.462.462 1.169.998 2.931.998 6.456.998 3.525 0 5.287 0 6.456-.998.166-.142.32-.296.463-.462.998-1.17.998-2.932.998-6.456M17.917 5.249H15m0 0h-2.916m2.916 0V2.332m0 2.917v2.916" />
                                </svg>
                            </span>
                            <div className="flex items-center gap-3">
                                <span className='text-sm text-app-primary'>Upload evidence</span>
                                {noShowUploadedFileName && (
                                    <span className="text-sm underline text-gray-500">{noShowUploadedFileName}</span>
                                )}
                                <Input
                                    type="file"
                                    className='sr-only w-1/2'
                                    id='report-no-show-file'
                                    onChange={handleNoShowFileUpload}
                                />
                            </div>
                        </Label>
                    </RadioGroup>
                </div>
                <Button
                    onClick={handleReportNoShowSubmit}
                    disabled={!selectedValue}
                    variant="primary"
                    className='py-6 w-full'>Done</Button>
            </ResponsiveModal>

            {/* No-show feedback received */}
            <ResponsiveModal open={doNextModal} close={() => setDoNextModal(false)} className="max-w-full md:max-w-[500px] min-h-[86%] md:min-h-auto pb-10 px-6">
                <div className='flex flex-col items-center gap-3 justify-center text-center p-4 md:p-6'>
                    <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="100" fill="none"><path fill="#FF6D83" d="M3.281 38.73a4.155 4.155 0 1 1 1.75 8.124 4.155 4.155 0 0 1-1.75-8.123Z" /><path fill="#4671FF" d="M91.044 25.745a4.093 4.093 0 1 1 1.725 8.003 4.093 4.093 0 0 1-1.725-8.003Z" /><path fill="#FFB636" d="M51.314.614a4.276 4.276 0 1 1 1.8 8.362 4.276 4.276 0 0 1-1.8-8.362Z" /><path fill="#4671FF" d="M30.439 91.025a4.276 4.276 0 1 1 1.801 8.361 4.277 4.277 0 0 1-1.801-8.361Z" /><path fill="#AD8FE6" stroke="#AD8FE6" stroke-width=".377" d="M88.905 71.18a4.149 4.149 0 1 1 1.746 8.113 4.149 4.149 0 0 1-1.746-8.112Z" /><path fill="#14AE7D" d="M58.222 16.82c19.245 5.157 30.665 24.937 25.509 44.181-5.157 19.245-24.938 30.665-44.182 25.508C20.305 81.352 8.884 61.572 14.04 42.33c5.156-19.245 24.937-30.665 44.181-25.509Z" /><path fill="#fff" d="M42.907 65.372a1.017 1.017 0 0 1-1.424-.06L28.388 51.328a2.793 2.793 0 0 1-.608-1.973 2.8 2.8 0 0 1 .919-1.852 2.903 2.903 0 0 1 1.956-.743 2.907 2.907 0 0 1 1.952.76l9.437 10.077c.252.27.675.287.949.04l19.792-17.872a2.907 2.907 0 0 1 2.008-.593c.723.057 1.396.38 1.887.905a2.8 2.8 0 0 1 .76 1.922 2.793 2.793 0 0 1-.77 1.915L42.906 65.372Z" /><path stroke="#FF6E83" stroke-linecap="round" stroke-width="2.143" d="M20.834 15.332c-.66-2.45-2.229-5.7-5.95-7.768" /><path fill="#AD8FE6" d="M16.643 86.989c-.718.119-1.758.058-3.223-.263-8.31-1.824-.912 5.37-.912 5.37s1.894 3.718-1.73 2.808" /><path stroke="#AD8FE6" strokeLinecap="round" strokeWidth="2.027" d="M16.643 86.989c-.718.119-1.758.058-3.223-.263-8.31-1.824-.912 5.37-.912 5.37s1.894 3.718-1.73 2.808" /><path stroke="#FFB636" stroke-linecap="round" stroke-width="1.832" d="M83.127 11.48c2.277-.83 4.95-.007 7.54 5.027 4.883 9.487-6.64 7.553-5.97 1.64" /><path fill="#4671FF" d="M74.115 87.426c.649 1.803 2.41 3.918 6.791 5.378a32.5 32.5 0 0 1 1.412.505" /><path stroke="#6EB9FF" stroke-linecap="round" stroke-width="2.027" d="M74.115 87.426c.649 1.803 2.41 3.918 6.791 5.378a32.5 32.5 0 0 1 1.412.505" /></svg>
                    </span>
                    <h4 className='text-xl md:text-2xl font-semibold'>Feedback Received</h4>
                </div>
                <div className="bg-gray-50 rounded-lg pt-5 mb-6 md:mb-auto overflow-y-auto scrollbar-hide">
                    <RadioGroup value={doNextValue} onValueChange={setDoNextValue} className='py-1 grid gap-6 px-6 overflow-y-auto mb-4 scrollbar-hide'>
                        <h4 className='font-semibold text-sm'>What would you like to do next?</h4>
                        <div className="flex items-start gap-3">
                            <RadioGroupItem value="reschedule with the same person" className="ring ring-app-primary  text-app-primary" id="reschedule" />
                            <Label htmlFor="reschedule" className="text-gray-500 grid gap-2">
                                <h4 className='text-gray-800'>Reschedule with the same person</h4>
                                <p className='text-gray-500 text-xs'>Give them another chance</p>
                            </Label>
                        </div>

                        <div className="flex items-start gap-3">
                            <RadioGroupItem value="offer to other people" className="ring ring-app-primary  text-app-primary" id="offer-to-others" />
                            <Label htmlFor="offer-to-others" className="text-gray-500 grid gap-2">
                                <h4 className='text-gray-800'>Offer to other people</h4>
                                <p className='text-gray-500 text-xs'>Make available to new receivers</p>
                            </Label>
                        </div>
                        <div className="flex items-start gap-3">
                            <RadioGroupItem value="remove item listing" className="ring ring-app-primary  text-app-primary" id="remove-item-listing" />
                            <Label htmlFor="remove-item-listing" className="text-gray-500 grid gap-2">
                                <h4 className='text-gray-800'>Remove item listing</h4>
                                <p className='text-gray-500 text-xs'>Take down the listing</p>
                            </Label>
                        </div>
                    </RadioGroup>

                </div>
                <Button
                    onClick={handleDoNext}
                    disabled={!doNextValue}
                    variant="primary"
                    className='py-6 w-full'>Done</Button>
            </ResponsiveModal>


            {/* Counter Dispute Modal */}
            <ResponsiveModal open={counterDisputeModalOpen} close={() => dispatch(showCounterDisputeModal(false))} className="max-w-full md:max-w-[500px] min-h-[90%] md:min-h-auto pb-10 px-6">
                <div className='grid gap-2 my-6 md:my-auto'>
                    <h4 className='font-bold text-xl'>Counter Dispute</h4>
                    <p className='text-sm text-gray-500 sm:max-w-sm'>Help us understand what happened</p>
                </div>
                {/* Product Info */}
                <div className="w-full mb-4 md:mb-auto flex items-center gap-3 p-3 bg-[#f9fafb] rounded-lg mt-2">
                    <Image
                        src="/assets/giver-items/Frame 2087328010-2.png"
                        width={400}
                        height={400}
                        alt="Vintage Desk Lamp"
                        className="w-18 h-14 rounded-lg object-cover"
                    />
                    <div className="text-left grid gap-1">
                        <div className="font-medium text-[#222222]">Vintage Desk Lamp</div>
                        <div className="text-sm text-[#878686]">Picked up by Sarah Johnson</div>
                    </div>
                </div>
                <div className="bg-gray-50 rounded-lg pt-5  mb-6 md:mb-auto md:h-64  overflow-y-auto scrollbar-hide">
                    <RadioGroup value={selectedDisputeValue} onValueChange={setSelectedDisputeValue} className='py-1 grid gap-6 px-6 overflow-y-auto mb-4 scrollbar-hide'>
                        <div className="flex items-center gap-3">
                            <RadioGroupItem value="receiver_pickup_in_person" className="ring ring-app-primary  text-app-primary" id="receiver_pickup_in_person" />
                            <Label htmlFor="receiver_pickup_in_person" className="text-gray-500 ">The receiver picked it up in person</Label>
                        </div>

                        <div className="flex items-center gap-3">
                            <RadioGroupItem value="left_item_at_agreed_location" className="ring ring-app-primary  text-app-primary" id="left_item_at_agreed_location" />
                            <Label htmlFor="left_item_at_agreed_location" className="text-gray-500 ">I left the item at the agreed location</Label>
                        </div>
                        <div className="w-full grid gap-2 items-start">
                            <div className="flex items-center gap-3 mb-4">
                                <RadioGroupItem value="other" className="ring ring-app-primary text-app-primary" id="other" />
                                <Label htmlFor="other" className="text-gray-500 ">Other reasons</Label>
                            </div>
                            <Textarea rows={7} className='placeholder:text-gray-400  p-2 mt-1 min-w-full bg-white shadow-none border-none' placeholder='Please described what happened' />
                        </div>
                        <Label htmlFor="report-no-show-file" className="mb-6 gap-2 overflow-hidden flex items-center cursor-pointer">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" fill="none"><path stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m2.5 13.58 3.725-3.724a1.51 1.51 0 0 1 2.134 0l3.308 3.308m0 0 1.25 1.25m-1.25-1.25 1.641-1.641a1.509 1.509 0 0 1 2.134 0L17.5 13.58" /><path stroke="#0D9488" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 2.332c-3.525 0-5.287 0-6.456.998-.166.142-.32.297-.462.463-.998 1.169-.998 2.93-.998 6.456 0 3.524 0 5.287.998 6.456.142.166.296.32.462.462 1.169.998 2.931.998 6.456.998 3.525 0 5.287 0 6.456-.998.166-.142.32-.296.463-.462.998-1.17.998-2.932.998-6.456M17.917 5.249H15m0 0h-2.916m2.916 0V2.332m0 2.917v2.916" /></svg>
                            </span>
                            <div className="grid">
                                <div className="flex items-center gap-3">
                                    <span className='text-sm text-app-primary'>Upload evidence</span>
                                    {disputeUploadedFileName && (
                                        <span className="text-sm underline text-gray-500">{disputeUploadedFileName}</span>
                                    )}
                                    <Input
                                        type="file"
                                        className='sr-only w-1/2'
                                        id='report-no-show-file'
                                        onChange={handleDisputeFileUpload}
                                    />
                                </div>
                            </div>
                        </Label>
                    </RadioGroup>
                </div>
                <Button
                    onClick={handleSubmitDispute}
                    disabled={!selectedDisputeValue}
                    variant="primary"
                    className='py-6 w-full'>Submit Dispute</Button>
            </ResponsiveModal>

            {/* Feedback Received - Counter Dispute */}
            <FeedbackReceivedAlert
                subtext='we&apos;ve recorded your dispute and will follow up if needed.'
                open={disputeFeedbackReceived}
                onClose={() => setDisputeFeedbackReceived(false)}
                buttonText='Ok'
            />
        </div>
    )
}



export default PickupView