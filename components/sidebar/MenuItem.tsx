import { NavigationItem } from '@/types'
import Link from 'next/link'
import React from 'react'
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'
import { closeSidebar } from '@/redux/slices/sidebarSlice'



const MenuItem = ({ title, icon, href, isActive, size}: NavigationItem) => {

  const dispatch = useAppDispatch()
  const { sidebarCollapsed } = useAppSelector((state) => state.sidebar)
  
    

    return (
        <li onClick={() => dispatch(closeSidebar())} className='list-none'>
            <Link href={`${href}`} className={` ${isActive ? 'bg-[#E6F8F4] hover:bg-[#E6F8F4]' : 'text-[#383838] hover:bg-gray-50 hover:text-[#222222]'} w-full flex items-center rounded-lg  ${size === "sm" ? "px-2 py-[10px] gap-2" : "px-3 py-3  gap-3"} `}>
                <span className={`${isActive ? 'text-[#0D9488]  ' : 'text-[#383838] '}`}>
                    {icon}
                </span>
                <p className={`${isActive && 'text-[#0D9488]'} ${sidebarCollapsed ? 'hidden' : 'block'} ${size === "sm" && "text-sm"}`}>{title}</p>
            </Link>
        </li>
    )
}

export default MenuItem