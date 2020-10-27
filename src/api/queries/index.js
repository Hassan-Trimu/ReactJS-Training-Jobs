import React from "react";
import { Query } from "react-apollo";
import gql from "graphql-tag";
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

const Jobs = () => (
  <Query query={GET_JOBS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;
      console.log(data);

      {
        return (
          <div>
            <Landing jobs={data.jobs} />
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
      }
    }}
  </Query>
);

export { Jobs };
