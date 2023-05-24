import { type FC } from "react";
import { Colors } from "@/lib/colors";
import { motion, type PanHandlers, useAnimate } from "framer-motion";
import { MdDelete, MdModeEdit } from "react-icons/md";

const colorVariant = {
  gray: "bg-gray text-dark-gray shrink-0 py-2 px-5 w-full select-none",
  "light-gray":
    "bg-light-gray text-dark-gray shrink-0 py-2 px-5 w-full select-none",
} satisfies {
  [k in Colors]?:
    | `bg-gray text-dark-gray shrink-0 py-2 px-5 w-full select-none`
    | `bg-light-gray text-dark-gray shrink-0 py-2 px-5 w-full select-none`;
};

export type ColorVariants = "gray" | "light-gray";

const roundedVariant = {
  top: "rounded-t-lg flex w-full list-none overflow-x-hidden cursor-pointer",
  bottom: "rounded-b-lg flex w-full list-none overflow-x-hidden cursor-pointer",
  both: "rounded-t-lg rounded-b-lg flex w-full list-none overflow-x-hidden cursor-pointer",
  none: "flex w-full list-none overflow-x-hidden cursor-pointer",
} satisfies {
  [k in "top" | "bottom" | "none" | "both"]:
    | `rounded-${
        | "t"
        | "b"}-lg flex w-full list-none overflow-x-hidden cursor-pointer`
    | `rounded-t-lg rounded-b-lg flex w-full list-none overflow-x-hidden cursor-pointer`
    | "flex w-full list-none overflow-x-hidden cursor-pointer";
};

export type RoundedVariants = "top" | "bottom" | "both" | "none";

type Props = {
  text: string;
  color: ColorVariants;
  onClick?: () => void;
  onDelete?: () => void;
  onUpdate?: () => void;
  rounded?: RoundedVariants;
};

const ClickableItem: FC<Props> = ({
  text,
  color,
  rounded = "none",
  onClick,
  onUpdate,
  onDelete,
}) => {
  const [scope, animate] = useAnimate();

  const itemBodySelector = "item-body";
  const deleteIconSelector = "delete-icon";
  const updateIconSelector = "update-icon";

  const handlePanEnd: PanHandlers["onPanEnd"] = (e, info) => {
    const target = e.target;
    if (!(target instanceof HTMLElement)) return;

    const x = info.offset.x;
    const v = info.velocity.x;
    const width = target.clientWidth;
    const animationStartBoundary = width / 2;
    const animationStartSpeed = 500;

    if (x > animationStartBoundary || v > animationStartSpeed) {
      animate(`.${updateIconSelector}`, { width: "100%" }, { duration: 0.2 });
      if (onUpdate) onUpdate();
    } else if (x < -animationStartBoundary || v < -animationStartSpeed) {
      animate(
        `.${deleteIconSelector}`,
        { width: "100%", x: "-100%" },
        { duration: 0.2 }
      );
      animate(`.${updateIconSelector}`, { width: 0 }, { duration: 0.2 });
      if (onDelete) onDelete();
    } else {
      if (x >= 0) {
        animate(`.${updateIconSelector}`, { width: 0 }, { duration: 0.2 });
        return;
      } else {
        animate(
          `.${deleteIconSelector}`,
          { width: 0, x: "100%" },
          { duration: 0.4 }
        );
      }
    }
  };

  const handlePan: PanHandlers["onPan"] = (e, info) => {
    const x = info.offset.x;
    if (x >= 0) {
      animate(`.${updateIconSelector}`, { width: x }, { duration: 0 });
    } else {
      animate(`.${deleteIconSelector}`, { width: -x, x: x }, { duration: 0 });
    }
  };

  return (
    <motion.li
      ref={scope}
      exit={{ opacity: 0 }}
      className={`${roundedVariant[rounded]}`}
      layout
      onClick={onClick}
    >
      <motion.div
        className={`flex items-center justify-center w-0 text-white shrink-0 ${updateIconSelector} bg-dark-gray`}
      >
        <MdModeEdit />
      </motion.div>
      <motion.div
        className={`${itemBodySelector} ${colorVariant[color]}`}
        whileTap={{ cursor: "grabbing" }}
        onPanEnd={handlePanEnd}
        onPan={handlePan}
      >
        {text}
      </motion.div>
      <motion.div
        className={`flex items-center justify-center w-0 text-white shrink-0 ${deleteIconSelector} bg-dark-gray`}
      >
        <MdDelete />
      </motion.div>
    </motion.li>
  );
};

export { ClickableItem };
