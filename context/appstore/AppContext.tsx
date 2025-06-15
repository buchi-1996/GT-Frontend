"use client";

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
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
  sidebarCollapsed: boolean;
  setSidebarCollapsed: Dispatch<SetStateAction<boolean>>
  progress: number[];
  setProgress: Dispatch<SetStateAction<boolean>>

}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const [modalContent, setModalContent] = useState<ReactNode>(null);
  const [sheetContent, setSheetContent] = useState<ReactNode>(null);
  const [overlay, setOverlay] = useState(false)
  const [progress, setProgress] = useState([20]);

  

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
    setProgress
  }


  return (
    <AppContext.Provider value={appData}>
      {children}
    </AppContext.Provider>
  );
}



