import * as React from "react"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
export function NavSecondary({
  items,
  ...props
}: {
  items: {
    title: string
    url: string
    icon: React.ElementType
  }[]
} & React.ComponentPropsWithoutRef<typeof SidebarGroup>) {
  const pathname = usePathname()
  return (
    <SidebarGroup className="px-0" {...props}>
      <SidebarGroupContent>
        <SidebarMenu className="py-2">
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className={"relative group/nav-secondary pl-5 gap-3 rounded-none"}
                asChild
                size="lg"
              >
                <Link href={item.url} className="flex items-center">
                  <item.icon
                    className="size-6"
                    pathClassName={cn("group-hover/nav-secondary:stroke-primary transition-colors duration-300",
                      {
                        "stroke-primary": pathname === item.url,
                      }
                    )}
                  />
                  <span className={cn("text-base group-hover/nav-secondary:text-primary",
                    {
                      "text-primary": pathname === item.url,
                    }
                  )}>
                    {item.title}
                  </span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
