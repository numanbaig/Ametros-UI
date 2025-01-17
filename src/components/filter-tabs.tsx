"use client";

import React, { useState } from "react";
import { Typography } from "./typography";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const tabsArray = [
  { name: "Drafts" },
  { name: "Published" },
  { name: "Historical" },
];

const DashbaordFilterTabs = ({
  title,
  tabs,
}: {
  title?: string;
  tabs?: [{ name: string }];
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const tabsData = tabs ? tabs : tabsArray;

  return (
    <div className="flex items-center gap-x-2">
      <Typography variant="h3" className="font-[300] lg:block hidden leading-9">
        {title ? title : "Assessment"}
      </Typography>
      <div className="flex items-center gap-x-2">
        {tabsData.map((tab, index) => (
          <Button
            key={index}
            onClick={() => setActiveTabIndex(index)}
            className={cn(
              "px-4 py-2 rounded-[37px] text-neutral-black",
              activeTabIndex === index
                ? "bg-primary-blueLight text-primary-darkCyan"
                : "border border-[#B8B8B8] bg-transparent"
            )}
          >
            <Typography variant="body3" className={cn("text-[14px]")}>
              {tab.name}
            </Typography>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default DashbaordFilterTabs;
