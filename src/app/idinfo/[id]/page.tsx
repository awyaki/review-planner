"use client";
import { useMemo, useCallback } from "react";
import { NextPage } from "next";
import { SmallButton } from "@/components";
import { ScheduleForIdInfo } from "./components";
import { HeaderWithMenu } from "@/app/components";
import { useAddOneNotificationSheet, useSelectPresetSheet } from "@/hooks";
import useSWR from "swr";
import {
  getAllNDaysAftersOfId,
  NDaysAfter,
  NDaysAfterForClient,
  createNdaysAfter,
  deleteNDaysAfter,
  createNDaysAfters,
  getAllNDaysAftersForPresetOfPresetId,
} from "@/db";
import { isNotOptionalOnId } from "@/lib";

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  const { data: _nDaysAfters, mutate } = useSWR(
    `/nDaysAfters/${params.id}`,
    async () => getAllNDaysAftersOfId(Number(params.id))
  );

  const nDaysAfters: Required<NDaysAfter>[] = useMemo(
    () => _nDaysAfters?.filter(isNotOptionalOnId) ?? [],
    [_nDaysAfters]
  );

  const handleAddNDayAfter = useCallback(
    async (nDaysAfter: Omit<NDaysAfterForClient, "id">) => {
      const { n, base } = nDaysAfter;
      await createNdaysAfter(n, Number(params.id), base, false);
      mutate();
    },
    [createNdaysAfter, mutate, params]
  );

  const handleDeleteNDaysAfter = useCallback(
    async (id: number) => {
      await deleteNDaysAfter(id);
      mutate();
    },
    [deleteNDaysAfter]
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
      mutate();
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
          <ScheduleForIdInfo
            nDaysAfters={nDaysAfters ?? []}
            onDelete={handleDeleteNDaysAfter}
          />
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
