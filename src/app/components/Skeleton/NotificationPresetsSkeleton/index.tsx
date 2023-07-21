import { HeaderWithMenuSkeleton } from "../HeaderWithMenuSkeleton";
import { SmallButtonSkeleton } from "../SmallButtonSkeleton";
export const NotificationPresetsSkeleton = () => {
  return (
    <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
      <HeaderWithMenuSkeleton />
      <h1 className="w-1/5 px-8 py-3 mb-3 text-4xl rounded-md bg-text-on-bg-primary"></h1>
      <section>
        <ul className="mb-5">
          <li className="py-4 bg-light-gray rounded-t-md"></li>
          <li className="py-4 bg-gray"></li>
          <li className="py-4 bg-light-gray"></li>
          <li className="py-4 bg-gray rounded-b-md"></li>
        </ul>
        <SmallButtonSkeleton />
      </section>
    </article>
  );
};
