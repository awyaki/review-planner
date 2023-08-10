import { List } from "@/components";
import { dateToString } from "@/lib";
import { Notification } from "@/db";
import { reconstructByBaseDate } from "@/lib";

type Props = {
  schedule: Notification[];
  onDelete?: (id: number) => void;
};

export const ScheduleForIdInfo: React.FC<Props> = ({ schedule, onDelete }) => {
  const reconstructed = reconstructByBaseDate(schedule);
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
                  isCompleted: true,
                }))}
                onDelete={onDelete}
              />
            </li>
          );
        })}
    </ul>
  );
};
