"use client";
import { useState } from "react";
import { useAddOneNotificationSheet } from "./hooks";
import { type NextPage } from "next";
import { List, SmallButton } from "@/components";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";

const Page: NextPage = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [render, handleOpen] = useAddOneNotificationSheet();
  return (
    <>
      {render()}
      <article className="flex flex-col justify-between h-screen bg-bg-primary text-text-on-bg-primary">
        <div className="px-5 pt-5">
          <header className="flex items-center justify-between mb-5">
            <button
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
          <input
            type="text"
            className="w-full px-3 py-2 mb-5 focus:outline-primary"
            value={inputValue}
            placeholder="タイトルを入力"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="mb-10">
            <List data={[{ id: "hoge", text: "Hello World" }]} />
          </div>
          <div>
            <SmallButton onClick={handleOpen} text="通知を追加" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <button
            className="w-1/2 py-5 rounded-tl-md bg-gray text-dark-gray"
            onClick={() => router.back()}
          >
            キャンセル
          </button>
          <button className="w-1/2 py-5 rounded-tr-md bg-primary text-text-on-primary">
            作成
          </button>
        </div>
      </article>
    </>
  );
};

export default Page;
