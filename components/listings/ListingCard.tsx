"use client"

import { Badge } from "@/components/ui/badge"
import { ListingImageCarousel } from "./ListingImageCarousel"
import { ListedItem } from "@/context/appstore/AppContext"
import { Button } from "../ui/button"

interface ItemCardProps {
    item: ListedItem
    onEdit?: (item: ListedItem) => void
    onDelete?: (item: ListedItem) => void
    onList?: (item: ListedItem) => void
    onUnlist?: (item: ListedItem) => void
    onRepost?: (item: ListedItem) => void
    onCardClick?: (item: ListedItem) => void
}

export function ListingCard({ item, onEdit, onDelete, onList, onUnlist, onRepost, onCardClick }: ItemCardProps) {

    const handleCardClick = () => {
        onCardClick?.(item)
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case "published":
                return "bg-[#14AE7D] text-white "
            case "under-review":
                return "bg-[#3B82F6] text-white"
            case "draft":
                return "bg-[#E5A000] text-white"
            case "expired":
                return "bg-[#C00F0C] text-white"
            default:
                return "bg-gray-100 text-gray-800 border-gray-200"
        }
    }

    const getStatusText = (status: string) => {
        switch (status) {
            case "published":
                return "Published"
            case "under-review":
                return "Under Review"
            case "draft":
                return "Draft"
            case "expired":
                return "Expired"
            default:
                return status
        }
    }

    return (
        <div className="flex flex-col bg-white rounded-xl border border-gray-200 overflow-hidden">
            {/* Image Section with Carousel */}
            <div className="relative h-60">
                <ListingImageCarousel images={item.images} alt={item.title} className="h-full w-full" />
            </div>

            {/* Content Section */}
            <div className="p-4 flex-1 flex flex-col">
                {/* Title */}
                <h3 className="font-semibold text-gray-900 mt-2 mb-3 line-clamp-2">{item.title}</h3>
                {/* Header with Status and Menu */}
                <div className="flex items-start gap-2 mb-2">
                    <Badge variant="outline" className={`text-xs shadow-none border-none rounded-full py-2 px-4 font-medium ${getStatusColor(item.status)}`}>
                        {getStatusText(item.status)}
                    </Badge>
                    <Badge variant="outline" className={`text-xs shadow-none border-none rounded-full py-2 px-4 font-medium bg-[#F1F3DE] text-[#989F42]`}>
                        Expires in {item.expiresIn}
                    </Badge>
                </div>



                {/* Description */}
                <p className="text-sm mt-2 mb-8 text-gray-600 mb-3 line-clamp-2">{item.description}</p>

                {/* Footer */}
                <div className="grid grid-cols-2 items-center mt-auto gap-4">
                    <Button onClick={handleCardClick} variant="secondary" className="shadow-none py-6 cursor-pointer" >View More</Button>

                    {item.status === "draft" && onList && (
                        <Button variant="primary" className="py-6" onClick={() => onList(item)}>List Item</Button>
                    )}
                    {item.status === "published" && onUnlist && (
                        <Button variant="primary" className="py-6" onClick={() => onUnlist(item)}>Unlist Item</Button>
                    )}
                    {item.status === "expired" && onRepost && (
                        <Button variant="primary" className="py-6" onClick={() => onRepost(item)}>Repost Item</Button>
                    )}
                    {item.status === "under-review" && onUnlist && (
                        <Button variant="primary" className="py-6" onClick={() => onUnlist(item)}>Unlist Item</Button>
                    )}
                    {onEdit && (
                        <Button variant="ghost" onClick={() => onEdit(item)}>Edit</Button>
                    )}
                    {onDelete && (
                        <Button variant="destructive" onClick={() => onDelete(item)}>Delete</Button>
                    )}
                </div>
            </div>
        </div>
    )
}
