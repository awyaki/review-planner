"use client";
import { useCallback } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { SmallButton, ClickableList } from "@/components";
import { AiOutlineLeft } from "react-icons/ai";
import { getAllPreset, deletePreset } from "@/db";
import useSWR from "swr";

const Page: NextPage = () => {
  const router = useRouter();
  const { data, mutate } = useSWR("/presets", getAllPreset);

  const handleDeletePreset = useCallback(
    async (id: string) => {
      await deletePreset(Number(id));
      mutate();
    },
    [deletePreset]
  );

  return (
    <>
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
          <h2 className="mb-8 text-xl">通知プリセット</h2>
          <div className="mb-8">
            <ClickableList
              data={
                data
                  ? data.map((p) => ({ id: String(p.id), text: p.name }))
                  : []
              }
              onClick={(id: string, name?: string) =>
                router.push(`/notifications/presets/${id}?name=${name}`)
              }
              onDelete={handleDeletePreset}
            />
          </div>
          <SmallButton
            onClick={() => router.push("/notifications/create")}
            text="新規プリセットを作成"
          />
        </div>
      </article>
    </>
  );
};

export default Page;
