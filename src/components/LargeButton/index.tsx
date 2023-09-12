import { type FC } from "react";

type Props = {
  text: string;
  onClick: () => void;
};

const LargeButton: FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className="w-full py-4 text-text-on-bg-secondary bg-bg-secondary rounded-t-xl"
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export { LargeButton };
