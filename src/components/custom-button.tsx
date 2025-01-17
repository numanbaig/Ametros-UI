import React from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import ImageComponent from "./image-component";
import { Typography } from "./typography";

const DashboardCustomButton = ({
  children,
  icon,
  className,
}: {
  children: React.ReactNode;
  icon?: string;
  className?: string;
}) => {
  return (
    <Button
      className={cn(
        "space-x-[10px] px-8 bg-primary-blueLight w-[247px] h-12 rounded-[32px] text-[18px] font-[600] text-primary-darkCyan",
        className
      )}
    >
      {icon && (
        <div>
          <ImageComponent className="size-3" src={icon} alt="angle-down" />
        </div>
      )}
      <Typography variant="body1" className="">
        {children}
      </Typography>
    </Button>
  );
};

export default DashboardCustomButton;
