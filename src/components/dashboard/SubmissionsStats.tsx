import { Hourglass, Video, AppWindow } from "lucide-react";

const stats = [
  {
    icon: <Video className="xs:w-5 xs:h-5 h-6 w-6 text-white" />,
    count: 30,
    label: "Video Submitted",
  },
  {
    icon: <AppWindow className="xs:w-5 xs:h-5 h-6 w-6 text-white" />,
    count: 25,
    label: "Content Approved",
  },
  {
    icon: <Hourglass className="xs:w-5 xs:h-5 h-6 w-6 text-white" />,
    count: 5,
    label: "Being Processed",
  },
];

export function SubmissionStats() {
  return (
    <div className="bg-[#F9F6FF] shadow-sm  dark:bg-zinc-900/50 dark:border dark:border-zinc-500/30 rounded-2xl flex flex-col xs:flex-row xs:justify-around items-center py-4 px-2 xs:px-4 w-full gap-2">
      {stats.map((item, idx) => (
        <div
          key={idx}
          className="flex flex-col w-full  dark:border-b-zinc-600/50 xs:flex-row items-center justify-center xs:dark:border-r-zinc-600/50  text-center xs:text-left flex-1 min-w-0 py-4 xs:py-1 border-b xs:border-b-0 xs:border-r last:dark:border-b-0 last:border-r-0 border-[#d1d1d8]"
        >
          <div className="bg-[#FF4C82] p-2 rounded-full flex items-center justify-center shrink-0">
            {item.icon}
          </div>
          <div className="flex text-center sm:text-start flex-col sm:flex-row items-center justify-center gap-1 mt-2 xs:mt-0 xs:ml-4">
            <span className="text-3xl  font-bold text-black dark:text-zinc-200 leading-none">
              {item.count}
            </span>
            <span className="text-xs xs:w-min xs:text-wrap text-zinc-500 font-medium leading-none">
              {item.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
