"use client";
import { Hourglass, Video, AppWindow } from "lucide-react";
import { CountUp } from "./elements/CountUp";
import { motion } from "framer-motion";

const stats = [
  {
    icon: (
      <Video className=" xs:h-5 xs:w-5 h-6 w-6 text-white" strokeWidth={1} />
    ),
    count: 30,
    label: "Video Submitted",
  },
  {
    icon: (
      <AppWindow className="xs:h-5 xs:w-5 h-6 w-6 text-white" strokeWidth={1} />
    ),
    count: 25,
    label: "Content Approved",
  },
  {
    icon: (
      <Hourglass className="xs:h-5 xs:w-5 h-6 w-6 text-white" strokeWidth={1} />
    ),
    count: 5,
    label: "Being Processed",
  },
];

export function ContentSubmissionPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#F9F6FF] shadow-sm  dark:bg-zinc-900/50 dark:border dark:border-zinc-500/30 rounded-2xl flex flex-col xs:flex-row xs:justify-around items-center p-4 w-full gap-3"
    >
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="flex w-full  
      flex-row items-center xs:items-start sm:items-center xs:justify-center 
           xs:dark:border-r-zinc-600/50  text-center xs:text-left flex-1 min-w-0 py-4 xs:py-1 border-b
          dark:border-b-zinc-600/50   xs:border-b-0 xs:border-r last:border-b-0 last:dark:border-b-0 last:border-r-0 border-[#d1d1d8]"
        >
          <div className="bg-[#FF4C82] p-1.5 rounded-full flex items-center justify-center shrink-0 mx-3.5 ">
            {item.icon}
          </div>
          <div className="flex text-start flex-col items-start sm:flex-row sm:items-center justify-center gap-1 ">
            <CountUp
              from={0}
              to={item.count}
              separator=""
              duration={1}
              className="xs:text-4xl  text-3xl font-bold text-black dark:text-zinc-200 leading-none"
            />

            <span className="text-xs  xs:w-min xs:text-wrap text-zinc-500 font-medium leading-none">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </motion.div>
  );
}
