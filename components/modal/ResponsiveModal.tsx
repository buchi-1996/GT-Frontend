"use client";

import React from 'react'

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
import { useMediaQuery } from "@/hooks/use-media-query";

interface ResponsiveModalProps{
    children: React.ReactNode;
    open?: boolean;
    close?: (open: boolean) => void;
    className?: string;
}


const ResponsiveModal = ({children, open, close, className}: ResponsiveModalProps) => {
  const isDesktop = useMediaQuery("(min-width: 768px)")
  

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={close} >
        <DialogContent className={`sm:max-w-[600px] ${className} rounded-2xl border-none`}>
          <DialogHeader>
            <DialogTitle className="sr-only">Title</DialogTitle>
          </DialogHeader>
          {children}
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer repositionInputs={false} open={open} onOpenChange={close}>
      <DrawerContent className={`${className}`}>
        <DrawerHeader className="text-left">
          <DrawerTitle className="sr-only">Title</DrawerTitle>
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  );
}

export default ResponsiveModal