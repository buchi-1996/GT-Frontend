"use client";

import { AppContext } from "@/context/appstore/AppContext";
import { UIContext } from "@/context/appstore/UIContext";
import { useContext } from "react";

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppState must be used within a ModalProvider");
  }
  return context;
}


export function useUIState() {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error("useUIState must be used within a ModalProvider");
  }
  return context;
}
