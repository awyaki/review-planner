import Dexie, { Table } from "dexie";

import { Id, Preset, NDaysAfter, NDaysAfterForPreset, Place } from "./types";

export * from "./functions";
export * from "./types";

export class ReviewPlannerDatabase extends Dexie {
  id!: Table<Id>;
  preset!: Table<Preset>;
  nDaysAfter!: Table<NDaysAfter>;
  nDaysAfterForPreset!: Table<NDaysAfterForPreset>;
  place!: Table<Place>;
  constructor() {
    super("review_planner");
    this.version(1).stores({
      id: "++id, place",
      nDaysAfter: "++id, belongTo",
      preset: "++id",
      nDaysAfterForPreset: "++id, belongTo",
      place: "++id, name",
    });
  }
}

export const db = new ReviewPlannerDatabase();
