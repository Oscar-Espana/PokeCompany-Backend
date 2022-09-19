import { gql } from "apollo-server-express";

export const typeDefs = gql`
  enum ApplicantStatus {
    pending
    hired
  }

  type Pokemon {
    id: Float
    name: String
    img: String
  }
  type Applicant {
    id: String
    fullName: String
    email: String
    phoneNumber: String
    favoritePokemon: Pokemon
    description: String
    job: Job
    status: ApplicantStatus
  }

  type Query {
    applicants: [Applicant]
    applicant(id: String!): Applicant
  }

  input ApplicantInput {
    fullName: String!
    email: String!
    phoneNumber: String!
    favoritePokemonId: Float!
    description: String!
    jobId: String!
  }

  type Mutation {
    applicantCreate(applicant: ApplicantInput): Applicant
  }
`;
