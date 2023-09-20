import { db, NDaysAfter } from "../index";

export const createNdaysAfter = async (
  n: number,
  belongTo: number,
  base: Date,
  done: boolean
): Promise<void> => {
  await db.nDaysAfter.add({ n, belongTo, base, done });
};

export const createNDaysAfters = async (
  nDaysAfters: Omit<NDaysAfter, "id">[]
): Promise<void> => {
  await db.nDaysAfter.bulkAdd(
    nDaysAfters.map(({ base, n, belongTo, done }) => ({
      n,
      base,
      belongTo,
      done,
    }))
  );
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

// This `id` argument is about to be passed id of Id object store,
// not id of nDaysAfter object store.
// This function returns all nDaysAfters which belong to the `id`.
export const getAllNDaysAftersOfId = async (
  id: number
): Promise<NDaysAfter[]> => {
  const res = await db.nDaysAfter.where("belongTo").equals(id).toArray();
  return res;
};

export const deleteNDaysAfter = async (id: number) => {
  db.nDaysAfter.delete(id);
};

export const filterTodaysNDaysAfters = async (): Promise<NDaysAfter[]> => {
  try {
    const now = new Date();
    const nDaysAfter = await db.nDaysAfter.toArray();
    return nDaysAfter.filter(({ base, n }) => {
      const time = new Date();
      time.setMilliseconds(base.getMilliseconds() + n * 24 * 60 * 60 * 1000);
      return isSameDate(now, time);
    });
  } catch (e) {
    throw e;
  }
};

const isSameDate = (date1: Date, date2: Date): boolean => {
  const [y1, m1, d1] = [date1.getFullYear(), date1.getMonth(), date1.getDate()];
  const [y2, m2, d2] = [date2.getFullYear(), date2.getMonth(), date2.getDate()];
  return y1 == y2 && m1 == m2 && d1 == d2;
};

export const toggleDoneOfNDaysAfter = async (id: number) => {
  try {
    const nDaysAfter = await db.nDaysAfter.get(id);
    if (!nDaysAfter)
      throw new Error("Error: Can't get nDaysAfter for given id.");
    const { done } = nDaysAfter;
    await db.nDaysAfter.update(id, { done: !done });
  } catch (e) {
    throw e;
  }
};
