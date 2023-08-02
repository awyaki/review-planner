import { db } from "./index";

export const fetchNextId = async (): Promise<number> => {
  const nextID = await db.NextID.get("next_id");
  return nextID ?? 0;
};
