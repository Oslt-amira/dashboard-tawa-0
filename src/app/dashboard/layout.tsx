import { AppSidebar } from "@/components/sidebar/SideBar";
import { SidebarHeaderControls } from "@/components/sidebar/SidebarHeaderControl";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";

import type { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "15vw",
          "--sidebar-width-icon": "3.5vw",
        } as React.CSSProperties
      }
    >
      <AppSidebar />
      <SidebarInset>
        <div className="flex w-full flex-1 flex-col gap-4 rounded-lg ">
          <SidebarHeaderControls />
          {children}
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
