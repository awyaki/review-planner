"use client";
import { useState } from "react";
import { createPortal } from "react-dom";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import { AccountSheet, ThemeColorCircle } from "./components";

const Page: NextPage = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {isOpen &&
        createPortal(
          <AccountSheet onClose={() => setIsOpen(false)} />,
          document.body
        )}
      <article className="h-screen p-5 bg-sky">
        <header className="pt-2 pb-6">
          <button
            className="flex items-center mb-2 text-white"
            onClick={() => router.back()}
          >
            <AiOutlineLeft className="mr-1" />
            <span>戻る</span>
          </button>
        </header>
        <h1 className="mb-4 text-xl text-white">設定</h1>
        <ul className="mb-10 text-dark-gray">
          <li className="p-4 list-none rounded-t-lg bg-light-gray">
            <button
              className="flex justify-between w-full"
              onClick={() => setIsOpen(true)}
            >
              <span>アカウント</span>
              <span>Example name</span>
            </button>
          </li>
          <li className="flex items-center justify-between p-4 list-none bg-gray">
            <span>テーマカラー</span>
            <span>
              <ThemeColorCircle background="white" theme="sky" />
            </span>
          </li>
          <li className="flex justify-between p-4 list-none rounded-b-lg bg-light-gray">
            <span>IDの表示方法</span>
            <span>十進法</span>
          </li>
        </ul>
      </article>
    </>
  );
};

export default Page;
