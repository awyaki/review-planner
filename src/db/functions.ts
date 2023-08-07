import { db, Notification } from "./index";

export const fetchNextId = async (): Promise<number> => {
  const nextID = await db.NextID.get(0);
  return nextID?.nextId ?? 0;
};

export const incrementNextId = async (): Promise<void> => {
  const nextId = await db.NextID.get(0);
  if (nextId) {
    await db.NextID.put({ id: 0, nextId: nextId.nextId + 1 });
  } else {
    await db.NextID.add({ id: 0, nextId: 1 });
  }
};

export const addId = async (
  id: number,
  notifications: Notification[]
): Promise<void> => {
  await db.ID.add({ id, notifications });
};
