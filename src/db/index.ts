import Dexie, { Table } from "dexie";

type Notification = { baseDate: Date; daysAfter: number };

export type ID = {
  id: number;
  notifications: Notification[];
};

export class MySubClassedDexie extends Dexie {
  ID!: Table<ID>;

  constructor() {
    super("review_planner");
    this.version(1).stores({
      ID: "&id",
    });
  }
}

export const db = new MySubClassedDexie();
