import { DaysAfter } from "@/db";
export const reconstructByBaseDate = (
  schedule: DaysAfter[]
): { baseDate: Date; days: { id: number; day: number }[] }[] => {
  return schedule.reduce<
    { baseDate: Date; days: { id: number; day: number }[] }[]
  >((acc, b) => {
    const { id, baseDate, daysAfter } = b;
    const index = acc.findIndex(
      (a) => a.baseDate.getTime() === baseDate.getTime()
    );
    if (index === -1) {
      return acc.concat({ baseDate, days: [{ id, day: daysAfter }] });
    } else {
      const o = {
        baseDate: acc[index].baseDate,
        days: acc[index].days
          .concat({ id, day: daysAfter })
          .sort((a, b) => (a.day > b.day ? 1 : -1)),
      };
      const newAcc = [...acc];
      newAcc[index] = o;
      return newAcc;
    }
  }, []);
};
