type PanelHeaderProps = {
  title: string;
  color: string; 
};

export function PanelHeader({ title, color }: PanelHeaderProps) {
  return (
    <div className="flex items-center gap-2 ">
      <div className="w-2.5 h-6 rounded-sm" style={{ backgroundColor: color }} />
      <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
        {title}
      </h2>
    </div>
  );
}
