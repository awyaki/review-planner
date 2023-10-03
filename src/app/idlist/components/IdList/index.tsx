"use client";
import { useRouter } from "next/navigation";
import { IdItem } from "../IdItem";
import { getAllIds } from "@/db";
import useSWR from "swr";
export const IdList: React.FC = () => {
  const router = useRouter();
  const { data: ids } = useSWR("/ids", getAllIds);
  const reacentlyIds =
    ids?.map(({ id, place }) => ({ id, place })).slice(-5) ?? [];
  return (
    <ul className="mb-8">
      {reacentlyIds.map(({ id, place }, i) => {
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
              place={place}
              color={color}
              rounded={rounded}
              onClick={() => router.push(`/idinfo/${id}`)}
            />
          </li>
        );
      })}
    </ul>
  );
};
