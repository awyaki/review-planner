"use client";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { MenuItem } from "./components";
import { AiOutlineLeft } from "react-icons/ai";
import Link from "next/link";

const Page: NextPage = () => {
  const router = useRouter();

  return (
    <article className="h-screen p-5 bg-bg-secondary text-text-on-bg-secondary">
      <header className="pt-2 pb-6">
        <button
          className="flex items-center mb-2"
          onClick={() => router.back()}
        >
          <AiOutlineLeft className="mr-1" />
          <span>戻る</span>
        </button>
      </header>
      <h1 className="mb-4 text-xl">メニュー</h1>
      <ul className="mb-10">
        <Link href="/publishid">
          <MenuItem text="IDを発行する" rounded="top" color="light-gray" />
        </Link>
        <MenuItem text="発行済みのIDを見る" rounded="none" color="gray" />
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
