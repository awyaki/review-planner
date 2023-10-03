import { List } from "@/components";
import { dateToString } from "@/lib";
import { NDaysAfter } from "@/db";

type Props = {
  nDaysAfters: Required<NDaysAfter>[];
  onDelete?: (id: number) => void;
};

export const ScheduleForIdInfo: React.FC<Props> = ({
  nDaysAfters,
  onDelete,
}) => {
  const reconstructed = reconstructNDaysAfters(nDaysAfters);
  return (
    <ul>
      {reconstructed
        .sort((a, b) => {
          const d1 = a.base;
          const d2 = b.base;
          if (d1 < d2) return -1;
          return 1;
        })
        .map(({ base, days }) => {
          return (
            <li className="mb-5" key={base.toString()}>
              <div className="mb-2">{`基準：${dateToString(base)}`}</div>
              <List
                data={days
                  .sort((a, b) => (a.n > b.n ? 1 : -1))
                  .map(({ id, n, done }) => ({
                    id,
                    text: `${n.toString()}日後`,
                    isCompleted: done,
                  }))}
                onDelete={onDelete}
              />
            </li>
          );
        })}
    </ul>
  );
};

type DaysAftersByDates = {
  base: Date;
  days: { id: number; n: number; done: boolean }[];
}[];
export const reconstructNDaysAfters = (
  nDaysAfters: Required<NDaysAfter>[]
): DaysAftersByDates => {
  return nDaysAfters.reduce<DaysAftersByDates>((acc, nDaysAfter) => {
    const { id, base, n, done } = nDaysAfter;
    const index = acc.findIndex((v) => v.base.getTime() === base.getTime());
    if (index === -1) {
      return acc.concat({ base, days: [{ id, n, done }] });
    } else {
      const nextAcc = [...acc];
      nextAcc[index].days = acc[index].days.concat({ id, n, done });
      return nextAcc;
    }
  }, []);
};
