import { db, Place } from "@/db";
import { isNotOptionalOnId } from "@/lib";

export const createPlace = async (name: string) => {
  try {
    await db.place.add({ name });
  } catch (e) {
    throw e;
  }
};

export const getAllPlaces = async (): Promise<Required<Place>[]> => {
  try {
    const allPlaces = (await db.place.toArray()).filter(isNotOptionalOnId);
    return allPlaces;
  } catch (e) {
    throw e;
  }
};

export const deletePlace = async (id: number): Promise<void> => {
  try {
    await db.place.delete(id);
  } catch (e) {
    throw e;
  }
};
