import { gql } from "apollo-boost";

const POST_JOB = gql`
  mutation PostJOB(
    $title: String!
    $commitmentId: ID!
    $companyName: String!
    $locationNames: String!
    $userEmail: String!
    $applyUrl: String!
    $description: String!
  ) {
    postJob(
      input: {
        title: $title
        commitmentId: $commitmentId
        companyName: $companyName
        locationNames: $locationNames
        userEmail: $userEmail
        applyUrl: $applyUrl
        description: $description
      }
    ) {
      id
    }
  }
`;

export default POST_JOB;
