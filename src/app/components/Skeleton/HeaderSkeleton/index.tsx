import { AiOutlineLeft } from "react-icons/ai";
export const HeaderSkeleton = () => {
  return (
    <header className="pt-2 pb-6">
      <div className="flex items-center mb-2">
        <AiOutlineLeft className="mr-1" />
        <span>戻る</span>
      </div>
    </header>
  );
};
