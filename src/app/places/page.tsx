"use client";
import { NextPage } from "next";
import { SmallButton } from "@/components";
import { HeaderWithMenu } from "@/app/components";
import { useAddPlaceSheet } from "./hooks";
import { PlacesList } from "./components";

const Page: NextPage = () => {
  const [render, handleOpen] = useAddPlaceSheet(() => {});
  return (
    <>
      {render()}
      <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
        <HeaderWithMenu />
        <h1 className="mb-5 text-xl">記録場所リスト</h1>
        <div className="mb-5">
          <PlacesList />
        </div>
        <SmallButton text="作成する" onClick={handleOpen} />
      </article>
    </>
  );
};

export default Page;
