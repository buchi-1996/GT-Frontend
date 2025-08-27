"use client"; // Ensure this is a client component

import { AppStateProvider } from "@/context/appstore/AppContext";
import { Toaster } from "@/components/ui/sonner"
import SheetModal from "@/components/modal/Sheet";
import PageDialog from "@/components/modal/PageDialog";
import { UIStateProvider } from "./appstore/UIContext";
import VerifyIdModal from "@/components/shared/VerifyId";
import AllBadges from "@/components/shared/AllBadges";
import AddItemModal from "@/components/multistep-form/AddItemModal";
import UnmatchModalSequence from "@/components/shared/UnmatchModalSequence";
import GiverDisputeFlow from "@/components/shared/dispute/GiverDisputeFlow";


const AppModals = () => {

    return (
        <>
            <SheetModal />
            <PageDialog />
            <VerifyIdModal />
            <AllBadges />
            <AddItemModal />
            <UnmatchModalSequence />
            <GiverDisputeFlow />
        </>
    )
}

export default function Providers({ children }: { children: React.ReactNode }) {
    return (
        <AppStateProvider>
            <UIStateProvider>
                {children}
                <AppModals />
                <Toaster position="top-right" richColors />
            </UIStateProvider>
        </AppStateProvider>
    );
}
