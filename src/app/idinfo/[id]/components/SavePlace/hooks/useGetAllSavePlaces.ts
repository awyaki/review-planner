import useSWR from "swr";
import { getAllPlaces } from "@/db";
export const useGetAllSavePlaces = () => {
  const { data: places, isLoading } = useSWR("/places", getAllPlaces);
  return { places, isLoading };
};
