"use client";
import { NextPage } from "next";
import { HeaderWithMenu } from "@/app/components";
import { usePreset } from "./hooks";
import {
  SavePlace,
  OpenAddNDaysAfterSheetButton,
  Schedule,
} from "./components";

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  const [renderSelectPresetSheet, renderOpenPresetSheetButton] = usePreset(
    params.id
  );

  return (
    <>
      {renderSelectPresetSheet()}
      <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
        <HeaderWithMenu />
        <h1 className="mb-3 text-4xl">{params.id}</h1>
        <section className="mb-5">
          <h2 className="text-xl mb-4">記録場所</h2>
          <SavePlace id={Number(params.id)} />
        </section>
        <section className="flex items-center justify-between mb-4">
          <h2 className="text-xl">通知スケジュール</h2>
          {renderOpenPresetSheetButton()}
        </section>
        <Schedule id={params.id} />
        <OpenAddNDaysAfterSheetButton id={params.id} />
      </article>
    </>
  );
};

export default Page;
