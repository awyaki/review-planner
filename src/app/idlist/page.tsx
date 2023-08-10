"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { SmallButton } from "@/components";
import { IdItem } from "./components";
import { useAddOneNotificationSheet } from "./hooks";
import useSWR from "swr";
import { getAllIDs } from "@/db";

const Page: NextPage = () => {
  const router = useRouter();
  const { data: ids, isLoading } = useSWR("/ids", getAllIDs);
  const reacentlyIds = ids?.map(({ id }) => id).slice(-5) ?? [];

  const [render, handleOpen] = useAddOneNotificationSheet();
  return (
    <>
      {render()}
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
        <h1 className="mb-5 text-xl">最近発行したID</h1>
        <ul className="mb-8">
          {reacentlyIds.map((id, i) => {
            const color: Parameters<typeof IdItem>["0"]["color"] =
              i % 2 === 0 ? "light-gray" : "gray";
            const rounded: Parameters<typeof IdItem>["0"]["rounded"] = (() => {
              if (reacentlyIds.length === 1) return "both";
              if (i === 0) return "top";
              if (i === reacentlyIds.length - 1) return "bottom";
              return "none";
            })();
            return (
              <li key={id}>
                <IdItem
                  id={id.toString()}
                  isCompleted={i % 2 === 0}
                  color={color}
                  rounded={rounded}
                  onClick={() => router.push(`/idinfo/${id}`)}
                />
              </li>
            );
          })}
        </ul>
        <SmallButton text="検索する" onClick={handleOpen} />
      </article>
    </>
  );
};

export default Page;
