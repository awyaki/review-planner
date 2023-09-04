import { db } from "../index";

export const createId = async () => db.id.add({});
