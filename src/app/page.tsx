"use client";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { filterTodaysNDaysAfters } from "@/db";
import useSWR from "swr";
import { AiOutlineLeft } from "react-icons/ai";
import { SmallButton } from "@/components";
import { NDaysAfter } from "@/db";
import { IdItem } from "./components";

const Page = () => {
  const router = useRouter();
  const { data: nDaysAfters } = useSWR(
    "/filterNDaysAfters",
    filterTodaysNDaysAfters
  );

  const nDaysAftersStub: NDaysAfter[] = [
    { base: new Date(), belongTo: 1, done: true, n: 9 },
    { base: new Date(), belongTo: 2, done: false, n: 8 },
    { base: new Date(), belongTo: 3, done: true, n: 6 },
    { base: new Date(), belongTo: 4, done: false, n: 3 },
    { base: new Date(), belongTo: 5, done: true, n: 2 },
    { base: new Date(), belongTo: 6, done: false, n: 1 },
  ];

  const ids =
    // nDaysAfters?.map(({ belongTo, done }) => ({ belongTo, done })) ?? [];
    nDaysAftersStub.map(({ belongTo, done }) => ({ belongTo, done })) ?? [];

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
          {ids.map(({ belongTo, done }) => (
            <IdItem key={belongTo} belongTo={belongTo} done={done} />
          ))}
        </ul>
      </article>
    </>
  );
};

export default Page;
