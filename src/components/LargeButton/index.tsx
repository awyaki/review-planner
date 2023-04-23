import { type FC } from "react";

type Props = {
  text: string;
  onClick: () => void;
};

const LargeButton: FC<Props> = ({ text, onClick }) => {
  return (
    <button
      className="w-full py-4 text-white bg-sky rounded-t-xl"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { LargeButton };
