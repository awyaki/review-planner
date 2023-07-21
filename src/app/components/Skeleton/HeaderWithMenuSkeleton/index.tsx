import { AiOutlineLeft } from "react-icons/ai";
export const HeaderWithMenuSkeleton = () => {
  return (
    <header className="flex items-center justify-between mb-5">
      <div className="flex items-center text-primary">
        <AiOutlineLeft className="mr-1" />
        <div className="w-12 p-2 bg-bg-secondary rounded-md"></div>
      </div>
      <div className="px-8 py-3 rounded-lg bg-bg-secondary text-text-on-bg-secondary"></div>
    </header>
  );
};
