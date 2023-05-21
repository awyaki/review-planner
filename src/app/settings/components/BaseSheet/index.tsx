import { Sheet } from "@/components";

type Props = {
  onClose: () => void;
};

const BaseSheet: React.FC<Props> = ({ onClose }) => {
  return (
    <Sheet onClose={onClose}>
      <h2 className="mb-5 text-lg">IDの表示形式</h2>
      <ul>
        <li className="mb-3">
          <BaseSelectButton
            isSelected={true}
            text="十進法"
            onClick={() => {}}
          />
        </li>
        <li>
          <BaseSelectButton
            isSelected={false}
            text="十六進法"
            onClick={() => {}}
          />
        </li>
      </ul>
    </Sheet>
  );
};

type BaseSelectButtonProps = {
  isSelected: boolean;
  onClick: () => void;
  text: string;
};

const BaseSelectButton: React.FC<BaseSelectButtonProps> = ({
  onClick,
  isSelected,
  text,
}) => {
  const variants = isSelected
    ? "flex items-center justify-between w-full px-5 py-2 rounded-md  bg-primary text-text-on-primary border border-primary"
    : "flex items-center justify-between w-full px-5 py-2 rounded-md  border-primary border";
  return (
    <button className={variants} onClick={onClick}>
      <div>{text}</div>
      {isSelected && <div className="text-xs">選択中</div>}
    </button>
  );
};

export { BaseSheet };
