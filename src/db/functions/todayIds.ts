import {db, getAllNDaysAfters} from "@/db";
import {isNotNullOrUndefined} from '@/lib';

export const getAllTodayIds = async () => {
  return await db.toDayId.toArray();
};

export const createTodayIds = async () => {
  try {
    await db.transaction('rw', db.nDaysAfter, db.toDayId, async () => {
      const nDaysAfters = await getAllNDaysAfters()
      const now = new Date();

      // extract ids whose base + n equals to now date
      const shouldExistTodayIds = new Set(nDaysAfters.filter(({base, n}) => {
        const toMilliseconds = (n: number) => n * 24 * 60 * 60 * 1000;
        const nDaysAfter = new Date();
        nDaysAfter.setMilliseconds(base.getMilliseconds() + toMilliseconds(n));

        return isSameDate(now, nDaysAfter);

      })
        .map(({id}) => (id))
        .filter(isNotNullOrUndefined));
      //
      // U ::= ids set of nDaysAfter
      // A ::= usedTodayIds
      // B ::= toBeDeletedIds
      // B = U cap not A 
      const toBeDeletedIds = nDaysAfters.map(({id}) => id)
        .filter(isNotNullOrUndefined)
        .filter((id) => !shouldExistTodayIds.has(id));

      await db.toDayId.bulkDelete(toBeDeletedIds);
      const alreadyExistIds = new Set(((await db.toDayId.toArray()).map(({id}) => id)));

      // create new todayIds
      const shouldBeCreateTodayIds = Array.from(shouldExistTodayIds).filter((id) => alreadyExistIds.has(id));
      await db.toDayId.bulkAdd(shouldBeCreateTodayIds.map((id) => ({id, createdAt: now, done: false})));
    });
  } catch (e) {
    throw e;
  }


};

const isSameDate = (date1: Date, date2: Date): boolean => {
  const [y1, m1, d1] = [date1.getFullYear(), date1.getMonth(), date1.getDate()];
  const [y2, m2, d2] = [date2.getFullYear(), date2.getMonth(), date2.getDate()];
  return y1 === y2 && m1 === m2 && d1 === d2;
};
