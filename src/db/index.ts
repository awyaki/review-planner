import Dexie, { Table } from "dexie";

export type Notification = {
  id: number;
  baseDate: Date;
  daysAfter: number;
};

export type Preset = {
  id: number;
  name: number;
  notifications: Notification[];
};

export type ID = {
  id: number;
  notifications: Notification[];
};

export type NextID = { id?: number; nextId: number };

export class MySubClassedDexie extends Dexie {
  ID!: Table<ID>;
  NextID!: Table<NextID, number>;

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

export const db = new MySubClassedDexie();

export * from "./functions";
