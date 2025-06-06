import { ContentSubmissionPanel } from "@/components/dashboard/ContentSubmissionPanel";
import {
  DashboardHeader,
  mockUser,
} from "@/components/dashboard/DashboardHeader";
import { MoneyTalksPanel } from "@/components/dashboard/MoneyTalksPanel";
import { NewsCheck } from "@/components/dashboard/NewsCheck";
import { PerformancePanel } from "@/components/dashboard/PerformancePanel";
import { ToDoList } from "@/components/dashboard/ToDoList";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 px-4 py-6 lg:px-6">
      <DashboardHeader user={mockUser} />

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex flex-col gap-6 flex-1">
          <ContentSubmissionPanel />
          <PerformancePanel />
          <MoneyTalksPanel />
        </div>

        <div className="flex flex-col gap-6 w-full lg:w-[300px] shrink-0">
          <NewsCheck />
          <ToDoList />
        </div>
      </div>
    </div>
  );
}
