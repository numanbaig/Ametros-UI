import DashboardCustomButton from "@/components/custom-button";
import React from "react";

const DashboardAuthButtons = () => {
  return (
    <div className="space-x-2 flex items-center">
      <DashboardCustomButton className="w-[119px] h-[48px] text-[16px] !font-bold">
        Login
      </DashboardCustomButton>
      <DashboardCustomButton className="w-[119px] h-[48px] bg-transparent border border-[#2BBECF] text-[16px] !font-bold">
        Sign Up
      </DashboardCustomButton>
    </div>
  );
};

export default DashboardAuthButtons;
