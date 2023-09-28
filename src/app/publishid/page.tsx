"use client";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { NextPage } from "next";
import { HeaderWithMenu } from "@/app/components";
import { NotificationSchedule } from "./components";

import { createId, NDaysAfterForClient } from "@/db";
import { mutate } from "swr";

const NextId = dynamic(() => import("./components/NextId"), {
  ssr: false,
  loading: () => <>Loading...</>,
});

const Page: NextPage = () => {
  const [nDaysAfters, setNDaysAfters] = useState<NDaysAfterForClient[]>([]);

  const handlePublishId = useCallback(async () => {
    await createId(nDaysAfters);
    mutate("/id");
    setNDaysAfters([]);
  }, [mutate, createId, nDaysAfters]);

  return (
    <article className="h-screen bg-bg-primary text-text-on-bg-primary">
      <h1 className="invisible">新規IDの作成</h1>
      <section className="px-5 pt-5">
        <HeaderWithMenu />
        <div className="mb-8">
          <NextId />
        </div>
        <div className="mb-10">
          <NotificationSchedule />
        </div>
        <button
          type="button"
          className="w-1/4 px-2 py-1 rounded-lg bg-primary text-text-on-primary"
          onClick={handlePublishId}
        >
          IDを発行
        </button>
      </section>
    </article>
  );
};

export default Page;
