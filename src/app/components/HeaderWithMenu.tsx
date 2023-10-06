"use client";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { SmallButton } from "@/components";

const colorVariants = {
  normal: "flex items-center text-primary",
  reverse: "flex items-center text-text-on-primary",
} satisfies {
  normal: "flex items-center text-primary";
  reverse: "flex items-center text-text-on-primary";
};

type Props = {
  color?: keyof typeof colorVariants;
};

export const HeaderWithMenu: React.FC<Props> = ({ color = "normal" }) => {
  const router = useRouter();
  return (
    <header className="flex items-center justify-between mb-5">
      <button
        type="button"
        className={colorVariants[color]}
        onClick={() => router.back()}
      >
        <AiOutlineLeft className="mr-1" />
        <span>戻る</span>
      </button>
      <Link href="/menu">
        <SmallButton color="reverse" text="メニュー" />
      </Link>
    </header>
  );
};
