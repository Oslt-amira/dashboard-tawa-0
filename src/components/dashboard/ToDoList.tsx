export function ToDoList() {
  const tasks = [
    {
      text: "Get the verification tick by TAWA content factory",
      linkText: "Get Started",
      href: "#",
    },
    {
      text: "Fill your portfolio to level up your chances",
      linkText: "Upload your videos",
      href: "#",
    },
    {
      text: "Get the verification tick by TAWA content factory",
      linkText: "Get Started",
      href: "#",
    },
  ];

  return (
    <div className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-sm w-full">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-1.5 h-4 rounded-full bg-[#FFD9A0]" />
        <h2 className="font-semibold text-lg text-black">To do list</h2>
      </div>

      <ul className="space-y-4">
        {tasks.map((task, idx) => (
          <li key={idx} className="text-sm text-zinc-700">
            <div className="flex justify-between items-start">
              <span className="max-w-[75%]">{task.text}</span>
              <span className="text-xs text-zinc-400 whitespace-nowrap">
                1h
              </span>
            </div>
            <div>
              <span className="text-zinc-600 mr-1">Check</span>
              <a
                href={task.href}
                className="text-sky-600 font-medium hover:underline"
              >
                {task.linkText}
              </a>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
