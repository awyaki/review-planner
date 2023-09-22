import { List } from "@/components";
import { dateToString } from "@/lib";
import { NDaysAfterForClient } from "@/db";
import { reconstructNDaysAfters } from "@/lib";

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
                data={days
                  .sort((a, b) => (a.n > b.n ? 1 : -1))
                  .map(({ id, n }) => ({
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
