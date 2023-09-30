import { useCallback } from "react";
import { useAddOneNotificationSheet } from "@/hooks";
import { mutate } from "swr";
import { NDaysAfterForClient, createNdaysAfter } from "@/db";
import { SmallButton } from "@/components";

export const useAddNDaysAfter = (
  id: string
): [() => React.ReactNode, () => React.ReactNode] => {
  const handleAddNDayAfter = useCallback(
    async (nDaysAfter: Omit<NDaysAfterForClient, "id">) => {
      const { n, base } = nDaysAfter;
      await createNdaysAfter(n, Number(id), base, false);
      mutate(`/nDaysAfters/${id}`);
    },
    [createNdaysAfter, mutate, id]
  );

  const [renderAddOneNotificationSheet, handleOpenAddOneNotificationSheet] =
    useAddOneNotificationSheet(handleAddNDayAfter);

  const renderAddNDaysAfterButton = useCallback(() => {
    return (
      <SmallButton
        text="通知を追加"
        onClick={handleOpenAddOneNotificationSheet}
      />
    );
  }, [handleOpenAddOneNotificationSheet]);

  return [renderAddOneNotificationSheet, renderAddNDaysAfterButton];
};
