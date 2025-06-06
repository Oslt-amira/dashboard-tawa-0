"use client";

import { useTheme } from "next-themes";
import { SunIcon, MoonIcon, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/sidebar/SearchBar";
import { CustomSidebarToggle } from "@/components/sidebar/CustomSidebarToggle";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SidebarTrigger } from "../ui/sidebar";

export function SidebarHeaderControls() {
  const { theme, setTheme } = useTheme();
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="relative w-full flex flex-col items-center">
      <motion.button
        onClick={() => setIsVisible(!isVisible)}
        className="absolute z-40 p-1 text-muted-foreground hover:text-purple-400 transition-colors"
        style={{
          top: isVisible ? "2.25rem" : "0rem",
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          initial={{ rotate: 0 }}
          animate={{ rotate: isVisible ? 0 : 180 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronUp className="w-4 h-4" />
        </motion.div>
      </motion.button>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="flex flex-row items-center justify-between gap-4 px-2 w-full "
          >
            <SidebarTrigger>
              <CustomSidebarToggle />
            </SidebarTrigger>
            <SearchBar />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="rounded-full text-muted-foreground p-2 w-fit h-fit justify-center transition-colors duration-300 hover:text-purple-400 hover:bg-transparent"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" strokeWidth={1.5} />
              ) : (
                <MoonIcon className="h-5 w-5" strokeWidth={1.5} />
              )}
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
