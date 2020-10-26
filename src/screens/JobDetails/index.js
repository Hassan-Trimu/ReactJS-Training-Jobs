import { from } from "apollo-boost";
import React from "react";
import { JOBS as jobs } from "../../data/index";
import { Card } from "../../styledComponents/card/index";
import { Button } from "../../styledComponents/button/index";
import { Grid } from "../../styledComponents/grid/index";
import ReactMarkDown from "react-markdown";

// const displayJob = (id) => {
//   return (
//     <div>
//       {}
//     </div>
//   )
// }

const JobDetails = (props) => {
  const job = jobs.filter((job) => job.id === props.match.params.id);

  return (
    <div>
      <div>
        <Card>
          <Grid>
            <h2>{job[0].title + " at " + job[0].company.name}</h2>
            <div>
              <Button>Apply</Button>
            </div>
          </Grid>

          <ReactMarkDown>{job[0].description}</ReactMarkDown>
          {<h4>Posted by: {job[0].userEmail}</h4>}
        </Card>
      </div>
    </div>
  );
};

// const JobDetails = (props) => {
//   return (
//     <div>
//       <h1>{props.match.params.id}</h1>
//       <h2>{jobs[1].title}</h2>
//     </div>
//   );
// };

export default JobDetails;
