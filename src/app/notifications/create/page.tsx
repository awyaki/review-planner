import { type NextPage } from "next";
import { HeaderWithMenu } from "@/app/components";
import { CreatePresetCore } from "./components";

const Page: NextPage = () => {
  return (
    <article className="px-5 pt-5 bg-bg-primary text-text-on-bg-primary">
      <HeaderWithMenu />
      <CreatePresetCore />
    </article>
  );
};

export default Page;
