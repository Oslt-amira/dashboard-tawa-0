"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Settings2 } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  variant: "sidebar" | "floating" | "inset";
  collapsible: "offcanvas" | "icon";
  onChangeVariant: (val: "sidebar" | "floating" | "inset") => void;
  onToggleCollapsible: () => void;
};

export function SideBarSettings({
  variant,
  collapsible,
  onChangeVariant,
  onToggleCollapsible,
}: Props) {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <button className="p-2 rounded-md hover:bg-muted transition-colors text-muted-foreground">
          <Settings2 className="w-4 h-4" />
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="start"
        sideOffset={2}
        className="w-50 space-y-3 rounded-xl"
        side="left"
      >
        <h4 className="text-xs  text-center font-light text-muted-foreground mb-1 border-b border-b-zinc-400 pb-2">
          Sidebar Settings
        </h4>

        <div className="space-y-2">
          <span className="text-xs text-muted-foreground">Variant</span>
          {(["sidebar", "floating", "inset"] as const).map((val) => (
            <label
              key={val}
              className={cn(
                "flex items-center space-x-2 cursor-pointer text-sm hover:text-foreground transition-colors",
                val === variant && "font-medium"
              )}
            >
              <Checkbox
                checked={variant === val}
                onCheckedChange={() => onChangeVariant(val)}
              />
              <span className="capitalize">{val}</span>
            </label>
          ))}
        </div>

        <div className="space-y-1 pt-1">
          <span className="text-xs text-muted-foreground">Collapsible</span>
          <label className="flex items-center space-x-2 cursor-pointer text-sm hover:text-foreground transition-colors">
            <Checkbox
              checked={collapsible === "icon"}
              onCheckedChange={onToggleCollapsible}
            />
            <span>Icon mode</span>
          </label>
        </div>
      </PopoverContent>
    </Popover>
  );
}
