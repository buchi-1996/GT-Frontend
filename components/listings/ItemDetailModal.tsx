"use client"

import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MapPin, Clock } from "lucide-react"
import { ListedItem } from "@/context/appstore/AppContext"

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

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl w-full max-h-[90vh] overflow-y-auto p-0">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b px-6 py-4 flex justify-between items-start">
          <div className="flex-1">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h2>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                {item.category}
              </Badge>
              <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                {item.condition}
              </Badge>
              <Badge variant="outline" className={`${getStatusColor(item.status)}`}>
                {getStatusText(item.status)}
              </Badge>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 pb-6">
          {/* Description */}
          <div className="mb-6">
            <p className="text-gray-700 leading-relaxed">{item.description}</p>
          </div>

          {/* Images */}
          <div className="mb-6">
            <div className="grid grid-cols-2 gap-3">
              {item.images.slice(0, 4).map((image, index) => (
                <div key={index} className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                  <img
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
                    <p className="font-medium">{item.zipCode || "Not specified"}</p>
                  </div>
                  <div>
                    <span className="text-gray-500">Address</span>
                    <p className="font-medium">{item.address || "Not specified"}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Time Availability */}
          <div className="mb-8">
            <div className="flex items-start space-x-2 mb-3">
              <Clock className="w-5 h-5 text-gray-400 mt-0.5" />
              <div className="flex-1">
                <h4 className="font-medium text-gray-900 mb-3">Availability</h4>

                {/* Weekly Time Slots */}
                {item.timeSlots && item.timeSlots.length > 0 && (
                  <div className="space-y-3 mb-4">
                    <h5 className="text-sm font-medium text-gray-700">Weekly Availability:</h5>
                    {item.timeSlots.map((daySlot, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="w-20 text-sm font-medium text-gray-700">{daySlot.day}</div>
                        <div className="flex flex-wrap gap-2">
                          {daySlot.timeSlots.map((slot, slotIndex) => (
                            <Badge
                              key={slotIndex}
                              variant="secondary"
                              className="bg-gray-50 text-gray-700 text-xs px-2 py-1"
                            >
                              {slot}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Specific Date Slots */}
                {item.specificDate && item.specificDate.length > 0 && (
                  <div className="space-y-3">
                    <h5 className="text-sm font-medium text-gray-700">Specific Dates:</h5>
                    {item.specificDate.map((dateSlot, index) => (
                      <div key={index} className="border rounded-lg p-3 bg-gray-50">
                        <div className="text-sm font-medium text-gray-700 mb-2">{dateSlot.date}</div>
                        <div className="flex flex-wrap gap-2">
                          {dateSlot.timeSlots.map((slot, slotIndex) => (
                            <Badge
                              key={slotIndex}
                              variant="secondary"
                              className="bg-white text-gray-700 text-xs px-2 py-1"
                            >
                              {slot}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* No availability message */}
                {(!item.timeSlots || item.timeSlots.length === 0) &&
                  (!item.specificDate || item.specificDate.length === 0) && (
                    <p className="text-gray-500 text-sm">No availability information provided</p>
                  )}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3">
            <Button variant="outline" onClick={() => onEdit?.(item)} className="flex-1 py-3">
              Edit
            </Button>
            <Button onClick={handlePrimaryAction} className="flex-1 py-3 bg-[#0D9488] hover:bg-[#0D9488]/90 text-white">
              {getPrimaryButtonText()}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
