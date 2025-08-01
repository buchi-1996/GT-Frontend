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

const faq = [
    {
        id: "How do I create my first listing?",
        title: "How do I create my first listing?",
        desc: "To create your first  listing, click the Give Away button on your dashboard, fill in the  item details, add photos, set pickup times, and publish your listing.",
    },
    {
        id: "How do I create my first listing?",
        title: "How do I create my first listing?",
        desc: "To create your first  listing, click the Give Away button on your dashboard, fill in the  item details, add photos, set pickup times, and publish your listing.",
    },
    {
        id: "How do I create my first listing?",
        title: "How do I create my first listing?",
        desc: "To create your first  listing, click the Give Away button on your dashboard, fill in the  item details, add photos, set pickup times, and publish your listing.",
    },
    {
        id: "How do I create my first listing?",
        title: "How do I create my first listing?",
        desc: "To create your first  listing, click the Give Away button on your dashboard, fill in the  item details, add photos, set pickup times, and publish your listing.",
    },
]

const HelpAndSupportView = () => {

    const [activeTab, setActiveTab] = useState("all")

    return (
        <div className='p-4 md:p-6 rounded-lg border'>
            <div className='grid hidden lg:block pb-6'>
                <h4 className='text-md sm:text-[1.2rem] font-semibold text-[#222222]'>Help & Support</h4>
                <p className='text-gray-500 text-sm'>Find answers to common questions or get in touch with our support team</p>
            </div>
            <div className='py-6 border-t-0 lg:border-t  border-b '>
                <h3 className="font-semibold text-[#222222] mb-8">Get Help Now</h3>
                <ScrollArea className='w-full overflow-x-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
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
                    <ScrollBar orientation='horizontal' />
                </ScrollArea>
            </div>
            <div className="py-6 border-b box-border">
                <h3 className="font-semibold text-[#222222] mb-8">Frequently Asked Questions</h3>

                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <ScrollArea className="w-full overflow-x-auto">
                        <TabsList className="grid auto-cols-max shrink-1 grid-flow-col  bg-red-400  mb-6 gap-2 bg-gray-50 p-1 h-auto bg-transparent rounded-lg">
                            <TabsTrigger
                                value="all"
                                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-600 hover:bg-gray-50 rounded-md px-3 py-2"
                            >
                                All
                            </TabsTrigger>
                            <TabsTrigger
                                value="getting-started"
                                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-400 hover:bg-gray-50 rounded-md px-3 py-2"
                            >
                                Getting Started
                            </TabsTrigger>
                            <TabsTrigger
                                value="creating-listings"
                                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-400 hover:bg-gray-50 rounded-md px-3 py-2"
                            >
                                Creating Listings
                            </TabsTrigger>
                            <TabsTrigger
                                value="pickups"
                                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-400 hover:bg-gray-50 rounded-md px-3 py-2"
                            >
                                Pickups
                            </TabsTrigger>
                            <TabsTrigger
                                value="safety-trust"
                                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-400 hover:bg-gray-50 rounded-md px-3 py-2"
                            >
                                Safety & Trust
                            </TabsTrigger>
                            <TabsTrigger
                                value="account-issues"
                                className="data-[state=active]:bg-gray-50 data-[state=active]:text-black data-[state=active]:shadow-none bg-transparent text-gray-400 hover:bg-gray-50 rounded-md px-3 py-2"
                            >
                                Account Issues
                            </TabsTrigger>
                        </TabsList>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                    <TabsContent value="all" className="flex flex-col gap-6 items-start">
                        { faq.map(({ id, title, desc }) => (
                                <Collapsible key={id} className='bg-gray-50 w-full rounded-lg overflow-hidden'>
                                    <CollapsibleTrigger className='w-full text-left rounded-lg block p-6'>{title}</CollapsibleTrigger>
                                    <CollapsibleContent className='px-6 pb-4'>
                                        {desc}
                                    </CollapsibleContent>
                                </Collapsible>
                            ))}
                       

                    </TabsContent>

                </Tabs>
            </div>
        </div>
    )
}


export default HelpAndSupportView