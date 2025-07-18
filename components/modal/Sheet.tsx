"use client"

import React from 'react'
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
import { useUIState } from "@/hooks/useAppState";
import { ScrollArea, ScrollBar } from '../ui/scroll-area';


const SheetModal = () => {
    const { isSheetOpen, sheetContent, closeSheet } = useUIState();
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Sheet open={isSheetOpen} onOpenChange={closeSheet}>
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
        <Drawer repositionInputs={false} open={isSheetOpen} onOpenChange={closeSheet}>
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