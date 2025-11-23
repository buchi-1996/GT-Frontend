"use client"
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const User = () => {
    return (
        <Link href="#" className="flex items-center gap-3 hover:bg-gray-100 p-2 rounded-md transition-colors duration-200">
            <div className={`flex items-center gap-3 `}>
            <Avatar className="w-10 h-10 sm:w-8 sm:h-8">
                <AvatarImage src="/placeholder.svg?height=32&width=32" />
                <AvatarFallback className="bg-[#3a66f5] text-white">JD</AvatarFallback>
            </Avatar>
            <div className="text-sm">
                <div className="font-medium text-[#222222]">Jane D.</div>
                <div className="text-[#626262]">Giver Account</div>
            </div>
        </div>
        </Link>
    )
}

export default User