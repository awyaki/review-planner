import { type FC } from "react";

type Props = {
  text: string;
  onClick: () => void;
};

export const SmallButton: FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className="px-4 py-1 text-white rounded-lg bg-sky"
      onClick={onClick}
    >
      {text}
    </button>
  );
};
