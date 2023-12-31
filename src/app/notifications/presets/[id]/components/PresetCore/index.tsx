"use client";
import {
  useState,
  useCallback,
  useEffect,
  useRef,
  MouseEventHandler,
} from "react";
import { useAddOneNotificationSheetForPreset } from "../../../../hooks";
import { List, SmallButton } from "@/components";
import { useRouter, useSearchParams } from "next/navigation";
import useSWR from "swr";
import {
  getOnePreset,
  putOnePreset,
  type NDaysAfterForPresetForClient,
} from "@/db";
type Props = {
  id: number;
};

export const PresetCore: React.FC<Props> = ({ id }) => {
  const searchParams = useSearchParams();
  const presetName = searchParams.get("name") ?? "";

  const titleInput = useRef<HTMLInputElement>(null);

  const { data: preset, mutate } = useSWR(`/preset/${id}`, async () =>
    getOnePreset(Number(id))
  );

  const router = useRouter();

  const [nDaysAfters, setNDaysAfters] = useState<
    NDaysAfterForPresetForClient[]
  >([]);

  const [inputValue, setInputValue] = useState(presetName);

  const handleAddNDaysAfter = useCallback((n: number) => {
    setNDaysAfters((p) => {
      const max = p.reduce((a, b) => Math.max(a, b.id), 0);
      return p.concat({ id: max + 1, n });
    });
  }, []);

  const handleDeleteNDaysAfter = useCallback((id: number) => {
    setNDaysAfters((p) => p.filter((nDaysAfter) => nDaysAfter.id !== id));
  }, []);

  const handleUpdatePreset: MouseEventHandler<HTMLButtonElement> = useCallback(
    async (e) => {
      e.preventDefault();
      if (titleInput.current) {
        if (titleInput.current.reportValidity()) {
          await putOnePreset({ id: Number(id), name: inputValue, nDaysAfters });
          mutate();
          router.push("/notifications/presets");
        }
      }
    },
    [inputValue, nDaysAfters, mutate, id, titleInput, router]
  );

  const [render, handleOpen] =
    useAddOneNotificationSheetForPreset(handleAddNDaysAfter);

  useEffect(() => {
    setNDaysAfters(preset?.nDaysAfters ?? []);
  }, [preset]);
  return (
    <>
      {render()}
      <h1 className="text-xl mb-3">通知プリセットを更新する</h1>
      <form id="title_form">
        <input
          ref={titleInput}
          type="text"
          required
          className="w-full px-3 py-2 mb-5 focus:outline-primary"
          value={inputValue}
          placeholder="タイトルを入力"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <div className="mb-10">
        {
          <List
            data={nDaysAfters
              .sort((a, b) => (a.n > b.n ? 1 : -1))
              .map(({ id, n }) => ({
                id,
                text: `${n}日後`,
              }))}
            onDelete={handleDeleteNDaysAfter}
          />
        }
      </div>
      <div className="mb-10">
        <SmallButton onClick={handleOpen} text="通知を追加" />
      </div>
      <div className="flex gap-3">
        <button
          type="button"
          className="w-1/3 px-2 py-2 rounded-lg bg-gray text-dark-gray"
          onClick={() => {
            router.push("/notifications/presets");
          }}
        >
          キャンセル
        </button>
        <button
          form="title_form"
          className="w-1/3 px-2 py-2 rounded-lg bg-bg-secondary text-text-on-bg-secondary"
          onClick={handleUpdatePreset}
        >
          更新
        </button>
      </div>
    </>
  );
};
