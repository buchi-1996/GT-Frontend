import { useUIState } from '@/hooks/useAppState'
import { NavigationItem } from '@/types'
import Link from 'next/link'
import React from 'react'



const MenuItem = ({ title, icon, href, isActive, size }: NavigationItem) => {
    const {sidebarCollapsed, setSidebarOpen} = useUIState()

    return (
        <li onClick={() => setSidebarOpen(false)} className='list-none'>
            <Link href={`${href}`} className={` ${isActive && 'bg-[#E6F8F4] hover:bg-[#E6F8F4]'} w-full flex items-center rounded-lg text-[#383838] hover:bg-gray-50 hover:text-[#222222] ${size === "sm" ? "px-2 py-[10px] gap-2" : "px-3 py-3  gap-3"} `}>
                <span className={`${isActive && 'text-[#0D9488] stroke-[#0D9488]'}`}>{icon}</span>
                <p className={`${isActive && 'text-[#0D9488]'} ${sidebarCollapsed ? 'hidden' : 'block'} ${size === "sm" && "text-sm"}`}>{title}</p>
            </Link>
        </li>
    )
}

export default MenuItem