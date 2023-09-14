import Dexie, {Table} from "dexie";

import {Id, Preset, NDaysAfter, NDaysAfterForPreset, TodayId} from "./types";

export * from "./functions";
export * from "./types";

export class ReviewPlannerDatabase extends Dexie {
  id!: Table<Id>;
  preset!: Table<Preset>;
  nDaysAfter!: Table<NDaysAfter>;
  nDaysAfterForPreset!: Table<NDaysAfterForPreset>;
  toDayId!: Table<TodayId>;
  constructor() {
    super("review_planner");
    this.version(1).stores({
      id: "++id",
      nDaysAfter: "++id, belongTo",
      preset: "++id",
      nDaysAfterForPreset: "++id, belongTo",
      toDayId: "&id",
    });
  }
}

export const db = new ReviewPlannerDatabase();
