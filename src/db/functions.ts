import { db, DaysAfter, DaysAfterForPreset } from "./index";

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

export const fetchMaxIdOfNotifications = async () => {
  const notifications = (await db.ID.toArray()).flatMap((v) => v.notifications);
  const maxIdOfNotification = notifications.reduce(
    (a, b) => Math.max(a, b.id),
    0
  );
  return maxIdOfNotification;
};

export const addId = async (
  id: number,
  notifications: DaysAfter[]
): Promise<void> => {
  await db.ID.add({ id, notifications });
};

export const getAllIDs = async () => {
  return await db.ID.toArray();
};

export const getNotificationsOfId = async (id: number) => {
  const idCollection = db.ID.where("id").equals(id);
  const notifications = idCollection;
  let res: DaysAfter[] = [];
  await notifications.each((id) => {
    console.log(id.notifications);
    res = id.notifications;
  });
  return res;
};

// Presets

export const addPreset = async (
  name: string,
  notifications: DaysAfterForPreset[]
) => {
  await db.Preset.add({ name, notifications });
};

export const getAllPreset = async () => {
  return await db.Preset.toArray();
};

export const getMaxIdOfDaysAfterOfPreset = async () => {
  const presets = await db.Preset.toArray();
  const allDaysAfterId = presets.flatMap((preset) =>
    preset.notifications.map((n) => n.id)
  );
  const maxIdOfDaysAfter = allDaysAfterId.reduce((a, b) => Math.max(a, b), 0);
  return maxIdOfDaysAfter;
};

export const deletePreset = async (id: number) => {
  return await db.Preset.delete(id);
};

export const getPreset = async (id: number) => {
  return db.Preset.get(id);
};
