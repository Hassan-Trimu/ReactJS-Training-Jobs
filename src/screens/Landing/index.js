import { from } from "apollo-boost";
import React from "react";
// import { JOBS as jobs } from "../../data/index";
import ListJobItems from "../../components/listJobItems/index";

export const Landing = (props) => {
  console.log({ props });
  return (
    <div>
      <h1 style={{ margin: "20px" }}>Jobs</h1>
      {<ListJobItems jobs={props.jobs}></ListJobItems>}
    </div>
  );
};

export default Landing;
