import { notFound } from "next/navigation";
import React from "react";
import DashboardAuthHeader from "../(components)/auth-header";
import { AuthType } from "@/types";
import DashboardAuthForm from "../(components)/auth-form";
import { cn } from "@/lib/utils";
import DashboardCustomButton from "@/components/custom-button";

const DashboardAuthPage = async ({
  params,
}: {
  params: Promise<{ type: string }>;
}) => {
  const { type } = await params;
  console.log(type);

  if (!Object.values(AuthType).includes(type as AuthType)) {
    return notFound();
  }

  // Map the URL to the corresponding form type
  const formType = type;

  return (
    <div className="space-y-7 w-full">
      <DashboardAuthHeader type={formType} />
      <div
        className={cn("mx-auto", {
          "w-[95%] sm:!w-[500px]":
            type === AuthType.LOGIN || type === AuthType.FORGET_PASSWORD,
          "w-[95%] lg:!w-[824px]": type === AuthType.REGISTER,
        })}
      >
        {type === AuthType.GETTING_STARTED ? (
          <div className="space-y-6">
            <DashboardCustomButton>I am new to Ametros</DashboardCustomButton>
            <DashboardCustomButton>
              I already have an Ametros account
            </DashboardCustomButton>
          </div>
        ) : (
          <DashboardAuthForm type={formType} />
        )}
      </div>
    </div>
  );
};

export default DashboardAuthPage;
