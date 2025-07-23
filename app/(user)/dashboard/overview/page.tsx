"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import StatsCard from "@/components/usercard/StatsCard"
import { Users, Package, Star} from "lucide-react"



const Dashboard = () => {
    return (
        <main className="grid gap-10">
            {/* Metrics Cards */}
            <div className="grid grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-6 xl:gap-8">
                <StatsCard
                    title="Item Listed"
                    count={0}
                    weeklyStats="+5 this week"
                    Icon={(<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none"><path stroke="#0D9488" d="M11.188 6.188h10M11.188 12.188h10M11.188 18.188h10M3.188 15.188h1.5c.278 0 .418 0 .534.023a1.2 1.2 0 0 1 .942.942c.024.116.024.256.024.535 0 .278 0 .418-.024.534a1.2 1.2 0 0 1-.942.942c-.116.023-.256.023-.535.023-.278 0-.418 0-.534.024a1.2 1.2 0 0 0-.942.942c-.023.116-.023.256-.023.535v.9c0 .282 0 .424.087.512.088.087.23.087.513.087h2.4M3.188 3.188h1.2a.3.3 0 0 1 .3.3v5.7m0 0h-1.5m1.5 0h1.5" /></svg>)}
                    badgeColor="bg-[#E6F8F4]"
                />
                <StatsCard
                    title="Matches Made"
                    count={0}
                    weeklyStats="+5 this week"
                    Icon={<Users className="w-5 h-5 text-[#8e6add]" />}
                    badgeColor="bg-[#F3EAFD]"
                />
                <StatsCard
                    title="Pickups"
                    count={0}
                    weeklyStats="+5 this week"
                    Icon={<Package className="w-5 h-5 text-[#FB923C]" />}
                    badgeColor="bg-[#F9EEE7]"
                />
                <StatsCard
                    title="Rating"
                    count={0}
                    rating={5}
                    reviews={20}
                    Icon={<Star className="w-5 h-5 text-[#989F42]" />}
                    badgeColor="bg-[#F1F3DE]"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Left Column */}
                <div className="lg:col-span-3 space-y-6">
                    {/* Recent Activity */}
                    <Card className="bg-[#F9FAFB] shadow-none border-0">
                        <CardHeader>
                            <CardTitle className="text-md sm:text-[1rem] text-[#222222]">Recent Activity</CardTitle>
                        </CardHeader>
                        <CardContent className="py-12">
                            <div className="text-center text-sm sm:text-md text-[#626262]">No recent activity</div>
                        </CardContent>
                    </Card>
                </div>
                <div className=" lg:col-span-2 space-y-6">
                    {/* Your Badges */}
                    <Card className="bg-[#F9FAFB] border-0 shadow-none">
                        <CardHeader>
                            <CardTitle className="text-md sm:text-[1rem] text-[#222222]">Your Badges</CardTitle>
                        </CardHeader>
                        <CardContent className="py-12">
                            <div className="text-center text-sm sm:text-md text-[#626262]">No Badges</div>
                        </CardContent>
                    </Card>
                </div>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#4671FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.5 10s-6 4-6 11M9.849 11.182a4.114 4.114 0 0 1-5.37-.387C2.055 8.372 2.539 3.04 2.539 3.04s5.333-.485 7.756 1.939a4.107 4.107 0 0 1 1.16 3.521" /><path stroke="#4671FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.464 12.818a3.656 3.656 0 0 1 .107-5.06c2.154-2.154 6.894-1.723 6.894-1.723s.43 4.74-1.724 6.894A3.646 3.646 0 0 1 18 13.997M6.5 7s6 5 6 14" /></svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#F97311" stroke-linecap="round" stroke-width="1.5" d="M3.5 5.113c0-.553 0-.83.043-1.06a2.51 2.51 0 0 1 1.996-2.01C5.767 2 6.042 2 6.59 2h11.82c.548 0 .823 0 1.051.043a2.51 2.51 0 0 1 1.996 2.01c.043.23.043.507.043 1.06 0 .542 0 .813-.032 1.065a4.035 4.035 0 0 1-1.603 2.744c-.202.15-.438.282-.908.545l-2.572 1.439C14.486 11.969 13.536 12.5 12.5 12.5c-1.037 0-1.986-.531-3.885-1.594l-2.572-1.44c-.47-.262-.705-.394-.908-.544a4.035 4.035 0 0 1-1.603-2.744C3.5 5.926 3.5 5.655 3.5 5.113ZM8.5 5v1m4-1v3m4-3v1" /><path stroke="#F97311" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.277 13.65.792 1.597a.978.978 0 0 0 .64.476l1.435.24c.918.155 1.134.826.472 1.489L15.5 18.577a.99.99 0 0 0-.234.82l.32 1.394c.252 1.102-.329 1.529-1.296.952l-1.345-.803c-.244-.145-.644-.145-.891 0l-1.346.803c-.963.577-1.548.146-1.296-.952l.32-1.393a.99.99 0 0 0-.234-.821l-1.116-1.125c-.657-.663-.445-1.334.472-1.488l1.436-.24a.98.98 0 0 0 .634-.477l.792-1.597c.432-.867 1.134-.867 1.561 0Z" /></svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#4671FF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.5 10s-6 4-6 11M9.849 11.182a4.114 4.114 0 0 1-5.37-.387C2.055 8.372 2.539 3.04 2.539 3.04s5.333-.485 7.756 1.939a4.107 4.107 0 0 1 1.16 3.521" /><path stroke="#4671FF" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15.464 12.818a3.656 3.656 0 0 1 .107-5.06c2.154-2.154 6.894-1.723 6.894-1.723s.43 4.74-1.724 6.894A3.646 3.646 0 0 1 18 13.997M6.5 7s6 5 6 14" /></svg>
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
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" fill="none"><path stroke="#F97311" stroke-linecap="round" stroke-width="1.5" d="M3.5 5.113c0-.553 0-.83.043-1.06a2.51 2.51 0 0 1 1.996-2.01C5.767 2 6.042 2 6.59 2h11.82c.548 0 .823 0 1.051.043a2.51 2.51 0 0 1 1.996 2.01c.043.23.043.507.043 1.06 0 .542 0 .813-.032 1.065a4.035 4.035 0 0 1-1.603 2.744c-.202.15-.438.282-.908.545l-2.572 1.439C14.486 11.969 13.536 12.5 12.5 12.5c-1.037 0-1.986-.531-3.885-1.594l-2.572-1.44c-.47-.262-.705-.394-.908-.544a4.035 4.035 0 0 1-1.603-2.744C3.5 5.926 3.5 5.655 3.5 5.113ZM8.5 5v1m4-1v3m4-3v1" /><path stroke="#F97311" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.277 13.65.792 1.597a.978.978 0 0 0 .64.476l1.435.24c.918.155 1.134.826.472 1.489L15.5 18.577a.99.99 0 0 0-.234.82l.32 1.394c.252 1.102-.329 1.529-1.296.952l-1.345-.803c-.244-.145-.644-.145-.891 0l-1.346.803c-.963.577-1.548.146-1.296-.952l.32-1.393a.99.99 0 0 0-.234-.821l-1.116-1.125c-.657-.663-.445-1.334.472-1.488l1.436-.24a.98.98 0 0 0 .634-.477l.792-1.597c.432-.867 1.134-.867 1.561 0Z" /></svg>
                            </span>
                            <div className="text-xl sm:text-3xl font-bold text-[#C2410C] mb-1">4</div>
                            <div className="text-xs sm:text-sm text-[#626262]">Badges Earned</div>
                        </CardContent>
                    </Card>
                </div>
            </div>
            {/* <div className="block xl:hidden border w-full overflow-x-hidden rounded-lg py-6 ">
                <h2 className="mx-4 sm:mx-6 text-md sm:text-[1.2rem] font-semibold text-[#222222] mb-4">Your Environmental Impact</h2>
                <div className="flex flex-row items-center ml-4 gap-4 overflow-x-auto scrollbar-hide">
                    <Card className="bg-[#e6f8f4]  w-72 shadow-none h-auto shrink-0 border-0">
                        <CardContent className="py-4 px-6  text-center">
                            <Leaf className="w-6 h-6 text-[#14AE7D] mx-auto mb-3" />
                            <div className="text-xl sm:text-3xl font-bold text-[#166534] mb-1">0 kg</div>
                            <div className="text-xs sm:text-sm text-[#626262]">Waste Diverted</div>
                        </CardContent>
                    </Card>

                    <Card className="w-72  bg-[#e7eff9] h-auto shrink-0 shadow-none border-0">
                        <CardContent className="py-4 px-6  text-center">
                            <Gift className="w-6 h-6 text-[#3a66f5] mx-auto mb-3 " />
                            <div className="text-xl sm:text-3xl font-bold text-[#1E40AF] mb-1">0</div>
                            <div className="text-xs sm:text-sm text-[#626262]">Items Shared</div>
                        </CardContent>
                    </Card>

                    <Card className="w-72  bg-[#F6EAFD] shadow-none h-auto shrink-0 border-0">
                        <CardContent className="py-4 px-6  text-center">
                            <Handshake className="w-6 h-6 text-[#8E6ADD] mx-auto mb-3" />
                            <div className="text-xl sm:text-3xl font-bold text-[#4C21A8] mb-1">0</div>
                            <div className="text-xs sm:text-sm text-[#626262]">Connections Made</div>
                        </CardContent>
                    </Card>
                    <Card className="w-72 mr-4 bg-[#FFEDE1] shadow-none h-auto shrink-0 border-0">
                        <CardContent className="py-4 px-6 text-center">
                            <svg className="h-6 w-6 mx-auto mb-3" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.5 5.11296C3.5 4.56029 3.5 4.28395 3.54289 4.05373C3.73304 3.03312 4.52565 2.23473 5.53889 2.0432C5.76745 2 6.04179 2 6.59048 2H18.4095C18.9582 2 19.2325 2 19.4611 2.0432C20.4743 2.23473 21.267 3.03312 21.4571 4.05373C21.5 4.28395 21.5 4.56029 21.5 5.11296C21.5 5.6552 21.5 5.92631 21.4685 6.17771C21.3309 7.27541 20.7512 8.26781 19.8654 8.92208C19.6625 9.07192 19.4272 9.20359 18.9566 9.46692L16.3851 10.9059C14.4861 11.9686 13.5365 12.5 12.5 12.5C11.4635 12.5 10.5139 11.9686 8.61486 10.9059L6.04338 9.46692C5.5728 9.20359 5.33752 9.07192 5.13465 8.92208C4.24885 8.26781 3.66914 7.27541 3.53152 6.17771C3.5 5.92631 3.5 5.6552 3.5 5.11296Z" stroke="#F97311" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M8.5 5V6M12.5 5V8M16.5 5V6" stroke="#F97311" strokeWidth="1.5" strokeLinecap="round" />
                                <path d="M13.2774 13.6499L14.0693 15.2468C14.1773 15.4691 14.4653 15.6823 14.7083 15.7231L16.1436 15.9636C17.0615 16.1178 17.2775 16.7893 16.6161 17.4516L15.5002 18.5767C15.3112 18.7673 15.2077 19.1347 15.2662 19.3979L15.5857 20.7906C15.8377 21.893 15.2572 22.3195 14.2898 21.7433L12.9445 20.9403C12.7015 20.7952 12.301 20.7952 12.0536 20.9403L10.7082 21.7433C9.74533 22.3195 9.16039 21.8885 9.41236 20.7906L9.73183 19.3979C9.79032 19.1347 9.68683 18.7673 9.49785 18.5767L8.38198 17.4516C7.72505 16.7893 7.93653 16.1178 8.85443 15.9636L10.2898 15.7231C10.5282 15.6823 10.8162 15.4691 10.9242 15.2468L11.7161 13.6499C12.1481 12.7834 12.85 12.7834 13.2774 13.6499Z" stroke="#F97311" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <div className="text-xl sm:text-3xl font-bold text-[#C2410C] mb-1">0</div>
                            <div className="text-xs sm:text-sm text-[#626262]">Badges Earned</div>
                        </CardContent>
                    </Card>
                </div>
            </div> */}
        </main >
    )
}

export default Dashboard