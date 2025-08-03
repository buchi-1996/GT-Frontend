import React, { createContext, Dispatch, ReactNode, SetStateAction, useState } from 'react'

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
    
}

export const UIContext = createContext<UIContextType | undefined>(undefined);

export const UIStateProvider = ({children}: { children: ReactNode }) => {

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

    
    

    const openModal = (content: ReactNode) => {
        setModalContent(content);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setModalContent(null);
    };


    const openSheet = (content: ReactNode) => {
        setSheetContent(content);
        setIsSheetOpen(true);
    }
    const closeSheet = () => {
        setIsSheetOpen(false);
        setSheetContent(null);
        // setOpenCriteria(!openCriteria)
    };

    const openSidebar = () => {
        setSidebarOpen(true)
        setOverlay(true)
        setSidebarCollapsed(false)
    }
    const closeSidebar = () => {
        setSidebarOpen(false)
        setOverlay(false)
    }


    const openAddItem = (content: ReactNode) => {
        setListingsContent(content);
        setIsAddItemDialogOpen(true);
    }
    const closeAddItem = () => {
        setIsAddItemDialogOpen(false);
        setListingsContent(null);
    };


   

    const UIData = {
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
      
    }


    return (
        <UIContext.Provider value={UIData}>
            {children}
        </UIContext.Provider>
    )
}
