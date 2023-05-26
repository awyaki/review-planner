"use client";
import { useState, useContext } from "react";
import { BaseContext } from "@/providers";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { List, SmallButton, LargeButton } from "@/components";
import { EmptyScheduleItem } from "./components";
import { useAddOneNotificationSheet } from "@/hooks";

const Page: NextPage = () => {
  const router = useRouter();
  const [schedule, setSchedule] = useState<number[]>([1, 3, 5]);
  const [render, handleOpen] = useAddOneNotificationSheet();
  const { base } = useContext(BaseContext);

  const NEXT_ID = 1234;
  return (
    <>
      {render()}
      <article className="h-screen bg-bg-primary text-text-on-bg-primary">
        <div className="px-5 pt-5">
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
            <span className="block text-4xl">
              {base === "decimal"
                ? NEXT_ID
                : NEXT_ID.toString(16).toUpperCase()}
            </span>
          </div>
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl">新規IDの発行</h1>
            <button className="px-2 py-1 rounded-lg bg-primary text-text-on-primary">
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
              <List
                data={schedule.map((i) => ({ id: `${i}`, text: `${i}日後` }))}
              ></List>
            )}
          </div>
          <SmallButton text="通知を追加" onClick={handleOpen} />
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <LargeButton text="IDを発行" onClick={() => {}} />
        </div>
      </article>
    </>
  );
};

export default Page;
