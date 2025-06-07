"use client";
import { Clock4 } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { PanelHeader } from "./elements/PanelHeader";
import { motion } from "framer-motion";

export function NewsCheck() {
  const activities = [
    { message: "You gained 1.2K followers on Instagram", time: "2h ago" },
    { message: "Nike brand deal finalized", time: "5h ago" },
    { message: "New YouTube content approved", time: "1 day ago" },
    { message: "Collaboration request from Adidas", time: "2 days ago" },
    { message: "TikTok engagement rate updated", time: "3 days ago" },
    { message: "Content calendar auto-synced", time: "4 days ago" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm w-full"
    >
      <PanelHeader title="News check" color="#FFD9A0" />
      <ScrollArea className="h-50  py-2 space-y-4">
        {activities.map((activity, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex  flex-col gap-1 items-start justify-center px-1 rounded-md border-b border-stone-400/50 pt-4 pb-2 last:border-b-0"
          >
            <div className="flex items-center gap-2 text-sm text-muted-foreground font-medium">
              <p>{activity.message}</p>
            </div>
            <div className="flex items-center gap-1 text-xs text-stone-400 whitespace-nowrap">
              <Clock4 className="w-4 h-4" strokeWidth={1.25} />
              {activity.time}
            </div>
          </motion.div>
        ))}
      </ScrollArea>
    </motion.div>
  );
}
