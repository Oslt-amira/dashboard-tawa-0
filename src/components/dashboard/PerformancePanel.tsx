import {
  Info,
  User,
  Target,
  LineChart,
  Users,
  ChevronRight,
} from "lucide-react";
import { PanelHeader } from "./elements/PanelHeader";

export function PerformancePanel() {
  const stats = [
    {
      icon: (
        <Users
          className="xs:h-5 xs:w-5 h-6 w-6 text-white"
          strokeWidth={1.75}
        />
      ),
      value: "1M",
      label: "Total Reach\nGenerated",
    },
    {
      icon: (
        <Target
          className="xs:h-5 xs:w-5 h-6 w-6 text-white"
          strokeWidth={1.5}
        />
      ),
      value: "20K",
      label: "Engaged\nAudience",
    },
    {
      icon: (
        <LineChart
          className="xs:h-5 xs:w-5 h-6 w-6 text-white"
          strokeWidth={1.75}
        />
      ),
      value: "3.6%",
      label: "TAWA\nEng Rate",
    },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm w-full">
      <div className="flex justify-between items-center mb-6">
        <PanelHeader title="TAWA Performance" color="#BEE4FF" />
        <button className="flex items-center gap-1 px-3 py-1 border text-sm rounded-lg text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
          More Info
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="flex flex-col xs:flex-row xs:justify-between  items-start justify-start  sm:items-center sm:px-8  ">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex items-center xs:items-start  gap-4  p-2"
          >
            <div className="bg-[#B1E5FC] p-1.5 flex items-center justify-center rounded-full mt-1 shrink-0">
              {stat.icon}
            </div>
            <div className="flex flex-col  ">
              <span className="flex xs:text-4xl text-3xl font-bold text-zinc-900 dark:text-white xs:pb-2 shrink-0">
                {stat.value}
              </span>

              <span className=" xs:whitespace-pre-line leading-none shrink-0 text-xs text-zinc-500 dark:text-zinc-400 ">
                {stat.label}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
