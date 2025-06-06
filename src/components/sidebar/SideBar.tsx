"use client";

import * as React from "react";
import {
  FileHeart,
  LayoutDashboard,
  MailCheck,
  MessageCircleQuestion,
  Settings,
  Wallet,
} from "lucide-react";
import Image from "next/image";

import { NavSecondary } from "./NavSecondary";
import { CollapsibleNav } from "./CollapsibleNav";
import { SideBarSettings } from "./SideBarSettings";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "../ui/sidebar";

const data = {
  CollapsibleNav: [
    {
      title: "Home",
      url: "#",
      icon: LayoutDashboard,
      isActive: true,
      items: [
        { title: "History", url: "#" },
        { title: "Starred", url: "#" },
        { title: "Settings", url: "#" },
      ],
    },
    {
      title: "My Projects",
      url: "#",
      icon: FileHeart,
      items: [
        { title: "Genesis", url: "#" },
        { title: "Explorer", url: "#" },
        { title: "Quantum", url: "#" },
      ],
    },
  ],
  navSecondary: [
    { title: "Tools", url: "#", icon: Settings },
    { title: "Get paid", url: "#", icon: Wallet },
  ],
  navTertiary: [
    { title: "Support", url: "#", icon: MessageCircleQuestion },
    { title: "Contact", url: "#", icon: MailCheck },
  ],
};

export function AppSidebar() {
  const [variant, setVariant] = React.useState<
    "sidebar" | "floating" | "inset"
  >("inset");
  const [collapsible, setCollapsible] = React.useState<"offcanvas" | "icon">(
    "offcanvas"
  );

  return (
    <Sidebar
      variant={variant}
      collapsible={collapsible}
      className="max-w-1/6  "
    >
      <SidebarHeader className="p-3 pb-8 pt-5 flex flex-col items-center justify-center space-y-1">
        <SidebarRail />

        <Image
          src="/Group 2.svg"
          alt="Main"
          width={100}
          height={100}
          unoptimized
        />
        <Image
          src="/Content Factory.svg"
          alt="Main"
          width={80}
          height={80}
          unoptimized
        />
      </SidebarHeader>

      <SidebarContent>
        <CollapsibleNav items={data.CollapsibleNav} />
        <NavSecondary items={data.navSecondary} className="pt-0" />
        <NavSecondary items={data.navTertiary} className="mt-auto " />

        <div className="flex justify-end h-min pr-3 -mt-6 z-20 ">
          <SideBarSettings
            variant={variant}
            collapsible={collapsible}
            onChangeVariant={(val) => setVariant(val)}
            onToggleCollapsible={() =>
              setCollapsible(collapsible === "offcanvas" ? "icon" : "offcanvas")
            }
          />
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
