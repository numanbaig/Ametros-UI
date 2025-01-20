"use client";

import React, { useState } from "react";
import { Typography } from "./typography";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import Search from "./search";

const tabsArray = [
  { name: "Drafts" },
  { name: "Published" },
  { name: "Historical" },
];

const DashbaordFilterTabs = ({ tabs }: { tabs?: [{ name: string }] }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabsData = tabs ? tabs : tabsArray;

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
      <Search />
    </div>
  );
};

export default DashbaordFilterTabs;
