import { List } from "@/components";
import { dateToString } from "@/lib";
import { DaysAfter } from "@/db";
import { reconstructByBaseDate } from "@/lib";

type Props = {
  schedule: DaysAfter[];
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
                data={days.map(({ id, day }) => {
                  const date = new Date(baseDate);
                  date.setDate(baseDate.getDate() + day);
                  const now = new Date();
                  return {
                    id,
                    text: `${day.toString()}日後`,
                    isCompleted: now > date,
                  };
                })}
                onDelete={onDelete}
              />
            </li>
          );
        })}
    </ul>
  );
};
