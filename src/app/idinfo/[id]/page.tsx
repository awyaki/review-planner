"use client";
import { useContext, useCallback } from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { SmallButton } from "@/components";
import { ScheduleForIdInfo } from "./components";
import { useAddOneNotificationSheet, useSelectPresetSheet } from "@/hooks";
import { BaseContext } from "@/app/providers";
import { getNotificationsOfId, db, fetchMaxIdOfNotifications } from "@/db";
import useSWR from "swr";

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter();
  const { data: notifications, mutate } = useSWR(
    "/id/notifications",
    async () => await getNotificationsOfId(Number(params.id))
  );
  const handleAddNotification = useCallback(
    async (baseDate: Date, daysAfter: number) => {
      const notifications = await getNotificationsOfId(Number(params.id));
      const maxId = await fetchMaxIdOfNotifications();

      await db.ID.put({
        id: Number(params.id),
        notifications: notifications.concat({ id: maxId, baseDate, daysAfter }),
      });
      mutate();
    },
    [params, mutate]
  );
  const [renderAddOneNotificationSheet, handleOpenAddOneNotificationSheet] =
    useAddOneNotificationSheet(handleAddNotification);
  const [renderSelectPresetSheet, handleOpenSelectPresetSheet] =
    useSelectPresetSheet();
  const { base } = useContext(BaseContext);
  return (
    <>
      {renderAddOneNotificationSheet()}
      {renderSelectPresetSheet()}
      <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
        <header className="flex items-center justify-between mb-5">
          <button
            className="flex items-center text-primary"
            onClick={() => router.back()}
          >
            <AiOutlineLeft className="mr-1" />
            <span>戻る</span>
          </button>
          <Link href="/menu">
            <SmallButton text="メニュー" />
          </Link>
        </header>
        <h1 className="mb-3 text-4xl">
          {base === "decimal"
            ? params.id
            : Number(params).toString(16).toUpperCase()}
        </h1>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">通知スケジュール</h2>
            <button
              className="px-2 py-1 rounded-lg bg-primary text-text-on-primary"
              onClick={handleOpenSelectPresetSheet}
            >
              プリセットを選択
            </button>
          </div>
          <ScheduleForIdInfo schedule={notifications ?? []} />
          <SmallButton
            text="通知を追加"
            onClick={handleOpenAddOneNotificationSheet}
          />
        </section>
      </article>
    </>
  );
};

export default Page;
