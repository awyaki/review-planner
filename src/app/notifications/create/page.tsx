"use client";
import { useState, useCallback } from "react";
import { useAddOneNotificationSheetForPreset } from "../hooks";
import { type NextPage } from "next";
import { List, SmallButton } from "@/components";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import { useRouter } from "next/navigation";
import { NDaysAfterForPresetForClient, createPreset } from "@/db";

const Page: NextPage = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [nDaysAfters, setNDaysAfters] = useState<
    NDaysAfterForPresetForClient[]
  >([]);

  const handleAddNotification = useCallback((day: number) => {
    setNDaysAfters((cur) => {
      const maxId = cur.reduce((a, b) => Math.max(a, b.id), 0);
      return cur.concat({ id: maxId + 1, n: day });
    });
  }, []);

  const handleDeleteNotification = useCallback((id: number) => {
    setNDaysAfters((cur) => cur.filter((n) => n.id !== id));
  }, []);

  const handleCreatePreset = useCallback(
    async (name: string, nDaysAfters: NDaysAfterForPresetForClient[]) => {
      await createPreset(name, nDaysAfters);
      router.push("/notifications/presets");
    },
    [createPreset]
  );
  const [render, handleOpen] = useAddOneNotificationSheetForPreset(
    handleAddNotification
  );

  return (
    <>
      {render()}
      <article className="px-5 pt-5 bg-bg-primary text-text-on-bg-primary">
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
          <List
            data={nDaysAfters.map(({ id, n }) => ({
              id,
              text: `${n.toString()}日後`,
            }))}
            onDelete={handleDeleteNotification}
          />
        </div>
        <div className="mb-5">
          <SmallButton onClick={handleOpen} text="通知を追加" />
        </div>
        <div className="flex gap-3">
          <button
            className="w-1/3 px-2 py-2 rounded-lg bg-gray text-dark-gray"
            onClick={() => {}}
          >
            キャンセル
          </button>
          <button
            className="w-1/3 px-2 py-2 rounded-lg bg-bg-secondary text-text-on-bg-secondary"
            onClick={() => handleCreatePreset(inputValue, nDaysAfters)}
          >
            作成
          </button>
        </div>
      </article>
    </>
  );
};

export default Page;
