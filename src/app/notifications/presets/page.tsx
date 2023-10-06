import type { NextPage, Metadata } from "next";
import { HeaderWithMenu } from "@/app/components";
import { PresetList, CreatePresetButton } from "./components";

export const metadata: Metadata = {
  title: "Review Planner | 通知プリセット",
};

const Page: NextPage = () => {
  return (
    <>
      <article className="flex flex-col justify-between h-screen bg-bg-primary text-text-on-bg-primary">
        <div className="px-5 pt-5">
          <HeaderWithMenu />
          <h2 className="mb-8 text-xl">通知プリセットのリストを見る</h2>
          <div className="mb-8">
            <PresetList />
          </div>
          <CreatePresetButton />
        </div>
      </article>
    </>
  );
};

export default Page;
