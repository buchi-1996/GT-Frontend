"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import { useAppState, useUIState } from "@/hooks/useAppState"
import { ListingCard } from "./ListingCard"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { ListedItem } from "@/lib/schema"

const tabs = [
    { id: "all", label: "All" },
    { id: "published", label: "Published" },
    { id: "under-review", label: "Under Review" },
    { id: "draft", label: "Draft" },
    { id: "expired", label: "Expired" },
]

export function ItemListingView() {
    const { setItemListingModalOpen } = useUIState()
    const { listedItems} = useAppState()
    const [activeTab, setActiveTab] = useState("all")

    const filteredItems = listedItems.filter((item) => {
        if (activeTab === "all") return true
        return item.status === activeTab
    })

    const getTabCount = (tabId: string) => {
        if (tabId === "all") return listedItems.length
        return listedItems.filter((item) => item.status === tabId).length
    }

  

   

    const handleEdit = (item: ListedItem) => {
        // Close detail modal
        console.log('Editing')
    }


    return (
        <div className="min-h-screen">
            <div className="w-full grid gap-10">
                <div className="flex items-center gap-4 justify-between overflow-hidden">
                    {/* Tabs */}
                    <ScrollArea className="w-full overflow-auto">
                        <div className="flex gap-6 bg-white rounded-lg">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`px-4 py-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors flex items-center gap-2 ${activeTab === tab.id ? "bg-[#F9F9F9] text-app-black" : "text-gray-600 hover:text-gray-900"
                                        }`}
                                >
                                    {tab.label}
                                    <Badge variant="secondary" className="text-gray-600 text-xs">
                                        {getTabCount(tab.id)}
                                    </Badge>
                                </button>
                            ))}
                        </div>
                        <ScrollBar orientation="horizontal" />
                    </ScrollArea>
                    <Button
                        variant="primary"
                        onClick={() => setItemListingModalOpen(true)}
                        className="py-4"
                    >
                        <Plus className="w-4 h-4 mr-2" />
                        Add Item
                    </Button>
                </div>

                {/* Items Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
                    {filteredItems.map((item) => (
                        <ListingCard
                            key={item.id}
                            item={item}
                             onList={() => console.log("List item:", item.id)}
                            onUnlist={() => console.log("Unlist item:", item.id)}
                            onRepost={() => console.log("Repost item:", item.id)}
                        />
                    ))}
                </div>
            </div>

            
        </div>

    )
}