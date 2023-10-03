import { NextPage, type Metadata } from "next";
import { HeaderWithMenu } from "@/app/components";
import { IdList, SearchIdButton } from "./components";

export const metadata: Metadata = {
  title: "Review Planner | 発行したIDを見る",
};

const Page: NextPage = () => {
  return (
    <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
      <HeaderWithMenu />
      <h1 className="mb-5 text-xl">最近発行したID</h1>
      <IdList />
      <SearchIdButton />
    </article>
  );
};

export default Page;
