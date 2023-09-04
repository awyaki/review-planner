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
  id!: Table<Id>;
  Preset!: Table<Preset>;
  constructor() {
    super("review_planner");
    this.version(1).stores({
      ID: "++id",
      Preset: "++id",
    });
  }
}

export const db = new ReviewPlannerDatabase();
