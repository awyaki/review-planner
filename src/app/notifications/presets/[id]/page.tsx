"use client";
import { useState } from "react";
import { useAddOneNotificationSheetForPreset } from "../../hooks";
import { type NextPage } from "next";
import { List, SmallButton } from "@/components";
import Link from "next/link";
import { AiOutlineLeft } from "react-icons/ai";
import { useRouter, useSearchParams } from "next/navigation";

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const searchParams = useSearchParams();
  const presetName = searchParams.get("name") ?? "";
  const data: number[] = [];
  const router = useRouter();

  const [inputValue, setInputValue] = useState(presetName);

  const [render, handleOpen] = useAddOneNotificationSheetForPreset();

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
          {data ? <List data={[]} onDelete={() => {}} /> : undefined}
        </div>
        <div className="mb-10">
          <SmallButton onClick={handleOpen} text="通知を追加" />
        </div>
        <div className="flex gap-3">
          <button
            className="w-1/3 px-2 py-2 rounded-lg bg-gray text-dark-gray"
            onClick={() => {
              router.push("/notifications/presets");
            }}
          >
            キャンセル
          </button>
          <button
            className="w-1/3 px-2 py-2 rounded-lg bg-bg-secondary text-text-on-bg-secondary"
            onClick={() => {}}
          >
            更新
          </button>
        </div>
      </article>
    </>
  );
};

export default Page;
