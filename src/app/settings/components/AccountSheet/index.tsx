import { SmallButton, LargeButton } from "@/components";
import { motion } from "framer-motion";

type Props = {
  onClose: () => void;
};

const AccountSheet: React.FC<Props> = ({ onClose }) => {
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
        <div className="px-5 pt-5 mb-10">
          <h2 className="mb-5 text-lg">Account</h2>
          <div className="flex mb-5 gap-5">
            <svg width={36} height={36}>
              <circle cx={18} cy={18} r={18}></circle>
            </svg>
            <div>Example name</div>
          </div>
          <div className="mb-8">
            <SmallButton text="サインアウト" onClick={() => {}} />
          </div>
          <div>
            <SmallButton text="アカウント削除" onClick={() => {}} />
          </div>
        </div>
        <LargeButton text="閉じる" onClick={onClose} />
      </motion.section>
    </>
  );
};

export { AccountSheet };
