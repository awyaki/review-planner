"use client";
import { useCallback, useState } from "react";
import { NotificationSchedule } from "../NotificationSchedule";
import { PublishId } from "../PublishId";

import {
  createId,
  NDaysAfterForClient,
  getAllNDaysAftersForPresetOfPresetId,
} from "@/db";

import { mutate } from "swr";

export const PublishIdCore: React.FC = () => {
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
    <>
      <div className="mb-10">
        <NotificationSchedule
          nDaysAfters={nDaysAfters}
          onAddNDaysAfter={handleAddNDaysAfter}
          onDeleteNDaysAfter={handleDeleteNDaysAfter}
          onAddNDaysAfterBasedOnPreset={handleAddNDaysAfterBasedOnPreset}
        />
      </div>
      <PublishId onPublishId={handlePublishId} />
    </>
  );
};
