import Dexie, { Table } from "dexie";

export type Id = {
  id: number;
};

export class ReviewPlannerDatabase extends Dexie {
  id!: Table<Id>;
  constructor() {
    super("review_planner");
    this.version(1).stores({
      ID: "++id",
    });
  }
}

export const db = new ReviewPlannerDatabase();
