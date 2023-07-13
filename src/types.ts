export type User = {
  id: string;
  google_id: string;
  name: string;
  picture: string;
};

export type SessionUser = {
  id: string;
  name: string;
  picture: string;
};

export class FailedToParseIntoSessionUser extends Error {}

const isSessionUser = (sessionUser: unknown): sessionUser is SessionUser => {
  if (sessionUser === null) return false;
  if (typeof sessionUser !== "object") return false;
  if (!Object.hasOwn(sessionUser, "id")) return false;
  if (!Object.hasOwn(sessionUser, "name")) return false;
  if (!Object.hasOwn(sessionUser, "picture")) return false;
  return true;
};

export const parseIntoSessionUser = (
  sessionUser: unknown
): SessionUser | FailedToParseIntoSessionUser => {
  if (isSessionUser(sessionUser)) return sessionUser;
  return new FailedToParseIntoSessionUser("Faild to parse.");
};
