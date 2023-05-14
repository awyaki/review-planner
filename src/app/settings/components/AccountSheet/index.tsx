import { SmallButton, LargeButton } from "@/components";
import { motion } from "framer-motion";
import { Sheet } from "@/components";
import { Theme } from "@/lib/colors";

type Props = {
  onClose: () => void;
  theme: Theme;
};

const AccountSheet: React.FC<Props> = ({ onClose, theme }) => {
  return (
    <Sheet onClose={onClose}>
      <h2 className="mb-5 text-lg">アカウント</h2>
      <div className="flex mb-5 gap-5">
        <svg width={36} height={36}>
          <circle cx={18} cy={18} r={18}></circle>
        </svg>
        <div>Example name</div>
      </div>
      <div className="mb-8">
        <SmallButton theme={theme} text="サインアウト" onClick={() => {}} />
      </div>
      <div>
        <SmallButton theme={theme} text="アカウント削除" onClick={() => {}} />
      </div>
    </Sheet>
  );
};

export { AccountSheet };
