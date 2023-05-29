import { type FC } from "react";

type ColorVariants = "gray" | "light-gray";

type RoundedVariants = "top" | "bottom" | "both" | "none";

type BaseOfVariants = "text-left w-full py-2 px-5";
const variants = {
  gray: {
    top: "text-left w-full py-2 px-5 bg-gray text-dark-gray rounded-t-lg",
    bottom: "text-left w-full py-2 px-5 bg-gray text-dark-gray rounded-b-lg",
    both: "text-left w-full py-2 px-5 bg-gray text-dark-gray rounded-t-lg rounded-b-lg",
    none: "text-left w-full py-2 px-5 bg-gray text-dark-gray",
  },
  "light-gray": {
    top: "text-left w-full py-2 px-5 bg-light-gray text-dark-gray rounded-t-lg",
    bottom:
      "text-left w-full py-2 px-5 bg-light-gray text-dark-gray rounded-b-lg",
    both: "text-left w-full py-2 px-5 bg-light-gray text-dark-gray rounded-t-lg rounded-b-lg",
    none: "text-left w-full py-2 px-5 bg-light-gray text-dark-gray",
  },
} satisfies {
  [color in ColorVariants]: {
    [round in RoundedVariants]:
      | `${BaseOfVariants} bg-${color} text-dark-gray rounded-${"t" | "b"}-lg`
      | `${BaseOfVariants} bg-${color} text-dark-gray rounded-t-lg rounded-b-lg`
      | `${BaseOfVariants} bg-${color} text-dark-gray`;
  };
};

type Props = {
  id: string;
  color: ColorVariants;
  rounded?: RoundedVariants;
  onClick: (id: string) => void;
};

export const IdItem: FC<Props> = ({ id, color, onClick, rounded = "none" }) => {
  return (
    <button
      className={`${variants[color][rounded]}`}
      onClick={() => onClick(id)}
    >
      {id}
    </button>
  );
};
