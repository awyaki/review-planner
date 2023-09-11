import {
  db,
  Preset,
  NDaysAfterForPresetForClient,
  PresetForClient,
} from "../index";
import { parseIntoNumber, isNotNullOrUndefined } from "@/lib";

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
        nDaysAfters.map(({ n }) => ({ n, belongTo: presetId }))
      );
    });
  } catch (e) {
    console.error(e);
  }
};

const isNotOptionalOnId = <T extends { id?: unknown }>(
  v: T
): v is T & { id: Exclude<T["id"], undefined> } => {
  return Object.hasOwn(v, "id") && v.id !== undefined;
};

export const getAllPresets = async (): Promise<
  Omit<PresetForClient, "nDaysAfters">[]
> => {
  const res = await db.preset.toArray();
  const filtered = res.filter(isNotOptionalOnId);
  return filtered;
};

class NotExistSuchPresetError extends Error {
  message: string = "No preset which has `id` exists.";
}
export const getOnePreset = async (id: number): Promise<PresetForClient> => {
  try {
    const result = await db.preset.where("id").equals(id).toArray();
    if (result.length === 0) throw NotExistSuchPresetError;
    const { name } = result[0];
    const nDaysAfters = (
      await db.nDaysAfterForPreset.where("belongTo").equals(id).toArray()
    ).filter(isNotOptionalOnId);
    return {
      id,
      name,
      nDaysAfters,
    };
  } catch (e) {
    throw e;
  }
};

export const putOnePreset = async (preset: PresetForClient) => {
  try {
    await db.transaction("rw", db.preset, db.nDaysAfterForPreset, async () => {
      const presetId = parseIntoNumber(await db.preset.put(preset));
      if (presetId instanceof Error) {
        throw presetId;
      }

      const nDaysAfters = preset.nDaysAfters;
      await db.nDaysAfterForPreset.bulkPut(
        nDaysAfters.map(({ id, n }) => ({ id, n, belongTo: presetId }))
      );
    });
  } catch (e) {
    throw e;
  }
};

export const deleteOnePreset = async (id: number): Promise<void> => {
  try {
    db.transaction("rw", db.preset, db.nDaysAfterForPreset, async () => {
      const nDaysAftersIds = (
        await db.nDaysAfterForPreset.where("belongTo").equals(id).toArray()
      )
        .map(({ id }) => id)
        .filter(isNotNullOrUndefined);
      await db.nDaysAfterForPreset.bulkDelete(nDaysAftersIds);
      await db.preset.delete(id);
    });
  } catch (e) {
    throw e;
  }
};
