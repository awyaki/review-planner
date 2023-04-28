import { type FC } from "react";
import { Colors } from "@/lib/colors";
import { motion, type PanHandlers, useAnimate } from "framer-motion";
import { MdDelete, MdModeEdit } from "react-icons/md";

const colorVariant = {
  gray: "bg-gray text-dark-gray",
  "light-gray": "bg-light-gray text-dark-gray",
} satisfies {
  [k in Colors]?: `bg-${Colors} text-${Colors}`;
};

export type ColorVariantKeys = keyof typeof colorVariant;

const roundedVariant = {
  top: "rounded-t-lg",
  bottom: "rounded-b-lg",
  none: "",
} satisfies {
  [k in "top" | "bottom" | "none"]: `rounded-${"t" | "b"}-lg` | "";
};

export type RoundedVariantKeys = keyof typeof roundedVariant;

type Props = {
  text: string;
  color: ColorVariantKeys;
  onDelete?: () => void;
  rounded?: RoundedVariantKeys;
};

const Item: FC<Props> = ({
  text,
  color,
  rounded = "none",
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
      className={`flex w-full list-none ${roundedVariant[rounded]} overflow-x-hidden`}
    >
      <motion.div
        className={`flex items-center justify-center w-0 text-white shrink-0 ${updateIconSelector} bg-dark-gray`}
      >
        <MdModeEdit />
      </motion.div>
      <motion.div
        className={`${itemBodySelector} shrink-0 py-2 px-5 w-full ${colorVariant[color]}`}
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

export { Item };
