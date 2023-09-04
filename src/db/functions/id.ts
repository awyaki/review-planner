import { db } from "../index";

export const createId = async () => db.id.add({});

export const getAllIds = async () => {
  const res = await db.id.toArray();
  return res;
};

export const getCurrentId = async (): Promise<number> => {
  const ids = await getAllIds();
  const curMax = ids.reduce((a, b) => Math.max(a, b.id ?? 0), 0);
  return curMax;
};
