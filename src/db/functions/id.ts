import { parseIntoNumber, isNotOptionalOnId } from "@/lib";
import { db, NDaysAfterForClient } from "../index";
import { Id } from "../types";

export const getId = async (id: number): Promise<Required<Id>> => {
  try {
    const res = await db.id.get(id);
    if (res == null) throw new Error("Error: No such Id exists.");
    if (!isNotOptionalOnId(res))
      throw new Error("Error: Expected id field exists but it doesn't exsit.");
    return res;
  } catch (e) {
    throw e;
  }
};

export const createId = async (
  nDaysAfters: NDaysAfterForClient[],
  place: string
) => {
  try {
    await db.transaction("rw", db.id, db.nDaysAfter, async () => {
      const _id = await db.id.add({ place });
      const id = parseIntoNumber(_id);
      if (id instanceof Error) throw id;
      await db.nDaysAfter.bulkAdd(
        nDaysAfters.map(({ id: _, ...rest }) => ({
          ...rest,
          done: false,
          belongTo: id,
        }))
      );
    });
  } catch (e) {
    throw e;
  }
};

export const getAllIds = async () => {
  const res = (await db.id.toArray()).filter(isNotOptionalOnId);
  return res;
};

export const getCurrentId = async (): Promise<number> => {
  const ids = await getAllIds();
  const curMax = ids.reduce((a, b) => Math.max(a, b.id ?? 0), 0);
  return curMax;
};
