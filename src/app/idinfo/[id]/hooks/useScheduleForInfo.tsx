import { useCallback } from "react";
import { ScheduleForIdInfo } from "../components";
import { deleteNDaysAfter, getAllNDaysAftersOfId } from "@/db";
import useSWR from "swr";

export const useScheduleForIdInfo = (id: string): (() => React.ReactNode) => {
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

  const render = useCallback(() => {
    return (
      <ScheduleForIdInfo
        nDaysAfters={nDaysAfters ?? []}
        onDelete={handleDeleteNDaysAfter}
      />
    );
  }, [nDaysAfters]);
  return render;
};
