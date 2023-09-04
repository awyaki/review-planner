import { db, NDaysAfterForPreset } from "@/db";

export const createNDaysAfterForPreset = async (
  n: number,
  belongTo: number
): Promise<void> => {
  await db.nDaysAfterForPreset.add({ n, belongTo });
};

export const getAllNDaysAftersForPresetOfPresetId = async (
  id: number
): Promise<NDaysAfterForPreset[]> => {
  try {
    const res = await db.nDaysAfterForPreset
      .where("belongTo")
      .equals(id)
      .toArray();
    return res;
  } catch (e) {
    throw e;
  }
};
