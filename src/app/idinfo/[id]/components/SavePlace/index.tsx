"use client";
import { useCallback } from "react";
import { useGetSavePlace, useGetAllSavePlaces } from "./hooks";
import { putId } from "@/db";
import { mutate } from "swr";

type Props = {
  id: number;
};

export const SavePlace: React.FC<Props> = ({ id }) => {
  const { place, isLoading: isLoadingPlace } = useGetSavePlace(id);
  const { places, isLoading: isLoadingPlaces } = useGetAllSavePlaces();
  const handleUpdatePlace = useCallback(
    async (place: string) => {
      await putId(id, place);
      mutate(`/${id}/place`);
    },
    [id]
  );

  if (isLoadingPlace) return <>Loading...</>;
  if (isLoadingPlaces) return <>Loading...</>;

  return (
    <section>
      <div className="flex justify-between items-center">
        <h2 className="text-xl mb-4">記録場所</h2>
        <span className="text-sm border-primary border-2 rounded-sm px-4 text-center">
          {place}
        </span>
      </div>
      <select
        className="w-1/4 border-primary border-2 rounded-sm"
        onChange={(e) => handleUpdatePlace(e.target.value)}
        defaultValue={place}
      >
        {places?.map(({ id: placeId, name }) => (
          <option key={placeId} value={name}>
            {name}
          </option>
        ))}
      </select>
    </section>
  );
};
