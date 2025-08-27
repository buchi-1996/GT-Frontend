import React, { createContext, Dispatch, ReactNode, SetStateAction, useCallback, useEffect, useMemo, useState } from 'react'

interface UIContextType {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>
    isSheetOpen: boolean;
    overlay: boolean;
    setOverlay: Dispatch<SetStateAction<boolean>>
    setIsSheetOpen: Dispatch<SetStateAction<boolean>>
    modalContent: ReactNode;
    openModal: (content: ReactNode) => void;
    sheetContent: ReactNode;
    closeModal: () => void;
    openSheet: (content: ReactNode) => void;
    closeSheet: () => void;
    openSidebar: () => void;
    closeSidebar: () => void;
    openAddItem: (content: ReactNode) => void;
    closeAddItem: () => void;
    sidebarOpen: boolean;
    setSidebarOpen: Dispatch<SetStateAction<boolean>>
    sidebarCollapsed: boolean;
    setSidebarCollapsed: Dispatch<SetStateAction<boolean>>
    progress: number[];
    setProgress: Dispatch<SetStateAction<number[]>>
    listingsContent?: ReactNode;
    isAddItemDialogOpen?: boolean;
    setIsAddItemDialogOpen?: Dispatch<SetStateAction<boolean>>;
    openCriteria: boolean;
    setOpenCriteria: Dispatch<SetStateAction<boolean>>
    verificationModalOpen: boolean;
    setVerificationModalOpen: Dispatch<SetStateAction<boolean>>
    viewAllBadgeModal: boolean;
    setViewAllBadgeModal: Dispatch<SetStateAction<boolean>>
    itemListingModalOpen: boolean;
    setItemListingModalOpen: Dispatch<SetStateAction<boolean>>
    isEditMode: boolean;
    setIsEditMode: Dispatch<SetStateAction<boolean>>
    isUnmatchedModal: boolean;
    setIsUnmatchedModal: Dispatch<SetStateAction<boolean>>
    giverDisputeModal: boolean;
    setGiverDisputeModal: Dispatch<SetStateAction<boolean>>
    giveReasonModal: boolean;
    setReasonModal: Dispatch<SetStateAction<boolean>>
    disputeModalOpen: boolean;
    setDisputeModalOpen: Dispatch<SetStateAction<boolean>>
    ratingModal: boolean;
    setRatingModal: Dispatch<SetStateAction<boolean>>

}

export const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIStateProvider = ({ children }: { children: ReactNode }) => {

    const [isOpen, setIsOpen] = useState(false);
    const [isSheetOpen, setIsSheetOpen] = useState(false);
    const [sidebarOpen, setSidebarOpen] = useState(false)
    const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
    const [modalContent, setModalContent] = useState<ReactNode>(null);
    const [sheetContent, setSheetContent] = useState<ReactNode>(null);
    const [listingsContent, setListingsContent] = useState<ReactNode>(null);
    const [isAddItemDialogOpen, setIsAddItemDialogOpen] = useState(false);
    // const [isEditItemDialogOpen, setIsEditItemDialogOpen] = useState(false);
    const [overlay, setOverlay] = useState(false)
    const [progress, setProgress] = useState([20]);
    const [openCriteria, setOpenCriteria] = useState(true)
    const [verificationModalOpen, setVerificationModalOpen] = useState(false)
    const [viewAllBadgeModal, setViewAllBadgeModal] = useState(false)
    const [isUnmatchedModal, setIsUnmatchedModal] = useState(false)

    const [itemListingModalOpen, setItemListingModalOpen] = useState(false)
    const [isEditMode, setIsEditMode] = useState(false)
    const [giverDisputeModal, setGiverDisputeModal] = useState(false)
    const [giveReasonModal, setReasonModal] = useState(false)
    const [disputeModalOpen, setDisputeModalOpen] = useState(false)
    const [ratingModal, setRatingModal] = useState(false)


    const openModal = useCallback((content: ReactNode) => {
        setModalContent(content);
        setIsOpen(true);
    }, []);

    const closeModal = useCallback(() => {
        setIsOpen(false);
        setModalContent(null);
    }, []);

    const openSheet = useCallback((content: ReactNode) => {
        setSheetContent(content);
        setIsSheetOpen(true);
    }, []);

    const closeSheet = useCallback(() => {
        setIsSheetOpen(false);
        setSheetContent(null);
    }, []);

    const openSidebar = useCallback(() => {
        setSidebarOpen(true)
        setOverlay(true)
        setSidebarCollapsed(false)
    }, []);

    const closeSidebar = useCallback(() => {
        setSidebarOpen(false)
        setOverlay(false)
    }, []);

    const openAddItem = useCallback((content: ReactNode) => {
        setListingsContent(content);
        setIsAddItemDialogOpen(true);
    }, []);



    const closeAddItem = useCallback(() => {
        setIsAddItemDialogOpen(false);
        setListingsContent(null);
    }, []);



    const UIData = useMemo(()   => ({
        isOpen,
        setIsOpen,
        modalContent,
        openModal,
        closeModal,
        sidebarOpen,
        setSidebarOpen,
        sidebarCollapsed,
        setSidebarCollapsed,
        isSheetOpen,
        setIsSheetOpen,
        sheetContent,
        openSheet,
        closeSheet,
        openSidebar,
        closeSidebar,
        overlay,
        setOverlay,
        progress,
        setProgress,
        listingsContent,
        isAddItemDialogOpen,
        setIsAddItemDialogOpen,
        openAddItem,
        closeAddItem,
        openCriteria,
        setOpenCriteria,
        verificationModalOpen,
        setVerificationModalOpen,
        viewAllBadgeModal,
        setViewAllBadgeModal,
        itemListingModalOpen,
        setItemListingModalOpen,
        isEditMode,
        setIsEditMode,
        isUnmatchedModal,
        setIsUnmatchedModal,
        giverDisputeModal,
        setGiverDisputeModal,
        giveReasonModal,
        setReasonModal,
        disputeModalOpen,
      setDisputeModalOpen,
      ratingModal,
      setRatingModal  

    }), [isOpen,
        setIsOpen,
        modalContent,
        openModal,
        closeModal,
        sidebarOpen,
        setSidebarOpen,
        sidebarCollapsed,
        setSidebarCollapsed,
        isSheetOpen,
        setIsSheetOpen,
        sheetContent,
        openSheet,
        closeSheet,
        openSidebar,
        closeSidebar,
        overlay,
        setOverlay,
        progress,
        setProgress,
        listingsContent,
        isAddItemDialogOpen,
        setIsAddItemDialogOpen,
        openAddItem,
        closeAddItem,
        openCriteria,
        setOpenCriteria,
        verificationModalOpen,
        setVerificationModalOpen,
        viewAllBadgeModal,
        setViewAllBadgeModal,
        itemListingModalOpen,
        setIsAddItemDialogOpen,
        isEditMode,
        setIsEditMode,
        isUnmatchedModal,
        setIsUnmatchedModal,
        giverDisputeModal,
        setGiverDisputeModal,
        giveReasonModal,
        setReasonModal,
        disputeModalOpen,
        setDisputeModalOpen,
        ratingModal,
        setRatingModal

    ])


    return (
        <UIContext.Provider value={UIData}>
            {children}
        </UIContext.Provider>
    )
}
