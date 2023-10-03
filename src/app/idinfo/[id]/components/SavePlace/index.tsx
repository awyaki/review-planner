"use client";
import { useCallback } from "react";
import { useGetSavePlace, useGetAllSavePlaces } from "./hooks";
import { putId } from "@/db";

type Props = {
  id: number;
};

export const SavePlace: React.FC<Props> = ({ id }) => {
  const { place, isLoading: isLoadingPlace } = useGetSavePlace(id);
  const { places, isLoading: isLoadingPlaces } = useGetAllSavePlaces();
  const handleUpdatePlace = useCallback(
    async (place: string) => {
      await putId(id, place);
    },
    [id]
  );

  if (isLoadingPlace) return <>Loading...</>;
  if (isLoadingPlaces) return <>Loading...</>;

  return (
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
  );
};
