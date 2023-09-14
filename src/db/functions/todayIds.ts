import {db} from "@/db";

export const getAllTodayIds = async () => {
  return await db.toDayId.toArray();
};
