"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { AuthFormSchema } from "@/schemas";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import z, { TypeOf } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { AuthType } from "@/types";
import { Typography } from "@/components/typography";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox";
import DashboardCustomButton from "@/components/custom-button";
import ImageComponent from "@/components/image-component";
import Recaptchaverification from "./recaptcha";
import {
  ForgotPasswordFormData,
  LoginFormData,
  registerFormData,
} from "@/utils";
import CommonAuthForm from "./common-form";
import PasswordRequirements from "./password-requirements";
const DashboardAuthForm = ({ type }: { type: string }) => {
  const formSchema = AuthFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      registrationCode: "",
    },
  });

  const onSubmit = (data: z.infer<typeof formSchema>) => {
    console.log(data);
  };

  const formInputsData =
    type === AuthType.REGISTER
      ? registerFormData
      : type === AuthType.LOGIN
      ? LoginFormData
      : ForgotPasswordFormData;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className={cn("space-y-7")}>
        <div
          className={cn("space-y-7", {
            "grid grid-cols-1 sm:grid-cols-2 items-center w-full gap-x-6 gap-y-6 space-y-0":
              type === AuthType.REGISTER,
          })}
        >
          {formInputsData.map(({ id, name, type, label }) => {
            return (
              <CommonAuthForm
                key={id}
                name={name}
                type={type}
                label={label}
                form={form}
              />
            );
          })}

          {type === AuthType.LOGIN && (
            <>
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-x-2">
                  <Checkbox id="terms" color="#1AA3B3" />
                  <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    <Typography variant="body1" className="text-[#171616]">
                      {" "}
                      Remember me
                    </Typography>
                  </label>
                </div>
                <Link
                  href="/auth/forgot-password"
                  className="text-primary-blue underline"
                >
                  <Typography variant="body1">Forgot Password?</Typography>
                </Link>
              </div>
              <div className="flex justify-center items-center gap-x-2 w-full">
                <DashboardCustomButton className="h-[48px] w-full text-[16px] !font-bold shrink">
                  Login
                </DashboardCustomButton>
                <Link href={"/auth/register"} className="w-full shrink">
                  <DashboardCustomButton className="h-[48px] w-full bg-transparent border border-[#2BBECF] text-primary-blueLight text-[16px] !font-bold">
                    Sign Up
                  </DashboardCustomButton>
                </Link>
              </div>
            </>
          )}
        </div>

        {type === AuthType.REGISTER && (
          <div className="flex md:flex-row flex-col gap-y-2 justify-between items-start w-full">
            <PasswordRequirements />
            <div>
              <Recaptchaverification />
            </div>
          </div>
        )}

        {(type === AuthType.FORGET_PASSWORD || type === AuthType.REGISTER) && (
          <>
            <div
              className={cn("w-full", {
                "w-full sm:w-[500px] mx-auto": type === AuthType.REGISTER,
              })}
            >
              <DashboardCustomButton className="h-[48px] w-full bg-primary-blueLight text-[16px] !font-bold">
                Submit
              </DashboardCustomButton>
            </div>
          </>
        )}
      </form>
    </Form>
  );
};

export default DashboardAuthForm;

{
  /* {type === AuthType.REGISTER && (
            <>
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <Typography
                        variant="body1"
                        className="text-primary-darkBlue"
                      >
                        First Name
                      </Typography>
                    </FormLabel>
                    <FormControl className="w-full">
                      <Input
                        type="text"
                        className="w-full border border-[#D8DAD9] pl-4 h-12 rounded-[8px] shadow-none placeholder:text-light-200 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0  text-backgroundGrayDark font-[family-name:var(--font-poppins-semibold)] text-[16px] font-normal text-[#545253] leading-5"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <Typography
                        variant="body1"
                        className="text-primary-darkBlue"
                      >
                        Last Name
                      </Typography>
                    </FormLabel>
                    <FormControl className="w-full">
                      <Input
                        type="text"
                        className="w-full border border-[#D8DAD9] pl-4 h-12 rounded-[8px] shadow-none placeholder:text-light-200 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0  text-backgroundGrayDark font-[family-name:var(--font-poppins-semibold)] text-[16px] font-normal text-[#545253] leading-5"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="registrationCode"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>
                      <Typography
                        variant="body1"
                        className="text-primary-darkBlue"
                      >
                        Registration Code
                      </Typography>
                    </FormLabel>
                    <FormControl className="w-full">
                      <Input
                        type="text"
                        className="w-full border border-[#D8DAD9] pl-4 h-12 rounded-[8px] shadow-none placeholder:text-light-200 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0  text-backgroundGrayDark font-[family-name:var(--font-poppins-semibold)] text-[16px] font-normal text-[#545253] leading-5"
                        {...field}
                        autoComplete="off"
                      />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </>
          )}

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>
                  <Typography variant="body1" className="text-primary-darkBlue">
                    Email
                  </Typography>
                </FormLabel>
                <FormControl className="w-full">
                  <Input
                    type="email"
                    placeholder="username@email.com"
                    className="w-full border border-[#D8DAD9] pl-4 h-12 rounded-[8px] shadow-none placeholder:text-light-200 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0  text-backgroundGrayDark font-[family-name:var(--font-poppins-semibold)] text-[16px] font-normal text-[#545253] leading-5"
                    {...field}
                    autoComplete="off"
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          {(type === AuthType.REGISTER || type === AuthType.LOGIN) && (
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    <Typography
                      variant="body1"
                      className="text-primary-darkBlue"
                    >
                      {type === AuthType.REGISTER
                        ? "Password"
                        : type === AuthType.LOGIN
                        ? "Password"
                        : ""}
                    </Typography>
                  </FormLabel>
                  <FormControl className="w-full">
                    <Input
                      type="password"
                      className="w-full border border-[#D8DAD9] pl-4 h-12 rounded-[8px] shadow-none placeholder:text-light-200 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0  text-backgroundGrayDark font-[family-name:var(--font-poppins-semibold)] text-[16px] font-normal text-[#545253] leading-5"
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          {type === AuthType.REGISTER && (
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>
                    <Typography
                      variant="body1"
                      className="text-primary-darkBlue"
                    >
                      Confirm Password
                    </Typography>
                  </FormLabel>
                  <FormControl className="w-full">
                    <Input
                      type="password"
                      className="w-full border border-[#D8DAD9] pl-4 h-12 rounded-[8px] shadow-none placeholder:text-light-200 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0  text-backgroundGrayDark font-[family-name:var(--font-poppins-semibold)] text-[16px] font-normal text-[#545253] leading-5"
                      {...field}
                      autoComplete="off"
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          )} */
}
