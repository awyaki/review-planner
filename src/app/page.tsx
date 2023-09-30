"use client";
import { useCallback } from "react";
import { filterTodaysNDaysAfters } from "@/db";
import useSWR from "swr";
import { toggleDoneOfNDaysAfter } from "@/db";
import { IdItem, HeaderWithMenu } from "./components";

const Page = () => {
  const { data: nDaysAfters, mutate } = useSWR(
    "/filterNDaysAfters",
    filterTodaysNDaysAfters
  );

  const handleToggleDone = useCallback(
    async (id: number) => {
      await toggleDoneOfNDaysAfter(id);
      mutate();
    },
    [toggleDoneOfNDaysAfter, mutate]
  );

  const ids =
    nDaysAfters?.map(({ id, belongTo, done, place }) => ({
      id,
      belongTo,
      done,
      place,
    })) ?? [];

  const idsByPlace = reconstructIdsByPlace(ids);
  return (
    <>
      <article className="px-5 pt-5 bg-bg-primary text-text-on-bg-primary">
        <HeaderWithMenu />
        <h2 className="mb-8 text-xl">今日復習するID</h2>
        <section>
          <ul>
            {idsByPlace.map(([place, ids]) => (
              <li key={place}>
                <h3 className="text-xl mb-2">{place}</h3>
                <ul className="flex flex-wrap gap-2 mb-5">
                  {ids.map(({ id, belongTo, done }) => (
                    <IdItem
                      key={id}
                      belongTo={belongTo}
                      done={done}
                      onClick={() => handleToggleDone(id)}
                    />
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </section>
      </article>
    </>
  );
};

export default Page;

type Id = { id: number; belongTo: number; done: boolean; place: string };
const reconstructIdsByPlace = (ids: Id[]) => {
  const placeMap = new Map<string, Id[]>(ids.map((id) => [id.place, []]));
  for (const id of ids) {
    const cur = placeMap.get(id.place) ?? [];
    placeMap.set(id.place, cur.concat(id));
  }
  return Array.from(placeMap);
};
