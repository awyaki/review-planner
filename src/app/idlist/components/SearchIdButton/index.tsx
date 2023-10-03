"use client";
import { SmallButton } from "@/components";
import { useSearchPublishIdSheet } from "./hooks";
import { getAllIds } from "@/db";
import useSWR from "swr";

export const SearchIdButton: React.FC = () => {
  const { data: ids } = useSWR("/ids", getAllIds);
  const [render, handleOpen] = useSearchPublishIdSheet(ids ?? []);
  return (
    <>
      {render()}
      <SmallButton text="IDを検索" onClick={handleOpen} />
    </>
  );
};
