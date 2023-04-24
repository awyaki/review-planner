import { type FC } from "react";
import { Colors } from "@/lib/colors";

type Props = {
  text: string;
  textColor: Colors;
  color: Colors;
  onClick: () => void;
  roundedSide: "right" | "left";
};

const HalfButton: FC<Props> = ({
  text,
  textColor,
  color,
  roundedSide,
  onClick,
}) => {
  const bgColorVariant: { [k in Colors]: string } = {
    sky: "bg-sky",
    gray: "bg-gray",
    "dark-gray": "bg-dark-gray",
    "light-gray": "bg-light-gray",
    white: "bg-white",
  };

  const textColorVariant: { [k in Colors]: string } = {
    sky: "text-sky",
    gray: "text-gray",
    "dark-gray": "text-dark-gray",
    "light-gray": "text-light-gray",
    white: "text-white",
  };

  const roundedVariant = {
    right: "rounded-tr-lg",
    left: "rounded-tl-lg",
  };

  return (
    <button
      className={`px-2 py-5 ${bgColorVariant[color]} ${textColorVariant[textColor]} ${roundedVariant[roundedSide]} w-full`}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export { HalfButton };
