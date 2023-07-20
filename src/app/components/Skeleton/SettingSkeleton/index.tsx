import { HeaderSkeleton } from "../HeaderSkeleton";
import { SettingItemSkeleton } from "../SettingItemSkeleton";
export const SettingSkeleton: React.FC = () => {
  return (
    <article className="h-screen p-5 bg-bg-secondary text-text-on-bg-secondary">
      <HeaderSkeleton />
      <h1 className="mb-4 text-xl">
        <div className="w-24 p-4 rounded-md bg-text-on-bg-secondary"></div>
      </h1>
      <ul className="mb-10">
        <SettingItemSkeleton rounded="top" color="light-gray" />
        <SettingItemSkeleton rounded="none" color="gray" />
        <SettingItemSkeleton rounded="bottom" color="light-gray" />
      </ul>
    </article>
  );
};
