import { db } from "../index";
export const createNdaysAfter = async (
  n: number,
  belongTo: number,
  base: Date
): Promise<void> => {
  await db.nDaysAfter.add({ n, belongTo, base });
};
