import { NotificationItem } from "../NotificationItem";

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

              <ul className="mb-3">
                {daysAfter.map((day, i) => {
                  const color: Parameters<
                    typeof NotificationItem
                  >["0"]["color"] = i % 2 === 0 ? "light-gray" : "gray";
                  const rounded: Parameters<
                    typeof NotificationItem
                  >["0"]["rounded"] = (() => {
                    if (daysAfter.length === 1) return "both";
                    if (i === 0) return "top";
                    if (i === daysAfter.length - 1) return "bottom";
                    return "none";
                  })();
                  return (
                    <li key={day}>
                      <NotificationItem
                        color={color}
                        rounded={rounded}
                        day={`${day}日`}
                        isCompleted={true}
                        onClick={() => {}}
                      />
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
    </ul>
  );
};
