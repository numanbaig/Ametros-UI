/* eslint-disable @typescript-eslint/no-explicit-any */
import { notFound } from "next/navigation";
import React from "react";
import DashboardAuthHeader from "../(components)/auth-header";
import { AuthType } from "@/types";

const DashboardAuthPage = async ({ params }: { params: Promise<any> }) => {
  const url = await params;
  const authRoute = ["/auth/login", "/auth/register", "/auth/forget-password"];
  const checkRoute = () => {
    if (url) {
      const route = authRoute.some(
        (route) => !route.includes(url) && route !== url
      );
      console.log(route);
      return route;
    }

    return notFound();
  };
  if (!checkRoute()) return notFound();

  // const getFormType = () => {
  //   switch (url) {
  //     case url.includes():

  //       break;

  //     default:
  //       break;
  //   }
  // }

  const formType =
    url === AuthType.LOGIN
      ? "login"
      : url === AuthType.REGISTER
      ? "register"
      : url === AuthType.FORGET_PASSWORD
      ? "forgot-password"
      : "";
  return (
    <div className="space-y-7">
      <DashboardAuthHeader type={formType} />
    </div>
  );
};

export default DashboardAuthPage;
