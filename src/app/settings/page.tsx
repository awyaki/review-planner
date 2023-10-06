"use client";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import { OpenThemeColorSheetButton } from "./components";

const Page: NextPage = () => {
  const router = useRouter();
  return (
    <article className="h-screen p-5 bg-bg-secondary text-text-on-bg-secondary">
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
      <h1 className="mb-4 text-xl">設定</h1>
      <ul className="mb-10 text-dark-gray">
        <li className="list-none rounded-lg bg-light-gray">
          <OpenThemeColorSheetButton />
        </li>
      </ul>
    </article>
  );
};

export default Page;
