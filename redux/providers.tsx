"use client"

import { Provider } from "react-redux";
import { ReactNode } from "react";
import store from "../redux/store";
import SheetModal from "@/components/modal/Sheet";
import { Toaster } from "@/components/ui/sonner";
import VerifyIdModal from "@/components/shared/VerifyId";
import AllBadges from "@/components/shared/AllBadges";
import UnmatchModalSequence from "@/components/shared/UnmatchModalSequence";
import Review from "@/components/shared/Review";
import AddItemModal from "@/components/multistep-form/AddItemModal";
import GiverDisputeFlow from "@/components/shared/dispute/GiverDisputeFlow";

const AppModals = () => {

    return (
        <>
            <SheetModal />
            <VerifyIdModal />
            <AllBadges />
            <UnmatchModalSequence />
            <Review />
            <AddItemModal />
            <GiverDisputeFlow />
        </>
    )
}
 
function Providers({ children }: { children: ReactNode }) {
  return <Provider store={store}>
            {children}
            <AppModals />
            <Toaster position="top-right" richColors />
        </Provider>;
}
 
export default Providers;