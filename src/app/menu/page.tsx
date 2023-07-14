import { NextPage } from "next";
import { MenuItem } from "./components";
import Link from "next/link";
import { Header } from "@/app/components";

const Page: NextPage = () => {
  return (
    <article className="h-screen p-5 bg-bg-secondary text-text-on-bg-secondary">
      <Header />
      <h1 className="mb-4 text-xl">メニュー</h1>
      <ul className="mb-10">
        <Link href="/publishid">
          <MenuItem text="IDを発行する" rounded="top" color="light-gray" />
        </Link>
        <Link href="/idlist">
          <MenuItem text="発行済みのIDを見る" rounded="none" color="gray" />
        </Link>
        <Link href="notifications/presets">
          <MenuItem
            text="通知スケジュールのプリセットを作成する"
            rounded="bottom"
            color="light-gray"
          />
        </Link>
      </ul>
      <ul>
        <li className="rounded-t-lg rounded-b-lg bg-light-gray text-dark-gray">
          <Link className="block p-4" href="/settings">
            設定
          </Link>
        </li>
      </ul>
    </article>
  );
};

export default Page;
