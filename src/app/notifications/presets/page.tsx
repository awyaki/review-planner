"use client";
import { useCallback } from "react";
import { type NextPage } from "next";
import { useRouter } from "next/navigation";
import { SmallButton, ClickableList } from "@/components";
import { getAllPresets, deleteOnePreset } from "@/db";
import useSWR from "swr";
import { HeaderWithMenu } from "@/app/components";

const Page: NextPage = () => {
  const router = useRouter();
  const {
    data: presets,
    isLoading,
    mutate,
  } = useSWR("/presets", getAllPresets);

  const handleDeletePreset = useCallback(
    async (id: number) => {
      await deleteOnePreset(id);
      mutate();
    },
    [deleteOnePreset, mutate]
  );
  return (
    <>
      <article className="flex flex-col justify-between h-screen bg-bg-primary text-text-on-bg-primary">
        <div className="px-5 pt-5">
          <HeaderWithMenu />
          <h2 className="mb-8 text-xl">通知プリセット</h2>
          <div className="mb-8">
            {isLoading ? (
              <>Loading...</>
            ) : (
              <ClickableList
                data={
                  presets
                    ? presets.map(({ id, name }) => ({
                        id,
                        text: name,
                      }))
                    : []
                }
                onClick={(id: number, name?: string) =>
                  router.push(`/notifications/presets/${id}?name=${name}`)
                }
                onDelete={handleDeletePreset}
              />
            )}
          </div>
          <SmallButton
            onClick={() => router.push("/notifications/create")}
            text="新規プリセットを作成"
          />
        </div>
      </article>
    </>
  );
};

export default Page;
