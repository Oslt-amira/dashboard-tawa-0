import { ChevronRight, Info, ArrowDown, ArrowUp } from "lucide-react";

export function MoneyTalksCard() {
  return (
    <div className="bg-white dark:bg-zinc-800 p-6 rounded-2xl shadow-sm w-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-4 rounded-full bg-[#E7D9FF]" />
          <h2 className="font-semibold text-lg text-black">Money Talks</h2>
        </div>
        <button className="text-sm text-zinc-500 flex items-center gap-1">
          More details <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex justify-between items-center">
        {/* Received Amount */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <span className="text-sm text-zinc-500">Received Amount</span>
            <Info className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-3xl font-semibold text-black">300dt</div>
          <div className="flex items-center text-green-600 text-xs font-medium">
            <ArrowUp className="w-4 h-4 mr-1" /> 37.8% this week
          </div>
        </div>

        {/* Divider */}
        <div className="h-12 w-px bg-zinc-200" />

        {/* Pending Amount */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <span className="text-sm text-zinc-500">Pending Amount</span>
            <Info className="w-4 h-4 text-zinc-400" />
          </div>
          <div className="text-3xl font-semibold text-black">200dt</div>
          <div className="flex items-center text-red-600 text-xs font-medium">
            <ArrowDown className="w-4 h-4 mr-1" /> 37.8% this week
          </div>
        </div>
      </div>
    </div>
  );
}
