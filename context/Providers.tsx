"use client"; // Ensure this is a client component

import Modal from "@/components/modal/Modal";
import { AppStateProvider } from "@/context/appstore/AppContext";
import { Toaster } from "@/components/ui/sonner"
import SheetModal from "@/components/modal/Sheet";
import PageDialog from "@/components/modal/PageDialog";
import { UIStateProvider } from "./appstore/UiContext";


export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppStateProvider>
           <UIStateProvider>
             {children}
            <SheetModal />
            <PageDialog />
            <Modal />
            <Toaster position="top-right" richColors />
           </UIStateProvider>
        </AppStateProvider>
    );
}
