"use client"; // Ensure this is a client component

import Modal from "@/components/modal/Modal";
import { ModalProvider } from "@/context/modal/ModalContext";
import { Toaster } from "@/components/ui/sonner"


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <ModalProvider>
            {children}
            <Modal />
            <Toaster  position="top-right" richColors />
        </ModalProvider>
    );
}
