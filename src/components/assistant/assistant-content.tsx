/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";
import AssistantStartContent from "./assistant-start-content";
import AssessmentSelectionScreen from "./assessment-selection-screen";
import AssistantMainScreen from "./assisstant-main-screen";

const AssistantContent = () => {
  return (
    <div className="!min-h-full">
      {/* <div className="w-[431px]">
        <AssistantStartContent />
      </div> */}
      <div className="mb-[137px] w-[533px]">
        <AssessmentSelectionScreen />
        {/* <AssistantMainScreen /> */}
      </div>
    </div>
  );
};

export default AssistantContent;
