import {db, NDaysAfter} from "../index";

export const createNdaysAfter = async (
  n: number,
  belongTo: number,
  base: Date,
  done: boolean
): Promise<void> => {
  await db.nDaysAfter.add({n, belongTo, base, done});
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
