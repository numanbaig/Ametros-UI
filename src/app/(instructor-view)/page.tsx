import DashboardAssessmentCard from "@/components/assessment-card";
import DashboardCustomButton from "@/components/custom-button";
import DashbaordFilterTabs from "@/components/filter-tabs";

export default function Home() {
  return (
    <div className="space-y-6 w-full">
      <div className="flex justify-between items-center sm:flex-row flex-col  sm:gap-0 gap-y-3 w-full">
        <DashbaordFilterTabs />
        <DashboardCustomButton icon="/assets/icons/plus.svg">
          Create Assessment
        </DashboardCustomButton>
      </div>
      <DashboardAssessmentCard />
    </div>
  );
}
