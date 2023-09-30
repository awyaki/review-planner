"use client";
import { NextPage } from "next";
import { HeaderWithMenu } from "@/app/components";
import { useScheduleForIdInfo, useAddNDaysAfter, usePreset } from "./hooks";

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  const renderScheduleForIdInfo = useScheduleForIdInfo(params.id);

  const [renderAddOneNotificationSheet, renderAddNDaysAfterButton] =
    useAddNDaysAfter(params.id);
  const [renderSelectPresetSheet, renderOpenPresetSheetButton] = usePreset(
    params.id
  );

  return (
    <>
      {renderAddOneNotificationSheet()}
      {renderSelectPresetSheet()}
      <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
        <HeaderWithMenu />
        <h1 className="mb-3 text-4xl">{params.id}</h1>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">通知スケジュール</h2>
            {renderOpenPresetSheetButton()}
          </div>
          {renderScheduleForIdInfo()}
          {renderAddNDaysAfterButton()}
        </section>
      </article>
    </>
  );
};

export default Page;
