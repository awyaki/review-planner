"use client";
import { useState, useContext, useCallback } from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { Schedule, SmallButton, LargeButton } from "@/components";
import { EmptyScheduleItem } from "./components";
import { useAddOneNotificationSheet } from "@/hooks";
import { useSelectPresetSheet } from "@/hooks";
import { NextId } from "./components";
import {
  addId,
  incrementNextId,
  fetchNextId,
  fetchMaxIdOfNotifications,
  Notification,
} from "@/db";
import useSWR from "swr";

const Page: NextPage = () => {
  const router = useRouter();
  const [schedule, setSchedule] = useState<Notification[]>([]);

  const handleAddNotification = useCallback(
    async (baseDate: Date, daysAfter: number) => {
      const storeedNextId = (await fetchMaxIdOfNotifications()) + 1;
      setSchedule((cur) => {
        const nextId = cur.reduce((a, b) => Math.max(a, b.id), 0) + 1;
        return cur.concat({
          id: Math.max(storeedNextId, nextId),
          baseDate,
          daysAfter,
        });
      });
    },
    []
  );

  const [renderAddOneNotificationSheet, handleOpenAddOneNotificationSheet] =
    useAddOneNotificationSheet(handleAddNotification);
  const [renderSelectPresetSheet, handleOpenSelectPresetSheet] =
    useSelectPresetSheet();
  const { data: nextId, isLoading, mutate } = useSWR("/nextid", fetchNextId);

  const handleDeleteNotification = useCallback((id: number) => {
    setSchedule((cur) => cur.filter((s) => s.id !== id));
  }, []);
  return (
    <>
      {renderAddOneNotificationSheet()}
      {renderSelectPresetSheet()}
      <article className="h-screen bg-bg-primary text-text-on-bg-primary">
        <h1 className="invisible">新規IDの作成</h1>
        <section className="px-5 pt-5">
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
          <div className="mb-8">
            <span className="block mb-1 text-sm">次のID</span>
            {isLoading ? <>Loading...</> : <NextId nextId={nextId ?? 0} />}
          </div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl">通知スケジュール</h2>
            <button
              className="px-2 py-1 rounded-lg bg-primary text-text-on-primary"
              onClick={handleOpenSelectPresetSheet}
            >
              プリセットから選択
            </button>
          </div>
          <div className="mb-8">
            {schedule.length === 0 ? (
              <ul>
                <li>
                  <EmptyScheduleItem />
                </li>
              </ul>
            ) : (
              <Schedule
                schedule={schedule}
                onDelete={handleDeleteNotification}
              ></Schedule>
            )}
          </div>
          <div className="mb-10">
            <SmallButton
              text="通知を追加"
              onClick={handleOpenAddOneNotificationSheet}
            />
          </div>
          <button
            className="w-1/4 px-2 py-1 rounded-lg bg-primary text-text-on-primary"
            onClick={async () => {
              await addId(nextId ?? 0, schedule);
              await incrementNextId();
              setSchedule([]);
              mutate();
            }}
          >IDを発行</button>
        </section>
      </article>
    </>
  );
};

export default Page;
