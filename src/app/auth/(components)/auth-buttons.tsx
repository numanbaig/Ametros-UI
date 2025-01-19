import DashboardCustomButton from "@/components/custom-button";
import Link from "next/link";
import React from "react";

const DashboardAuthButtons = () => {
  return (
    <div className="space-x-2 flex items-center">
      <Link href={"/auth/login"}>
        <DashboardCustomButton className=" w-[90px] h-[40px] sm:w-[119px] sm:h-[48px] text-[16px] !font-bold">
          Login
        </DashboardCustomButton>
      </Link>
      <Link href={"/auth/register"}>
        <DashboardCustomButton className=" w-[90px] h-[40px] sm:w-[119px] sm:h-[48px] bg-transparent border border-[#2BBECF] text-[16px] !font-bold text-primary-blueLight">
          Sign Up
        </DashboardCustomButton>
      </Link>
    </div>
  );
};

export default DashboardAuthButtons;
