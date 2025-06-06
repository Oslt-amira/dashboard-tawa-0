import { ChevronRight, Info, TrendingDown, TrendingUp } from "lucide-react";
import { AmountDisplay } from "./elements/AmountDisplay";
import { PanelHeader } from "./elements/PanelHeader";

export function MoneyTalksPanel() {
  return (
    <div className="bg-white dark:bg-zinc-900 p-6  rounded-2xl shadow-sm w-full">
      <div className="flex justify-between items-center mb-6">
        <PanelHeader title="Money Talks" color="#E7D9FF" />

        <button className="flex items-center gap-1 px-3 py-1 border text-sm rounded-lg text-zinc-600 dark:text-zinc-300 border-zinc-200 dark:border-zinc-700 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition">
          More details
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      <div className="flex justify-between flex-col xs:flex-row">
        <AmountDisplay
          label="Received Amount"
          amount="300 DT"
          percentage="37.8%"
        />

        <div className="xs:w-px xs:h-16 h-px w-full mx-0 my-4 xs:my-0 bg-zinc-200 dark:bg-zinc-700 xs:mx-4" />

        <AmountDisplay
          label="Pending Amount"
          amount="200 DT"
          percentage="-37.8%"
        />
      </div>
    </div>
  );
}
