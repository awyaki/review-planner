"use client";
import { useContext } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import { ThemeColorCircle } from "./components";
import { ThemeColorContext, AuthContext } from "@/app/providers";
import { useAccountSheet, useThemeColorSheet } from "./hooks";

const Page: NextPage = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeColorContext);
  const user = useContext(AuthContext);
  const [renderAccountSheet, handleOpenAccountSheet] = useAccountSheet(user);
  const [renderThemeColorSheet, handleOpenThemeColorSheet] =
    useThemeColorSheet();
  return (
    <>
      {renderAccountSheet()}
      {renderThemeColorSheet()}
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
            <button
              type="button"
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
        </ul>
      </article>
    </>
  );
};

export default Page;
