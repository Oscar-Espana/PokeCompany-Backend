import { Applicant } from "../database";

enum ApplicantStatus {
  pending = "pending",
  hired = "hired",
}

interface ApplicantInput {
  fullName: string;
  email: string;
  phoneNumber: string;
  favoritePokemonId: number;
  description: string;
  jobId: string;
}

export const resolvers = {
  Query: {
    applicants: () => Applicant.findAll(),
    applicant: (_root: any, args: { id: string }) =>
      Applicant.findById(args.id),
  },

  Mutation: {
    applicantCreate: (_root: any, args: { applicant: ApplicantInput }) =>
      Applicant.create({ ...args.applicant, status: ApplicantStatus.pending }),
  },
};
