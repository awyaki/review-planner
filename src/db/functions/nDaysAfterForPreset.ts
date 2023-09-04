import { db } from "@/db";

export const createNDaysAfterForPreset = async (
  n: number,
  belongTo: number
): Promise<void> => {
  await db.nDaysAfterForPreset.add({ n, belongTo });
};
