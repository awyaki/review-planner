import { List } from "@/components";

type Props = {
  schedule: Map<Date, number[]>;
};

export const Schedule: React.FC<Props> = ({ schedule }) => {
  return (
    <ul>
      {Array.from(schedule)
        .sort((a, b) => {
          const d1 = a[0];
          const d2 = b[0];
          if (d1 < d2) return -1;
          return 1;
        })
        .map(([date, days]) => {
          return (
            <li className="mb-5" key={date.toString()}>
              <div className="mb-2">{date.toLocaleDateString()}</div>
              <List
                data={days.map((day) => ({
                  id: day.toString(),
                  text: `${day.toString()}日後`,
                }))}
              />
            </li>
          );
        })}
    </ul>
  );
};
