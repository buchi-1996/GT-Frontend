"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Plus } from "lucide-react"
import { useAppState, useUIState } from "@/hooks/useAppState"
import { ListingCard } from "./ListingCard"
import ListingForm from "./ListingForm"
import { ScrollArea, ScrollBar } from "../ui/scroll-area"
import { ListedItem } from "@/context/appstore/AppContext"
import { ItemDetailModal } from "./ItemDetailModal"

const tabs = [
    { id: "all", label: "All" },
    { id: "published", label: "Published" },
    { id: "under-review", label: "Under Review" },
    { id: "draft", label: "Draft" },
    { id: "expired", label: "Expired" },
]

export function ItemListingView() {
    const { openAddItem } = useUIState()
    const { listedItems, setListedItems, setItemListingFormData } = useAppState()
    const [activeTab, setActiveTab] = useState("all")
    const [selectedItem, setSelectedItem] = useState<ListedItem | null>(null)
    const [isDetailModalOpen, setIsDetailModalOpen] = useState(false)

    const filteredItems = listedItems.filter((item) => {
        if (activeTab === "all") return true
        return item.status === activeTab
    })

    const getTabCount = (tabId: string) => {
        if (tabId === "all") return listedItems.length
        return listedItems.filter((item) => item.status === tabId).length
    }

    const handleCardClick = (item: ListedItem) => {
        setSelectedItem(item)
        setIsDetailModalOpen(true)
    }

    const handleItemStatusChange = (item: ListedItem, newStatus: string) => {
        setListedItems((prev) =>
            prev.map((listItem) =>
                listItem.id === item.id
                    ? {
                        ...listItem,
                        status: newStatus as "published" | "under-review" | "draft" | "expired",
                        expiresIn: newStatus === "published" ? "30 days" : newStatus === "draft" ? "Draft" : "Under Review",
                    }
                    : listItem,
            ),
        )
        setIsDetailModalOpen(false)
    }

    const handleList = (item: ListedItem) => {
        handleItemStatusChange(item, "published")
    }

    const handleUnlist = (item: ListedItem) => {
        handleItemStatusChange(item, "draft")
    }

    const handleEdit = (item: ListedItem) => {
        // Close detail modal
        setIsDetailModalOpen(false)

        // Convert item data back to form format
        const formData = {
            title: item.title,
            weight: item.weight || 0,
            itemWorth: item.itemWorth || 0,
            description: item.description,
            image: [], // We'll handle existing images differently
            category: item.category,
            condition: item.condition,
            specificDate: item.specificDate || [],
            timeSlots: item.timeSlots || [],
            province: item.province || "",
            zipCode: item.zipCode || "",
            address: item.address || "",
            // Add existing images for display
            existingImages: item.images || [],
        }

        // Set the form data in context
        setItemListingFormData(formData)

        // Open the edit form with a special edit mode
        openAddItem(<ListingForm editMode={true} editItemId={item.id} />)
    }

    const handleDelete = (item: ListedItem) => {
        setListedItems((prev) => prev.filter((listItem) => listItem.id !== item.id))
        setIsDetailModalOpen(false)
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
                        onClick={() => openAddItem(<ListingForm />)}
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
                            onCardClick={handleCardClick}
                            item={item}
                            onList={() => console.log("List item:", item.id)}
                            onUnlist={() => console.log("Unlist item:", item.id)}
                            onRepost={() => console.log("Repost item:", item.id)}
                        />
                    ))}
                </div>
            </div>

            {/* Item Detail Modal */}
            <ItemDetailModal
                item={selectedItem}
                open={isDetailModalOpen}
                onOpenChange={setIsDetailModalOpen}
                onEdit={handleEdit}
                onList={handleList}
                onUnlist={handleUnlist}
                onDelete={handleDelete}
            />
        </div>

    )
}