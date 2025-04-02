

import { SidebarProvider, SidebarInset } from "../ui/sidebar"
import { AppSidebar } from "./app-sidebar"
import { SiteHeader } from "./site-header"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="[--header-height:calc(--spacing(20))]">
            <SidebarProvider className="flex flex-col">
                <SiteHeader />
                <div className="flex flex-1">
                    <AppSidebar />
                    <SidebarInset>
                        <div className="flex flex-1 flex-col gap-4 p-4">
                            {children}
                        </div>
                    </SidebarInset>
                </div>
            </SidebarProvider>
        </div>

    )
}
