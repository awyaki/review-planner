import { type FC } from "react";
import { Colors } from "@/lib/colors";

const colorVariant = {
  gray: "bg-gray text-dark-gray",
  "light-gray": "bg-light-gray text-dark-gray",
} satisfies {
  [k in Colors]?: `bg-${Colors} text-${Colors}`;
};

type ColorVariantKeys = keyof typeof colorVariant;

const roundedVariant = {
  top: "rounded-t-lg",
  bottom: "rounded-b-lg",
  none: "",
} satisfies {
  [k in "top" | "bottom" | "none"]: `rounded-${"t" | "b"}-lg` | "";
};

type RoundedVariantKeys = keyof typeof roundedVariant;

type Props = {
  text: string;
  color: ColorVariantKeys;
  rounded?: RoundedVariantKeys;
};

const Item: FC<Props> = ({ text, color, rounded = "none" }) => {
  return (
    <li
      className={`py-2 px-5 ${colorVariant[color]} list-none ${roundedVariant[rounded]}`}
    >
      {text}
    </li>
  );
};

export { Item };
