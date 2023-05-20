import { type FC } from "react";

type Props = {
  text: string;
  onClick: () => void;
};

export const SmallButton: FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className="px-4 py-1 rounded-lg bg-bg-secondary text-text-on-gb-secondary"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
