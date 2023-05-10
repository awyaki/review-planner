import { Colors } from "@/lib/colors";

type Props = {
  color: Extract<Colors, "light-gray" | "gray">;
  text: string;
  rounded?: "top" | "bottom" | "none";
};

const getStyle = ({
  color,
  rounded = "none",
}: Pick<Props, "color" | "rounded">): string => {
  const _rounded = {
    top: "rounded-t-lg",
    bottom: "rounded-b-lg",
    none: "",
  } satisfies { [k in typeof rounded]: `rounded-${"t" | "b"}-lg` | "" };

  return `bg-${color} list-none text-dark-gray ${_rounded[rounded]} p-4`;
};

export const MenuItem: React.FC<Props> = ({ color, text, rounded }) => {
  const style = getStyle({ color, rounded });
  return <li className={style}>{text}</li>;
};
