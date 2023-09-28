import { useCallback, useState } from "react";
import { useAddOneNotificationSheet, useSelectPresetSheet } from "@/hooks";
import { Schedule, SmallButton } from "@/components";
import {
  NDaysAfterForClient,
  getAllNDaysAftersForPresetOfPresetId,
} from "@/db";

import { EmptyScheduleItem } from "../../components";

export const NotificationSchedule: React.FC = () => {
  const [nDaysAfters, setNDaysAfters] = useState<NDaysAfterForClient[]>([]);

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
  const [renderAddOneNotificationSheet, handleOpenAddOneNotificationSheet] =
    useAddOneNotificationSheet(handleAddNDaysAfter);

  const [renderSelectPresetSheet, handleOpenSelectPresetSheet] =
    useSelectPresetSheet(handleAddNDaysAfterBasedOnPreset);

  const handleDeleteNDaysAfter = useCallback((id: number) => {
    setNDaysAfters((cur) => cur.filter((v) => v.id !== id));
  }, []);
  return (
    <>
      {renderSelectPresetSheet()}
      {renderAddOneNotificationSheet()}
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
      <div>
        <SmallButton
          text="通知を追加"
          onClick={handleOpenAddOneNotificationSheet}
        />
      </div>
    </>
  );
};
