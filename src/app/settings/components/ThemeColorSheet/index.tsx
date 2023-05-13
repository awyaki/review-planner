import { ThemeColorCircle } from "../ThemeColorCircle";
import { motion } from "framer-motion";
import { LargeButton } from "@/components";

type Props = {
  onClose: () => void;
};

const ThemeColorSheet: React.FC<Props> = ({ onClose }) => {
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
        className="absolute bottom-0 left-0 w-screen bg-white text-dark-gray rounded-t-2xl"
      >
        <div className="flex flex-col justify-between">
          <div className="px-5 pt-5">
            <h2 className="mb-5 text-lg">テーマカラー</h2>
            <ul className="p-3 mb-5 bg-gray rounded-md">
              <li>
                <ThemeColorCircle background="white" theme="sky" />
              </li>
            </ul>
          </div>
          <LargeButton text="閉じる" onClick={onClose} />
        </div>
      </motion.section>
    </>
  );
};

export { ThemeColorSheet };
