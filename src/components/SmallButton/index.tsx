import { type FC } from "react";

const colorVariants = {
  normal: "px-4 py-1 rounded-lg bg-bg-secondary text-text-on-bg-secondary",
  reverse: "px-4 py-1 rounded-lg bg-bg-primary text-primary",
} satisfies {
  normal: "px-4 py-1 rounded-lg bg-bg-secondary text-text-on-bg-secondary";
  reverse: "px-4 py-1 rounded-lg bg-bg-primary text-primary";
};

type Props = {
  text: string;
  color?: keyof typeof colorVariants;
  onClick?: () => void;
};

export const SmallButton: FC<Props> = ({ text, color = "normal", onClick }) => {
  return (
    <button type="button" className={colorVariants[color]} onClick={onClick}>
      {text}
    </button>
  );
};
