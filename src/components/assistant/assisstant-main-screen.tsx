/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import ImageComponent from "../image-component";
import { Typography } from "../typography";

const AssistantMainScreen = ({ chatType }: { chatType: any }) => {
  console.log(chatType);
  return (
    <div className="space-y-4">
      <div className="flex items-start gap-x-2 bg-customGray-100 rounded-[8px] p-3 w-fit">
        <ImageComponent
          className="size-4"
          src="/assets/icons/assisstant-icon.svg"
          alt="assisstant-icon"
        />
        <Typography
          variant="body1"
          className="text-[14px] leading-[21px] text-neutral-black"
        >
          {chatType.type}
        </Typography>
      </div>
      <div className="flex items-start gap-x-2 bg-customGray-100 rounded-[8px] p-3 w-fit">
        <ImageComponent
          className="size-4"
          src="/assets/icons/assisstant-icon.svg"
          alt="assisstant-icon"
        />
        <Typography
          variant="body1"
          className="text-[14px] leading-[21px] text-neutral-black"
        >
          {chatType.builder}
        </Typography>
      </div>
      <div className="flex justify-center items-center w-full">
        <div className="!w-[32px] h-auto" />
        <div className="bg-primary-50 p-3 rounded-[8px]">
          <Typography
            variant="body1"
            className="text-[14px] leading-[21px] text-neutral-black"
          >
            CommunicationFirst-Year UndergraduateMarketing Strategy in Digital
            MediaThe marketing strategy in digital media focuses on leveraging
            platforms like social media, search engines, and email to reach and
            engage target audiences. It involves creating tailored content,
            utilizing analytics to track performance, and optimizing campaigns
            to maximize ROI. Additionally, it incorporates tools like SEO, paid
            ads, and influencer partnerships to amplify brand visibility and
            drive conversions.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default AssistantMainScreen;
