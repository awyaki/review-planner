import { db } from "../index";
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
