"use client";
import { useCallback } from "react";
import { filterTodaysNDaysAfters } from "@/db";
import useSWR from "swr";
import { toggleDoneOfNDaysAfter } from "@/db";
import { IdItem, HeaderWithMenu } from "./components";
import { isNotOptionalOnId } from "@/lib";

const Page = () => {
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
        <HeaderWithMenu />
        <h2 className="mb-8 text-xl">今日復習するID</h2>
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
