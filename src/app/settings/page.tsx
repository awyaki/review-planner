"use client";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import { ThemeColorCircle } from "./components";
import { useAccountSheet, useThemeColorSheet } from "./hooks";

const Page: NextPage = () => {
  const router = useRouter();
  const [renderAccountSheet, handleOpenAccountSheet] = useAccountSheet();
  const [renderThemeColorSheet, handleOpenThemeColorSheet] =
    useThemeColorSheet();
  return (
    <>
      {renderAccountSheet()}
      {renderThemeColorSheet()}
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
          <li className="list-none rounded-t-lg bg-light-gray">
            <button
              className="flex justify-between w-full p-4"
              onClick={handleOpenAccountSheet}
            >
              <span>アカウント</span>
              <span>Example name</span>
            </button>
          </li>
          <li className="list-none bg-gray">
            <button
              className="flex items-center justify-between w-full p-4"
              onClick={handleOpenThemeColorSheet}
            >
              <span>テーマカラー</span>
              <span>
                <ThemeColorCircle background="white" theme="sky" />
              </span>
            </button>
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
