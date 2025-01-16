import React from "react";
import { Typography } from "../typography";
import { Button } from "../ui/button";
import ImageComponent from "../image-component";

const AssistantHeader = ({
  setOpenChatBox,
}: {
  setOpenChatBox: (value: boolean) => void;
}) => {
  return (
    <div className="flex justify-between items-center py-2 px-8 w-full bg-primary-blue h-16">
      <Typography variant="body1" className="text-neutral-white">
        Assistant
      </Typography>
      <Button
        className=" !p-0 !bg-transparent"
        onClick={() => setOpenChatBox(false)}
      >
        <ImageComponent src="/assets/icons/cross.svg" alt="cross-icon" />
      </Button>
    </div>
  );
};

export default AssistantHeader;
