"use client"

import { usePathname } from "next/navigation";
import GiverDisputeFlow from "./GiverDisputeFlow";
import ReceiverDisputeFlow from "./ReceiverDisputeFlow";

const DisputeFlowModal = () => {

     const pathname = usePathname();
     const isGiver = pathname.includes("/giver/");
      


    return (
         isGiver ? <GiverDisputeFlow /> : <ReceiverDisputeFlow />
    )
}

export default DisputeFlowModal;