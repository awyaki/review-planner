import { type FC } from "react";
import { Colors } from "@/lib/colors";
import { motion, useAnimationControls, type DragHandlers } from "framer-motion";

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
  const controls = useAnimationControls();

  const handleDragEnd: DragHandlers["onDragEnd"] = async (e, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const target = e.target;

    let width: number = 0;
    if (target instanceof HTMLDivElement) {
      width = target.clientWidth;
    }

    if (offset < -(width / 2) || velocity < -500) {
      await controls.start({ x: "-100%", transition: { duration: 0.2 } });
    } else {
      controls.start({ x: 0, opacity: 1, transition: { duration: 0.5 } });
    }
  };

  return (
    <motion.li
      className="list-none"
      whileTap={{ cursor: "grabbing" }}
      layout
      transition={{ type: "spring", stiffness: 600, damping: 30 }}
    >
      <motion.div
        className={`py-2 px-5 ${colorVariant[color]} ${roundedVariant[rounded]}`}
        animate={controls}
        onDragEnd={handleDragEnd}
        drag="x"
        dragDirectionLock
      >
        {text}
      </motion.div>
    </motion.li>
  );
};

export { Item };
