"use client";
import { filterTodaysNDaysAfters } from "@/db";
import useSWR from "swr";

const Page = () => {
  const { data } = useSWR("/filterNDaysAfters", filterTodaysNDaysAfters);
  return (
    <section>
      <h1>復習ページ</h1>
      <ul>
        {data
          ? data.map(({ belongTo }) => (
              <li>{`You have to review ${belongTo}`}</li>
            ))
          : undefined}
      </ul>
    </section>
  );
};

export default Page;
