"use client";
import { useState } from "react";
import { Sheet } from "@/components";

type Props = {
  onClose: () => void;
};

export const SelectPresetSheet: React.FC<Props> = ({ onClose }) => {
  const presets = ["単語用", "長期用", "短め"];
  const [selected, setSelected] = useState("単語用");

  return (
    <Sheet color="reverse" onClose={onClose}>
      <div className="px-5">
        <h2 className="mb-5 text-lg">通知プリセットを選択</h2>
        <ul>
          {presets.map((item, i) => (
            <li key={item} className={i === presets.length - 1 ? "" : "mb-3"}>
              <SelectPresetButton
                text={item}
                onClick={() => setSelected(item)}
                isSelected={selected === item}
              />
            </li>
          ))}
        </ul>
        <div className="absolute bottom-0 left-0 w-full">
          <button
            className="w-1/2 py-5 rounded-tl-md bg-gray text-dark-gray"
            onClick={onClose}
          >
            キャンセル
          </button>
          <button className="w-1/2 py-5 rounded-tr-md bg-bg-primary text-primary">
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
    <button className={variants} onClick={onClick}>
      <div>{text}</div>
      {isSelected && <div className="text-xs">選択中</div>}
    </button>
  );
};
