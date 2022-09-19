import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Job {
    id: String
    title: String
    description: String
  }

  type Query {
    jobs: [Job]
  }
`;
