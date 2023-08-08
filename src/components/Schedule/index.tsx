import { List } from "@/components";
import { dateToString } from "@/lib";
import { Notification } from "@/db";

type Props = {
  schedule: Notification[];
  onDelete?: (id: number) => void;
};

export const Schedule: React.FC<Props> = ({ schedule, onDelete }) => {
  return (
    <ul>
      {schedule
        .sort((a, b) => {
          const d1 = a.baseDate;
          const d2 = b.baseDate;
          if (d1 < d2) return -1;
          return 1;
        })
        .map(({ baseDate, daysAfter }) => {
          return (
            <li className="mb-5" key={baseDate.toString()}>
              <div className="mb-2">{`基準：${dateToString(baseDate)}`}</div>
              <List
                data={daysAfter.map((day) => ({
                  id: day.id,
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
