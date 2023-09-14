"use client";
import { useState, useCallback, MouseEventHandler, useRef } from "react";
import { Sheet } from "@/components";
import { NDaysAfterForClient } from "@/db";

type Props = {
  onClose: () => void;
  onAddNotification?: (nDaysAfter: Omit<NDaysAfterForClient, "id">) => void;
};

const AddOneNotificationSheet: React.FC<Props> = ({
  onClose,
  onAddNotification,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [baseDate, setBaseDate] = useState(getYearMonthDay(new Date()));
  const nDaysAfterInput = useRef<HTMLInputElement>(null);
  const dateInput = useRef<HTMLInputElement>(null);

  const handleAddNotification: MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (e) => {
        e.preventDefault();
        if (nDaysAfterInput.current && dateInput.current) {
          if (
            dateInput.current.reportValidity() &&
            nDaysAfterInput.current.reportValidity()
          ) {
            onAddNotification
              ? onAddNotification({
                  base: new Date(baseDate),
                  n: Number(inputValue),
                })
              : undefined;
            onClose();
          }
        }
      },
      [baseDate, inputValue, onAddNotification, onClose, nDaysAfterInput]
    );

  return (
    <Sheet onClose={onClose} color="reverse">
      <div className="flex flex-col justify-between">
        <form className="px-5 pb-28">
          <div className="flex mb-5">
            <span>基準：</span>
            <input
              ref={dateInput}
              className="px-1 mb-3 rounded-sm text-dark-gray"
              type="date"
              required
              onChange={(e) => setBaseDate(e.target.value)}
              value={baseDate}
            />
          </div>
          <div className="mb-8">
            <input
              ref={nDaysAfterInput}
              className="w-24 mr-3 bg-light-gray text-dark-gray"
              type="number"
              min={1}
              max={365}
              required
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <span>日</span>
          </div>
          <div className="flex gap-3">
            <button
              className="w-1/3 px-2 py-2 rounded-lg bg-gray text-dark-gray"
              onClick={onClose}
              type="button"
            >
              キャンセル
            </button>
            <button
              className="w-1/3 px-2 py-2 rounded-lg bg-bg-primary text-primary"
              onClick={handleAddNotification}
            >
              作成
            </button>
          </div>
        </form>
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
      type="button"
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
