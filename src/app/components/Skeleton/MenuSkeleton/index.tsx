import { HeaderSkeleton } from "../HeaderSkeleton";
import { MenuItemSkeleton } from "../MenuItemSkeleton";
export const MenuSkeleton: React.FC = () => {
  return (
    <article className="h-screen p-5 bg-bg-secondary text-text-on-bg-secondary">
      <HeaderSkeleton />
      <h1 className="mb-4 text-xl">
        <div className="w-24 p-4 rounded-md bg-text-on-bg-secondary"></div>
      </h1>
      <ul className="mb-10">
        <MenuItemSkeleton rounded="top" color="light-gray" />
        <MenuItemSkeleton rounded="none" color="gray" />
        <MenuItemSkeleton rounded="bottom" color="light-gray" />
      </ul>
      <ul>
        <li className="p-4 rounded-t-lg rounded-b-lg bg-light-gray text-dark-gray">
          <div className="p-3"></div>
        </li>
      </ul>
    </article>
  );
};
