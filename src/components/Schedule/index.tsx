import { List } from "@/components";
import { dateToString } from "@/lib";
import { NDaysAfterForClient } from "@/db";

type Props = {
  nDaysAfters: NDaysAfterForClient[];
  onDelete?: (id: number) => void;
};

export const Schedule: React.FC<Props> = ({ nDaysAfters, onDelete }) => {
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
                data={days.map(({ id, n }) => ({
                  id,
                  text: `${n.toString()}日後`,
                }))}
                onDelete={onDelete}
              />
            </li>
          );
        })}
    </ul>
  );
};

type DaysAftersByDates = { base: Date; days: { id: number; n: number }[] }[];
const reconstructNDaysAfters = (
  nDaysAfters: NDaysAfterForClient[]
): DaysAftersByDates => {
  return nDaysAfters.reduce<DaysAftersByDates>((acc, nDaysAfter) => {
    const { id, base, n } = nDaysAfter;
    const index = acc.findIndex((v) => v.base === base);
    if (index === -1) {
      return acc.concat({ base, days: [{ id, n }] });
    } else {
      const nextAcc = [...acc];
      nextAcc[index].days = acc[index].days.concat({ id, n });
      return nextAcc;
    }
  }, []);
};
