"use client";
import useSWR from "swr";
import { getCurrentId } from "@//db";
export const NextId: React.FC = () => {
  const { data: currentId } = useSWR("/id", getCurrentId, {
    suspense: true,
  });
  return (
    <>
      <span className="block mb-1 text-sm">次のID</span>
      <div className="text-4xl">{currentId + 1}</div>
    </>
  );
};

export default NextId;
