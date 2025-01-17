import React, { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import ImageComponent from "../image-component";
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
      <PopoverContent className="mr-7 sm:mr-9 mb-6 sm:w-[431px] w-[90vw] ml-auto rounded-[16px] shadow-custom border-none p-0 overflow-hidden flex flex-col">
        <AssistantHeader setOpenChatBox={setOpenChatBox} />
        <div className="relative p-4 min-h-[333px] max-h-[687px]">
          <div className="flex flex-col flex-1 w-full">
            <AssistantContent />
            <div className="w-full absolute bottom-4 left-0 z-[999999] flex justify-center items-center">
              <AssistantInput message={message} setMessage={setMessage} />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default DashboardAssistant;
