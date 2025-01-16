/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import DashboardBreadcrumbs from "./breadcrumbs";
import Image from "next/image";
import DashboardUserProfileDrawer from "./user-profile-drawer";
const DashboardHeader = () => {
  return (
    <div className="flex justify-between items-center w-full py-4 px-8 h-20 bg-[#F8F8F8]">
      <DashboardBreadcrumbs />
      <div className="flex justify-center items-center gap-x-2">
        <div className="relative size-12 rounded-full overflow-hidden bg-neutral-lightGray">
          {/* <Image src={""} alt="" fill priority /> */}
        </div>
        <DashboardUserProfileDrawer />
      </div>
    </div>
  );
};

export default DashboardHeader;
