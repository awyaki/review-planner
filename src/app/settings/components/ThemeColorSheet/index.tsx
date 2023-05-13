import { motion } from "framer-motion";

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
      ></motion.section>
    </>
  );
};

export { ThemeColorSheet };
