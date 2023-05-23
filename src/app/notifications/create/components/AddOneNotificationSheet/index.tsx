import { useState } from "react";
import { Sheet } from "@/components";

type Props = {
  onClose: () => void;
};

const AddOneNotificationSheet: React.FC<Props> = ({ onClose }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Sheet onClose={onClose} color="reverse">
      <div className="flex flex-col justify-between">
        <div className="px-5 mb-10">
          <div className="flex items-center mb-10">
            <span className="w-1/6 h-10 mr-2 text-3xl border-b-2 border-text-on-bg-secondary">
              {inputValue}
            </span>
            <button onClick={() => setInputValue("")}>
              <CancelIcon />
            </button>
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
        <div>
          <button
            className="w-1/2 py-5 rounded-tl-md bg-gray text-dark-gray"
            onClick={onClose}
          >
            キャンセル
          </button>
          <button className="w-1/2 py-5 rounded-tr-md bg-bg-primary text-primary">
            作成
          </button>
        </div>
      </div>
    </Sheet>
  );
};

const CancelIcon: React.FC = () => {
  return (
    <svg width={32} height={32}>
      <circle
        strokeWidth={2}
        cx={16}
        cy={16}
        r={12}
        fill="none"
        stroke="#ffffff"
      />
      <path stroke="#ffffff" d="M 11 11 L 21 21" />
      <path stroke="#ffffff" d="M 21 11 L 11 21" />
    </svg>
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
