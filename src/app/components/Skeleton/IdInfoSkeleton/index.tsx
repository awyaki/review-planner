import { HeaderWithMenuSkeleton } from "../HeaderWithMenuSkeleton";
import { SmallButtonSkeleton } from "../SmallButtonSkeleton";
export const IdInfoSkeleton = () => {
  return (
    <>
      <article className="h-screen p-5 bg-bg-primary text-text-on-bg-primary">
        <HeaderWithMenuSkeleton />
        <h1 className="w-1/5 px-8 py-3 mb-3 text-4xl rounded-md bg-text-on-bg-primary"></h1>
        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="w-1/12 px-8 py-3 mb-3 text-4xl rounded-md bg-text-on-bg-primary"></h2>
            <button className="px-12 py-3 rounded-lg bg-primary text-text-on-primary"></button>
          </div>
          <ul className="mb-4">
            <li className="mb-5">
              <h3 className="w-24 py-3 mb-4 bg-text-on-bg-primary rounded-md"></h3>
              <ul>
                <li className="py-4 bg-light-gray rounded-t-md"></li>
                <li className="py-4 bg-gray"></li>
                <li className="py-4 bg-light-gray rounded-b-md"></li>
              </ul>
            </li>
            <li>
              <h3 className="w-24 py-3 mb-4 bg-text-on-bg-primary rounded-md"></h3>
              <ul>
                <li className="py-4 bg-light-gray rounded-t-md"></li>
                <li className="py-4 bg-gray"></li>
                <li className="py-4 bg-light-gray rounded-b-md"></li>
              </ul>
            </li>
          </ul>
          <SmallButtonSkeleton />
        </section>
      </article>
    </>
  );
};
