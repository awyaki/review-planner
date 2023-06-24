"use client";
import { useContext } from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { SmallButton } from "@/components";
import { ScheduleForIdInfo } from "./components";
import { useAddOneNotificationSheet, useSelectPresetSheet } from "@/hooks";
import { BaseContext } from "@/providers";

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter();
  const [renderAddOneNotificationSheet, handleOpenAddOneNotificationSheet] =
    useAddOneNotificationSheet();
  const [renderSelectPresetSheet, handleOpenSelectPresetSheet] =
    useSelectPresetSheet();
  const { base } = useContext(BaseContext);
  const schedules: Parameters<typeof ScheduleForIdInfo>["0"]["schedules"] = [
    { id: 123, baseDate: new Date("2023-6-24"), daysAfter: [1, 2, 3] },
    { id: 124, baseDate: new Date("2023-7-1"), daysAfter: [1, 3, 5, 7] },
  ];

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
          <ScheduleForIdInfo schedules={schedules} />
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
