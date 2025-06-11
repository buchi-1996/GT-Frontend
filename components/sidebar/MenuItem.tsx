import { NavigationItem } from '@/types'
import Link from 'next/link'
import React from 'react'



const MenuItem = ({ title, icon, href, isActive }: NavigationItem) => {

    return (
        <li>
            <Link href={`${href}`} className={` ${isActive && 'bg-[#E6F8F4] '} w-full bock flex items-center p-6 rounded-lg text-[#383838] hover:bg-gray-50 hover:text-[#222222] px-3 py-3 gap-3`}>
                <span className={`${isActive && 'text-[#0D9488] stroke-[#0D9488]'}`}>{icon}</span>
                <p className={`${isActive && 'text-[#0D9488]'}`}>{title}</p>
            </Link>
        </li>
    )
}

export default MenuItem