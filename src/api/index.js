import ApolloClient from "apollo-boost";
const BASE_URL = "https://api.graphql.jobs/";
const client = new ApolloClient({
  uri: BASE_URL,
});

export default client;
