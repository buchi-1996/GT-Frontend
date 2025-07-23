"use client"

import React, { useState } from 'react'
import StatsCard from '../usercard/StatsCard'
import { Star} from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import ReviewCard from './ReviewCard'

const ReputationView = () => {

    const [activeTab, setActiveTab] = useState('received')

    return (
        <div className="min-h-screen">
            <div className="grid gap-10">
                {/* StatsCard */}
                <div className="@container">
                    <div className="grid grid-cols-2 sm:@sm:grid-cols-1 @lg:grid-cols-2 gap-4">
                        <StatsCard
                            title="Response Rate"
                            count={95}
                            isPercent={true}
                            Icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path stroke="#FB923C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M4.23 9.616 9.83 2.43c.438-.562 1.259-.213 1.259.536v5.562c0 .449.321.812.718.812h2.724c.618 0 .948.824.54 1.349l-5.6 7.186c-.437.562-1.258.212-1.258-.536v-5.563c0-.448-.322-.812-.719-.812H4.77c-.619 0-.948-.824-.54-1.348Z" /></svg>}
                            badgeColor="bg-[#FFEDE1]"
                        />

                        <StatsCard
                            title="Rating"
                            count={0}
                            rating={3}
                            reviews={12}
                            Icon={<Star className="w-5 h-5 text-[#989F42]" />}
                            badgeColor="bg-[#F1F3DE]"
                        />
                    </div>
                </div>
                {/* Review tabs */}
                <div className="border rounded-lg p-4 sm:p-6">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full relative">

                        <TabsList className="flex p-0 items-center w-full relative justify-start gap-4 h-auto bg-transparent border-b rounded-none">
                            <div>
                                <TabsTrigger
                                    value="received"
                                    className="text-[0.85rem]  text-gray-500 data-[state=active]:text-app-primary mr-6 p-0 h-full font-semibold relative bg-transparent pb-[6px] before:content-[''] before:absolute before:-bottom-[3px] before:left-0 before:h-[2px] before:w-full before:rounded-2xl before:bg-transparent data-[state=active]:before:bg-app-primary data-[state=active]:shadow-none">
                                    Reviews Received
                                </TabsTrigger>
                                <TabsTrigger
                                    value="given"
                                    className="text-[0.85rem] text-gray-500 data-[state=active]:text-app-primary h-full p-0 font-semibold relative bg-transparent pb-[6px] before:content-[''] before:absolute before:-bottom-[3px] before:left-0 before:h-[2px] before:w-full before:rounded-2xl before:bg-transparent data-[state=active]:before:bg-app-primary data-[state=active]:shadow-none">
                                    Reviews Given
                                </TabsTrigger>

                            </div>
                        </TabsList>
                        <TabsContent value="received">
                            {/* <p className="text-gray-500">No reviews received yet.</p> */}
                            {/* Sarah Johnson */}
                            <ReviewCard
                                itemTitle='Vintage Desk Lamp'
                                receiverName='Sarah Johnson'
                                reviewText='James was so kind, and the lamp was exactly as he described. Great communication and easy pickup'
                            />
                            <ReviewCard
                                itemTitle='Kitchen Blender'
                                receiverName='Michael Chen'
                                reviewText='The blender works perfectly. Ben was responsive and flexible with pickup times.'
                            />
                            <ReviewCard
                                itemTitle='Office Chair'
                                receiverName='Emma Wilson'
                                reviewText='The blender works perfectly. Ben was responsive and flexible with pickup times.'
                                className="border-none"
                            />
                        </TabsContent>
                        <TabsContent value="given">
                            {/* <p className="text-gray-500">No reviews received yet.</p> */}
                            <ReviewCard
                                itemTitle='Vintage Desk Lamp'
                                receiverName='Sarah Johnson'
                                reviewText='James was so kind, and the lamp was exactly as he described. Great communication and easy pickup'
                                isGiver
                            />
                            <ReviewCard
                                itemTitle='Kitchen Blender'
                                receiverName='Michael Chen'
                                reviewText='The blender works perfectly. Ben was responsive and flexible with pickup times.'
                                isGiver
                                
                            />

                            <div className="px-6 mt-10 py-8 bg-[#E7EFF9] rounded-lg border border-[#D4E6FF]">
                                <p className="text-sm leading-6 text-[#2563EB]"><span className='font-bold'>Note</span>: Reviews help build trust in our community. Leaving thoughtful feedback about your experiences helps others make informed decisions and improves the overall giving experience.</p>
                            </div>
                        </TabsContent>

                    </Tabs>
                </div>
            </div>
        </div>
    )
}

export default ReputationView