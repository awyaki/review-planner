"use client";
import { useCallback } from "react";
import { getAllPlaces, deletePlace } from "@/db";
import useSWR from "swr";
import { List } from "@/components";

export const PlacesList: React.FC = () => {
  const { data, mutate } = useSWR("/places", getAllPlaces);
  const places = data ? data.map((d) => ({ id: d.id, text: d.name })) : [];

  const handleDeletePlace = useCallback(
    async (id: number) => {
      await deletePlace(id);
      mutate();
    },
    [deletePlace]
  );

  return <List data={places} onDelete={handleDeletePlace} />;
};
