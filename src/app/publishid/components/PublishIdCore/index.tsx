"use client";
import { useCallback, useState, useRef } from "react";
import { NotificationSchedule } from "../NotificationSchedule";
import { PublishId } from "../PublishId";
import { SelectPlace } from "../SelectPlace";
import { usePublishModal } from "./hooks";

import {
  createId,
  NDaysAfterForClient,
  getAllNDaysAftersForPresetOfPresetId,
} from "@/db";

import { mutate } from "swr";

export const PublishIdCore: React.FC = () => {
  const [nDaysAfters, setNDaysAfters] = useState<NDaysAfterForClient[]>([]);
  const [place, setPlace] = useState("");
  const selectPlaceRef = useRef<HTMLSelectElement>(null);
  const [renderModal, handleOpenModal] = usePublishModal(place);

  const handleChangePlace = useCallback((place: string) => {
    setPlace(place);
  }, []);

  const handlePublishId = useCallback(async () => {
    if (selectPlaceRef.current) {
      if (selectPlaceRef.current.reportValidity()) {
        await createId(nDaysAfters, place);
        handleOpenModal();
        mutate("/currentid");
      }
    }
  }, [nDaysAfters, place, selectPlaceRef, handleOpenModal]);

  const handleAddNDaysAfter = useCallback(
    (nDaysAfter: Omit<NDaysAfterForClient, "id">) => {
      const { base, n } = nDaysAfter;
      setNDaysAfters((cur) => {
        const maxId = cur.reduce((a, b) => Math.max(a, b.id), 0);
        const newNDaysAfter: NDaysAfterForClient = { id: maxId + 1, base, n };
        return cur.concat(newNDaysAfter);
      });
    },
    []
  );

  const handleAddNDaysAfterBasedOnPreset = useCallback(
    async (id: number, base: Date) => {
      const nDaysAfters = await getAllNDaysAftersForPresetOfPresetId(id);
      setNDaysAfters((p) => {
        const maxId = p.reduce((a, b) => Math.max(a, b.id), 0);
        return p.concat(
          nDaysAfters.map(({ n }, i) => ({ id: maxId + 1 + i, n, base }))
        );
      });
    },
    []
  );

  const handleDeleteNDaysAfter = useCallback((id: number) => {
    setNDaysAfters((cur) => cur.filter((v) => v.id !== id));
  }, []);

  const handleDeleteAllNDaysAfters = useCallback(() => {
    setNDaysAfters([]);
  }, []);

  return (
    <>
      {renderModal()}
      <div className="mb-10">
        <div className="mb-5">
          <SelectPlace
            ref={selectPlaceRef}
            place={place}
            onChangePlace={handleChangePlace}
          />
        </div>
        <NotificationSchedule
          nDaysAfters={nDaysAfters}
          onAddNDaysAfter={handleAddNDaysAfter}
          onDeleteAllNDaysAfters={handleDeleteAllNDaysAfters}
          onDeleteNDaysAfter={handleDeleteNDaysAfter}
          onAddNDaysAfterBasedOnPreset={handleAddNDaysAfterBasedOnPreset}
        />
      </div>
      <PublishId onPublishId={handlePublishId} />
    </>
  );
};
