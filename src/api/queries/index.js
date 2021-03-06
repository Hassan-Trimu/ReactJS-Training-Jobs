import React from "react";
import { Query, useQuery } from "react-apollo";
import { gql } from "apollo-boost";
import Landing from "../../screens/Landing/index";

const GET_JOBS = gql`
  {
    jobs {
      id
      title
      company {
        name
      }
      commitment {
        id
      }
      description
      userEmail
    }
  }
`;

const Jobs = () => {
  const { loading, error, data } = useQuery(GET_JOBS);
  if (loading) return "Loading";
  if (error) return `Error ${error.message} .`;

  return (
    <div>
      {console.log(data.jobs)}
      {<Landing jobs={data.jobs} />}
      {/* {data.jobs.map((job) => (
              <div>
                <h1>{job.title}</h1>
                <h2>{job.company.name}</h2>
                <h3>{job.userEmail}</h3>
                <p>{job.description}</p>
              </div>
            ))} */}
    </div>
  );
};
export { Jobs };
