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

export const getOneNDaysAfter = async (
  id: number
): Promise<NDaysAfter | undefined> => {
  const res = await db.nDaysAfter.get(id);
  return res;
};
