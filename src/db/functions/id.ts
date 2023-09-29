import { parseIntoNumber } from "@/lib";
import { db, NDaysAfterForClient } from "../index";

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
  const res = await db.id.toArray();
  return res;
};

export const getCurrentId = async (): Promise<number> => {
  const ids = await getAllIds();
  const curMax = ids.reduce((a, b) => Math.max(a, b.id ?? 0), 0);
  return curMax;
};
