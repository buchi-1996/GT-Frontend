
import { Url } from "next/dist/shared/lib/router/router";
import * as React from "react";

export interface NavigationItem {
  id: string
  title: string
  icon: React.ReactNode
  href: Url
  isActive?: boolean
}

export interface NavigationSection {
  id: string
  title?: string
  items: NavigationItem[]
}
