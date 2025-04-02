"use client"

import * as React from "react"
import { NavSecondary } from "@/components/layouts/nav-secondary"
import {
  Sidebar,
  SidebarContent,
} from "@/components/ui/sidebar"
import { AccountIcon, ArrowIcon, CardsIcon, ExitIcon, LayoutGridIcon, ProfileIcon, TransactionIcon, UmbrellaIcon } from "../icons"
import { NavMain } from "@/components/layouts/nav-main"
const navItems = {
  main: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: LayoutGridIcon,
    },
    {
      title: "Mes comptes",
      url: "/accounts",
      icon: AccountIcon,
    },
    {
      title: "Mes assurances",
      url: "/insurance",
      icon: UmbrellaIcon,
    },
    {
      title: "Mes cartes",
      url: "/cards",
      icon: CardsIcon,
    },
    {
      title: "Finances personnelles",
      url: "/personal-finance",
      icon: ArrowIcon,
    },
    {
      title: "Devises et échanges",
      url: "/currencies",
      icon: TransactionIcon,
    }
  ],
  secondary: [
    {
      title: "Profil",
      url: "/profile",
      icon: ProfileIcon,
    },
    {
      title: "Déconnexion",
      url: "/logout",
      icon: ExitIcon,
    }
  ]
}


export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar
      className="top-(--header-height) h-[calc(100svh-var(--header-height))]!"
      {...props}
    >
      <SidebarContent>
        <NavMain items={navItems.main} />
        <NavSecondary items={navItems.secondary} className="mt-auto" />
      </SidebarContent>
    </Sidebar>
  )
}
