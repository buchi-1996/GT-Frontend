"use client"; // Ensure this is a client component

import Modal from "@/components/modal/Modal";
import { AppStateProvider } from "@/context/appstore/AppContext";
import { Toaster } from "@/components/ui/sonner"
import SheetModal from "@/components/modal/Sheet";


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppStateProvider>
            {children}
            <SheetModal />
            <Modal />
            <Toaster position="top-right" richColors />
        </AppStateProvider>
    );
}
