import Dexie, { Table } from "dexie";
/*
export type DaysAfter = {
  id: number;
  baseDate: Date;
  daysAfter: number;
};
*/
// export type DaysAfterForPreset = Omit<DaysAfter, "baseDate">;

export type Preset = {
  id?: number;
  name: string;
  //notifications: DaysAfterForPreset[];
};

export type Id = {
  id: number;
};

export class ReviewPlannerDatabase extends Dexie {
  //ID!: Table<ID>;
  Preset!: Table<Preset>;
  constructor() {
    super("review_planner");
    this.version(1).stores({
      ID: "&id",
      Preset: "++id",
      // assume NextID object store will have only one record whose is `next_id`.
      NextID: "++id",
    });
  }
}

export const db = new ReviewPlannerDatabase();
