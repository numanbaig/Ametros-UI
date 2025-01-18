/* eslint-disable @typescript-eslint/no-explicit-any */
import { Typography } from "@/components/typography";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React from "react";

interface CommonAuthFormProps {
  type?: string;
  name: string;
  label: string;
  form: {
    control: any; // Replace 'any' with the appropriate type for your form control
  };
}

const CommonAuthForm: React.FC<CommonAuthFormProps> = ({
  type,
  name,
  label,
  form,
}) => {
  return (
    <FormField
      control={form.control}
      name={`${name}`}
      render={({ field }) => (
        <FormItem className="w-full">
          <FormLabel>
            <Typography variant="body1" className="text-primary-darkBlue">
              {label}
            </Typography>
          </FormLabel>
          <FormControl className="w-full">
            <Input
              type={type ? type : "text"}
              className="w-full border border-[#D8DAD9] pl-4 h-12 rounded-[8px] shadow-none placeholder:text-light-200 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0  text-backgroundGrayDark font-[family-name:var(--font-poppins-semibold)] text-[16px] font-normal text-[#545253] leading-5"
              {...field}
              autoComplete="off"
            />
          </FormControl>

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CommonAuthForm;
