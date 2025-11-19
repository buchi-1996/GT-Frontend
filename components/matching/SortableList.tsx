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
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks'
import { closeSheet, openSheet, showCriteriaModal } from '@/redux/slices/modalSlice'


interface CriteriaItem {
    id: string
    title: string
    description: string
}



const SortableList = () => {

    const dispatch = useAppDispatch()
    const {isCriteriaOpen} = useAppSelector((state) => state.modal);   
    
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
            dispatch(openSheet(<SortableList />))
            // setIsSheetOpen(false)
            dispatch(closeSheet())
        }
        // setOpenCriteria(!openCriteria)
        dispatch(showCriteriaModal(!isCriteriaOpen))
    }


    return (
        <div className="w-full">
            <div className='sticky top-0 z-10 bg-white pt-6 pb-[8px]'>
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-lg font-semibold text-[#222222]">Selection Criteria</h2>
                    <Button onClick={handleCriteriaHide} variant="ghost" size="sm" className="cursor-pointer text-[#0d9488] hover:text-[#009975]">
                        Hide
                    </Button>
                </div>
                <div className="bg-[#fffbd4] border border-[#E5A000] rounded-lg p-3 mb-2">
                    <p className="text-sm text-[#E5A000]">Drag to prioritize how interested users appear.</p>
                </div>
            </div>

            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={selectionCriteria.map((item) => item.id)} strategy={verticalListSortingStrategy}>
                    <div className="space-y-3">
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