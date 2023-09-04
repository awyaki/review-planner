import { db, NDaysAfter } from "../index";

export const createNdaysAfter = async (
  n: number,
  belongTo: number,
  base: Date
): Promise<void> => {
  await db.nDaysAfter.add({ n, belongTo, base });
};

export const getAllNDaysAfters = async (): Promise<NDaysAfter[]> => {
  const res = await db.nDaysAfter.toArray();
  return res;
};
