import React from "react";
import { Button } from "../ui/button";
import ImageComponent from "../image-component";
import { Typography } from "../typography";

const AssistantStartContent = () => {
  return (
    <div className="space-y-4 w-full">
      <Button className="p-[10px] h-[68px] w-full flex items-center justify-start gap-[10px] rounded-[8px] bg-[#EEF7FF]">
        <ImageComponent
          // className="w-[14px] h-[18px]"
          src="/assets/icons/paper-tick.svg"
          alt="chatbot-icons"
        />
        <Typography variant="body1" className="font-bold text-primary-blue">
          Create Assessment
        </Typography>
      </Button>
      <Button className="p-[10px] h-[68px] w-full flex items-center justify-start gap-[10px] rounded-[8px] bg-[#EEF7FF]">
        <ImageComponent
          // className="w-[14px] h-[18px]"
          src="/assets/icons/bulb.svg"
          alt="bulb-icons"
        />
        <Typography variant="body1" className="font-bold text-primary-blue">
          Other
        </Typography>
      </Button>
    </div>
  );
};

export default AssistantStartContent;
