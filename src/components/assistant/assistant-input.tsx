import React from "react";
import { Input } from "../ui/input";
import ImageComponent from "../image-component";
import { Button } from "../ui/button";

interface AssistantInput {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

const AssistantInput = ({ message, setMessage }: AssistantInput) => {
  return (
    <div className="sm:w-[400px] w-[92%] mx-auto left-0 h-[45px] ronuded-[8px] px-4 flex justify-between items-center gap-4 bg-white border border-[#DDE1E5] rounded-[8px] mt-4">
      <Input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Do you have any questions? Type here..."
        className="p-0 border-0 outline-none focus-within:ring-0 focus-visible:ring-0 focus-within:border-none focus-visible:border-0 focus-within:ring-offset-0 focus-visible:ring-offset-0 text-[16px] leading-5 font-normal text-customGray-500"
      />
      <Button className="!p-0 !bg-transparent ">
        <ImageComponent
          className="size-8"
          src="/assets/icons/arrow-right.svg"
          alt="arrow-right"
        />
      </Button>
    </div>
  );
};

export default AssistantInput;
