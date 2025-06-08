"use client"


import UserCard from "@/components/usercard/UserCard"
import Image from "next/image"

export default function Home() {

 


  return (
    <div className="h-full flex flex-col">
  
      <div className="flex-1 flex flex-col md:items-center justify-center px-6 py-20">
        {/* Gift Icon */}
        <div className="w-20 h-20 bg-[#ffffff] rounded-full flex items-center justify-center mb-8 shadow-sm">
          <Image src='/assets/icons/gift.svg' alt="gift icon" width={100} height={100} className="w-10 h-10" />
        </div>

        {/* Welcome Text */}
        <h1 className="text-3xl font-semibold text-primary mb-2">Welcome to GT</h1>
        <p className="text-[#626262] mb-12">Choose a role to get started</p>

        {/* Role Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 place-items-stretch gap-6 w-full max-w-6xl">

          <UserCard
            title="Giver"
            description="Donate items I no longer need."
            imageIcon="/assets/icons/give-gift--reward-social-rating-media-queen-vip-gift.svg"
            color="bg-app-primary/10"
            href="auth/giver/register"
          />

          <UserCard
            title="Receiver"
            description="Get items others are giving away."
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
  )
}



