import React from "react";
import Loader from "./(componenents)/loader";

const DashbaordNewAssessmentPage = () => {
  const loader = false;
  return <div>{loader ? <Loader /> : <div>Assessments</div>}</div>;
};

export default DashbaordNewAssessmentPage;
