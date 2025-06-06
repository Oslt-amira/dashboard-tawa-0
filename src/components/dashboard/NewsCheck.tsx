import { PanelHeader } from "./elements/PanelHeader";

export function NewsCheck() {
  const items = [
    "New toolbox episode alert, check it out !",
    "New toolbox episode alert, check it out !",
    "New toolbox episode alert, check it out !",
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm w-full">
      <PanelHeader title="News check" color="#FFD9A0" />

      <ul className="space-y-4 py-2">
        {items.map((text, idx) => (
          <li
            key={idx}
            className="text-sm text-zinc-700 flex justify-between items-start"
          >
            <span>{text}</span>
            <span className="text-xs text-zinc-400 whitespace-nowrap">1h</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
