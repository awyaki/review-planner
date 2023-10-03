"use client";
import { useCallback } from "react";
import { useAddOneNotificationSheet } from "@/hooks";
import { mutate } from "swr";
import { NDaysAfterForClient, createNdaysAfter } from "@/db";
import { SmallButton } from "@/components";

export const OpenAddNDaysAfterSheetButton: React.FC<{ id: string }> = ({
  id,
}) => {
  const handleAddNDayAfter = useCallback(
    async (nDaysAfter: Omit<NDaysAfterForClient, "id">) => {
      const { n, base } = nDaysAfter;
      await createNdaysAfter(n, Number(id), base, false);
      mutate(`/nDaysAfters/${id}`);
    },
    [createNdaysAfter, mutate, id]
  );
  const [renderSheet, handleOpen] =
    useAddOneNotificationSheet(handleAddNDayAfter);

  return (
    <>
      {renderSheet()}
      <SmallButton text="通知を追加" onClick={handleOpen} />
    </>
  );
};
