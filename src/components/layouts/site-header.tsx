"use client"

import { Bell, Mail, SidebarIcon, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { useSidebar } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function SiteHeader() {
  const { toggleSidebar } = useSidebar()

  return (
    <header className="bg-background sticky top-0 z-50 flex w-full items-center border-b shadow-xl">
      <div className="flex h-(--header-height) w-full items-center gap-2">
        <Button
          className="h-8 w-8 flex sm:hidden"
          variant="ghost"
          size="icon"
          onClick={toggleSidebar}
        >
          <SidebarIcon />
        </Button>
        <Separator orientation="vertical" className="mr-2 h-4 flex sm:hidden" />
        <div className="flex items-center gap-4 w-full mx-auto px-4">

          <div className="w-(--sidebar-width) flex h-full py-2 px-10" />
          <span className="w-0.5 h-10 bg-stone-300" />
          <div className="flex justify-between items-center w-full px-10">
            <div className="flex flex-col justify-center py-2">
              <p className="text-2xl font-bold">Hi, Brou</p>
              <p className="text-lg text-gray-500">
                <span className="text-2xl mr-2">👋</span>
                Bienvenue sur ton dashboard
              </p>
            </div>
            <div className="flex gap-10 justify-end items-center">
              <div className="flex gap-4">
                <div className="relative">
                  <div className="relative">
                    <Mail />
                    <span className="h-2 w-2 bg-red-500 rounded-full absolute top-0 right-0.5 border border-white" />
                  </div>
                </div>
                <div className="relative">
                  <div className="relative">
                    <Bell />
                    <span className="h-2 w-2 bg-red-500 rounded-full absolute top-0 right-0.5 border border-white" />
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center">
                <Avatar className="w-10 h-10">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>
                    <User className="w-4 h-4" />
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-col py-2">
                  <p className="text-2xl font-bold">Brou</p>
                  <p className="text-lg text-gray-500">
                    Elishama
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}
