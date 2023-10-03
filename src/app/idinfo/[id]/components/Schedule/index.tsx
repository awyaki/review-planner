"use client";
import { useCallback } from "react";
import { ScheduleForIdInfo } from "./components";
import { deleteNDaysAfter, getAllNDaysAftersOfId } from "@/db";
import useSWR from "swr";

export const Schedule: React.FC<{ id: string }> = ({ id }) => {
  const { data: nDaysAfters, mutate } = useSWR(`/nDaysAfters/${id}`, async () =>
    getAllNDaysAftersOfId(Number(id))
  );

  const handleDeleteNDaysAfter = useCallback(
    async (id: number) => {
      await deleteNDaysAfter(id);
      mutate();
    },
    [deleteNDaysAfter, id]
  );
  return (
    <ScheduleForIdInfo
      nDaysAfters={nDaysAfters ?? []}
      onDelete={handleDeleteNDaysAfter}
    />
  );
};
