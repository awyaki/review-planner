"use client";
import { useContext } from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { SmallButton } from "@/components";
import { NotificationItem } from "./components";
import { useAddOneNotificationSheet, useSelectPresetSheet } from "@/hooks";
import { BaseContext } from "@/providers";

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter();
  const [renderAddOneNotificationSheet, handleOpenAddOneNotificationSheet] =
    useAddOneNotificationSheet();
  const [renderSelectPresetSheet, handleOpenSelectPresetSheet] =
    useSelectPresetSheet();
  const { base } = useContext(BaseContext);
  const notifications = [1, 3, 5, 7, 14];

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
              プリセットから選択して追加
            </button>
          </div>
          <ul className="mb-3">
            {notifications.map((day, i) => {
              const color: Parameters<typeof NotificationItem>["0"]["color"] =
                i % 2 === 0 ? "light-gray" : "gray";
              const rounded: Parameters<
                typeof NotificationItem
              >["0"]["rounded"] = (() => {
                if (notifications.length === 1) return "both";
                if (i === 0) return "top";
                if (i === notifications.length - 1) return "bottom";
                return "none";
              })();
              return (
                <li key={day}>
                  <NotificationItem
                    color={color}
                    rounded={rounded}
                    day={`${day}日`}
                    isCompleted={true}
                    onClick={() => {}}
                  />
                </li>
              );
            })}
          </ul>
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
