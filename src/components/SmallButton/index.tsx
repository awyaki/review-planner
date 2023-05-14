import { type FC } from "react";
import { type Theme, baseColorVariant } from "@/lib/colors";

type Props = {
  text: string;
  onClick: () => void;
  theme: Theme;
};

export const SmallButton: FC<Props> = ({ text, onClick, theme }) => {
  return (
    <button
      className={`px-4 py-1 rounded-lg ${
        baseColorVariant[theme.primary][theme.background]
      }`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};
