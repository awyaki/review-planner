"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";
import { SmallButton } from "@/components";
import { IdItem } from "./components";

const Page: NextPage = () => {
  const router = useRouter();
  const reacentlyIds = [123, 124, 125, 126];
  return (
    <>
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
                  color={color}
                  rounded={rounded}
                  onClick={() => {}}
                />
              </li>
            );
          })}
        </ul>
        <SmallButton text="検索する" onClick={() => {}} />
      </article>
    </>
  );
};

export default Page;
