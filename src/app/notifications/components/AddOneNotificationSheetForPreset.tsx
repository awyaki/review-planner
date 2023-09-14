"use client";
import { useState, useCallback, useRef, MouseEventHandler } from "react";
import { Sheet } from "@/components";

type Props = {
  onClose: () => void;
  onAddNotification?: (day: number) => void;
};

export const AddOneNotificationSheetForPreset: React.FC<Props> = ({
  onClose,
  onAddNotification,
}) => {
  const [inputValue, setInputValue] = useState("");
  const nDaysAfterInput = useRef<HTMLInputElement>(null);

  const handleAddNotification: MouseEventHandler<HTMLButtonElement> =
    useCallback(
      (e) => {
        e.preventDefault();
        if (nDaysAfterInput.current) {
          if (nDaysAfterInput.current.reportValidity()) {
            onAddNotification
              ? onAddNotification(Number(inputValue))
              : undefined;
            onClose();
          }
        }
      },
      [inputValue, onAddNotification, onClose, nDaysAfterInput]
    );

  return (
    <Sheet onClose={onClose} color="reverse">
      <div className="flex flex-col justify-between">
        <form className="px-5 pb-28">
          <div className="mb-8">
            <input
              ref={nDaysAfterInput}
              className="w-24 mr-3 bg-light-gray text-dark-gray"
              min={1}
              required
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <span>日</span>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="w-1/3 px-2 py-2 rounded-lg bg-gray text-dark-gray"
              onClick={onClose}
            >
              キャンセル
            </button>
            <button
              className="w-1/3 px-2 py-2 rounded-lg bg-bg-primary text-primary"
              onClick={handleAddNotification}
            >
              追加
            </button>
          </div>
        </form>
      </div>
    </Sheet>
  );
};
