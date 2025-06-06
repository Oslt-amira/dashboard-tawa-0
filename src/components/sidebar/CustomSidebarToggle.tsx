"use client";
import { PanelLeftIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSidebar } from "../ui/sidebar";

export function CustomSidebarToggle() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleSidebar}
      className="text-zinc-500 hover:text-purple-500"
    >
      <PanelLeftIcon className="w-5 h-5" />
    </Button>
  );
}
