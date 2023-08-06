import { db, Notification } from "./index";

export const fetchNextId = async (): Promise<number> => {
  const nextID = await db.NextID.get("next_id");
  return nextID ?? 0;
};

export const incrementNextId = async (): Promise<void> => {
  const id = await db.NextID.get("next_id");
  if (id) {
    await db.NextID.put(id + 1, "next_id");
  } else {
    await db.NextID.add(0, "next_id");
  }
};

export const addId = async (
  id: number,
  notifications: Notification[]
): Promise<void> => {
  await db.ID.add({ id, notifications });
};
