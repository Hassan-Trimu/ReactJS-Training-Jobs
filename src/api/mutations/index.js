import { gql, useMutation } from "@apollo/client";

const POST_JOB = gql`
  mutation PostJOB($type: String!) {
    postJob(type: $type) {
      id
    }
  }
`;

export { POST_JOB };
