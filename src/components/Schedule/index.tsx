import { List } from "@/components";
import { dateToString } from "@/lib";

type Props = {
  onDelete?: (id: number) => void;
};

export const Schedule: React.FC<Props> = ({ onDelete }) => {
  const reconstructed: {
    baseDate: Date;
    days: { id: number; day: number }[];
  }[] = [];
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
