"use client";

import { AppContext } from "@/context/appstore/AppContext";
import { useContext } from "react";

export function useAppState() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
}
