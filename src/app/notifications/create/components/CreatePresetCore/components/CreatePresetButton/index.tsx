import { MouseEventHandler } from "react";

type Props = {
  onCreatePreset: MouseEventHandler<HTMLButtonElement>;
};

export const CretatePresetButton: React.FC<Props> = ({ onCreatePreset }) => {
  return (
    <button
      form="title_form"
      className="w-1/3 px-2 py-2 rounded-lg bg-bg-secondary text-text-on-bg-secondary"
      onClick={onCreatePreset}
    >
      作成
    </button>
  );
};
