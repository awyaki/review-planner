"use client";
import { useCallback } from "react";
import { NextPage } from "next";
import { SmallButton } from "@/components";
import { HeaderWithMenu } from "@/app/components";
import { useAddOneNotificationSheet, useSelectPresetSheet } from "@/hooks";
import { mutate } from "swr";
import {
  NDaysAfterForClient,
  createNdaysAfter,
  createNDaysAfters,
  getAllNDaysAftersForPresetOfPresetId,
} from "@/db";
import { useScheduleForIdInfo } from "./hooks";

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  const renderScheduleForIdInfo = useScheduleForIdInfo(params.id);

  const handleAddNDayAfter = useCallback(
    async (nDaysAfter: Omit<NDaysAfterForClient, "id">) => {
      const { n, base } = nDaysAfter;
      await createNdaysAfter(n, Number(params.id), base, false);
      mutate(`/nDaysAfters/${params.id}`);
    },
    [createNdaysAfter, mutate, params]
  );

  const handleAddNDaysAfterBasedOnPreset = useCallback(
    async (id: number, base: Date) => {
      const nDaysAfter = await getAllNDaysAftersForPresetOfPresetId(id);
      await createNDaysAfters(
        nDaysAfter.map(({ n }) => ({
          n,
          base,
          belongTo: Number(params.id),
          done: false,
        }))
      );
      mutate(`/nDaysAfters/${params.id}`);
    },
    [params, getAllNDaysAftersForPresetOfPresetId, createNDaysAfters, mutate]
  );

  const [renderAddOneNotificationSheet, handleOpenAddOneNotificationSheet] =
    useAddOneNotificationSheet(handleAddNDayAfter);
  const [renderSelectPresetSheet, handleOpenSelectPresetSheet] =
    useSelectPresetSheet(handleAddNDaysAfterBasedOnPreset);
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
            <button
              type="button"
              className="px-2 py-1 rounded-lg bg-primary text-text-on-primary"
              onClick={handleOpenSelectPresetSheet}
            >
              プリセットを選択
            </button>
          </div>
          {renderScheduleForIdInfo()}
          <SmallButton
            text="通知を追加"
            onClick={handleOpenAddOneNotificationSheet}
          />
        </section>
      </article>
    </>
  );
};

export default Page;
