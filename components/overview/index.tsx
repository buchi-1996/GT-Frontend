"use client"

import BadgeCard from "@/components/community/BadgeCard"
import { CommunityStar, FirstGive, GenerousSoul, ReliableGiver } from "@/components/community/badges"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import StatsCard from "@/components/usercard/StatsCard"
import { useUIState } from "@/hooks/useAppState"
import { Users, Package, Star, X } from "lucide-react"
import AllActivities from "../shared/AllActivities"


const OverViewScreen = () => {

    const {openSheet, setViewAllBadgeModal } = useUIState()
    

    return (
        <main className="grid gap-10">
            {/* Metrics Cards */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-6 xl:gap-8">
                <StatsCard
                    title="Item Listed"
                    link="/dashboard/item-listing"
                    count={24}
                    weeklyStats="+5 this week"
                    Icon={(<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><path stroke="#0D9488" d="M11.188 6.188h10M11.188 12.188h10M11.188 18.188h10M3.188 15.188h1.5c.278 0 .418 0 .534.023a1.2 1.2 0 0 1 .942.942c.024.116.024.256.024.535 0 .278 0 .418-.024.534a1.2 1.2 0 0 1-.942.942c-.116.023-.256.023-.535.023-.278 0-.418 0-.534.024a1.2 1.2 0 0 0-.942.942c-.023.116-.023.256-.023.535v.9c0 .282 0 .424.087.512.088.087.23.087.513.087h2.4M3.188 3.188h1.2a.3.3 0 0 1 .3.3v5.7m0 0h-1.5m1.5 0h1.5" /></svg>)}
                    badgeColor="bg-[#E6F8F4]"
                />
                <StatsCard
                    title="Matches Made"
                    link="/dashboard/matching"
                    count={24}
                    weeklyStats="+5 this week"
                    Icon={<Users className="w-5 h-5 text-[#8e6add]" />}
                    badgeColor="bg-[#F3EAFD]"
                />
                <StatsCard
                    title="Pickups"
                    link="/dashboard/pickup"
                    count={24}
                    weeklyStats="+5 this week"
                    Icon={<Package className="w-5 h-5 text-[#FB923C]" />}
                    badgeColor="bg-[#F9EEE7]"
                />
                <StatsCard
                    title="Rating"
                    link="/dashboard/reputation"
                    count={0}
                    rating={5}
                    reviews={20}
                    weeklyStats="+6 reviews this week"
                    Icon={<Star className="w-5 h-5 text-[#989F42]" />}
                    badgeColor="bg-[#F1F3DE]"
                />
            </div>

            <div className="grid grid-cols-1 items-stretch  xl:grid-cols-2 gap-8">
                {/* Left Column */}
                {/* Recent Activity */}
                <Card className=" shadow-none border">
                    <CardHeader className="px-4 md:px-6 py-2">
                        <CardTitle className="flex items-center md:items-start  justify-between text-md sm:text-[1rem] text-[#222222]">
                            <span>Activity History</span>
                            <button onClick={() => openSheet(<AllActivities />)} className="cursor-pointer text-sm font-medium text-app-primary">View All</button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 md:px-6 py-2">
                        {/* <div className="text-center text-sm sm:text-md text-[#626262]">No recent activity</div> */}
                        <div className="grid gap-6">
                            <div className="flex gap-4 items-start">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#009975" strokeLinecap="round" strokeWidth="1.5" d="M8 5h12" /><path stroke="#009975" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h.009M4 12h.009M4 19h.009" /><path stroke="#009975" strokeLinecap="round" strokeWidth="1.5" d="M8 12h12M8 19h12" /></svg>
                                </span>
                                <div className="grid gap-1">
                                    <h4 className="text-sm text-gray-700 font-medium">You listed “Vintage Desk Lamp”</h4>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#8E6ADD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c-.818 0-1.6-.33-3.163-.99C4.946 19.366 3 18.543 3 17.16V7m9 15c.818 0 1.6-.33 3.163-.99C19.054 19.366 21 18.543 21 17.16V7m-9 15V11.355M8.326 9.691 5.405 8.278C3.802 7.502 3 7.114 3 6.5c0-.614.802-1.002 2.405-1.778l2.92-1.413C10.13 2.436 11.03 2 12 2c.97 0 1.871.436 3.674 1.309l2.921 1.413C20.198 5.498 21 5.886 21 6.5c0 .614-.802 1.002-2.405 1.778l-2.92 1.413C13.87 10.564 12.97 11 12 11c-.97 0-1.871-.436-3.674-1.309ZM6 12l2 1M17 4 7 9" /></svg>
                                </span>
                                <div className="grid gap-1">
                                    <h4 className="text-sm text-gray-700 font-medium">You marked “Baby Crib” as picked up</h4>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#F97311" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 20v-2.03c0-1.242-.56-2.46-1.69-2.975C13.431 14.366 11.778 14 10 14c-1.778 0-3.431.366-4.81.995-1.13.515-1.69 1.733-1.69 2.975V20M20.5 20.001v-2.03c0-1.242-.56-2.46-1.69-2.975-.26-.12-.53-.229-.81-.328M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM15 4.145a3.502 3.502 0 0 1 0 6.71" /></svg>
                                </span>
                                <div className="grid gap-1">
                                    <h4 className="text-sm text-gray-700 font-medium">You selected Sarah to receive “Kitchen Blender”</h4>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#009975" strokeLinecap="round" strokeWidth="1.5" d="M8 5h12" /><path stroke="#009975" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5h.009M4 12h.009M4 19h.009" /><path stroke="#009975" strokeLinecap="round" strokeWidth="1.5" d="M8 12h12M8 19h12" /></svg>
                                </span>
                                <div className="grid gap-1">
                                    <h4 className="text-sm text-gray-700 font-medium">You listed “Vintage Desk Lamp”</h4>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#8E6ADD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 22c-.818 0-1.6-.33-3.163-.99C4.946 19.366 3 18.543 3 17.16V7m9 15c.818 0 1.6-.33 3.163-.99C19.054 19.366 21 18.543 21 17.16V7m-9 15V11.355M8.326 9.691 5.405 8.278C3.802 7.502 3 7.114 3 6.5c0-.614.802-1.002 2.405-1.778l2.92-1.413C10.13 2.436 11.03 2 12 2c.97 0 1.871.436 3.674 1.309l2.921 1.413C20.198 5.498 21 5.886 21 6.5c0 .614-.802 1.002-2.405 1.778l-2.92 1.413C13.87 10.564 12.97 11 12 11c-.97 0-1.871-.436-3.674-1.309ZM6 12l2 1M17 4 7 9" /></svg>
                                </span>
                                <div className="grid gap-1">
                                    <h4 className="text-sm text-gray-700 font-medium">You marked “Baby Crib” as picked up</h4>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#F97311" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.5 20v-2.03c0-1.242-.56-2.46-1.69-2.975C13.431 14.366 11.778 14 10 14c-1.778 0-3.431.366-4.81.995-1.13.515-1.69 1.733-1.69 2.975V20M20.5 20.001v-2.03c0-1.242-.56-2.46-1.69-2.975-.26-.12-.53-.229-.81-.328M10 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM15 4.145a3.502 3.502 0 0 1 0 6.71" /></svg>
                                </span>
                                <div className="grid gap-1">
                                    <h4 className="text-sm text-gray-700 font-medium">You selected Sarah to receive “Kitchen Blender”</h4>
                                    <p className="text-sm text-gray-500">2 hours ago</p>
                                </div>
                            </div>

                        </div>
                    </CardContent>
                </Card>
                {/* Your Badges */}
                <Card className="border shadow-none">
                    <CardHeader className="px-4 md:px-6 py-2">
                        <CardTitle className="flex items-center md:items-start justify-between text-md sm:text-[1rem] text-[#222222]">
                            <span>Your Badges</span>
                            <button onClick={() => setViewAllBadgeModal(true)} className="cursor-pointer text-sm font-medium text-app-primary">View All</button>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="px-4 md:px-6 pb-2">
                        {/* <div className="text-center text-sm sm:text-md text-[#626262]">No Badges</div> */}
                        <div className='grid grid-cols-2 gap-2'>

                            <BadgeCard
                                currentStep={0}
                                totalSteps={1}
                                badgeTitle="First Give"
                                goalAchieved="Listed your first item"
                                icon={<FirstGive />}
                                isCompleted={true}
                                earnedDate="Earned 1 month ago"
                            />
                            <BadgeCard
                                currentStep={2}
                                totalSteps={5}
                                badgeTitle="Generous Soul"
                                goalAchieved="Gave away 5 items"
                                icon={<GenerousSoul className='mix-blend-luminosity' />}
                                isCompleted={false}
                                earnedDate="Earned 1 month ago"
                            />
                            <BadgeCard
                                currentStep={1}
                                totalSteps={10}
                                badgeTitle="Community Star"
                                goalAchieved="Got 10 good reviews"
                                icon={<CommunityStar className='mix-blend-luminosity' />}
                                isCompleted={false}
                                earnedDate="Earned 1 month ago"
                            />
                            <BadgeCard
                                currentStep={1}
                                totalSteps={5}
                                badgeTitle="Reliable Giver"
                                goalAchieved="5 pickups confirmed"
                                icon={<ReliableGiver className='mix-blend-luminosity' />}
                                isCompleted={false}
                                earnedDate="Earned 1 month ago"
                            />
                        </div>
                        <div className="px-4 md:px-6 py-4 bg-[#FFFBD4] rounded-lg border border-yellow-200 mt-6 relative">
                            <Button variant="ghost" size="icon" className="hover:bg-transparent absolute top-0 right-0" ><X className="size-4 text-gray-500" /></Button>
                            <p className="text-sm leading-6 text-[#E5A000]"> <span className='font-semibold'>About Badges <br /></span>Badges are your shiny high-fives from the GT community! Give more and watch new badges roll in. </p>
                        </div>
                    </CardContent>
                </Card>
            </div>
            <div className="hidden xl:block border rounded-lg p-4 sm:p-6 ">
                <h2 className="text-md sm:text-[1.2rem] font-semibold text-[#222222] mb-4">Your Environmental Impact</h2>
                <div className="grid grid-cols-4 gap-4">
                    <Card className="bg-[#e6f8f4] w-full shadow-none h-auto shrink-0 border-0">
                        <CardContent className="flex flex-col items-center py-2 px-6  text-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#14AE7D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.5 15.999c-1.5 1-3.316 2.978-4 6.001m1-2.663c-2.368-5.326 2.409-7.123 6.044-7.323.44-.024.659-.036.816.12.158.155.149.377.13.82-.15 3.684-1.661 8.753-6.99 6.383ZM11.5 20H6.521c-2.286 0-3.429 0-3.87-.735-.44-.734.112-1.722 1.213-3.698l1.428-2.562C6.032 11.68 6.4 11.016 6.979 11c.579-.016.985.626 1.798 1.91l.702 1.107M8.5 8.034l.992-1.879c1.46-2.767 2.191-4.151 3.3-4.155 1.11-.004 1.85 1.374 3.328 4.131l.245.456c.917 1.71 1.376 2.566 1.008 3.098-.368.532-1.27.318-3.076-.11l-.082-.019" /></svg>
                            </span>
                            <div className="text-xl sm:text-3xl font-bold text-[#166534] mb-1">89%</div>
                            <div className="text-xs sm:text-sm text-[#626262]">Items kept from landfill</div>
                        </CardContent>
                    </Card>

                    <Card className="w-full bg-[#e7eff9] h-auto shrink-0 shadow-none border-0">
                        <CardContent className="flex flex-col items-center py-2 px-6  text-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#4671FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.5 10s-6 4-6 11M9.849 11.182a4.114 4.114 0 0 1-5.37-.387C2.055 8.372 2.539 3.04 2.539 3.04s5.333-.485 7.756 1.939a4.107 4.107 0 0 1 1.16 3.521" /><path stroke="#4671FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.464 12.818a3.656 3.656 0 0 1 .107-5.06c2.154-2.154 6.894-1.723 6.894-1.723s.43 4.74-1.724 6.894A3.646 3.646 0 0 1 18 13.997M6.5 7s6 5 6 14" /></svg>
                            </span>
                            <div className="text-xl sm:text-3xl font-bold text-[#1E40AF] mb-1">2.3t</div>
                            <div className="text-xs sm:text-sm text-[#626262]">CO₂ emissions saved</div>
                        </CardContent>
                    </Card>

                    <Card className="w-full bg-[#F6EAFD] shadow-none h-auto shrink-0 border-0">
                        <CardContent className="flex flex-col items-center py-2 px-6  text-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#B36ADD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z" /><path stroke="#B36ADD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 19.5a7 7 0 0 1 10-6.326M18 21.5s4-1.853 4-4.861c0-1.181-.842-2.139-2-2.139-.947 0-1.579.412-2 1.235-.421-.823-1.053-1.235-2-1.235-1.158 0-2 .958-2 2.139 0 3.008 4 4.861 4 4.861Z" /></svg>
                            </span>
                            <div className="text-xl sm:text-3xl font-bold text-[#4C21A8] mb-1">€1,240</div>
                            <div className="text-xs sm:text-sm text-[#626262]">Value shared</div>
                        </CardContent>
                    </Card>
                    <Card className="w-full bg-[#FFEDE1] shadow-none h-auto shrink-0 border-0">
                        <CardContent className="flex flex-col items-center py-2 px-6 text-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#F97311" strokeLinecap="round" strokeWidth="1.5" d="M3.5 5.113c0-.553 0-.83.043-1.06a2.51 2.51 0 0 1 1.996-2.01C5.767 2 6.042 2 6.59 2h11.82c.548 0 .823 0 1.051.043a2.51 2.51 0 0 1 1.996 2.01c.043.23.043.507.043 1.06 0 .542 0 .813-.032 1.065a4.035 4.035 0 0 1-1.603 2.744c-.202.15-.438.282-.908.545l-2.572 1.439C14.486 11.969 13.536 12.5 12.5 12.5c-1.037 0-1.986-.531-3.885-1.594l-2.572-1.44c-.47-.262-.705-.394-.908-.544a4.035 4.035 0 0 1-1.603-2.744C3.5 5.926 3.5 5.655 3.5 5.113ZM8.5 5v1m4-1v3m4-3v1" /><path stroke="#F97311" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.277 13.65.792 1.597a.978.978 0 0 0 .64.476l1.435.24c.918.155 1.134.826.472 1.489L15.5 18.577a.99.99 0 0 0-.234.82l.32 1.394c.252 1.102-.329 1.529-1.296.952l-1.345-.803c-.244-.145-.644-.145-.891 0l-1.346.803c-.963.577-1.548.146-1.296-.952l.32-1.393a.99.99 0 0 0-.234-.821l-1.116-1.125c-.657-.663-.445-1.334.472-1.488l1.436-.24a.98.98 0 0 0 .634-.477l.792-1.597c.432-.867 1.134-.867 1.561 0Z" /></svg>
                            </span>
                            <div className="text-xl sm:text-3xl font-bold text-[#C2410C] mb-1">4</div>
                            <div className="text-xs sm:text-sm text-[#626262]">Badges Earned</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            <div className="block xl:hidden border w-full overflow-x-hidden rounded-lg py-6">
                <h2 className="mx-4 sm:mx-6 text-md sm:text-[1.2rem] font-semibold text-[#222222] mb-4">Your Environmental Impact</h2>
                <div className="flex flex-row items-center gap-4 overflow-x-auto scrollbar-hide">
                    <Card className="bg-[#e6f8f4] w-64 ml-4 shadow-none h-auto shrink-0 border-0">
                        <CardContent className="flex flex-col items-center py-2 px-6  text-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#14AE7D" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.5 15.999c-1.5 1-3.316 2.978-4 6.001m1-2.663c-2.368-5.326 2.409-7.123 6.044-7.323.44-.024.659-.036.816.12.158.155.149.377.13.82-.15 3.684-1.661 8.753-6.99 6.383ZM11.5 20H6.521c-2.286 0-3.429 0-3.87-.735-.44-.734.112-1.722 1.213-3.698l1.428-2.562C6.032 11.68 6.4 11.016 6.979 11c.579-.016.985.626 1.798 1.91l.702 1.107M8.5 8.034l.992-1.879c1.46-2.767 2.191-4.151 3.3-4.155 1.11-.004 1.85 1.374 3.328 4.131l.245.456c.917 1.71 1.376 2.566 1.008 3.098-.368.532-1.27.318-3.076-.11l-.082-.019" /></svg>
                            </span>
                            <div className="text-xl sm:text-3xl font-bold text-[#166534] mb-1">89%</div>
                            <div className="text-xs sm:text-sm text-[#626262]">Items kept from landfill</div>
                        </CardContent>
                    </Card>

                    <Card className="w-64 bg-[#e7eff9] h-auto shrink-0 shadow-none border-0">
                        <CardContent className="flex flex-col items-center py-2 px-6  text-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#4671FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.5 10s-6 4-6 11M9.849 11.182a4.114 4.114 0 0 1-5.37-.387C2.055 8.372 2.539 3.04 2.539 3.04s5.333-.485 7.756 1.939a4.107 4.107 0 0 1 1.16 3.521" /><path stroke="#4671FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.464 12.818a3.656 3.656 0 0 1 .107-5.06c2.154-2.154 6.894-1.723 6.894-1.723s.43 4.74-1.724 6.894A3.646 3.646 0 0 1 18 13.997M6.5 7s6 5 6 14" /></svg>
                            </span>
                            <div className="text-xl sm:text-3xl font-bold text-[#1E40AF] mb-1">2.3t</div>
                            <div className="text-xs sm:text-sm text-[#626262]">CO₂ emissions saved</div>
                        </CardContent>
                    </Card>

                    <Card className="w-64 bg-[#F6EAFD] shadow-none h-auto shrink-0 border-0">
                        <CardContent className="flex flex-col items-center py-2 px-6  text-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#B36ADD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7.5a5 5 0 1 0-10 0 5 5 0 0 0 10 0Z" /><path stroke="#B36ADD" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 19.5a7 7 0 0 1 10-6.326M18 21.5s4-1.853 4-4.861c0-1.181-.842-2.139-2-2.139-.947 0-1.579.412-2 1.235-.421-.823-1.053-1.235-2-1.235-1.158 0-2 .958-2 2.139 0 3.008 4 4.861 4 4.861Z" /></svg>
                            </span>
                            <div className="text-xl sm:text-3xl font-bold text-[#4C21A8] mb-1">€1,240</div>
                            <div className="text-xs sm:text-sm text-[#626262]">Value shared</div>
                        </CardContent>
                    </Card>
                    <Card className="w-64 bg-[#FFEDE1] shadow-none h-auto shrink-0 border-0 mr-4">
                        <CardContent className="flex flex-col items-center py-2 px-6 text-center">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#F97311" strokeLinecap="round" strokeWidth="1.5" d="M3.5 5.113c0-.553 0-.83.043-1.06a2.51 2.51 0 0 1 1.996-2.01C5.767 2 6.042 2 6.59 2h11.82c.548 0 .823 0 1.051.043a2.51 2.51 0 0 1 1.996 2.01c.043.23.043.507.043 1.06 0 .542 0 .813-.032 1.065a4.035 4.035 0 0 1-1.603 2.744c-.202.15-.438.282-.908.545l-2.572 1.439C14.486 11.969 13.536 12.5 12.5 12.5c-1.037 0-1.986-.531-3.885-1.594l-2.572-1.44c-.47-.262-.705-.394-.908-.544a4.035 4.035 0 0 1-1.603-2.744C3.5 5.926 3.5 5.655 3.5 5.113ZM8.5 5v1m4-1v3m4-3v1" /><path stroke="#F97311" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.277 13.65.792 1.597a.978.978 0 0 0 .64.476l1.435.24c.918.155 1.134.826.472 1.489L15.5 18.577a.99.99 0 0 0-.234.82l.32 1.394c.252 1.102-.329 1.529-1.296.952l-1.345-.803c-.244-.145-.644-.145-.891 0l-1.346.803c-.963.577-1.548.146-1.296-.952l.32-1.393a.99.99 0 0 0-.234-.821l-1.116-1.125c-.657-.663-.445-1.334.472-1.488l1.436-.24a.98.98 0 0 0 .634-.477l.792-1.597c.432-.867 1.134-.867 1.561 0Z" /></svg>
                            </span>
                            <div className="text-xl sm:text-3xl font-bold text-[#C2410C] mb-1">4</div>
                            <div className="text-xs sm:text-sm text-[#626262]">Badges Earned</div>
                        </CardContent>
                    </Card>
                </div>
            </div>

        </main >
    )
}

export default OverViewScreen