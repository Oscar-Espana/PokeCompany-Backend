import { Database, Entity, Table } from "fakebase";

enum ApplicantStatus {
  pending,
  hired,
}

interface Applicant extends Entity {
  id: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  favoritePokemonId: number;
  description: string;
  jobId: string;
  status: ApplicantStatus;
}

export const createApplicantTable = (db: Database): Table<Applicant> => {
  return db.table<Applicant>("applicant");
};
