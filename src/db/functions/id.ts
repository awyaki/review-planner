import {parseIntoNumber} from "@/lib";
import {db, NDaysAfterForClient} from "../index";

export const createId = async (nDaysAfters: NDaysAfterForClient[]) => {
  try {
    await db.transaction("rw", db.id, db.nDaysAfter, async () => {
      const _id = await db.id.add({});
      const id = parseIntoNumber(_id);
      if (id instanceof Error) throw id;
      await db.nDaysAfter.bulkAdd(
        nDaysAfters.map(({id, ...rest}) => ({...rest, done: false, belongTo: id}))
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
