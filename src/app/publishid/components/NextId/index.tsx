"use client";
import { useContext } from "react";
import { BaseContext } from "@/app/providers";
import useSWR from "swr";
import { db } from "@/db";

const fetchNextId = async (): Promise<number> => {
  const nextID = await db.NextID.get("next_id");
  return nextID ?? 0;
};

export const NextId: React.FC = () => {
  const { base } = useContext(BaseContext);
  const { data: NextId, isLoading } = useSWR("/nextid", fetchNextId);

  if (isLoading) return <>loading...</>;
  return (
    <span className="block text-4xl">
      {base === "decimal" ? NextId : NextId?.toString(16).toUpperCase()}
    </span>
  );
};
