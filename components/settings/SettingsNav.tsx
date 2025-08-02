"use client"

import React, { useMemo, useState } from 'react'
import MenuItem from '../sidebar/MenuItem'
import { usePathname } from 'next/navigation'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from 'next/link'



const settingsMenu = [
    {
        id: "profile",
        title: "Profile",
        href: "/dashboard/settings/profile",
    },
    {
        id: "listing",
        title: "Listing",
        href: "/dashboard/settings/listing",
    },
    {
        id: "interest-management",
        title: "Interest Management",
        href: "/dashboard/settings/interest-management",
    },
    {
        id: "cancellation",
        title: "Cancellation",
        href: "/dashboard/settings/cancellation",
    },
    {
        id: "notification",
        title: "Notification",
        href: "/dashboard/settings/notification",
    },
    {
        id: "privacy-and-visibility",
        title: "Privacy & Visibility",
        href: "/dashboard/settings/privacy-and-visibility",
    },
    {
        id: "badges-and-recognition",
        title: "Badges & Recognition",
        href: "/dashboard/settings/badges-and-recognition",
    },
    {
        id: "account-settings",
        title: "Account Settings",
        href: "/dashboard/settings/account-settings",
    },
    {
        id: "help-and-support",
        title: "Help & Support",
        href: "/dashboard/settings/help-and-support",
    },
    {
        id: "legal-and-compliance",
        title: "Legal & Compliance",
        href: "/dashboard/settings/legal-and-compliance",
    }
]

const SettingsNav = () => {
    const pathname = usePathname()
    const pageTitle = useMemo(() => {
        if (!pathname) return '';

        const parts = pathname.split('/');

        const last = parts[parts.length - 1] || parts[parts.length - 2];

        return last
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    }, [pathname]);

    const [dropDownOpen, setDropDownOpen] = useState(false)









    const handleDropDownOpenChange = () => {
        setDropDownOpen(!dropDownOpen)
        console.log(dropDownOpen)
    }








    return (
        <>
            <div className='block lg:hidden w-full'>
                <DropdownMenu onOpenChange={handleDropDownOpenChange}>
                    <DropdownMenuTrigger className='cursor-pointer capitalize bg-gray-50 w-full text-left p-4 rounded-lg flex items-center justify-between'>
                        <span className='font-semibold'>{pageTitle}</span>
                        {dropDownOpen ? (<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10ZM15 15 9 9m0 6 6-6" /></svg></span>) : (<span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none"><path stroke="#757575" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.996 12h.01M11.984 16h.01M12 8h.009" /><path stroke="#757575" strokeWidth="1.5" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10Z" /></svg></span>)}
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-[var(--radix-dropdown-menu-trigger-width)] border-none shadow-xl">
                        {settingsMenu.map((menuItem) => (
                            <DropdownMenuItem
                                key={menuItem.id}
                                className={`${pathname === menuItem.href ? "bg-[#E6F8F4] text-app-primary" : ""} w-full`}
                                asChild
                            >
                                <Link href={menuItem.href}>{menuItem.title}</Link>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className='sticky top-[7rem] hidden lg:block w-full min-w-[200px] lg:@xl:w-[28%] grid gap-2 border rounded-lg p-2 self-start'>

                {settingsMenu.map(menuItem => (
                    <MenuItem
                        key={menuItem.id}
                        href={menuItem.href}
                        isActive={pathname === menuItem.href}
                        title={menuItem.title}
                        size="sm"
                    />
                ))}
            </div>
        </>
    )
}

export default SettingsNav