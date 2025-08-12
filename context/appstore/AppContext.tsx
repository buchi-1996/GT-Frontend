"use client";

import { ListedItem } from "@/lib/schema";
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
// Add this interface for listed items






interface AppContextType {
  
 
  listedItems: ListedItem[]
  setListedItems: Dispatch<SetStateAction<ListedItem[]>>

}



export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: ReactNode }) {
  
  const [listedItems, setListedItems] = useState<ListedItem[]>([])

  console.log("items", listedItems)

  

  const appData = {
    listedItems,
    setListedItems
  }


  return (
    <AppContext.Provider value={appData}>
      {children}
    </AppContext.Provider>
  );
}



