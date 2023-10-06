import type { NextPage, Metadata } from "next";
import { HeaderWithMenu } from "@/app/components";
import { CreatePresetCore } from "./components";

export const metadata: Metadata = {
  title: "Review Planner | 通知プリセットを作成する",
};

const Page: NextPage = () => {
  return (
    <article className="px-5 pt-5 bg-bg-primary text-text-on-bg-primary">
      <HeaderWithMenu />
      <CreatePresetCore />
    </article>
  );
};

export default Page;
