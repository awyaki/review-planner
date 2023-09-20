import { NDaysAfterForClient } from "@/db";

type DaysAftersByDates = { base: Date; days: { id: number; n: number }[] }[];
export const reconstructNDaysAfters = (
  nDaysAfters: NDaysAfterForClient[]
): DaysAftersByDates => {
  return nDaysAfters.reduce<DaysAftersByDates>((acc, nDaysAfter) => {
    const { id, base, n } = nDaysAfter;
    const index = acc.findIndex((v) => v.base.getTime() === base.getTime());
    if (index === -1) {
      return acc.concat({ base, days: [{ id, n }] });
    } else {
      const nextAcc = [...acc];
      nextAcc[index].days = acc[index].days.concat({ id, n });
      return nextAcc;
    }
  }, []);
};
