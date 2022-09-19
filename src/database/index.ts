import { Database } from "fakebase";
import { createJobTable } from "./JobTable";
import { createApplicantTable } from "./ApplicantTable";

const db = new Database("./src/data/");
const Job = createJobTable(db);
const Applicant = createApplicantTable(db);

export { Job, Applicant };
