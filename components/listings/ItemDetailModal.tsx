"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin} from "lucide-react"
import Image from "next/image"
import { ListedItem } from "@/lib/schema"
import ResponsiveModal from "../modal/ResponsiveModal"

interface ItemDetailModalProps {
  item: ListedItem | null
  open: boolean
  onOpenChange: (open: boolean) => void
  onEdit?: (item: ListedItem) => void
  onList?: (item: ListedItem) => void
  onUnlist?: (item: ListedItem) => void
  onDelete?: (item: ListedItem) => void
}

export function ItemDetailModal({
  item,
  open,
  onOpenChange,
  onEdit,
  onList,
  onUnlist,
  //   onDelete,
}: ItemDetailModalProps) {
  if (!item) return null

  const getStatusColor = (status: string) => {
    switch (status) {
      case "published":
        return "bg-green-100 text-green-800 border-green-200"
      case "under-review":
        return "bg-yellow-100 text-yellow-800 border-yellow-200"
      case "draft":
        return "bg-gray-100 text-gray-800 border-gray-200"
      case "expired":
        return "bg-red-100 text-red-800 border-red-200"
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

  const getPrimaryButtonText = () => {
    switch (item.status) {
      case "draft":
        return "List Item"
      case "published":
        return "Unlist Item"
      case "expired":
        return "Repost Item"
      default:
        return "List Item"
    }
  }

  const handlePrimaryAction = () => {
    switch (item.status) {
      case "draft":
        onList?.(item)
        break
      case "published":
        onUnlist?.(item)
        break
      case "expired":
        onList?.(item) // Repost is similar to list
        break
      default:
        onList?.(item)
    }
  }


  const imageUrls = item.imageUrls || []
  const mainImage = imageUrls[0] || "/placeholder.svg"
  const secondaryImages = imageUrls.slice(1, 4)


  return (
    <ResponsiveModal open={open} close={onOpenChange} className="min-h-[90%] px-6">
      {/* Header */}
      <div className="sticky top-0 bg-white pt-4 pb-2 flex justify-between items-start">
        <div className="flex-1">
          <h2 className="text-2xl font-semibold text-gray-900 mb-3">{item.title}</h2>
          <div className="flex flex-wrap gap-2 mb-4 md:mb-0">
            <Badge variant="outline" className={`${getStatusColor(item.status)} py-2 px-3 rounded-full`}>
              {getStatusText(item.status)}
            </Badge>
            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 py-2 px-3 rounded-full">
              {item.category}
            </Badge>
            <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200 py-2 px-3 rounded-full">
              {item.condition}
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div>
        <div className="max-h-96  overflow-y-auto scrollbar-hide">

          {/* Images */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-3 place-items-stretch">
             
                <div className="aspect-video rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    width={500}
                    height={500}
                    src={mainImage}
                    alt={`${item.title} - Image ${item.images[0]}`}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/placeholder.svg?height=200&width=200&text=Error"
                    }}
                  />
                </div>
                <div className="grid grid-cols-1 gap-3">
                  {secondaryImages.slice(1, 4).map((image, index) => (
                    <div key={index} className=" h-24 rounded-lg overflow-hidden bg-gray-100">
                      <Image
                        width={500}
                        height={500}
                        src={image || "/placeholder.svg"}
                        alt={`${item.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=200&width=200&text=Error"
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Description */}
            <div className="mb-6">
              <p className="text-gray-700 leading-relaxed">{item.description}</p>
            </div>
            {/* Location Details */}
            <div className="mb-6">
              <div className="flex items-start space-x-2 mb-3">
                <MapPin className="w-5 h-5 text-gray-400 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Location</h4>
                  <div className="grid grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Province</span>
                      <p className="font-medium">{item.province || "Not specified"}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Postal Code</span>
                      <p className="font-medium">{item.postCode || "Not specified"}</p>
                    </div>
                    <div>
                      <span className="text-gray-500">Address</span>
                      <p className="font-medium">{item.address || "Not specified"}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-6">
            <Button variant="outline" onClick={() => onEdit?.(item)} className="flex-1 py-6 cursor-pointer">
              Edit
            </Button>
            <Button onClick={handlePrimaryAction} variant="primary" className="flex-1 py-6">
              {getPrimaryButtonText()}
            </Button>
          </div>
        </div>
    </ResponsiveModal>
  )
}
