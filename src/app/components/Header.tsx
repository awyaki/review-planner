"use client";
import { AiOutlineLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
export const Header = () => {
  const router = useRouter();
  return (
    <header className="pt-2 pb-6">
      <button
        className="flex items-center mb-2"
        onClick={() => router.back()}
        type="button"
      >
        <AiOutlineLeft className="mr-1" />
        <span>戻る</span>
      </button>
    </header>
  );
};
