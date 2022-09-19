import { Job } from "../database";

export const resolvers = {
  Query: {
    jobs: () => Job.findAll(),
  },
};
