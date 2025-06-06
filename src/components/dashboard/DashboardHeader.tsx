"use client";

import { BadgeCheck, BellIcon, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { UserAvatar } from "./elements/UserAvatar";
interface UserInfo {
  name: string;
  avatarUrl: string;
  verified: boolean;
  skills: string[];
}

export function DashboardHeader({ user }: { user: UserInfo }) {
  return (
    <div className="w-full rounded-xl bg-white  dark:bg-zinc-900  px-6 py-4 flex flex-col items-start justify-between shadow-sm">
      <div className="flex w-full py-1 flex-row items-start justify-between">
        <div>
          <div className=" font-spline text-xl text-center flex space-x-0.5  ">
            <span className=" font-semibold ">Hello,</span>
            <span className="font-normal"> {user.name} !</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-400/60 py-1 ">
            <span>TAWA Verified Skills</span>
            {user.verified && (
              <motion.div
                className=" text-white flex items-center justify-center"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatDelay: 3,
                }}
              >
                <BadgeCheck
                  strokeWidth={1.25}
                  absoluteStrokeWidth
                  className="bg-green-500 rounded-full h-5 w-5 p-0.5"
                />
              </motion.div>
            )}
          </div>
        </div>

        <div className="flex ">
          <Button
            variant="ghost"
            size="icon"
            className="relative border border-transparent rounded-full text-muted-foreground h-fit w-fit p-2 mx-1 justify-center hover:cursor-pointer transition-colors duration-300 hover:text-purple-400 hover-radial-purple hover:bg-transparent"
          >
            <BellIcon className="h-5 w-5" strokeWidth={1.5} />

            <span className="absolute -top-1 -right-1 bg-black dark:bg-stone-200 dark:text-black text-white text-[8px] font-medium px-1 py-[1px] rounded-full shadow-sm">
              4
            </span>
          </Button>
          <UserAvatar />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {user.skills.map((skill) => (
          <span
            key={skill}
            className="bg-[#edecfc] dark:bg-zinc-900/50 dark:border dark:border-zinc-500/30 dark:text-[#545564]   text-xs text-[#9496c6] 
             text-center font-medium px-3 py-1 rounded-full"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export const mockUser: UserInfo = {
  name: "Eya Yakoubi",
  avatarUrl: "/avatar.jpg",
  verified: true,
  skills: [
    "Creative",
    "Brief Compliance",
    "Great Storytelling",
    "Production Quality",
  ],
};
