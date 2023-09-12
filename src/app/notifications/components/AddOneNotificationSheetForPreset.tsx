"use client";
import { useState, useCallback } from "react";
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

  const handleAddNotification = useCallback(() => {
    onAddNotification ? onAddNotification(Number(inputValue)) : undefined;
    onClose();
  }, [inputValue, onAddNotification, onClose]);

  return (
    <Sheet onClose={onClose} color="reverse">
      <div className="flex flex-col justify-between">
        <div className="px-5 pb-28">
          <div className="mb-8">
            <input
              className="w-24 mr-3 bg-light-gray text-dark-gray"
              min={1}
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
              type="button"
              className="w-1/3 px-2 py-2 rounded-lg bg-bg-primary text-primary"
              onClick={handleAddNotification}
            >
              追加
            </button>
          </div>
        </div>
      </div>
    </Sheet>
  );
};
