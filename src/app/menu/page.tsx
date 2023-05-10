import { NextPage } from "next";
import { MenuItem } from "./components";

const Page: NextPage = () => {
  const menuItems = [
    "IDを発行する",
    "発行済みのIDを見る",
    "通知スケジュールのプリセットを作成する",
  ];

  return (
    <article className="h-screen p-5 bg-sky">
      <h1 className="mb-4 text-xl text-white">Menu</h1>
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
        <li className="p-4 rounded-t-lg rounded-b-lg bg-light-gray">設定</li>
      </ul>
    </article>
  );
};

export default Page;
