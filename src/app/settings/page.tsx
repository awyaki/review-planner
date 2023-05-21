"use client";
import { useContext } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import { ThemeColorCircle } from "./components";
import { ThemeColorContext, BaseContext } from "@/providers";
import { useAccountSheet, useThemeColorSheet, useBaseSheet } from "./hooks";

const Page: NextPage = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeColorContext);
  const { base } = useContext(BaseContext);
  const [renderAccountSheet, handleOpenAccountSheet] = useAccountSheet();
  const [renderThemeColorSheet, handleOpenThemeColorSheet] =
    useThemeColorSheet();
  const [renderBaseSheet, handleOpenBaseSheet] = useBaseSheet();
  return (
    <>
      {renderAccountSheet()}
      {renderThemeColorSheet()}
      {renderBaseSheet()}
      <article className="h-screen p-5 bg-bg-secondary text-text-on-gb-secondary">
        <header className="pt-2 pb-6">
          <button
            className="flex items-center mb-2"
            onClick={() => router.back()}
          >
            <AiOutlineLeft className="mr-1" />
            <span>戻る</span>
          </button>
        </header>
        <h1 className="mb-4 text-xl">設定</h1>
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
                <ThemeColorCircle
                  color={theme.primary.code}
                  background={theme["bg-primary"].code}
                />
              </span>
            </button>
          </li>
          <li className="flex justify-between p-4 list-none rounded-b-lg bg-light-gray">
            <button
              className="flex items-center justify-between w-full py-1"
              onClick={handleOpenBaseSheet}
            >
              <span>IDの表示方法</span>
              <span>{base === "decimal" ? "十進法" : "十六進法"}</span>
            </button>
          </li>
        </ul>
      </article>
    </>
  );
};

export default Page;
