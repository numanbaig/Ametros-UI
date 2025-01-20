import React from "react";
import DashbaordFilterTabs from "./filter-tabs";
import DashboardCustomButton from "./custom-button";
import { Typography } from "./typography";
import ChangeViewTabs from "./change-view-tabs";

const DashbaordAssessmentHeader = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center sm:flex-row flex-col  sm:gap-0 gap-y-3 w-full">
        <Typography
          variant="h3"
          className="lg:block hidden font-[700] text-[28px] leading-10 text-[#2BBECF]"
        >
          {"Assessment"}
        </Typography>
        <DashboardCustomButton className="sm">
          Create Assessment
        </DashboardCustomButton>
      </div>
      <div className="flex justify-between items-center sm:gap-0 gap-y-3 w-full">
        <DashbaordFilterTabs />
        <div className="md:block hidden">
          <ChangeViewTabs />
        </div>
      </div>
    </div>
  );
};

export default DashbaordAssessmentHeader;
