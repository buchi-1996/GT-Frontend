"use client"


import OnboardingHeader from "@/components/header/OnboardingHeader"
import UserCard from "@/components/usercard/UserCard"
import Image from "next/image"

export default function Home() {




  return (
    <>
    <OnboardingHeader hasActionButton={false} />
    <div className="h-full flex flex-col max-w-5xl mx-auto">

      <div className="flex-1 flex flex-col items-center justify-center px-6 py-20">
        {/* Gift Icon */}
        <div className="w-20 h-20 bg-[#ffffff] rounded-full flex items-center justify-center mb-8 shadow-lg">
          <Image src='/assets/icons/gift.svg' alt="gift icon" width={100} height={100} className="w-10 h-10" />
        </div>

        {/* Welcome Text */}
        <h1 className="text-3xl font-semibold text-primary mb-2">Welcome to GT</h1>
        <div className="flex items-start justify-center mb-4">
          <Image
            src="/assets/icons/quote-icon.svg"
            alt="quote icon"
            width={100}
            height={100}
            className="w-6 h-6 mr-2"
          />
          <p className="text-[#626262] text-center mt-1 mb-12">Give out what you no longer need. Receive what you do.</p>
          <Image
            src="/assets/icons/quote-icon.svg"
            alt="quote icon"
            width={100}
            height={100}
            className="w-6 h-6 ml-2 transform -scale-x-100"
          />
        </div>

        {/* Role Cards */}
        <div className="grid place-items-stretch gap-4 w-full">

          <UserCard
            title="Giver"
            description="Donate items I no longer need"
            imageIcon="/assets/icons/give-gift--reward-social-rating-media-queen-vip-gift.svg"
            color="bg-app-primary/10"
            href="auth/giver/register"
          />

          <UserCard
            title="Receiver"
            description="Get items others are giving away"
            imageIcon='/assets/icons/gift-icon.svg'
            color="bg-app-secondary/10"
            href="auth/receiver/register"
          />

          <UserCard
            title="Both"
            description="Give and receive items"
            imageIcon='/assets/icons/both.svg'
            color="bg-app-base/10"
            href="auth/both/register"
          />
        </div>
      </div>
    </div>
    </>
  )
}



