export function NewsCheck() {
  const items = [
    "New toolbox episode alert, check it out !",
    "New toolbox episode alert, check it out !",
    "New toolbox episode alert, check it out !",
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm w-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-4 rounded-full bg-[#FFD9A0]" />
        <h2 className="font-semibold text-lg text-black">News check</h2>
      </div>

      <ul className="space-y-4">
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
