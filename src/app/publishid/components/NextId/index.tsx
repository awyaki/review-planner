"use client";
import { useContext } from "react";
import { BaseContext } from "@/app/providers";

type Props = {
  nextId: number;
};

export const NextId: React.FC<Props> = ({ nextId }) => {
  const { base } = useContext(BaseContext);
  return (
    <span className="block text-4xl">
      {base === "decimal" ? nextId : nextId?.toString(16).toUpperCase()}
    </span>
  );
};
