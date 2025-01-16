import { assessmentData, AssessmentType } from "@/constants";
import React from "react";
import { Typography } from "./typography";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import ImageComponent from "./image-component";
import { Separator } from "@radix-ui/react-separator";

const DashboardAssessmentCard = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 md:grid-cols-2 gap-6 w-full">
      {assessmentData.map((assessment) => (
        <div
          className="flex flex-col gap-[16px] shadow-custom p-6 rounded-[16px]"
          key={assessment.id}
        >
          <div className="flex justify-between items-center w-full">
            <Typography
              variant="body3"
              className={cn(
                "text-neutral-black py-0.5 px-2 bg-primary-lightGreen rounded-[37px]",
                {
                  "bg-primary-teal": assessment.type === AssessmentType.Full,
                }
              )}
            >
              {assessment.type}
            </Typography>
            <div className="flex items-center gap-4">
              <Button className="!p-0 bg-transparent">
                <ImageComponent src="/assets/icons/delete.svg" alt="delete" />
              </Button>
              <Button className="!p-0 bg-transparent">
                <ImageComponent src="/assets/icons/edit.svg" alt="edit" />
              </Button>
            </div>
          </div>
          <div className="text-center">
            <Typography
              variant="h5"
              className="leading-[25px] text-neutral-black"
            >
              {assessment.title}
            </Typography>
          </div>
          <div className="mt-6 space-y-4">
            <Separator className="w-full bg-[#C9D6DF] h-[1px]" />
            <div className="grid grid-cols-2 w-full gap-6">
              {assessment.details.map(({ title, value }, index) => (
                <div className="space-y-1" key={index}>
                  <Typography
                    variant="body3"
                    className="leading-[14px] text-neutral-black"
                  >
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-[16px] text-neutral-black"
                  >
                    {value}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DashboardAssessmentCard;
