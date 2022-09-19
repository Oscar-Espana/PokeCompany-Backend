import { Applicant } from "../database";

export const resolvers = {
  Query: {
    applicants: () => Applicant.findAll(),
  },
};
