import type { NextPage, Metadata } from "next";
import { PresetCore } from "./components";
import { HeaderWithMenu } from "@/app/components";

export const metadata: Metadata = {
  title: "Review Planner | 通知プリセットを更新する",
};

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  return (
    <>
      <article className="px-5 pt-5 bg-bg-primary text-text-on-bg-primary">
        <HeaderWithMenu />
        <PresetCore id={Number(params.id)} />
      </article>
    </>
  );
};

export default Page;
