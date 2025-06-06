import { Info, User, Target, LineChart } from "lucide-react";

export function PerformancePanel() {
  const stats = [
    {
      icon: <User className="w-5 h-5 text-white" />,
      value: "1M",
      label: "Total Reach\nGenerated",
    },
    {
      icon: <Target className="w-5 h-5 text-white" />,
      value: "20K",
      label: "Engaged\nAudience",
    },
    {
      icon: <LineChart className="w-5 h-5 text-white" />,
      value: "3.6 %",
      label: "TAWA\nEng Rate",
    },
  ];

  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm w-full">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-1.5 h-4 rounded-full bg-[#BEE4FF]" />
        <h2 className="font-semibold text-lg text-black">TAWA Performance</h2>
      </div>

      <div className="flex justify-between items-center">
        {stats.map((stat, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center gap-1 text-center"
          >
            <div className="bg-[#BEE4FF] p-3 rounded-full mb-2">
              {stat.icon}
            </div>
            <div className="flex items-center gap-1">
              <span className="text-2xl font-bold text-black">
                {stat.value}
              </span>
              <Info className="w-4 h-4 text-zinc-400" />
            </div>
            <p className="text-xs text-zinc-500 whitespace-pre-line">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
