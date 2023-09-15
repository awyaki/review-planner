import Dexie, {Table} from "dexie";

import {Id, Preset, NDaysAfter, NDaysAfterForPreset} from "./types";

export * from "./functions";
export * from "./types";

export class ReviewPlannerDatabase extends Dexie {
  id!: Table<Id>;
  preset!: Table<Preset>;
  nDaysAfter!: Table<NDaysAfter>;
  nDaysAfterForPreset!: Table<NDaysAfterForPreset>;
  constructor() {
    super("review_planner");
    this.version(1).stores({
      id: "++id",
      nDaysAfter: "++id, belongTo",
      preset: "++id",
      nDaysAfterForPreset: "++id, belongTo",
    });
  }
}

export const db = new ReviewPlannerDatabase();
