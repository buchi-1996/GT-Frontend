"use client";

import { AddItemData } from "@/lib/schema";
import { createContext, useState, ReactNode, Dispatch, SetStateAction } from "react";
// Add this interface for listed items



export interface ListedItem {
  id: string
  title: string
  description: string
  images: string[]
  status: "published" | "under-review" | "draft" | "expired"
  expiresIn: string
  category: string
  condition: string
  createdAt: Date
  // Add the missing fields
  weight?: number
  itemWorth?: number
  province?: string
  zipCode?: string
  address?: string
  timeSlots?: Array<{ day: string; timeSlots: string[] }>
  specificDate?: Array<{ date: string; timeSlots: string[] }>
}


interface AppContextType {
  
  itemListingFormData: Partial<AddItemData>;
  setItemListingFormData: Dispatch<SetStateAction<Partial<AddItemData>>>;
  listedItems: ListedItem[]
  setListedItems: Dispatch<SetStateAction<ListedItem[]>>

}



export const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppStateProvider({ children }: { children: ReactNode }) {
  
  const [listedItems, setListedItems] = useState<ListedItem[]>([])
  const [itemListingFormData, setItemListingFormData] = useState<Partial<AddItemData>>({
        title: "",
        weight: 0,
        itemWorth: 0,
        description: "",
        image: [],
        category: "",
        condition: "",
        specificDate: [],
        timeSlots: [],
        province: "",
        zipCode: "",
        address: "",
    })

    // console.log("Item Listing Form Data:", itemListingFormData);  

  

  const appData = {
    itemListingFormData,
    setItemListingFormData,
    listedItems,
    setListedItems
  }


  return (
    <AppContext.Provider value={appData}>
      {children}
    </AppContext.Provider>
  );
}



