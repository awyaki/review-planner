import type { NextPage, Metadata } from "next";
import { HeaderWithMenu } from "@/app/components";
import { OpenThemeColorSheetButton } from "./components";

export const metadata: Metadata = {
  title: "Review Planner | 設定",
};

const Page: NextPage = () => {
  return (
    <article className="h-screen p-5 bg-bg-secondary text-text-on-bg-secondary">
      <HeaderWithMenu color="reverse" />
      <h1 className="mb-4 text-xl">設定</h1>
      <ul className="mb-10 text-dark-gray">
        <li className="list-none rounded-lg bg-light-gray">
          <OpenThemeColorSheetButton />
        </li>
      </ul>
    </article>
  );
};

export default Page;
