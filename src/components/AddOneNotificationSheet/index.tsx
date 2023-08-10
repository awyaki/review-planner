"use client";
import { useState, useCallback } from "react";
import { Sheet } from "@/components";

type Props = {
  onClose: () => void;
  onAddNotification?: (baseDate: Date, daysAfter: number) => Promise<void>;
};

const AddOneNotificationSheet: React.FC<Props> = ({
  onClose,
  onAddNotification,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [baseDate, setBaseDate] = useState(getYearMonthDay(new Date()));

  const handleAddNotification = useCallback(async () => {
    onAddNotification
      ? await onAddNotification(new Date(baseDate), Number(inputValue))
      : undefined;
    onClose();
  }, [baseDate, inputValue, onAddNotification, onClose]);

  return (
    <Sheet onClose={onClose} color="reverse">
      <div className="flex flex-col justify-between">
        <div className="px-5 pb-28">
          <div className="flex">
            <span>基準：</span>
            <input
              className="px-1 mb-3 rounded-sm text-dark-gray"
              type="date"
              onChange={(e) => setBaseDate(e.target.value)}
              value={baseDate}
            />
          </div>
          <div className="flex items-center mb-10">
            <span className="w-1/4 h-10 mr-2 text-3xl text-center border-b-2 border-text-on-bg-secondary">
              {inputValue}
              {inputValue !== "" ? "日" : ""}
            </span>
          </div>
          <ul className="grid grid-cols-3 grid-rows-3 gap-y-4 gap-x-6">
            {[1, 3, 5, 7, 14, 21, 30, 60, 90].map((day) => (
              <li className="" key={day}>
                <DayButton
                  day={day}
                  onClick={() => setInputValue(day.toString())}
                />
              </li>
            ))}
          </ul>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <button
            className="w-1/2 py-5 rounded-tl-md bg-gray text-dark-gray"
            onClick={onClose}
          >
            キャンセル
          </button>
          <button
            className="w-1/2 py-5 rounded-tr-md bg-bg-primary text-primary"
            onClick={handleAddNotification}
          >
            作成
          </button>
        </div>
      </div>
    </Sheet>
  );
};

const DayButton: React.FC<{ day: number; onClick: () => void }> = ({
  day,
  onClick,
}) => {
  return (
    <button
      className="w-full py-2 rounded-md bg-bg-primary text-primary"
      onClick={onClick}
    >
      {day}日
    </button>
  );
};

export { AddOneNotificationSheet };

const getYearMonthDay = (date: Date): string => {
  const y = `${date.getFullYear()}`;
  const m = (() => {
    const m = date.getMonth() + 1;
    return m >= 10 ? `${m}` : `0${m}`;
  })();
  const d = (() => {
    const d = date.getDate();
    return d >= 10 ? `${d}` : `0${d}`;
  })();

  return `${y}-${m}-${d}`;
};
