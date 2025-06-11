"use client"; // Ensure this is a client component

import Modal from "@/components/modal/Modal";
import { AppStateProvider } from "@/context/appstore/AppContext";
import { Toaster } from "@/components/ui/sonner"


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppStateProvider>
            {children}
            <Modal />
            <Toaster position="top-right" richColors />
        </AppStateProvider>
    );
}
