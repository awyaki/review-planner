import { db, Preset } from "../index";
import { parseIntoNumber, NDaysAfterForPresetForClient } from "@/lib";

export const createPreset = async (
  name: string,
  nDaysAfters: NDaysAfterForPresetForClient[]
) => {
  try {
    await db.transaction("rw", db.preset, db.nDaysAfterForPreset, async () => {
      const presetId = parseIntoNumber(await db.preset.add({ name }));
      if (presetId instanceof Error) {
        throw presetId;
      }
      await db.nDaysAfterForPreset.bulkAdd(
        nDaysAfters.map(({ id, n }) => ({ id, n, belongTo: presetId }))
      );
    });
  } catch (e) {
    console.error(e);
  }
};

export const getAllPresets = async () => {
  const res = await db.preset.toArray();
  return res;
};

class NotExistSuchPresetError extends Error {
  message: string = "No preset which has `id` exists.";
}
export const getOnePreset = async (id: number): Promise<Preset> => {
  try {
    const result = await db.preset.where("id").equals(id).toArray();
    if (result.length === 0) throw NotExistSuchPresetError;
    return result[0];
  } catch (e) {
    throw e;
  }
};
