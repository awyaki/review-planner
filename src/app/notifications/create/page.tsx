"use client";
import { useState, useCallback, useRef, MouseEventHandler } from "react";
import { type NextPage } from "next";
import { List } from "@/components";
import { useRouter } from "next/navigation";
import { NDaysAfterForPresetForClient, createPreset } from "@/db";
import { HeaderWithMenu } from "@/app/components";
import { AddNDaysAfterButton, CancelCreateButton } from "./components";

const Page: NextPage = () => {
  const router = useRouter();
  const [inputValue, setInputValue] = useState("");
  const [nDaysAfters, setNDaysAfters] = useState<
    NDaysAfterForPresetForClient[]
  >([]);

  const tilteInput = useRef<HTMLInputElement>(null);

  const handleAddNotification = useCallback((day: number) => {
    setNDaysAfters((cur) => {
      const maxId = cur.reduce((a, b) => Math.max(a, b.id), 0);
      return cur.concat({ id: maxId + 1, n: day });
    });
  }, []);

  const handleDeleteNotification = useCallback((id: number) => {
    setNDaysAfters((cur) => cur.filter((n) => n.id !== id));
  }, []);

  const handleCreatePreset: MouseEventHandler<HTMLButtonElement> = useCallback(
    async (e) => {
      e.preventDefault();
      if (tilteInput.current) {
        if (tilteInput.current.reportValidity()) {
          await createPreset(inputValue, nDaysAfters);
          router.push("/notifications/presets");
        }
      }
    },
    [createPreset, tilteInput, inputValue, nDaysAfters]
  );

  return (
    <article className="px-5 pt-5 bg-bg-primary text-text-on-bg-primary">
      <HeaderWithMenu />
      <h1 className="text-xl mb-3">プリセットを作成する</h1>
      <form id="title_form">
        <input
          ref={tilteInput}
          type="text"
          required
          maxLength={30}
          className="w-full px-3 py-2 mb-5 focus:outline-primary"
          value={inputValue}
          placeholder="タイトルを入力"
          onChange={(e) => setInputValue(e.target.value)}
        />
      </form>
      <div className="mb-10">
        <List
          data={nDaysAfters.map(({ id, n }) => ({
            id,
            text: `${n.toString()}日後`,
          }))}
          onDelete={handleDeleteNotification}
        />
      </div>
      <div className="mb-5">
        <AddNDaysAfterButton onAddNDaysAfter={handleAddNotification} />
      </div>
      <div className="flex gap-3">
        <CancelCreateButton />
        <button
          form="title_form"
          className="w-1/3 px-2 py-2 rounded-lg bg-bg-secondary text-text-on-bg-secondary"
          onClick={handleCreatePreset}
        >
          作成
        </button>
      </div>
    </article>
  );
};

export default Page;
