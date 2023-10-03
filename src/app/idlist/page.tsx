"use client";
import { NextPage } from "next";
import { HeaderWithMenu } from "@/app/components";
import { SmallButton } from "@/components";
import { useSearchPublishIdSheet } from "./hooks";
import { getAllIds } from "@/db";
import useSWR from "swr";
import { IdList } from "./components";

const Page: NextPage = () => {
  const { data: ids } = useSWR("/ids", getAllIds);
  const [render, handleOpen] = useSearchPublishIdSheet(ids ?? []);
  return (
    <>
      {render()}
      <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
        <HeaderWithMenu />
        <h1 className="mb-5 text-xl">最近発行したID</h1>
        <IdList />
        <SmallButton text="IDを検索" onClick={handleOpen} />
      </article>
    </>
  );
};

export default Page;
