/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import DashboardBreadcrumbs from "./breadcrumbs";
import Image from "next/image";
import DashboardUserProfileDrawer from "./user-profile-drawer";
import { tree } from "next/dist/build/templates/app-page";
import { cn } from "@/lib/utils";
import DashboardAuthButtons from "@/app/auth/(components)/auth-buttons";
const DashboardHeader = () => {
  const isAuthenticated = false;
  return (
    <div className="flex justify-between items-center w-full py-4 sm:px-8 px-4 h-20 bg-[#F8F8F8]">
      {!isAuthenticated ? (
        <div
          className={cn(
            "relative w-[120px] h-[30px] sm:w-[143.79px] sm:h-[37.88px]",
            {}
          )}
        >
          <Image
            src={"/assets/logo.png"}
            alt="logo"
            fill
            priority
            className=" w-full"
          />
        </div>
      ) : (
        <DashboardBreadcrumbs />
      )}
      <div className="flex justify-center items-center gap-x-2">
        {!isAuthenticated ? (
          <>
            <DashboardAuthButtons />
          </>
        ) : (
          <>
            {" "}
            <div className="relative size-12 rounded-full overflow-hidden bg-neutral-lightGray">
              {/* <Image src={""} alt="" fill priority /> */}
            </div>
            <DashboardUserProfileDrawer />
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardHeader;
