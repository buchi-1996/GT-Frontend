"use client";

import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";

interface AppContextType {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
  modalContent: ReactNode;
  openModal: (content: ReactNode) => void;
  closeModal: () => void;
  sidebarOpen: boolean;
  setSidebarOpen: Dispatch<SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [modalContent, setModalContent] = useState<ReactNode>(null);

  const openModal = (content: ReactNode) => {
    setModalContent(content);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setModalContent(null);
  };



  return (
    <AppContext.Provider value={{ sidebarOpen, setSidebarOpen, isOpen, modalContent, openModal, closeModal, setIsOpen }}>
      {children}
    </AppContext.Provider>
  );
}


