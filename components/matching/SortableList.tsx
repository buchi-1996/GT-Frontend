"use client"

import React, { useState } from 'react'
import { Button } from '../ui/button'
import { SortableCriteriaItem } from './SortableCriteria'
import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    PointerSensor,
    useSensor,
    useSensors,
    type DragEndEvent,
} from "@dnd-kit/core"
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable"
import { useMediaQuery } from '@/hooks/use-media-query'
import { useUIState } from '@/hooks/useAppState'


interface CriteriaItem {
    id: string
    title: string
    description: string
}



const SortableList = () => {
const { openSheet, openCriteria, setOpenCriteria, setIsSheetOpen } = useUIState()

    const isMobile = useMediaQuery("(max-width: 1280px)")

    const [selectionCriteria, setSelectionCriteria] = useState<CriteriaItem[]>([
        {
            id: "1",
            title: "Urgency of need",
            description: "How quickly they need the item",
        },
        {
            id: "2",
            title: "Personal story",
            description: "Quality of their request message",
        },
        {
            id: "3",
            title: "Proximity",
            description: "How close they are to you",
        },
        {
            id: "4",
            title: "Community rating",
            description: "Their rating from previous exchanges",
        },
        {
            id: "5",
            title: "New member priority",
            description: "Give preference to new members",
        },
        {
            id: "6",
            title: "Request frequency",
            description: "How often they request items",
        },
    ])

    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates,
        }),
    )

    function handleDragEnd(event: DragEndEvent) {
        const { active, over } = event

        if (over && active.id !== over.id) {
            setSelectionCriteria((items) => {
                const oldIndex = items.findIndex((item) => item.id === active.id)
                const newIndex = items.findIndex((item) => item.id === over.id)

                return arrayMove(items, oldIndex, newIndex)
            })
        }
    }

    const handleCriteriaHide = () => {
        
        if (isMobile) {
            openSheet(<SortableList />)
            setIsSheetOpen(false)
        }
        setOpenCriteria(!openCriteria)
    }


    return (
        <div className=" w-full">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg font-semibold text-[#222222]">Selection Criteria</h2>
                <Button onClick={handleCriteriaHide} variant="ghost" size="sm" className="cursor-pointer text-[#0d9488] hover:text-[#009975]">
                    Hide
                </Button>
            </div>
            <div className="bg-[#fffbd4] border border-[#E5A000] rounded-lg p-3 mb-6">
                <p className="text-sm text-[#E5A000]">Drag to prioritize how interested users appear.</p>
            </div>

            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={selectionCriteria.map((item) => item.id)} strategy={verticalListSortingStrategy}>
                    <div className="space-y-3 h-80 overflow-auto scrollbar-hide">
                        {selectionCriteria.map((criteria) => (
                            <SortableCriteriaItem key={criteria.id} criteria={criteria} />
                        ))}
                    </div>
                </SortableContext>
            </DndContext>
            
        </div>
    )
}

export default SortableList