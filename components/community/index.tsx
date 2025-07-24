"use client"

import React, { useState } from 'react'
import { Card, CardContent } from '../ui/card'
import { CommunityStar, EcoChampion, FeedBackFriendly, FirstGive, GenerousSoul, GtAnniversary, KidnessChampion, MilestoneGiver, NeighbourhoodHero, OneForAll, ReliableGiver, SteadyGiver, SwiftResponder, VerifiedGiver, ZeroWasteAdvocate } from './badges'
import ContributorListItem from './ContributorListItem'
import BadgeCard from './BadgeCard'
import ResponsiveModal from '../modal/ResponsiveModal'


const topContributors = [
    {
        id: 1,
        name: 'Sarah Johnson',
        giveCount: 87,
        profileImage: '/assets/avatars/sarah.png '
    },
    {
        id: 2,
        name: 'Cameron Williamson',
        giveCount: 60,
        profileImage: '/assets/avatars/cameron.png'
    },
    {
        id: 3,
        name: 'Jenny Wilson',
        giveCount: 55,
        profileImage: '/assets/avatars/jenny.png'
    },
    {
        id: 4,
        name: 'Kristin Watson',
        giveCount: 40,
        profileImage: '/assets/avatars/kristin.png'
    },
    {
        id: 5,
        name: 'Savannah',
        giveCount: 30,
        profileImage: '/assets/avatars/savannah.png'
    },
]


const CommunityView = () => {
    const [viewAllBadgeModal, setViewAllBadgeModal] = useState(false)

    return (
        <div className="grid gap-10">
            <div className="hidden xl:block border rounded-lg p-4 sm:p-6">
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
            <div className="grid grid-cols-1 xl:grid-cols-6 gap-8">
                <div className="col-auto xl:col-span-4 p-4 md:p-6 border rounded-lg">
                    <div className="flex items-center justify-between mb-6">
                        <h4 className='font-semibold'>Earned Badges</h4>
                        <button onClick={() => setViewAllBadgeModal(true)} className='text-app-primary text-sm cursor-pointer'>View all</button>
                    </div>
                    {/* Badges */}
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-2'>
                        
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
                            currentStep={0}
                            totalSteps={1}
                            badgeTitle="Eco Champion"
                            goalAchieved="Sustainable item giver"
                            icon={<EcoChampion className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                        <BadgeCard 
                            currentStep={3}
                            totalSteps={10}
                            badgeTitle="Swift Responder"
                            goalAchieved="10 replies in 24hrs"
                            icon={<SwiftResponder className='mix-blend-luminosity' />}
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
                        <BadgeCard 
                            currentStep={3}
                            totalSteps={10}
                            badgeTitle="Neighbourhood Hero"
                            goalAchieved="Gave within 5km"
                            icon={<NeighbourhoodHero className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                        <BadgeCard 
                            currentStep={3}
                            totalSteps={10}
                            badgeTitle="Verified Giver"
                            goalAchieved="Verified Identity"
                            icon={<VerifiedGiver className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                        <BadgeCard 
                            currentStep={3}
                            totalSteps={10}
                            badgeTitle="Steady Giver"
                            goalAchieved="Gave weekly for a month"
                            icon={<SteadyGiver className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                       
                       

                    </div>
                </div>
                <div className='col-auto xl:col-span-2 border rounded-lg self-start'>
                    {/* Top 5 Contributors */}
                    <h4 className='font-semibold p-6'>Top 5 Contributors</h4>
                    <ul className='grid'>
                        {topContributors.map(({id, name, profileImage, giveCount})=> (
                            <ContributorListItem 
                            key={id}
                            id={id}
                            highestGiver={giveCount === Math.max(...topContributors.map(c => c.giveCount))}
                            userName={name}
                            giveCount={giveCount}
                            profileImage={profileImage}
                        />
                        ))}
                        
                    </ul>
                    <div className='grid gap-2 border-t p-4 md:p-6'>
                        <div className="flex items-center justify-between">
                            <h4 className='font-bold'>Your Rank</h4>
                            <h4 className='font-bold'>#23</h4>
                        </div>
                        <p className='text-gray-500'>Give out 30 more items to be amongst the top 5 contributors.</p>
                    </div>
                </div>
            </div>

            <ResponsiveModal open={viewAllBadgeModal} close={()=> setViewAllBadgeModal(false)} className='min-w-auto h-auto md:h-[85%] md:min-w-[700px] py-4 md:py-6 px-4'>
                       
                    <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 overflow-auto scrollbar-hide'>
                        
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
                            currentStep={0}
                            totalSteps={1}
                            badgeTitle="Eco Champion"
                            goalAchieved="Sustainable item giver"
                            icon={<EcoChampion className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                        <BadgeCard 
                            currentStep={3}
                            totalSteps={10}
                            badgeTitle="Swift Responder"
                            goalAchieved="10 replies in 24hrs"
                            icon={<SwiftResponder className='mix-blend-luminosity' />}
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
                        <BadgeCard 
                            currentStep={3}
                            totalSteps={10}
                            badgeTitle="Neighbourhood Hero"
                            goalAchieved="Gave within 5km"
                            icon={<NeighbourhoodHero className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                        <BadgeCard 
                            currentStep={3}
                            totalSteps={10}
                            badgeTitle="Verified Giver"
                            goalAchieved="Verified Identity"
                            icon={<VerifiedGiver className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                        <BadgeCard 
                            currentStep={3}
                            totalSteps={10}
                            badgeTitle="Steady Giver"
                            goalAchieved="Gave weekly for a month"
                            icon={<SteadyGiver className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                        <BadgeCard 
                            currentStep={1}
                            totalSteps={3}
                            badgeTitle="One-for-All"
                            goalAchieved="Listed 3 different items"
                            icon={<OneForAll className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                        <BadgeCard 
                            currentStep={2}
                            totalSteps={25}
                            badgeTitle="Milestone Giver"
                            goalAchieved="Gave 25 items "
                            icon={<MilestoneGiver className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                        <BadgeCard 
                            currentStep={1}
                            totalSteps={4}
                            badgeTitle="Kindness Champion"
                            goalAchieved="Gave valuable items"
                            icon={<KidnessChampion className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                        <BadgeCard 
                            currentStep={1}
                            totalSteps={3}
                            badgeTitle="Zero Waste Advocate"
                            goalAchieved="Gave valuable items"
                            icon={<ZeroWasteAdvocate className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                        <BadgeCard 
                            currentStep={2}
                            totalSteps={5}
                            badgeTitle="Feedback Friendly"
                            goalAchieved="Gave 5 feedbacks"
                            icon={<FeedBackFriendly className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />
                        <BadgeCard 
                            currentStep={1}
                            totalSteps={4}
                            badgeTitle="GT Anniversary"
                            goalAchieved="One year anniversary"
                            icon={<GtAnniversary className='mix-blend-luminosity' />}
                            isCompleted={false}
                            earnedDate="Earned 1 month ago"
                        />

                    </div>
            </ResponsiveModal>
        </div>
    )
}

export default CommunityView