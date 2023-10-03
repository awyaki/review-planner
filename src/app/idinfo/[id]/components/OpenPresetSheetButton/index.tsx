"use client";
import { useCallback } from "react";
import { useSelectPresetSheet } from "@/hooks";
import { createNDaysAfters, getAllNDaysAftersForPresetOfPresetId } from "@/db";
import { mutate } from "swr";

export const OpenPresetSheetButton: React.FC<{ id: string }> = ({ id }) => {
  const handleAddNDaysAfterBasedOnPreset = useCallback(
    async (id: number, base: Date) => {
      const nDaysAfter = await getAllNDaysAftersForPresetOfPresetId(id);
      await createNDaysAfters(
        nDaysAfter.map(({ n }) => ({
          n,
          base,
          belongTo: Number(id),
          done: false,
        }))
      );
      mutate(`/nDaysAfters/${id}`);
    },
    [id, getAllNDaysAftersForPresetOfPresetId, createNDaysAfters, mutate]
  );

  const [renderSelectPresetSheet, handleOpenSelectPresetSheet] =
    useSelectPresetSheet(handleAddNDaysAfterBasedOnPreset);

  return (
    <>
      {renderSelectPresetSheet()}
      <button
        type="button"
        className="px-2 py-1 rounded-lg bg-primary text-text-on-primary"
        onClick={handleOpenSelectPresetSheet}
      >
        プリセットを選択
      </button>
    </>
  );
};
