"use client";
import { NextPage } from "next";
import { SmallButton } from "@/components";
import { HeaderWithMenu } from "@/app/components";
import { List } from "@/components";
import { useAddPlaceSheet } from "./hooks";

const Page: NextPage = () => {
  const [render, handleOpen] = useAddPlaceSheet(() => {});
  const stub = [
    { id: 0, text: "英語ノート" },
    { id: 1, text: "手帳vol1" },
  ];
  return (
    <>
      {render()}
      <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
        <HeaderWithMenu />
        <h1 className="mb-5 text-xl">記録場所リスト</h1>
        <div className="mb-5">
          <List data={stub} onDelete={() => {}} />
        </div>
        <SmallButton text="作成する" onClick={handleOpen} />
      </article>
    </>
  );
};

export default Page;
