import { List } from "@/components";
import { dateToString } from "@/lib";
import { Notification } from "@/db";

type Props = {
  schedule: Notification[];
  onDelete?: (id: number) => void;
};

export const Schedule: React.FC<Props> = ({ schedule, onDelete }) => {
  const reconstructed = reconstructbyBaseDate(schedule);
  return (
    <ul>
      {reconstructed
        .sort((a, b) => {
          const d1 = a.baseDate;
          const d2 = b.baseDate;
          if (d1 < d2) return -1;
          return 1;
        })
        .map(({ baseDate, days }) => {
          return (
            <li className="mb-5" key={baseDate.toString()}>
              <div className="mb-2">{`基準：${dateToString(baseDate)}`}</div>
              <List
                data={days.map(({ id, day }) => ({
                  id,
                  text: `${day.toString()}日後`,
                }))}
                onDelete={onDelete}
              />
            </li>
          );
        })}
    </ul>
  );
};

const reconstructbyBaseDate = (
  schedule: Notification[]
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
