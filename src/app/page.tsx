import { HeaderWithMenu, IdList } from "./components";

const Page = () => {
  return (
    <article className="px-5 pt-5 bg-bg-primary text-text-on-bg-primary">
      <HeaderWithMenu />
      <h2 className="mb-8 text-xl">今日復習するID</h2>
      <section>
        <IdList />
      </section>
    </article>
  );
};

export default Page;
