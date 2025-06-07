"use client";
import { Info, TrendingDown, TrendingUp } from "lucide-react";
import { CountUp } from "./CountUp";

type AmountDisplayProps = {
  label: string;
  amount: number;
  percentage: string;
};

export function AmountDisplay({
  label,
  amount,
  percentage,
}: AmountDisplayProps) {
  const isPositive = !percentage.trim().startsWith("-");

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <div className="flex items-center justify-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
        {label}
        <Info className="w-3.5 h-3.5" />
      </div>{" "}
      <CountUp
        from={0}
        to={amount}
        separator=""
        duration={1}
        className="text-[50px] font-semibold leading-none text-zinc-900 dark:text-white"
      >
        TD
      </CountUp>
      <div className="flex mt-2 items-center text-[11px] font-medium">
        {isPositive ? (
          <TrendingUp className="w-3.5 h-3.5 mr-1.5 text-green-600" />
        ) : (
          <TrendingDown className="w-3.5 h-3.5 mr-1.5 text-red-500" />
        )}
        <span className={isPositive ? "text-green-600" : "text-red-600"}>
          {percentage}
        </span>
        <span className="ml-1 text-zinc-500 dark:text-zinc-400">this week</span>
      </div>
    </div>
  );
}
