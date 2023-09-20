"use client";
import { useState, useCallback, useMemo } from "react";
import { Sheet } from "@/components";
import useSWR from "swr";
import { getAllPresets } from "@/db";

type Props = {
  onClose: () => void;
  onAddPreset?: () => Promise<void>;
};

export const SelectPresetSheet: React.FC<Props> = ({
  onClose,
  onAddPreset,
}) => {
  const [selected, setSelected] = useState<number | null>(null);
  const [baseDate, setBaseDate] = useState(getYearMonthDay(new Date()));
  const { data: presets } = useSWR("/presets", getAllPresets);
  return (
    <Sheet color="reverse" onClose={onClose}>
      <div className="px-5 pb-5">
        <h2 className="mb-5 text-lg">通知プリセットを選択</h2>
        <div className="flex">
          <span>基準：</span>
          <input
            className="px-1 mb-3 rounded-sm text-dark-gray"
            type="date"
            onChange={(e) => setBaseDate(e.target.value)}
            value={baseDate}
          />
        </div>
        <ul className="mb-4">
          {presets
            ? presets.map(({ id, name }, i) => (
                <li key={id} className={i === presets.length - 1 ? "" : "mb-3"}>
                  <SelectPresetButton
                    text={name}
                    onClick={() => setSelected(id ?? null)}
                    isSelected={selected === id}
                  />
                </li>
              ))
            : undefined}
        </ul>
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
            onClick={() => {}}
          >
            確定
          </button>
        </div>
      </div>
    </Sheet>
  );
};

type SelectPresetButtonProps = {
  isSelected: boolean;
  onClick: () => void;
  text: string;
};

const SelectPresetButton: React.FC<SelectPresetButtonProps> = ({
  onClick,
  isSelected,
  text,
}) => {
  const variants = isSelected
    ? "flex items-center justify-between w-full px-5 py-2 rounded-md  bg-bg-primary text-text-on-bg-primary border border-primary"
    : "flex items-center justify-between w-full px-5 py-2 rounded-md  border-bg-primary border";
  return (
    <button className={variants} onClick={onClick} type="button">
      <div>{text}</div>
      {isSelected && <div className="text-xs">選択中</div>}
    </button>
  );
};

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
