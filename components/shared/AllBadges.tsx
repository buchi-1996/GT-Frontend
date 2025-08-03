"use client"
import React from 'react'
import ResponsiveModal from '../modal/ResponsiveModal'
import BadgeCard from '../community/BadgeCard'
import { CommunityStar, EcoChampion, FeedBackFriendly, FirstGive, GenerousSoul, GtAnniversary, KidnessChampion, MilestoneGiver, NeighbourhoodHero, OneForAll, ReliableGiver, SteadyGiver, SwiftResponder, VerifiedGiver, ZeroWasteAdvocate } from '../community/badges'
import { useUIState } from '@/hooks/useAppState'

const AllBadges = () => {

    const {viewAllBadgeModal, setViewAllBadgeModal} = useUIState()

    return (
        <ResponsiveModal open={viewAllBadgeModal} close={() => setViewAllBadgeModal(false)} className='min-w-auto h-auto md:h-[85%] md:min-w-[700px] py-4 md:py-6 px-4'>
            <h4 className="px-2 mb-4 md:mb-0 font-semibold">Earned Badges</h4>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-2 overflow-auto px-2'>

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
    )
}

export default AllBadges