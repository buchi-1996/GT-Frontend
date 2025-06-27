import React from 'react'
import { useMediaQuery } from "@/hooks/use-media-query";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer"
import { ScrollArea } from "../ui/scroll-area";


interface TimeSlotSelectProps {
  children: React.ReactNode;
  open: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

const TimeSlotSelectModal = ({ children, open, onOpenChange }: TimeSlotSelectProps) => {

  const isDesktop = useMediaQuery("(min-width: 768px)")

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange} >
        <DialogContent  onPointerDownOutside={(e) => {
          // Check if onOpenChange is a no-op function (empty function)
          if (onOpenChange.toString() === "() => {}") {
            e.preventDefault()
          }
        }}
        onEscapeKeyDown={(e) => {
          // Check if onOpenChange is a no-op function (empty function)
          if (onOpenChange.toString() === "() => {}") {
            e.preventDefault()
          }
        }} className={`${onOpenChange.toString() === "() => {}" ? "[&>button]:hidden" : ""} min-w-full sm:min-w-auto sm:max-w-xl rounded-2xl border-none px-8 py-8`}>
          <DialogHeader>
            <DialogTitle className="sr-only">Title</DialogTitle>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer repositionInputs={false} open={open} onOpenChange={onOpenChange}>
      <DrawerContent className='p-6 min-h-auto'>
        <DrawerHeader className="text-left">
          <DrawerTitle className="sr-only">Title</DrawerTitle>
        </DrawerHeader>
        <ScrollArea className="h-auto overflow-auto pb-10 w-full">
          {children}
          </ScrollArea>
      </DrawerContent>
    </Drawer>
  );
}

export default TimeSlotSelectModal