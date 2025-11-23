import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import { ReactNode } from 'react';

interface ModalSliceState {
    isSheetOpen: boolean,
    sheetContent: ReactNode,
    isCriteriaOpen: boolean,
    allBadgeModalOpen: boolean,
    unmatchModalOpen: boolean,
    acceptReceiverModalOpen: boolean,
    verificationModalOpen: boolean,
    verifyIdInProgressModalOpen: boolean,
    itemListingModalOpen: boolean,
    rating: {
        ratingModalOpen: boolean,
        currentRatingItemId: number | null
    }
    profile: {
        profilePreviewModalOpen: boolean,
        currentProfileId: number | null,
    },
    dispute: {
        disputeRaisedModalOpen: boolean,
        disputeReasonModalOpen: boolean,
        counterDisputeModalOpen: boolean,
        giverDisputeRaisedModalOpen?: boolean,
        giverDisputeReasonModalOpen?: boolean,
        giverCounterDisputeModalOpen?: boolean,
    }


}

const initialState: ModalSliceState =  {
    isSheetOpen: false,
    sheetContent: null,
    isCriteriaOpen: true,
    allBadgeModalOpen: false,
    unmatchModalOpen: false,
    acceptReceiverModalOpen: false,
    verificationModalOpen: false,
    verifyIdInProgressModalOpen: false,
    itemListingModalOpen: false,
    rating: {
        ratingModalOpen: false,
        currentRatingItemId: null
    },
    profile: {
        profilePreviewModalOpen: false,
        currentProfileId: null,
    },

    dispute: {
        disputeRaisedModalOpen: false,
        disputeReasonModalOpen: false,
        counterDisputeModalOpen: false,
        giverDisputeRaisedModalOpen: false,
        giverDisputeReasonModalOpen: false,
        giverCounterDisputeModalOpen: false,
    }


}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        openSheet: (state, action: PayloadAction<ReactNode>) => {
            state.isSheetOpen = true;
            state.sheetContent = action.payload;
        },
        closeSheet: (state) => {
            state.isSheetOpen = false;
            state.sheetContent = null;
        },
        showVerificationModal: (state, action: PayloadAction<boolean>) => {
            state.verificationModalOpen = action.payload;
        },
        showAllBadgeModal: (state, action: PayloadAction<boolean>) => {
            state.allBadgeModalOpen = action.payload;
        },
        showUnmatchModal: (state, action: PayloadAction<boolean>) => {
            state.unmatchModalOpen = action.payload;
        },
        showAcceptReceiverModal: (state, action: PayloadAction<boolean>) => {
            state.acceptReceiverModalOpen = action.payload;
        },
        showCriteriaModal: (state, action: PayloadAction<boolean>) => {
            state.isCriteriaOpen = action.payload;
        },
        showReceiverPreviewModal: (state, action: PayloadAction<boolean>) => {
            state.profile.profilePreviewModalOpen = action.payload;
        },

        setCurrentProfileId: (state,  action: PayloadAction<number | null>) => {
            state.profile.currentProfileId = action.payload
        },

        showRatingModal: (state, action: PayloadAction<boolean>) => {
            state.rating.ratingModalOpen = action.payload;
        },
        setCurrentRatingItemId: (state, action: PayloadAction<number | null>) => {
            state.rating.currentRatingItemId = action.payload;
        },

        showVerifyIdInProgressModal: (state, action: PayloadAction<boolean>) => {
            state.verifyIdInProgressModalOpen = action.payload;
        },
        showItemListingModal: (state, action: PayloadAction<boolean>) => {
            state.itemListingModalOpen = action.payload;
        },

        showDisputeRaisedModal: (state, action: PayloadAction<boolean>) => {
            state.dispute.disputeRaisedModalOpen = action.payload;
        },
        
        showDisputeReasonModal: (state, action: PayloadAction<boolean>) => {
            state.dispute.disputeReasonModalOpen = action.payload;
        },
        
        showCounterDisputeModal: (state, action: PayloadAction<boolean>) => {
            state.dispute.counterDisputeModalOpen = action.payload;
        },
        
        showGiverDisputeRaisedModal: (state, action: PayloadAction<boolean>) => {
            state.dispute.giverDisputeRaisedModalOpen = action.payload;
        },
        showGiverDisputeReasonModal: (state, action: PayloadAction<boolean>) => {
            state.dispute.giverDisputeReasonModalOpen = action.payload;
        },
        showGiverCounterDisputeModal: (state, action: PayloadAction<boolean>) => {
            state.dispute.giverCounterDisputeModalOpen = action.payload;
        }


    },
})  

export const 
{ 
    openSheet, 
    closeSheet, 
    showVerificationModal, 
    showAllBadgeModal, 
    showUnmatchModal, 
    showAcceptReceiverModal, 
    showCriteriaModal,
    showReceiverPreviewModal,
    setCurrentProfileId,    
    showRatingModal,
    showVerifyIdInProgressModal,
    showItemListingModal,
    showDisputeRaisedModal,
    showDisputeReasonModal,
    showCounterDisputeModal,
    showGiverCounterDisputeModal,
    showGiverDisputeRaisedModal,
    showGiverDisputeReasonModal,

} = modalSlice.actions

export default modalSlice.reducer