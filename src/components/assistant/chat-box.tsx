"use client";

import React, { useState } from "react";
import ImageComponent from "../image-component";
import { Button } from "../ui/button";
import { Typography } from "../typography";
import DashboardAssistant from "./assistant";

const DashboardChat = () => {
  const [popUp, setPopup] = useState<boolean>(true);
  return (
    <div className="fixed bottom-7 right-4 sm:!right-8 w-full flex flex-col items-end gap-[18px] z-50">
      {popUp && (
        <div className="relative p-6 flex justify-center items-center bg-neutral-white shadow-custom rounded-[32px] w-[309px] h-16">
          <Typography
            variant="body1"
            className="text-[20px] leading-[21px] font-bold text-primary-blueLight  "
          >
            Do you need help?
          </Typography>
          <Button
            className="absolute top-1/2 -translate-y-1/2 right-[19px] !p-0 !bg-transparent"
            onClick={() => setPopup(false)}
          >
            <ImageComponent src="/assets/icons/cross.svg" alt="cross-icon" />
          </Button>
        </div>
      )}
      {/* <Button
        className="!p-0 bg-transparent"
        onClick={() => setOpenChatBox((prev) => !prev)}
      >
        <ImageComponent
          src="/assets/icons/chat-icon.svg"
          className="size-20"
          alt="chat-icon"
        />
      </Button> */}
      <DashboardAssistant setPopup={setPopup} />
    </div>
  );
};

export default DashboardChat;
