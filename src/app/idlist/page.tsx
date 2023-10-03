import { NextPage } from "next";
import { HeaderWithMenu } from "@/app/components";
import { IdList, SearchIdButton } from "./components";

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
