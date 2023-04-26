import { type FC } from "react";
import { Colors } from "@/lib/colors";
import { motion, useAnimate, type DragHandlers } from "framer-motion";
import { MdDelete, MdModeEdit } from "react-icons/md";

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
  const [scope, animate] = useAnimate();

  const itemBodySelector = "item-body";
  const deleteIconSelector = "delete-icon";

  const handleDragEnd: DragHandlers["onDragEnd"] = async (e, info) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;
    const target = e.target;

    let width: number = 0;
    if (target instanceof HTMLDivElement) {
      width = target.clientWidth;
    }
    if (offset < -(width / 2) || velocity < -500) {
      await (async () => {
        animate(`.${itemBodySelector}`, { x: "-100%" });
        animate(`.${deleteIconSelector}`, { width: "100%", x: "-100%" });
      })();
      // TODO: implement onDelete
      // onDelete
    } else {
      animate(`.${itemBodySelector}`, { x: 0 });
      animate(`.${deleteIconSelector}`, { width: 0, x: 0 });
    }
  };

  const handleOnDrag: DragHandlers["onDrag"] = (e, info) => {
    animate(
      `.${deleteIconSelector}`,
      {
        width: -info.offset.x,
        x: info.offset.x,
      },
      {
        stiffness: 100,
        duration: 0,
      }
    );
  };

  return (
    <motion.li
      ref={scope}
      className={`flex w-full overflow-x-hidden list-none bg-dark-gray  ${roundedVariant[rounded]}`}
      whileTap={{ cursor: "grabbing" }}
    >
      <div className="flex items-center justify-center w-0 text-white shrink-0 update-icon bg-dark-gray">
        <MdModeEdit />
      </div>
      <motion.div
        className={`${itemBodySelector} shrink-0 py-2 px-5 w-full ${colorVariant[color]} ${roundedVariant[rounded]}`}
        onDragEnd={handleDragEnd}
        onDrag={handleOnDrag}
        drag="x"
        dragDirectionLock
      >
        {text}
      </motion.div>
      <div className="flex items-center justify-center w-0 text-white shrink-0 delete-icon bg-dark-gray">
        <MdDelete />
      </div>
    </motion.li>
  );
};

export { Item };
