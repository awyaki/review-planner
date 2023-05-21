"use client";
import { useState } from "react";
import { type NextPage } from "next";
import { List, SmallButton } from "@/components";
const Page: NextPage = () => {
  const [inputValue, setInputValue] = useState("");
  return (
    <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
      <header className="flex justify-end mb-10">
        <SmallButton onClick={() => {}} text="メニュー" />
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
      <SmallButton onClick={() => {}} text="通知を追加" />
      <div className="absolute bottom-0 left-0 w-full">
        <button className="w-1/2 py-5 rounded-tl-md bg-gray text-dark-gray">
          キャンセル
        </button>
        <button className="w-1/2 py-5 rounded-tr-md bg-primary text-text-on-primary">
          作成
        </button>
      </div>
    </article>
  );
};

export default Page;
