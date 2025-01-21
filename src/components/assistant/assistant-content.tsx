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
          <div className="w-[431px]">
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
          <div className="mb-[137px] w-[533px]">
            <AssessmentSelectionScreen
              setAssessmentSelectionScreen={() => setCurrentScreen("main")}
              chatType={chatType.type}
              setChatType={setChatType}
            />
          </div>
        );
      case "main":
        return (
          <div className="mb-[137px] w-[533px]">
            <AssistantMainScreen chatType={chatType} />
          </div>
        );
      default:
        return null;
    }
  };

  return <div className="!min-h-full">{renderContent()}</div>;
};

export default AssistantContent;
