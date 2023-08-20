"use client";
import { useState, useCallback } from "react";
import { useAddOneNotificationSheetForPreset } from "../../hooks";
import { type NextPage } from "next";
import { List, SmallButton } from "@/components";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";
import {
  getPreset,
  updatePreset,
  getMaxIdOfDaysAfterOfPreset,
  deleteDaysAfterOfPreset,
} from "@/db";
import useSWR from "swr";

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const searchParams = useSearchParams();
  const presetName = searchParams.get("name") ?? "";
  const router = useRouter();

  const { data, mutate } = useSWR(`/notifications/presets/${id}`, () =>
    getPreset(Number(id))
  );
  const [inputValue, setInputValue] = useState(presetName);

  const handleUpdate = useCallback(
    async (day: number) => {
      if (data) {
        const name = data.name;
        const daysAfters = data.notifications;
        const nextId = (await getMaxIdOfDaysAfterOfPreset()) + 1;
        await updatePreset(
          Number(id),
          name,
          daysAfters.concat({ id: nextId, daysAfter: day })
        );
        mutate();
      }
    },
    [mutate, updatePreset, data]
  );

  const [render, handleOpen] =
    useAddOneNotificationSheetForPreset(handleUpdate);

  const handleDelete = useCallback(
    async (id: number) => {
      await deleteDaysAfterOfPreset(id);
      mutate();
    },
    [deleteDaysAfterOfPreset]
  );

  return (
    <>
      {render()}
      <article className="flex flex-col justify-between h-screen bg-bg-primary text-text-on-bg-primary">
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
          <input
            type="text"
            className="w-full px-3 py-2 mb-5 focus:outline-primary"
            value={inputValue}
            placeholder="タイトルを入力"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <div className="mb-10">
            {data ? (
              <List
                data={data.notifications.map(({ id, daysAfter }) => ({
                  id,
                  text: `${daysAfter.toString()}日後`,
                }))}
                onDelete={handleDelete}
              />
            ) : undefined}
          </div>
          <div>
            <SmallButton onClick={handleOpen} text="通知を追加" />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full">
          <button
            className="w-1/2 py-5 rounded-tl-md bg-gray text-dark-gray"
            onClick={() => router.back()}
          >
            キャンセル
          </button>
          <button className="w-1/2 py-5 rounded-tr-md bg-primary text-text-on-primary">
            作成
          </button>
        </div>
      </article>
    </>
  );
};

export default Page;
