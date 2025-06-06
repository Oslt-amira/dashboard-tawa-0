"use client";

import { BellIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { UserAvatar } from "./UserAvatar";

interface UserInfo {
  name: string;
  avatarUrl: string;
  verified: boolean;
  skills: string[];
}

export function DashboardHeader({ user }: { user: UserInfo }) {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full rounded-xl bg-white  dark:bg-zinc-800 px-6 py-4 flex flex-col items-start justify-between shadow-sm">
      <div className="flex w-full py-1 flex-row items-start justify-between">
        <div>
          <div className=" font-spline text-xl text-center flex space-x-0.5  ">
            <span className=" font-semibold ">Hello,</span>
            <span className="font-normal"> {user.name} !</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-zinc-400/60 py-1 ">
            <span>TAWA Verified Skills</span>
            {user.verified && (
              <div className="w-4 h-4 rounded-full bg-green-500 flex items-center justify-center">
                <span className="text-white text-[10px] font-bold">✓</span>
              </div>
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

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="border border-transparent rounded-full    hover:cursor-pointer  text-muted-foreground h-fit   p-2 hover:bg-transparent w-fit justify-center  transition-colors duration-300 hover:text-purple-400 hover-radial-purple"
          >
            {theme === "dark" ? (
              <SunIcon className="h-5 w-5" strokeWidth={1.5} />
            ) : (
              <MoonIcon className="h-5 w-5" strokeWidth={1.5} />
            )}
          </Button>
          <UserAvatar />
        </div>
      </div>

      <div className="mt-3 flex flex-wrap gap-2">
        {user.skills.map((skill) => (
          <span
            key={skill}
            className="bg-[#edecfc] dark:bg-[#41405df5] dark:text-[#7374a7]   text-xs text-[#9496c6]  text-center font-[520] px-3 py-1 rounded-full"
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
