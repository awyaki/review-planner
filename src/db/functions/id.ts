import { db } from "../index";

export const createId = async () => db.id.add({});

export const getAllIds = async () => {
  const res = await db.id.toArray();
  return res;
};
