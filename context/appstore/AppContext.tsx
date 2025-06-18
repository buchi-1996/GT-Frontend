"use client";

import { AddItemData } from "@/lib/schema";
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface AppContextType {
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
  itemListingFormData: Partial<AddItemData>;
  setItemListingFormData: Dispatch<SetStateAction<Partial<AddItemData>>>;

}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: ReactNode }) {
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

  const [itemListingFormData, setItemListingFormData] = useState<Partial<AddItemData>>({
        title: "",
        weight: 0,
        itemWorth: 0,
        description: "",
        image: undefined,
        category: "",
        condition: "",
        specificDate: [],
        timeSlots: [],
        province: "",
        zipCode: "",
        address: "",
    })

    // console.log("Item Listing Form Data:", itemListingFormData);  

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

  const appData = {
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
    itemListingFormData,
    setItemListingFormData
  }


  return (
    <AppContext.Provider value={appData}>
      {children}
    </AppContext.Provider>
  );
}



