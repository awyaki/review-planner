import { db, Notification } from "./index";

export const fetchNextId = async (): Promise<number> => {
  const nextID = await db.NextID.get("next_id");
  return nextID ?? 0;
};

export const addId = async (
  id: number,
  notifications: Notification[]
): Promise<void> => {
  await db.ID.add({ id, notifications });
};
