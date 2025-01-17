import React from "react";

const DashboardAuthHeader = ({ type }: { type: string }) => {
  console.log(type);
  return <div>{type}</div>;
};

export default DashboardAuthHeader;
