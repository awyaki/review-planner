"use client";
import { type FC } from "react";
import {
  ClickableItem,
  type ColorVariants,
  RoundedVariants,
} from "../ClickableItem";
import { AnimatePresence } from "framer-motion";

type Props = {
  data: { id: number; text: string }[];
  onClick?: (id: number, name?: string) => void;
  onDelete?: (id: number) => void;
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
            onClick={onClick ? () => onClick(id, text) : undefined}
            onDelete={onDelete ? () => onDelete(id) : undefined}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
};

export { ClickableList };
