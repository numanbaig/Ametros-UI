import React from "react";
import { Typography } from "../typography";

const AssessmentSelectionScreen = () => {
  const selectAssessmentData = [
    {
      id: 1,
      title: "Assessment Builder",
      description:
        "Get a complete and personalized assessment with options to select skills and rate them.",
    },
    {
      id: 2,
      title: "Quick Assessment",
      description:
        "You only need to provide a brief description to create your assessment. It takes less than 5 minutes.",
    },
  ];
  return (
    <div className="space-y-4">
      <Typography
        variant="body1"
        className="font-bold text-[18px] text-secondary-400"
      >
        Create assessment
      </Typography>
      <Typography
        variant="body1"
        className="font-bold text-[18px] text-secondary-400"
      >
        Let’s Start!
        <span className="text-primary-800 block font-normal">
          First, select the type:
        </span>
      </Typography>
      <div className="flex justify-center items-center  gap-x-[16px]">
        {selectAssessmentData.map(({ title, id, description }) => (
          <div
            className="w-full h-[197px] p-4 flex flex-col justify-center items-center gap-4 bg-gray-100 rounded-[8px]"
            key={id}
          >
            <Typography
              variant="body1"
              className="font-bold text-[18px] leading-[27px] text-primary-800"
            >
              {title}
            </Typography>
            <Typography
              variant="body2"
              className="leading-[21px] text-customGray-500 text-center"
            >
              {description}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssessmentSelectionScreen;
