import React from 'react';
import {Query} from 'react-apollo';
import gql from 'graphql-tag';

const GET_JOBS = gql`
{
  jobs
  {
    id
    title
    company
    {
      name
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

      { return (
        <div >
          {data.jobs.map(job => (
            <div>
            <h1>{job.title}</h1>
            <h2>{job.company.name}</h2>
            <h3>{job.userEmail}</h3>
            <p>{job.description}</p>
            </div>
          ))}
        </div>
      ); }
    }}
  </Query>
  
);

export default Jobs;