import { PresetCore } from "./components";
import { type NextPage } from "next";
import { HeaderWithMenu } from "@/app/components";

const Page: NextPage<{ params: { id: string } }> = ({ params }) => {
  return (
    <>
      <article className="px-5 pt-5 bg-bg-primary text-text-on-bg-primary">
        <HeaderWithMenu />
        <PresetCore id={Number(params.id)} />
      </article>
    </>
  );
};

export default Page;
