import { type FC } from "react";
import {
  ClickableItem,
  type ColorVariants,
  RoundedVariants,
} from "../ClickableItem";
import { AnimatePresence } from "framer-motion";

type Props = {
  data: { id: string; text: string }[];
  onClick?: (id: string) => void;
  onDelete?: (id: string) => void;
};

const ClickableList: FC<Props> = ({ data, onClick, onDelete }) => {
  const getRounded = (i: number): RoundedVariants => {
    const length = data.length;
    if (length === 1) return "both";
    switch (i) {
      case 0:
        return "top";
      case length - 1:
        return "bottom";
      default:
        return "none";
    }
  };

  const getColor = (i: number): ColorVariants => {
    if (i % 2 === 0) return "light-gray";
    return "gray";
  };

  return (
    <ul>
      <AnimatePresence>
        {data.map(({ id, text }, i) => (
          <ClickableItem
            key={id}
            text={text}
            rounded={getRounded(i)}
            color={getColor(i)}
            onClick={onClick ? () => onClick(id) : undefined}
            onDelete={onDelete ? () => onDelete(id) : undefined}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};

export { ClickableList };
