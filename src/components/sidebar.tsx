"use client";

import * as React from "react";
import Image from "next/image";

import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { Separator } from "./ui/separator";
import Link from "next/link";
import { Typography } from "./typography";
import { sidebarData } from "@/constants";

// This is sample data.
const DashboardSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  // const [expandSidebar, setExpandSidebar] = React.useState<boolean>(false);
  const [activeTab, setActiveTab] = React.useState<number | undefined>(1);
  const { open } = useSidebar();
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent
        className={cn("!bg-[#F8F8F8] p-8 space-y-6", {
          " flex flex-col items-center": !open,
        })}
      >
        <SidebarHeader className="px-0">
          <div className="flex justify-center items-center gap-x-6">
            <div
              className={cn("relative w-[243.79px] h-[37.88]", {
                // hidden: expandSidebar,
                "h-9 w-9": !open,
              })}
            >
              <Image
                src={!open ? "/assets/logo-mobile.png" : "/assets/logo.png"}
                alt="logo"
                fill
                priority
                className="object-contain w-full"
              />
            </div>
            <SidebarTrigger
              className={cn("open", {
                hidden: !open,
              })}
              // onClick={() => setExpandSidebar((prev) => !prev)}
            ></SidebarTrigger>
          </div>
        </SidebarHeader>
        <SidebarGroup className="p-0">
          <SidebarMenu
            className={cn("flex flex-col  w-full gap-y-[24px] p-0 m-0", {
              "items-center": !open,
            })}
          >
            {sidebarData.map((item) => (
              <React.Fragment key={Math.random()}>
                {item.seperator ? (
                  <Separator color="#C9D6DF" className="h-0.5 w-full" />
                ) : (
                  <SidebarMenuItem className="p-0 m-0">
                    <SidebarMenuButton
                      className=" !p-0 !m-0 !w-auto"
                      tooltip={item.title}
                      onClick={() => setActiveTab(item?.id)}
                    >
                      <Link
                        href={"/"}
                        className={cn("flex items-center gap-[5px] ", {
                          "text-primary-blue": activeTab === item.id,
                          "gap-x-6": !open,
                        })}
                      >
                        <div className={cn("relative !size-6 shrink-0 ")}>
                          {item.icon && (
                            // <Image src={item.icon} alt={item.title} fill priority />
                            <item.icon className="size-6" />
                          )}
                        </div>
                        {open && (
                          <Typography
                            variant="body2"
                            className="text-[18px] !leading-0"
                          >
                            {item.title}
                          </Typography>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )}
              </React.Fragment>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      {/* <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;
