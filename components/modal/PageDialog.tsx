"use client";

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import { useMediaQuery } from "@/hooks/use-media-query";
import { useAppState } from "@/hooks/useAppState";
import { ScrollArea } from "../ui/scroll-area";

export default function PageDialog() {
    const { isAddItemDialogOpen, listingsContent, closeAddItem, } = useAppState();
    const isDesktop = useMediaQuery("(min-width: 768px)")

    if (isDesktop) {
        return (
            <Dialog open={isAddItemDialogOpen} onOpenChange={closeAddItem} >
                <DialogContent className="min-w-full sm:min-w-auto sm:max-w-2xl min-h-82 rounded-2xl border-none">
                    <DialogHeader>
                        <DialogTitle className="sr-only">Title</DialogTitle>
                    </DialogHeader>
                        {listingsContent}
                </DialogContent>
            </Dialog>
        )
    }

    return (
        <Dialog open={isAddItemDialogOpen} onOpenChange={closeAddItem} >
            <DialogContent className="min-w-full  h-screen px-0 sm:p-6 m-0 rounded-none">
                <DialogHeader>
                    <DialogTitle className="sr-only">Title</DialogTitle>
                </DialogHeader>
                    <ScrollArea className="min-h-screen pb-20 w-full">
                        {listingsContent}
                    </ScrollArea>
            </DialogContent>
        </Dialog>
    );
}
