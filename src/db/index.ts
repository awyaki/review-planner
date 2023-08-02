import Dexie, { Table } from "dexie";

type Notification = { baseDate: Date; daysAfter: number };

export type ID = {
  id: number;
  notifications: Notification[];
};

export type NextID = number;

export class MySubClassedDexie extends Dexie {
  ID!: Table<ID>;
  NextID!: Table<NextID>;

  constructor() {
    super("review_planner");
    this.version(1).stores({
      ID: "&id",
      // assume NextID object store will have only one record whose is `next_id`.
      NextID: "id",
    });
  }
}

export const db = new MySubClassedDexie();

export * from "./functions";
