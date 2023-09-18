"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { filterTodaysNDaysAfters } from "@/db";
import useSWR from "swr";
import { AiOutlineLeft } from "react-icons/ai";
import { SmallButton } from "@/components";
import { toggleDoneOfNDaysAfter } from "@/db";
import { IdItem } from "./components";
import { isNotOptionalOnId } from "@/lib";

const Page = () => {
  const router = useRouter();
  const { data: nDaysAfters, mutate } = useSWR(
    "/filterNDaysAfters",
    filterTodaysNDaysAfters
  );

  const handleToggleDone = useCallback(
    async (id: number) => {
      await toggleDoneOfNDaysAfter(id);
      mutate();
    },
    [toggleDoneOfNDaysAfter, mutate]
  );

  const ids =
    nDaysAfters
      ?.map(({ id, belongTo, done }) => ({ id, belongTo, done }))
      .filter(isNotOptionalOnId) ?? [];

  return (
    <>
      <article className="px-5 pt-5 bg-bg-primary text-text-on-bg-primary">
        <header className="flex items-center justify-between mb-5">
          <button
            type="button"
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
        <h2 className="mb-8 text-xl">今日復習すべきID</h2>
        <ul className="flex flex-wrap gap-2">
          {ids.map(({ id, belongTo, done }) => (
            <IdItem
              key={id}
              belongTo={belongTo}
              done={done}
              onClick={() => handleToggleDone(id)}
            />
          ))}
        </ul>
      </article>
    </>
  );
};

export default Page;
