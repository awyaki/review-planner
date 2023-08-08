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
import { addId, incrementNextId, fetchNextId, Notification } from "@/db";
import useSWR from "swr";

const Page: NextPage = () => {
  const router = useRouter();
  const [schedule, setSchedule] = useState<Notification[]>([
    {
      id: 1,
      baseDate: new Date("2023-6-23"),
      daysAfter: [
        { id: 0, value: 1 },
        { id: 1, value: 3 },
        { id: 2, value: 5 },
      ],
    },
    {
      id: 2,
      baseDate: new Date("2023-7-2"),
      daysAfter: [
        { id: 3, value: 1 },
        { id: 4, value: 3 },
        { id: 5, value: 5 },
      ],
    },
  ]);
  const [renderAddOneNotificationSheet, handleOpenAddOneNotificationSheet] =
    useAddOneNotificationSheet();
  const [renderSelectPresetSheet, handleOpenSelectPresetSheet] =
    useSelectPresetSheet();
  const { data: nextId, isLoading, mutate } = useSWR("/nextid", fetchNextId);

  const handleDeleteNotification = useCallback((id: number) => {
    setSchedule((cur) => {
      return cur
        .map((schedule) => {
          const newSchedule = { ...schedule };
          const newDaysAfter = schedule.daysAfter.filter(
            ({ id: _id }) => _id !== id
          );
          newSchedule.daysAfter = newDaysAfter;
          return newSchedule;
        })
        .filter((schedule) => schedule.daysAfter.length !== 0);
    });
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
          <SmallButton
            text="通知を追加"
            onClick={handleOpenAddOneNotificationSheet}
          />
        </section>
        <div className="absolute bottom-0 left-0 w-full">
          <LargeButton
            text="IDを発行"
            onClick={async () => {
              await addId(nextId ?? 0, schedule);
              await incrementNextId();
              mutate();
            }}
          />
        </div>
      </article>
    </>
  );
};

export default Page;
