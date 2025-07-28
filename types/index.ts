
import { Url } from "next/dist/shared/lib/router/router";
import * as React from "react";

export interface NavigationItem {
  id?: string
  title: string
  icon?: React.ReactNode
  href?: Url
  isActive?: boolean
  size?: string
}

export interface NavigationSection {
  id: string
  title?: string
  items: NavigationItem[]
}


export interface FormData {
  title: string
  weight: string | number
  itemWorth: string | number
  description: string
  image: File[] // Always an array, never undefined
  category: string
  condition: string
  specificDate?: Array<{ date: string; timeSlots: string[] }>
  timeSlots?: Array<{ day: string; timeSlots: string[] }>
  province: string
  zipCode: string
  address: string
}
