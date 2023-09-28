import { useAddOneNotificationSheet, useSelectPresetSheet } from "@/hooks";
import { Schedule, SmallButton } from "@/components";
import { NDaysAfterForClient } from "@/db";

import { EmptyScheduleItem } from "../EmptyScheduleItem";

type Props = {
  nDaysAfters: NDaysAfterForClient[];
  onAddNDaysAfter: (nDaysAfter: Omit<NDaysAfterForClient, "id">) => void;
  onDeleteNDaysAfter: (id: number) => void;
  onAddNDaysAfterBasedOnPreset: (id: number, base: Date) => void;
};

export const NotificationSchedule: React.FC<Props> = ({
  nDaysAfters,
  onAddNDaysAfter,
  onDeleteNDaysAfter,
  onAddNDaysAfterBasedOnPreset,
}) => {
  const [renderAddOneNotificationSheet, handleOpenAddOneNotificationSheet] =
    useAddOneNotificationSheet(onAddNDaysAfter);

  const [renderSelectPresetSheet, handleOpenSelectPresetSheet] =
    useSelectPresetSheet(onAddNDaysAfterBasedOnPreset);

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
            onDelete={onDeleteNDaysAfter}
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
