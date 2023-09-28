"use client";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import { NextPage } from "next";
import { HeaderWithMenu } from "@/app/components";
import { NotificationSchedule, PublishId } from "./components";

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
        <PublishId onPublishId={handlePublishId} />
      </section>
    </article>
  );
};

export default Page;
