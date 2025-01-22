"use client";

import React from "react";
import DashbaordFilterTabs from "./filter-tabs";
import DashboardCustomButton from "./custom-button";
import { Typography } from "./typography";
import ChangeViewTabs from "./change-view-tabs";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const DashbaordAssessmentHeader = () => {
  const pathname = usePathname();
  const isNewAssessmentPage = pathname.includes("new-assessment");

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center sm:flex-row flex-col  sm:gap-0 gap-y-3 w-full">
        <Typography
          variant="h3"
          className="xs:block hidden font-[700] text-[28px] leading-10 text-[#2BBECF] capitalize"
        >
          {isNewAssessmentPage
            ? `${pathname.split("/")[2].replace("-", " ")}`
            : "Assessment"}
        </Typography>
        <DashboardCustomButton
          className={cn("", {
            "bg-transparent border border-primary-600 text-primary-600 w-[73px] h-[40px]":
              isNewAssessmentPage,
          })}
        >
          {isNewAssessmentPage ? "Save" : "Create Assessment"}
        </DashboardCustomButton>
      </div>
      <div className="flex justify-between items-center gap-3 w-full">
        <DashbaordFilterTabs isNewAssessmentPage={isNewAssessmentPage} />
        {!isNewAssessmentPage && (
          <div className="flex  lg:w-full justify-end">
            <ChangeViewTabs />
          </div>
        )}
      </div>
    </div>
  );
};

export default DashbaordAssessmentHeader;
