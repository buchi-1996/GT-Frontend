"use client"

import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

interface CriteriaItem {
    id: string
    title: string
    description: string
}

interface SortableCriteriaItemProps {
    criteria: CriteriaItem
}

export function SortableCriteriaItem({ criteria }: SortableCriteriaItemProps) {
    const { attributes, listeners, setNodeRef, transform, transition, isDragging } = useSortable({ id: criteria.id })

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    }

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`flex items-center space-x-3 bg-gray-50  py-5 px-4 rounded-lg transition-all cursor-grab active:cursor-grabbing ${isDragging ? "opacity-50 scale-105 bg-app-primary shadow-lg z-50" : "hover:bg-[#f9fafb] hover:shadow-sm"
                }`}
        >
            <span>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 6H8.00635M8 12H8.00635M8 18H8.00635M15.9937 6H16M15.9937 12H16M15.9937 18H16" stroke="#0D9488" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </span>
            {/* <GripVertical className="h-4 w-4 text-[#0D9488] mt-0.5" /> */}
            <div className="flex-1">
                <h3 className="font-medium text-[#222222] text-sm">{criteria.title}</h3>
                <p className="text-xs text-[#757575] mt-1">{criteria.description}</p>
            </div>
        </div>
    )
}