import { db, Place } from "@/db";
import { isNotOptionalOnId } from "@/lib";

export const getAllPlaces = async (): Promise<Required<Place>[]> => {
  try {
    const allPlaces = (await db.place.toArray()).filter(isNotOptionalOnId);
    return allPlaces;
  } catch (e) {
    throw e;
  }
};
