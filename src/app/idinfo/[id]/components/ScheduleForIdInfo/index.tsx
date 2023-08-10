import { List } from "@/components";

type Props = {
  schedules: {
    id: number;
    baseDate: Date;
    daysAfter: number[];
  }[];
};

export const ScheduleForIdInfo: React.FC<Props> = ({ schedules }) => {
  return (
    <ul>
      {Array.from(schedules)
        .sort((a, b) => {
          const d1 = a.baseDate;
          const d2 = b.baseDate;
          if (d1 < d2) return -1;
          return 1;
        })
        .map(({ baseDate, daysAfter }) => {
          return (
            <li className="mb-5" key={baseDate.toString()}>
              <div className="mb-2">{`基準：${baseDate.toLocaleDateString()}`}</div>
              <List
                data={daysAfter.map((day) => ({
                  id: day,
                  text: `${day}日後`,
                  isCompleted: true,
                }))}
                onDelete={() => {}}
              />
            </li>
          );
        })}
    </ul>
  );
};
