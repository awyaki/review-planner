"use client";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { ClickableList } from "@/components";
import { getAllPresets, deleteOnePreset } from "@/db";
import useSWR from "swr";

export const PresetList: React.FC = () => {
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
    [mutate]
  );
  return (
    <>
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
    </>
  );
};
