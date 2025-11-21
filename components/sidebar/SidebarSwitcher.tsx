"use client"

import { usePathname } from "next/navigation"
import GiverSidebar from "@/components/sidebar/GiverSidebar"
import ReceiverSidebar from "@/components/sidebar/ReceiverSidebar"

export default function SidebarSwitcher() {
    const pathname = usePathname() || ""
    const isGiver = pathname.includes("/giver/")
    return isGiver ? <GiverSidebar /> : <ReceiverSidebar />
}