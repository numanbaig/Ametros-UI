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
import { usePathname } from "next/navigation";

const DashboardSidebar = ({
  ...props
}: React.ComponentProps<typeof Sidebar>) => {
  const pathname = usePathname();
  const { open, setOpen } = useSidebar();

  const isActiveLink = (itemUrl: string = "/"): boolean => {
    if (itemUrl === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(itemUrl);
  };

  // Track window width in state
  const [windowWidth, setWindowWidth] = React.useState(
    typeof window !== "undefined" ? window.innerWidth : 0
  );

  React.useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setWindowWidth(width);
      if (width <= 980) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty dependency array since we want this to run only once

  // Separate effect to handle sidebar state based on window width
  React.useEffect(() => {
    if (windowWidth <= 980) {
      setOpen(false);
    }
  }, [windowWidth, setOpen]);

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
              className={cn("relative w-[243.79px] h-[37.88px]", {
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
              <React.Fragment key={item.id || Math.random()}>
                {item.seperator ? (
                  <Separator color="#C9D6DF" className="h-0.5 w-full" />
                ) : (
                  <SidebarMenuItem className="p-0 m-0">
                    <SidebarMenuButton
                      className=" !p-0 !m-0 !w-auto"
                      tooltip={item.title}
                    >
                      <Link
                        href={item.url ? item.url : "/"}
                        className={cn(
                          "flex items-center gap-[5px] text-neutral-black",
                          {
                            "text-primary-blue": isActiveLink(item.url),
                            "gap-x-6": !open,
                          }
                        )}
                      >
                        <div className={cn("relative !size-6 shrink-0 ")}>
                          {item.icon && <item.icon className="size-6" />}
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
      <SidebarRail />
    </Sidebar>
  );
};

export default DashboardSidebar;
