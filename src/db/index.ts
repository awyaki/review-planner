import Dexie, { Table } from "dexie";

export type Id = {
  id: number;
};

export type NDaysAfter = {
  id: number;
  belongTo: number;
  n: number;
  base: Date;
};

export class ReviewPlannerDatabase extends Dexie {
  id!: Table<Id>;
  nDaysAfter!: Table<NDaysAfter>;
  constructor() {
    super("review_planner");
    this.version(1).stores({
      id: "++id",
      nDaysAfter: "++id",
    });
  }
}

export const db = new ReviewPlannerDatabase();
