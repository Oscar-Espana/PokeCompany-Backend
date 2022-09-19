import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Job {
    id: ID!
    title: String
    description: String
  }

  type Query {
    jobs: [Job]
    job(id: String!): Job
  }
`;
