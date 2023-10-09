import { NextPage, type Metadata } from "next";
import { HeaderWithMenu } from "@/app/components";
import {
  SavePlace,
  OpenAddNDaysAfterSheetButton,
  OpenPresetSheetButton,
  Schedule,
} from "./components";

export const metadata: Metadata = {
  title: "Review Planner | 発行したIDを見る",
};

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  return (
    <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
      <HeaderWithMenu />
      <h1 className="mb-3 text-4xl">{params.id}</h1>
      <div className="mb-5">
        <SavePlace id={Number(params.id)} />
      </div>
      <section className="flex items-center justify-between mb-4">
        <h2 className="text-xl">通知スケジュール</h2>
        <OpenPresetSheetButton />
      </section>
      <Schedule id={params.id} />
      <OpenAddNDaysAfterSheetButton id={params.id} />
    </article>
  );
};

export default Page;
