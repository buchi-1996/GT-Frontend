"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import StatsCard from "@/components/usercard/StatsCard"
import { Users, Package, Star, Leaf, Gift, Handshake } from "lucide-react"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"



const Dashboard = () => {
    return (
        <main className="grid gap-10">
            {/* Metrics Cards */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8">
                <StatsCard
                    title="Item Listed"
                    count={0}
                    Icon={(<svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.1875 6.1875H21.1875" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M11.1875 12.1875H21.1875" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M11.1875 18.1875H21.1875" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M3.1875 15.1875H4.6875C4.96629 15.1875 5.10569 15.1875 5.22161 15.2106C5.69764 15.3052 6.06975 15.6774 6.16444 16.1534C6.1875 16.2693 6.1875 16.4087 6.1875 16.6875C6.1875 16.9663 6.1875 17.1057 6.16444 17.2216C6.06975 17.6976 5.69764 18.0698 5.22161 18.1644C5.10569 18.1875 4.96629 18.1875 4.6875 18.1875C4.40871 18.1875 4.26931 18.1875 4.15339 18.2106C3.67736 18.3052 3.30525 18.6774 3.21056 19.1534C3.1875 19.2693 3.1875 19.4087 3.1875 19.6875V20.5875C3.1875 20.8703 3.1875 21.0118 3.27537 21.0996C3.36324 21.1875 3.50466 21.1875 3.7875 21.1875H6.1875" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3.1875 3.1875H4.3875C4.55319 3.1875 4.6875 3.32181 4.6875 3.4875V9.1875M4.6875 9.1875H3.1875M4.6875 9.1875H6.1875" stroke="#0D9488" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>)}
                    badgeColor="bg-[#E6F8F4]"
                />
                <StatsCard
                    title="Matches Made"
                    count={0}
                    Icon={<Users className="w-5 h-5 text-[#8e6add]" />}
                    badgeColor="bg-[#F3EAFD]"
                />
                <StatsCard
                    title="Pickups"
                    count={0}
                    Icon={<Package className="w-5 h-5 text-[#FB923C]" />}
                    badgeColor="bg-[#F9EEE7]"
                />
                <StatsCard
                    title="Rating"
                    count={0}
                    isRating
                    Icon={<Star className="w-5 h-5 text-[#989F42]" />}
                    badgeColor="bg-[#F1F3DE]"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Recent Activity */}
                    <Card className="bg-[F9FAFB] shadow-none border-0">
                        <CardHeader>
                            <CardTitle className="text-[#222222]">Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="py-12">
                            <div className="text-center text-[#626262]">No recent activity</div>
                        </CardContent>
                    </Card>
                </div>
                <div className=" lg:col-span-2 space-y-6">
                    {/* Your Badges */}
                    <Card className="bg-[#F9FAFB] border-0 shadow-none">
                        <CardHeader>
                            <CardTitle className="text-[#222222]">Your Badges</CardTitle>
                        </CardHeader>
                        <CardContent className="py-12">
                            <div className="text-center text-[#626262]">No Badges</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <ScrollArea className="border rounded-lg whitespace-nowrap p-6 ">
                <h2 className="text-xl font-semibold text-[#222222] mb-4">Your Environmental Impact</h2>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <Card className="bg-[#e6f8f4] shadow-none h-auto shrink-0 border-0">
                        <CardContent className="py-4 px-6  text-center">
                            <Leaf className="w-6 h-6 text-[#14AE7D] mx-auto mb-3" />
                            <div className="text-3xl font-bold text-[#166534] mb-1">0 kg</div>
                            <div className="text-sm text-[#626262]">Waste Diverted</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#e7eff9] h-auto shrink-0 shadow-none border-0">
                        <CardContent className="py-4 px-6  text-center">
                            <Gift className="w-6 h-6 text-[#3a66f5] mx-auto mb-3 " />
                            <div className="text-3xl font-bold text-[#1E40AF] mb-1">0</div>
                            <div className="text-sm text-[#626262]">Items Shared</div>
                        </CardContent>
                    </Card>

                    <Card className="bg-[#F6EAFD] shadow-none h-auto shrink-0 border-0">
                        <CardContent className="py-4 px-6  text-center">
                            <Handshake className="w-6 h-6 text-[#8E6ADD] mx-auto mb-3" />
                            <div className="text-3xl font-bold text-[#4C21A8] mb-1">0</div>
                            <div className="text-sm text-[#626262]">Connections Made</div>
                        </CardContent>
                    </Card>
                    <Card className="bg-[#FFEDE1] shadow-none h-auto shrink-0 border-0">
                        <CardContent className="py-4 px-6 text-center">
                                <svg className="h-6 w-6 mx-auto mb-3" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3.5 5.11296C3.5 4.56029 3.5 4.28395 3.54289 4.05373C3.73304 3.03312 4.52565 2.23473 5.53889 2.0432C5.76745 2 6.04179 2 6.59048 2H18.4095C18.9582 2 19.2325 2 19.4611 2.0432C20.4743 2.23473 21.267 3.03312 21.4571 4.05373C21.5 4.28395 21.5 4.56029 21.5 5.11296C21.5 5.6552 21.5 5.92631 21.4685 6.17771C21.3309 7.27541 20.7512 8.26781 19.8654 8.92208C19.6625 9.07192 19.4272 9.20359 18.9566 9.46692L16.3851 10.9059C14.4861 11.9686 13.5365 12.5 12.5 12.5C11.4635 12.5 10.5139 11.9686 8.61486 10.9059L6.04338 9.46692C5.5728 9.20359 5.33752 9.07192 5.13465 8.92208C4.24885 8.26781 3.66914 7.27541 3.53152 6.17771C3.5 5.92631 3.5 5.6552 3.5 5.11296Z" stroke="#F97311" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M8.5 5V6M12.5 5V8M16.5 5V6" stroke="#F97311" strokeWidth="1.5" strokeLinecap="round" />
                                    <path d="M13.2774 13.6499L14.0693 15.2468C14.1773 15.4691 14.4653 15.6823 14.7083 15.7231L16.1436 15.9636C17.0615 16.1178 17.2775 16.7893 16.6161 17.4516L15.5002 18.5767C15.3112 18.7673 15.2077 19.1347 15.2662 19.3979L15.5857 20.7906C15.8377 21.893 15.2572 22.3195 14.2898 21.7433L12.9445 20.9403C12.7015 20.7952 12.301 20.7952 12.0536 20.9403L10.7082 21.7433C9.74533 22.3195 9.16039 21.8885 9.41236 20.7906L9.73183 19.3979C9.79032 19.1347 9.68683 18.7673 9.49785 18.5767L8.38198 17.4516C7.72505 16.7893 7.93653 16.1178 8.85443 15.9636L10.2898 15.7231C10.5282 15.6823 10.8162 15.4691 10.9242 15.2468L11.7161 13.6499C12.1481 12.7834 12.85 12.7834 13.2774 13.6499Z" stroke="#F97311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            <div className="text-3xl font-bold text-[#C2410C] mb-1">0</div>
                            <div className="text-sm text-[#626262]">Badges Earned</div>
                        </CardContent>
                    </Card>
                </div>
                <ScrollBar orientation="horizontal" />
            </ScrollArea>
        </main >
    )
}

export default Dashboard