import { Hourglass, Video, AppWindow } from "lucide-react";

const stats = [
  {
    icon: <Video className="sm:w-5 sm:h-5 h-8 w-8 text-white" />,
    count: 30,
    label: "Video Submitted",
  },
  {
    icon: <AppWindow className="sm:w-5 sm:h-5 h-8 w-8 text-white" />,
    count: 25,
    label: "Content Approved",
  },
  {
    icon: <Hourglass className="sm:w-5 sm:h-5 h-8 w-8 text-white" />,
    count: 5,
    label: "Being Processed",
  },
];

export function SubmissionStats() {
  return (
    <div className="p-4 bg-white rounded-2xl shadow-sm w-full">
      <div className="bg-[#F9F6FF] rounded-2xl flex flex-col sm:flex-row items-center justify-between flex-1 sm:px-4 py-4 w-full">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="flex  py-4 sm:py-0 xs:bg-red-100
            flex-row  items-center 
            justify-between w-full 
            sm:w-[200px] h-auto rounded-lg 
            sm:rounded-none sm:border-r 
            last:border-0 border-[#E4E4E7] 
            sm:border-b-0 border-b"
          >
            <div className="flex  flex-col sm:flex-row items-center  justify-evenly gap-4 sm:px-4 py-3 sm:justify-center w-full sm:w-auto">
              <div className="p-2 rounded-full flex items-center justify-center shrink-0">
                {item.icon}
              </div>

              <div className="flex flex-col sm:flex-row text-center items-center justify-center gap-1 sm:text-left">
                <span className="text-4xl font-bold text-black leading-none">
                  {item.count}
                </span>
                <span className="sm:w-min text-sm text-zinc-500 font-medium leading-none">
                  {item.label}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
