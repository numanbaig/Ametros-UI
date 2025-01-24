import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import ImageComponent from "../image-component/image-component";
import AssistantHeader from "./assistant-header";
import AssistantContent from "./assistant-content";
import AssistantInput from "./assistant-input";

const DashboardAssistant = ({
  setPopup,
}: {
  setPopup: (value: boolean) => void;
}) => {
  const [openChatBox, setOpenChatBox] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");
  return (
    <Popover open={openChatBox} onOpenChange={setOpenChatBox}>
      <PopoverTrigger asChild>
        <Button
          className="!p-0 bg-transparent !shrink-0"
          onClick={() => {
            setOpenChatBox((prev) => !prev);
            setPopup(false);
          }}
        >
          <ImageComponent
            src="/assets/icons/chat-icon.svg"
            className="size-20"
            alt="chat-icon"
          />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="mr-4 sm:mr-9 mb-6 w-[92vw]  sm:w-auto sm:ml-auto rounded-[16px] shadow-assitant border border-customGray-200/50  flex flex-col !z-[9999]">
        <AssistantHeader setOpenChatBox={setOpenChatBox} />
        <div className="relative sm:p-4 h-auto">
          <div className="flex flex-col justify-between flex-1 w-full">
            <AssistantContent />
            <div className="w-full flex justify-center items-center">
              <AssistantInput message={message} setMessage={setMessage} />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DashboardAssistant;
