import React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Typography } from "./typography";
import ImageComponent from "./image-component";
const DashboardUserProfileDrawer = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="border-none bg-transparent hover:bg-transparent outline-none flex items-center gap-x-2 !ring-0 !border-0 ring-offset-0 !focus-visible:ring-offset-0 !focus-within:ring-offset-0 !focus-visible:ring-0 !focus-within:ring-0 !focus-visible:outline-none !focus-within:outline-none"
        >
          <Typography
            variant="body2"
            className="leading-[25px] text-[18px] text-neutral-black"
          >
            User Name
          </Typography>
          <span className="mt-1">
            <ImageComponent
              src="/assets/icons/arrow-down.svg"
              alt="angle-down"
            />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" mt-4 mr-10 w-52 h-44 rounded-[16px] p-6 border border-[#C9D6DF]/50 bg-neutral-white shadow-custom">
        <div className="relative gap-6 flex flex-col justify-center items-center ">
          {/* <div
            className="absolute -top-8 bg-red-500 w-[56px] h-8 rounded-t !z-50"
            style={{ clipPath: "polygon(50% 0%, 1% 45%, 100% 44%)" }}
          /> */}
          <DropdownMenuLabel className="self-start">
            <Link href="/" className="flex items-center gap-x-2">
              <span>
                <ImageComponent
                  src="/assets/icons/settings.svg"
                  alt="settings"
                />
              </span>
              <Typography
                variant="body1"
                className="font-[500] text-[18px] text-neutral-black"
              >
                Settings
              </Typography>
            </Link>
          </DropdownMenuLabel>
          <Button className="rounded-[32px] px-8 gap-[10px] bg-primary-blue w-[151px] h-12 hover:bg-primary-blue">
            <ImageComponent src="/assets/icons/logout.svg" alt="logout" />
            <Typography
              variant="body1"
              className="font-[500] text-[18px] text-neutral-white"
            >
              Logout
            </Typography>
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DashboardUserProfileDrawer;
