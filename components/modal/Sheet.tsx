"use client"

import React, { useEffect, useState } from 'react'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet"

import {
    Drawer,
    DrawerContent,
    DrawerHeader,
    DrawerTitle,
} from "@/components/ui/drawer"

import { useMediaQuery } from "@/hooks/use-media-query";
import { ScrollArea, ScrollBar } from '../ui/scroll-area';
import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';
import { closeSheet } from '@/redux/slices/modalSlice';


const SheetModal = () => {
    const dispatch = useAppDispatch()
    const {isSheetOpen, sheetContent} = useAppSelector((state) => state.modal);
    const isDesktop = useMediaQuery("(min-width: 768px)")
 const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null  // prevents double mounting in dev
    if (isDesktop) {
        return (
            <Sheet open={isSheetOpen} onOpenChange={()=> dispatch(closeSheet())}>
                <SheetContent side="right" className='py-4 px-6'>
                    <SheetHeader>
                        <SheetTitle className='sr-only'>title</SheetTitle>
                        <SheetDescription className='sr-only'>
                            title description
                        </SheetDescription>
                    </SheetHeader>
                    <ScrollArea className="overflow-y-auto scrollbar-hide">
                        {sheetContent}
                    </ScrollArea>
                </SheetContent>
            </Sheet>
        )
    }
    return (
        <Drawer repositionInputs={false} open={isSheetOpen} onOpenChange={()=> dispatch(closeSheet())}>
            <DrawerContent className='pt-4 px-4 pb-8' >
                <DrawerHeader className="text-left">
                    <DrawerTitle className="sr-only">Title</DrawerTitle>
                </DrawerHeader>
                <ScrollArea className="h-full overflow-y-auto scrollbar-hide">
                    {sheetContent}
                    <ScrollBar className="scrollbar-hide" />
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    );
}

export default SheetModal