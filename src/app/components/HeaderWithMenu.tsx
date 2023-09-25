"use client";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { SmallButton } from "@/components";

export const HeaderWithMenu: React.FC = () => {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between mb-5">
      <button
        type="button"
        className="flex items-center text-primary"
        onClick={() => router.back()}
      >
        <AiOutlineLeft className="mr-1" />
        <span>戻る</span>
      </button>
      <Link href="/menu">
        <SmallButton text="メニュー" />
      </Link>
    </header>
  );
};
