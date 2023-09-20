"use client";
import { useMemo, useCallback } from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { SmallButton } from "@/components";
import { ScheduleForIdInfo } from "./components";
import { useAddOneNotificationSheet, useSelectPresetSheet } from "@/hooks";
import useSWR from "swr";
import {
  getAllNDaysAftersOfId,
  NDaysAfter,
  NDaysAfterForClient,
  createNdaysAfter,
} from "@/db";
import { isNotOptionalOnId } from "@/lib";

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter();
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

  const [renderAddOneNotificationSheet, handleOpenAddOneNotificationSheet] =
    useAddOneNotificationSheet(handleAddNDayAfter);
  const [renderSelectPresetSheet, handleOpenSelectPresetSheet] =
    useSelectPresetSheet();
  return (
    <>
      {renderAddOneNotificationSheet()}
      {renderSelectPresetSheet()}
      <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
        <header className="flex items-center justify-between mb-5">
          <button
            type="button"
            className="flex items-center text-primary"
            onClick={() => router.back()}
          >
            <AiOutlineLeft className="mr-1" />
            <span>戻る</span>
          </button>
          <Link href="/menu">
            <SmallButton text="メニュー" />
          </Link>
        </header>
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
            onDelete={() => {}}
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
