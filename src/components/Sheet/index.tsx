import { useContext } from "react";
import { ThemeColorContext } from "@/providers";
import { motion } from "framer-motion";
import { colors, themes } from "@/lib/colors";

type Props = {
  onClose: () => void;
  color?: "normal" | "reverse";
  children?: React.ReactNode;
};

const colorVariant = {
  normal:
    "absolute bottom-0 left-0 w-screen bg-bg-primary text-text-on-bg-primary rounded-t-2xl",
  reverse:
    "absolute bottom-0 left-0 w-screen bg-bg-secondary text-text-on-bg-secondary rounded-t-2xl",
};

const Sheet: React.FC<Props> = ({ onClose, children, color = "normal" }) => {
  const { theme } = useContext(ThemeColorContext);
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        onClick={onClose}
        className="absolute top-0 left-0 w-screen h-screen cursor-pointer bg-gray bg-opacity-20"
      ></motion.div>
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.2 }}
        className={`${colorVariant[color]}`}
      >
        <div className="px-5 pt-5">
          <button className="flex justify-center w-full mb-2" onClick={onClose}>
            <div>
              <span className="text-xs">閉じる</span>
              <svg width={36} height={20}>
                <motion.path
                  stroke={
                    theme[
                      color === "normal"
                        ? "text-on-bg-primary"
                        : "text-on-bg-secondary"
                    ].code
                  }
                  strokeLinecap="round"
                  strokeWidth={3}
                  initial={{ d: "M 0 3 L 18 3" }}
                  animate={{ d: "M 0 3 L 18 13" }}
                  exit={{ d: "M 0 3 L 18 3" }}
                  transition={{ duration: 0.2 }}
                />
                <motion.path
                  stroke={
                    theme[
                      color === "normal"
                        ? "text-on-bg-primary"
                        : "text-on-bg-secondary"
                    ].code
                  }
                  strokeLinecap="round"
                  strokeWidth={3}
                  initial={{ d: "M 36 3 L 18 3" }}
                  animate={{ d: "M 36 3 L 18 13" }}
                  exit={{ d: "M 36 3 L 18 3" }}
                  transition={{ duration: 0.2 }}
                />
              </svg>
            </div>
          </button>
          {children}
        </div>
      </motion.section>
    </>
  );
};

export { Sheet };
