"use client";
import { type FC } from "react";
import { Item, type ColorVariants, RoundedVariants } from "../Item";
import { AnimatePresence } from "framer-motion";

type Props = {
  data: { id: string; text: string; isCompleted?: boolean }[];
  onDelete?: (id: string) => void;
};

const List: FC<Props> = ({ data, onDelete }) => {
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
        {data.map(({ id, text, isCompleted }, i) => (
          <Item
            key={id}
            text={text}
            rounded={getRounded(i)}
            color={getColor(i)}
            onDelete={onDelete ? () => onDelete(id) : undefined}
            isCompleted={isCompleted}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};

export { List };
