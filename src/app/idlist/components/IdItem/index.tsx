import { type FC } from "react";

type ColorVariants = "gray" | "light-gray";

type RoundedVariants = "top" | "bottom" | "both" | "none";

type BaseOfVariants =
  "flex justify-between items-center text-left w-full py-2 px-5";
const variants = {
  gray: {
    top: "flex justify-between items-center text-left w-full py-2 px-5 bg-gray text-dark-gray rounded-t-lg",
    bottom:
      "flex justify-between items-center text-left w-full py-2 px-5 bg-gray text-dark-gray rounded-b-lg",
    both: "flex justify-between items-center text-left w-full py-2 px-5 bg-gray text-dark-gray rounded-t-lg rounded-b-lg",
    none: "flex justify-between items-center text-left w-full py-2 px-5 bg-gray text-dark-gray",
  },
  "light-gray": {
    top: "flex justify-between items-center text-left w-full py-2 px-5 bg-light-gray text-dark-gray rounded-t-lg",
    bottom:
      "flex justify-between items-center text-left w-full py-2 px-5 bg-light-gray text-dark-gray rounded-b-lg",
    both: "flex justify-between items-center text-left w-full py-2 px-5 bg-light-gray text-dark-gray rounded-t-lg rounded-b-lg",
    none: "flex justify-between items-center text-left w-full py-2 px-5 bg-light-gray text-dark-gray",
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
  place?: string;
  color: ColorVariants;
  rounded?: RoundedVariants;
  onClick: (id: string) => void;
};

export const IdItem: FC<Props> = ({
  id,
  place,
  color,
  onClick,
  rounded = "none",
}) => {
  return (
    <button
      type="button"
      className={`${variants[color][rounded]}`}
      onClick={() => onClick(id)}
    >
      <span>{id}</span>
      <span>{place}</span>
    </button>
  );
};
