"use client";
import { useContext } from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";
import { MenuItem } from "./components";
import { AiOutlineLeft } from "react-icons/ai";
import { ThemeColorContext } from "@/providers";
import { type Theme } from "@/lib/colors";

const pageColorVariant = {
  sky: {
    white: "bg-sky text-white",
  },
  orange: {
    white: "bg-orange text-white",
  },
} satisfies {
  [primary in Theme["primary"]]: {
    [background in Theme["background"]]: `bg-${primary} text-${background}`;
  };
};

const Page: NextPage = () => {
  const router = useRouter();
  const { theme } = useContext(ThemeColorContext);

  const menuItems = [
    "IDを発行する",
    "発行済みのIDを見る",
    "通知スケジュールのプリセットを作成する",
  ];

  return (
    <article
      className={`h-screen p-5 ${
        pageColorVariant[theme.primary][theme.background]
      }`}
    >
      <header className="pt-2 pb-6">
        <button
          className="flex items-center mb-2"
          onClick={() => router.back()}
        >
          <AiOutlineLeft className="mr-1" />
          <span>戻る</span>
        </button>
      </header>
      <h1 className="mb-4 text-xl">Menu</h1>
      <ul className="mb-10">
        {menuItems.map((text, i, items) => {
          const _rounded = (() => {
            if (i === 0) return "top";
            if (i === items.length - 1) return "bottom";
            return "none";
          })();

          return (
            <MenuItem
              key={text}
              text={text}
              rounded={_rounded}
              color={i % 2 === 0 ? "light-gray" : "gray"}
            />
          );
        })}
      </ul>
      <ul>
        <li className="p-4 rounded-t-lg rounded-b-lg bg-light-gray text-dark-gray">
          設定
        </li>
      </ul>
    </article>
  );
};

export default Page;
