import { Sheet } from "@/components";

type Props = {
  onClose: () => void;
};

const BaseSheet: React.FC<Props> = ({ onClose }) => {
  return (
    <Sheet onClose={onClose}>
      <h2 className="mb-5 text-lg">IDの表示形式</h2>
      <BaseSelectButton isSelected text="16進法" />
    </Sheet>
  );
};

type BaseSelectButtonProps = {
  isSelected: boolean;
  text: string;
};

const BaseSelectButton: React.FC<BaseSelectButtonProps> = ({
  isSelected,
  text,
}) => {
  const variants = isSelected
    ? "flex items-center justify-between w-full px-5 py-2 rounded-md  bg-bg-secondary text-text-on-bg-secondary border border-primary"
    : "flex items-center justify-between w-full px-5 py-2 rounded-md  border-bg-secondary border";
  return (
    <button className={variants}>
      <div className="">{text}</div>
      {isSelected && <div className="text-xs">選択中</div>}
    </button>
  );
};

export { BaseSheet };
