import dynamic from "next/dynamic";
import { NextPage } from "next";
import { HeaderWithMenu } from "@/app/components";
import { PublishIdCore } from "./components";

const NextId = dynamic(() => import("./components/NextId"), {
  ssr: false,
  loading: () => <>Loading...</>,
});

const Page: NextPage = () => {
  return (
    <article className="h-screen bg-bg-primary text-text-on-bg-primary">
      <h1 className="invisible">新規IDの作成</h1>
      <section className="px-5 pt-5">
        <HeaderWithMenu />
        <div className="mb-8">
          <NextId />
        </div>
        <PublishIdCore />
      </section>
    </article>
  );
};

export default Page;
