import type { NextPage, Metadata } from "next";
import { HeaderWithMenu } from "@/app/components";
import { PlacesList, AddPlaceButton } from "./components";

export const metadate: Metadata = {
  title: "Review Planner | 記録場所を管理する",
};

const Page: NextPage = () => {
  return (
    <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
      <HeaderWithMenu />
      <h1 className="mb-5 text-xl">記録場所リスト</h1>
      <div className="mb-5">
        <PlacesList />
      </div>
      <AddPlaceButton />
    </article>
  );
};

export default Page;
