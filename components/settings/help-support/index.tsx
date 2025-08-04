"use client"

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import React, { useState } from 'react'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import Notification from '@/components/shared/Notification'
import Link from 'next/link'

const faq = [
    {
        id: 1,
        title: "How do I create my first listing?",
        desc: "To create your first  listing, click the Give Away button on your dashboard, fill in the  item details, add photos, set pickup times, and publish your listing.",
        category: ["creating-listings", "getting-started"]
    },
    {
        id: 2,
        title: "What happens if no one picks up my item?",
        desc: "To edit an existing listing, go to your dashboard, find the listing you want to edit, click the edit button, make your changes, and save the updated listing.",
        category: ["pickups", "account-issues"]
    },
    {
        id: 3,
        title: "How do I stay safe during pickups?",
        desc: "To delete a listing, navigate to your dashboard, find the listing you want to remove, click the delete button, and confirm the deletion when prompted.",
        category: ["safety-trust", "pickups"]
    },
    {
        id: 4,
        title: "How do I change my pickup location?",
        desc: "You can manage pickup times by going to your listing details, clicking on the pickup schedule section, and adding or removing available time slots for interested users.",
        category: ["account-issues", "pickups"]
    },
]

const HelpAndSupportView = () => {

    const [activeTab, setActiveTab] = useState("all")
    const [openFaqId, setOpenFaqId] = useState<number | null>(null)

    const handleFaqToggle = (faqId: number) => {
        setOpenFaqId(openFaqId === faqId ? null : faqId)
    }


    const getFilteredFaq = () => {
        if (activeTab === "all") {
            return faq
        }
        return faq.filter(item => item.category.includes(activeTab))
    }

    const handleTabChange = (value: string) => {
        setActiveTab(value)
        setOpenFaqId(null) // Close any open FAQ when switching tabs
    }

    const filteredFaq = getFilteredFaq()


    return (
        <div className='p-4 md:p-6 rounded-lg border'>
            <div className='grid hidden lg:block pb-6'>
                <h4 className='text-md sm:text-[1.2rem] font-semibold text-[#222222]'>Help & Support</h4>
                <p className='text-gray-500 text-sm'>Find answers to common questions or get in touch with our support team</p>
            </div>
            <div className='@container py-6 border-t-0 lg:border-t  border-b '>
                <h3 className="font-semibold text-[#222222] mb-8">Get Help Now</h3>
                <div className='grid grid-cols-1 md:@md:grid-cols-2 xl:@xl:grid-cols-3 gap-6'>
                    <div className='bg-gray-50 rounded-lg p-6 grid place-items-center gap-2'>
                        <span className='mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#3B82F6" strokeLinejoin="round" strokeWidth="1.5" d="M22.834 11.567c0 5.283-4.478 9.566-10 9.566-.65.001-1.297-.059-1.935-.178-.459-.087-.688-.13-.848-.105-.16.024-.388.145-.842.386a6.5 6.5 0 0 1-4.224.657 5.292 5.292 0 0 0 1.087-2.348c.1-.53-.148-1.045-.52-1.422-1.685-1.712-2.718-4.018-2.718-6.556 0-5.283 4.478-9.567 10-9.567s10 4.284 10 9.567Z" /><path stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12.83 12h.008m3.987 0h.009m-8 0h.009" /></svg>
                        </span>
                        <h4 className='text-gray-600 text-sm font-bold text-center'>Live Chat</h4>
                        <p className='text-center text-sm text-gray-500'>Chat with our support team in real-time</p>
                        <Button className='mt-2 cursor-pointer py-5 bg-white text-gray-600 shadow-none border hover:bg-white hover:text-gray-600'>Connect</Button>

                    </div>
                    <div className='bg-gray-50 rounded-lg p-6 grid place-items-center gap-2'>
                        <span className='mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#FB923C" strokeLinejoin="round" strokeWidth="1.5" d="M4.278 11.942C3.33 10.29 2.872 8.94 2.596 7.572c-.408-2.024.526-4.001 2.073-5.263.654-.533 1.404-.35 1.791.343l.873 1.567c.692 1.242 1.038 1.862.97 2.52-.069.659-.536 1.195-1.469 2.267l-2.556 2.936Zm0 0c1.919 3.346 4.93 6.36 8.28 8.28m0 0c1.653.948 3.002 1.406 4.37 1.682 2.024.408 4.001-.526 5.262-2.073.534-.654.351-1.404-.342-1.791l-1.567-.873c-1.242-.692-1.862-1.038-2.52-.97-.659.069-1.195.536-2.267 1.469l-2.936 2.556Z" /></svg>
                        </span>
                        <h4 className='text-gray-600 text-sm font-bold text-center'>Request Callback</h4>
                        <p className='text-center text-sm text-gray-500'>Have our team call you back at your convenience</p>
                        <Button className='mt-2 cursor-pointer py-5 bg-white text-gray-600 shadow-none border hover:bg-white hover:text-gray-600'>Request Call</Button>

                    </div>
                    <div className='bg-gray-50 col-span-1 rounded-lg p-6 grid place-items-center gap-2'>
                        <span className='mb-4'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#B36ADD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.168 17h8M8.168 13h4M13.168 2.5V3c0 2.828 0 4.243.879 5.121C14.925 9 16.34 9 19.168 9h.5m.5 1.657V14c0 3.771 0 5.657-1.172 6.828C17.825 22 15.94 22 12.168 22c-3.771 0-5.657 0-6.828-1.172C4.168 19.657 4.168 17.771 4.168 14V9.456c0-3.245 0-4.868.886-5.967a4 4 0 0 1 .603-.603C6.757 2 8.38 2 11.624 2c.705 0 1.058 0 1.381.114.067.024.133.051.197.082.31.148.559.397 1.058.896l4.736 4.736c.579.578.867.868 1.02 1.235.152.368.152.776.152 1.594Z" /></svg>
                        </span>
                        <h4 className='text-gray-600 text-sm font-bold text-center'>Submit Ticket</h4>
                        <p className='text-center text-sm text-gray-500'>Send us a detailed message about your issue</p>
                        <Button className='mt-2 cursor-pointer py-5 bg-white text-gray-600 shadow-none border hover:bg-white hover:text-gray-600'>Create Ticket</Button>
                    </div>
                </div>
            </div>
            <div className="py-6 border-b box-border">
                <h3 className="font-semibold text-[#222222] mb-8">Frequently Asked Questions</h3>

                <Tabs value={activeTab} onValueChange={handleTabChange}>
                    <ScrollArea className="w-full overflow-x-auto">
                        <TabsList className="grid auto-cols-max shrink-1 grid-flow-col  bg-red-400  mb-6 gap-2 bg-gray-50 p-1 h-auto bg-transparent rounded-lg">
                            <TabsTrigger
                                value="all"
                                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-500 hover:bg-gray-50 rounded-md px-3 py-2"
                            >
                                All
                            </TabsTrigger>
                            <TabsTrigger
                                value="getting-started"
                                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-500 hover:bg-gray-50 rounded-md px-3 py-2"
                            >
                                Getting Started
                            </TabsTrigger>
                            <TabsTrigger
                                value="creating-listings"
                                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-500 hover:bg-gray-50 rounded-md px-3 py-2"
                            >
                                Creating Listings
                            </TabsTrigger>
                            <TabsTrigger
                                value="pickups"
                                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-500 hover:bg-gray-50 rounded-md px-3 py-2"
                            >
                                Pickups
                            </TabsTrigger>
                            <TabsTrigger
                                value="safety-trust"
                                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-500 hover:bg-gray-50 rounded-md px-3 py-2"
                            >
                                Safety & Trust
                            </TabsTrigger>
                            <TabsTrigger
                                value="account-issues"
                                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-500 hover:bg-gray-50 rounded-md px-3 py-2"
                            >
                                Account Issues
                            </TabsTrigger>
                        </TabsList>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                    <TabsContent value="all" className="flex flex-col gap-6 items-start">
                        {filteredFaq.map(({ id, title, desc }) => (
                            <Collapsible
                                open={openFaqId === id}
                                onOpenChange={() => handleFaqToggle(id)}
                                key={id}
                                className='bg-gray-50 w-full rounded-lg overflow-hidden'
                            >
                                <CollapsibleTrigger className='cursor-pointer flex items-start md:items-center justify-between gap-4 w-full text-left rounded-lg block p-4 '>
                                    <p className='text-sm font-semibold text-gray-700'>{title}</p>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21"
                                            height="20"
                                            fill="none"
                                            className={`transition-transform duration-200 ${openFaqId === id ? 'rotate-45' : ''}`}
                                        >
                                            <path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M18.833 10.001a8.333 8.333 0 1 0-16.667 0 8.333 8.333 0 0 0 16.667 0ZM10.5 6.668v6.667M13.832 10H7.166" />
                                        </svg>
                                    </span>
                                </CollapsibleTrigger>
                                <CollapsibleContent className='text-sm leading-6 px-4 pb-4 text-gray-500'>
                                    {desc}
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </TabsContent>
                    <TabsContent value="getting-started" className="flex flex-col gap-6 items-start">
                        {filteredFaq.map(({ id, title, desc }) => (
                            <Collapsible
                                open={openFaqId === id}
                                onOpenChange={() => handleFaqToggle(id)}
                                key={id}
                                className='bg-gray-50 w-full rounded-lg overflow-hidden'
                            >
                                <CollapsibleTrigger className='cursor-pointer flex items-start md:items-center justify-between gap-4 w-full text-left rounded-lg block p-4 '>
                                    <p className='text-sm font-semibold text-gray-700'>{title}</p>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21"
                                            height="20"
                                            fill="none"
                                            className={`transition-transform duration-200 ${openFaqId === id ? 'rotate-45' : ''}`}
                                        >
                                            <path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M18.833 10.001a8.333 8.333 0 1 0-16.667 0 8.333 8.333 0 0 0 16.667 0ZM10.5 6.668v6.667M13.832 10H7.166" />
                                        </svg>
                                    </span>
                                </CollapsibleTrigger>
                                <CollapsibleContent className='text-sm leading-6 px-4 pb-4 text-gray-500'>
                                    {desc}
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </TabsContent>
                    <TabsContent value="creating-listings" className="flex flex-col gap-6 items-start">
                        {filteredFaq.map(({ id, title, desc }) => (
                            <Collapsible
                                open={openFaqId === id}
                                onOpenChange={() => handleFaqToggle(id)}
                                key={id}
                                className='bg-gray-50 w-full rounded-lg overflow-hidden'
                            >
                                <CollapsibleTrigger className='cursor-pointer flex items-start md:items-center justify-between gap-4 w-full text-left rounded-lg block p-4 '>
                                    <p className='text-sm font-semibold text-gray-700'>{title}</p>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21"
                                            height="20"
                                            fill="none"
                                            className={`transition-transform duration-200 ${openFaqId === id ? 'rotate-45' : ''}`}
                                        >
                                            <path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M18.833 10.001a8.333 8.333 0 1 0-16.667 0 8.333 8.333 0 0 0 16.667 0ZM10.5 6.668v6.667M13.832 10H7.166" />
                                        </svg>
                                    </span>
                                </CollapsibleTrigger>
                                <CollapsibleContent className='text-sm leading-6 px-4 pb-4 text-gray-500'>
                                    {desc}
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </TabsContent>
                    <TabsContent value="pickups" className="flex flex-col gap-6 items-start">
                        {filteredFaq.map(({ id, title, desc }) => (
                            <Collapsible
                                open={openFaqId === id}
                                onOpenChange={() => handleFaqToggle(id)}
                                key={id}
                                className='bg-gray-50 w-full rounded-lg overflow-hidden'
                            >
                                <CollapsibleTrigger className='cursor-pointer flex items-start md:items-center justify-between gap-4 w-full text-left rounded-lg block p-4 '>
                                    <p className='text-sm font-semibold text-gray-700'>{title}</p>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21"
                                            height="20"
                                            fill="none"
                                            className={`transition-transform duration-200 ${openFaqId === id ? 'rotate-45' : ''}`}
                                        >
                                            <path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M18.833 10.001a8.333 8.333 0 1 0-16.667 0 8.333 8.333 0 0 0 16.667 0ZM10.5 6.668v6.667M13.832 10H7.166" />
                                        </svg>
                                    </span>
                                </CollapsibleTrigger>
                                <CollapsibleContent className='text-sm leading-6 px-4 pb-4 text-gray-500'>
                                    {desc}
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </TabsContent>
                    <TabsContent value="safety-trust" className="flex flex-col gap-6 items-start">
                        {filteredFaq.map(({ id, title, desc }) => (
                            <Collapsible
                                open={openFaqId === id}
                                onOpenChange={() => handleFaqToggle(id)}
                                key={id}
                                className='bg-gray-50 w-full rounded-lg overflow-hidden'
                            >
                                <CollapsibleTrigger className='cursor-pointer flex items-start md:items-center justify-between gap-4 w-full text-left rounded-lg block p-4 '>
                                    <p className='text-sm font-semibold text-gray-700'>{title}</p>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21"
                                            height="20"
                                            fill="none"
                                            className={`transition-transform duration-200 ${openFaqId === id ? 'rotate-45' : ''}`}
                                        >
                                            <path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M18.833 10.001a8.333 8.333 0 1 0-16.667 0 8.333 8.333 0 0 0 16.667 0ZM10.5 6.668v6.667M13.832 10H7.166" />
                                        </svg>
                                    </span>
                                </CollapsibleTrigger>
                                <CollapsibleContent className='text-sm leading-6 px-4 pb-4 text-gray-500'>
                                    {desc}
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </TabsContent>
                    <TabsContent value="account-issues" className="flex flex-col gap-6 items-start">
                        {filteredFaq.map(({ id, title, desc }) => (
                            <Collapsible
                                open={openFaqId === id}
                                onOpenChange={() => handleFaqToggle(id)}
                                key={id}
                                className='bg-gray-50 w-full rounded-lg overflow-hidden'
                            >
                                <CollapsibleTrigger className='cursor-pointer flex items-start md:items-center justify-between gap-4 w-full text-left rounded-lg block p-4 '>
                                    <p className='text-sm font-semibold text-gray-700'>{title}</p>
                                    <span>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="21"
                                            height="20"
                                            fill="none"
                                            className={`transition-transform duration-200 ${openFaqId === id ? 'rotate-45' : ''}`}
                                        >
                                            <path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M18.833 10.001a8.333 8.333 0 1 0-16.667 0 8.333 8.333 0 0 0 16.667 0ZM10.5 6.668v6.667M13.832 10H7.166" />
                                        </svg>
                                    </span>
                                </CollapsibleTrigger>
                                <CollapsibleContent className='text-sm leading-6 px-4 pb-4 text-gray-500'>
                                    {desc}
                                </CollapsibleContent>
                            </Collapsible>
                        ))}
                    </TabsContent>
                    <Notification
                        type="info"
                        label="Need More Help? "
                        notice="- Our support team is available Monday through Friday, 9 AM to 6 PM EST.  For urgent issues outside business hours, please use the live chat  feature or submit a support ticket."
                    />
                </Tabs>
            </div>
            <div className="py-6 box-border">
                <h3 className="font-semibold text-[#222222] mb-8">Help Center Resources</h3>

                <div className='grid grid-cols-1 xl:grid-cols-2 items-center gap-6'>
                    <Link href="#">
                        <div className='bg-gray-50 rounded-xl flex items-center justify-between gap-4 p-5'>
                            <div className='flex gap-4 items-center'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#3B82F6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.5 17h8M8.5 13h4M13.5 2.5V3c0 2.828 0 4.243.879 5.121C15.257 9 16.672 9 19.5 9h.5m.5 1.657V14c0 3.771 0 5.657-1.172 6.828C18.157 22 16.271 22 12.5 22c-3.771 0-5.657 0-6.828-1.172C4.5 19.657 4.5 17.771 4.5 14V9.456c0-3.245 0-4.868.886-5.967a4 4 0 0 1 .603-.603C7.09 2 8.711 2 11.956 2c.705 0 1.058 0 1.381.114.067.024.133.051.197.082.31.148.559.397 1.058.896l4.736 4.736c.579.578.867.868 1.02 1.235.152.368.152.776.152 1.594Z" /></svg>
                                </span>
                                <div className='grid gap-1'>
                                    <h4 className='text-sm font-semibold'>User Guide</h4>
                                    <p className='text-gray-500 text-sm'>Complete guide to using GT</p>
                                </div>
                            </div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M16.333 10.835v.833c0 2.75 0 4.125-.854 4.98-.854.853-2.23.853-4.979.853H8.833c-2.75 0-4.124 0-4.979-.854C3 15.793 3 14.417 3 11.668v-1.667c0-2.75 0-4.124.854-4.979.855-.854 2.23-.854 4.98-.854h.833M12.166 2.5h3.333c1.179 0 1.768 0 2.134.366C18 3.232 18 3.821 18 5v3.333m-.833-5-7.5 7.5" /></svg>
                            </span>
                        </div>
                    </Link>
                    <Link href="#">
                        <div className='bg-gray-50 rounded-xl flex items-center justify-between gap-4 p-5'>
                            <div className='flex gap-4 items-center'>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#14AE7D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.5 22c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z" /><path stroke="#14AE7D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 9.5a2.5 2.5 0 1 1 3.912 2.064c-.684.468-1.412 1.108-1.412 1.936" /><path stroke="#14AE7D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12.5 17h.009" /></svg>
                                </span>
                                <div className='grid gap-1'>
                                    <h4 className='text-sm font-semibold'>Community Guidelines</h4>
                                    <p className='text-gray-500 text-sm'>Learn about our community standards</p>
                                </div>
                            </div>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.25" d="M16.333 10.835v.833c0 2.75 0 4.125-.854 4.98-.854.853-2.23.853-4.979.853H8.833c-2.75 0-4.124 0-4.979-.854C3 15.793 3 14.417 3 11.668v-1.667c0-2.75 0-4.124.854-4.979.855-.854 2.23-.854 4.98-.854h.833M12.166 2.5h3.333c1.179 0 1.768 0 2.134.366C18 3.232 18 3.821 18 5v3.333m-.833-5-7.5 7.5" /></svg>
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HelpAndSupportView