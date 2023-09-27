"use client";
import { useCallback, useState } from "react";
import { NextPage } from "next";
import { Schedule, SmallButton } from "@/components";
import { EmptyScheduleItem } from "./components";
import { HeaderWithMenu } from "@/app/components";
import { useAddOneNotificationSheet } from "@/hooks";
import { useSelectPresetSheet } from "@/hooks";

import {
  getCurrentId,
  createId,
  NDaysAfterForClient,
  getAllNDaysAftersForPresetOfPresetId,
} from "@/db";
import useSWR from "swr";

const Page: NextPage = () => {
  const [nDaysAfters, setNDaysAfters] = useState<NDaysAfterForClient[]>([]);
  const { data: currentId, isLoading, mutate } = useSWR("/id", getCurrentId);
  const handleAddNDaysAfter = useCallback(
    (nDaysAfter: Omit<NDaysAfterForClient, "id">) => {
      const { base, n } = nDaysAfter;
      setNDaysAfters((cur) => {
        const maxId = cur.reduce((a, b) => Math.max(a, b.id), 0);
        const newNDaysAfter: NDaysAfterForClient = { id: maxId + 1, base, n };
        return cur.concat(newNDaysAfter);
      });
    },
    []
  );

  const handleDeleteNDaysAfter = useCallback((id: number) => {
    setNDaysAfters((cur) => cur.filter((v) => v.id !== id));
  }, []);

  const [renderAddOneNotificationSheet, handleOpenAddOneNotificationSheet] =
    useAddOneNotificationSheet(handleAddNDaysAfter);

  const handleAddNDaysAfterBasedOnPreset = useCallback(
    async (id: number, base: Date) => {
      const nDaysAfters = await getAllNDaysAftersForPresetOfPresetId(id);
      setNDaysAfters((p) => {
        const maxId = p.reduce((a, b) => Math.max(a, b.id), 0);
        return p.concat(
          nDaysAfters.map(({ n }, i) => ({ id: maxId + 1 + i, n, base }))
        );
      });
    },
    [getAllNDaysAftersForPresetOfPresetId]
  );

  const [renderSelectPresetSheet, handleOpenSelectPresetSheet] =
    useSelectPresetSheet(handleAddNDaysAfterBasedOnPreset);

  const handlePublishId = useCallback(async () => {
    await createId(nDaysAfters);
    mutate();
    setNDaysAfters([]);
  }, [mutate, createId, nDaysAfters]);

  return (
    <>
      {renderAddOneNotificationSheet()}
      {renderSelectPresetSheet()}
      <article className="h-screen bg-bg-primary text-text-on-bg-primary">
        <h1 className="invisible">新規IDの作成</h1>
        <section className="px-5 pt-5">
          <HeaderWithMenu />
          {isLoading ? (
            <>Loading...</>
          ) : (
            <>
              <div className="mb-8">
                <span className="block mb-1 text-sm">次のID</span>
                <div className="text-4xl">{currentId ? currentId + 1 : 1}</div>
              </div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl">通知スケジュール</h2>
                <button
                  type="button"
                  className="px-2 py-1 rounded-lg bg-primary text-text-on-primary"
                  onClick={handleOpenSelectPresetSheet}
                >
                  プリセットから選択
                </button>
              </div>
              <div className="mb-8">
                {nDaysAfters.length === 0 ? (
                  <ul>
                    <li>
                      <EmptyScheduleItem />
                    </li>
                  </ul>
                ) : (
                  <Schedule
                    nDaysAfters={nDaysAfters}
                    onDelete={handleDeleteNDaysAfter}
                  ></Schedule>
                )}
              </div>
              <div className="mb-10">
                <SmallButton
                  text="通知を追加"
                  onClick={handleOpenAddOneNotificationSheet}
                />
              </div>
              <button
                type="button"
                className="w-1/4 px-2 py-1 rounded-lg bg-primary text-text-on-primary"
                onClick={handlePublishId}
              >
                IDを発行
              </button>
            </>
          )}
        </section>
      </article>
    </>
  );
};

export default Page;
