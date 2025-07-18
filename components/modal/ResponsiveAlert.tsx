"use client"

import React from 'react'
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"


interface ResponsiveAlertProps{
    children: React.ReactNode;
    open?: boolean;
    close?: (open: boolean) => void;
    className?: string;
}

const ResponsiveAlert = ({children, open, close, className}: ResponsiveAlertProps) => {

  return (
    <AlertDialog open={open} onOpenChange={close} >
      <AlertDialogContent className={`sm:max-w-[600px] ${className} rounded-2xl border-none`}>
        <AlertDialogHeader>
          <AlertDialogTitle className="sr-only">Title</AlertDialogTitle>
          
        </AlertDialogHeader>
        {children}
      </AlertDialogContent>
    </AlertDialog>
    
  )
}

export default ResponsiveAlert