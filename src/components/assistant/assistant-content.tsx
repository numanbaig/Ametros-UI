import React from "react";
import AssistantStartContent from "./assistant-start-content";
import AssessmentSelectionScreen from "./assessment-selection-screen";
import AssistantMainScreen from "./assisstant-main-screen";

const AssistantContent = () => {
  const [currentScreen, setCurrentScreen] = React.useState<
    "start" | "assessment" | "main"
  >("start");

  const [chatType, setChatType] = React.useState<{
    type: string;
    builder: string;
  }>({
    type: "",
    builder: "",
  });

  const renderContent = () => {
    switch (currentScreen) {
      case "start":
        return (
          <div className="w-full sm:w-[431px] overflow-x-hidden">
            <AssistantStartContent
              setAssessmentSelectionScreen={() =>
                setCurrentScreen("assessment")
              }
              setChatType={setChatType}
            />
          </div>
        );
      case "assessment":
        return (
          <div className="sm:mb-[137px] mb-[60px] w-full sm:w-[533px] overflow-x-hidden">
            <AssessmentSelectionScreen
              setAssessmentSelectionScreen={() => setCurrentScreen("main")}
              chatType={chatType.type}
              setChatType={setChatType}
            />
          </div>
        );
      case "main":
        return (
          <div className="sm:mb-[137px] mb-[60px] w-full sm:!w-[533px] overflow-x-hidden">
            <AssistantMainScreen chatType={chatType} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="!min-h-full sm:max-h-[600px] max-h-[50vh] overflow-auto remove-scrollbar">
      {renderContent()}
    </div>
  );
};

export default AssistantContent;
