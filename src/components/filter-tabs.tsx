/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { Typography } from "./typography";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Search from "./search";
import { usePathname } from "next/navigation";

const DashbaordFilterTabs = ({
  isNewAssessmentPage,
}: {
  isNewAssessmentPage?: boolean;
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const pathname = usePathname();

  const tabsArray = [
    { name: "Drafts" },
    { name: "Published" },
    { name: "Historical" },
  ];
  const newAssessmentsTabsArray = [
    { name: "Overview" },
    { name: "Narrative" },
    { name: "Rubric" },
    { name: "Rubric" },
    { name: "Test" },
  ];

  const tabsData = isNewAssessmentPage ? newAssessmentsTabsArray : tabsArray;

  return (
    <div className="flex sm:justify-start justify-between items-center gap-x-2 w-full">
      <div className="flex items-center gap-x-2">
        {tabsData.map((tab, index) => (
          <Button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={cn(
              "px-4 py-2 rounded-[8px] text-[#1D818C]",
              activeTabIndex === index
                ? "bg-primary-100 "
                : "border border-customGray-300 bg-transparent"
            )}
          >
            <Typography variant="body3" className={cn("text-[14px]")}>
              {tab.name}
            </Typography>
          </Button>
        ))}
      </div>
      {!isNewAssessmentPage && <Search />}
    </div>
  );
};

export default DashbaordFilterTabs;
