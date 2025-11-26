"use client"
import { usePathname } from "next/navigation";

export default function useRouteRole() {
    const pathname = usePathname();
    const isGiver = pathname?.includes("/giver/")
    const isReceiver = pathname?.includes("/receiver/")
    return { isGiver, isReceiver };
}