import useSWR from "swr";
import { getId } from "@/db";
export const useGetSavePlace = (id: number) => {
  const { data, isLoading } = useSWR(`/${id}/place`, async () => getId(id));
  if (!data) return { place: undefined, isLoading };
  const { place } = data;

  return { place, isLoading };
};
