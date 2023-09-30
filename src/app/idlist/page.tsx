"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { HeaderWithMenu } from "@/app/components";
import { SmallButton } from "@/components";
import { IdItem } from "./components";
import { useSearchPublishIdSheet } from "./hooks";
import { getAllIds } from "@/db";
import useSWR from "swr";
import { isNotNullOrUndefined } from "@/lib";

const Page: NextPage = () => {
  const router = useRouter();
  const { data: ids } = useSWR("/ids", getAllIds);
  const reacentlyIds =
    ids
      ?.map(({ id }) => id)
      .filter(isNotNullOrUndefined)
      .slice(-5) ?? [];
  const [render, handleOpen] = useSearchPublishIdSheet(
    ids?.map(({ id }) => id).filter(isNotNullOrUndefined) ?? []
  );
  return (
    <>
      {render()}
      <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
        <HeaderWithMenu />
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
