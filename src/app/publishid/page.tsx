"use client";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { NextPage } from "next";
import { HeaderWithMenu } from "@/app/components";
import { NotificationSchedule, PublishId } from "./components";

import {
  createId,
  NDaysAfterForClient,
  getAllNDaysAftersForPresetOfPresetId,
} from "@/db";
import { mutate } from "swr";

const NextId = dynamic(() => import("./components/NextId"), {
  ssr: false,
  loading: () => <>Loading...</>,
});

const Page: NextPage = () => {
  const [nDaysAfters, setNDaysAfters] = useState<NDaysAfterForClient[]>([]);

  const handlePublishId = useCallback(async () => {
    await createId(nDaysAfters);
    mutate("/id");
    setNDaysAfters([]);
  }, [mutate, createId, nDaysAfters]);

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

  const handleDeleteNDaysAfter = useCallback((id: number) => {
    setNDaysAfters((cur) => cur.filter((v) => v.id !== id));
  }, []);

  return (
    <article className="h-screen bg-bg-primary text-text-on-bg-primary">
      <h1 className="invisible">新規IDの作成</h1>
      <section className="px-5 pt-5">
        <HeaderWithMenu />
        <div className="mb-8">
          <NextId />
        </div>
        <div className="mb-10">
          <NotificationSchedule
            nDaysAfters={nDaysAfters}
            onAddNDaysAfter={handleAddNDaysAfter}
            onDeleteNDaysAfter={handleDeleteNDaysAfter}
            onAddNDaysAfterBasedOnPreset={handleAddNDaysAfterBasedOnPreset}
          />
        </div>
        <PublishId onPublishId={handlePublishId} />
      </section>
    </article>
  );
};

export default Page;
