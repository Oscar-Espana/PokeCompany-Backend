import { Job } from "../database";

interface Job {
  title: string;
  description: string;
}

export const resolvers = {
  Query: {
    jobs: () => Job.findAll(),
    job: (_root: any, args: { id: string }) => Job.findById(args.id),
  },
};
