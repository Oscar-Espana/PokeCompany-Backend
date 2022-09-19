import { Database, Entity, Table } from "fakebase";

interface Job extends Entity {
  id: string;
  title: string;
  description: string;
}

export const createJobTable = (db: Database): Table<Job> => {
  return db.table<Job>("job");
};
