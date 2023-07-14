import {
  parseIntoSessionUser,
  FailedToParseIntoSessionUser,
  SessionUser,
} from "@/types";

class FailedToParseIntoHasUserProperty extends Error {}

const hasUserProperty = (o: unknown): o is { user: unknown } => {
  if (o === null) return false;
  if (typeof o === "function") return false;
  if (typeof o !== "object") return false;

  if (!Object.hasOwn(o, "user")) return false;
  return true;
};

const parseIntoHasUserProperty = (
  o: unknown
): { user: unknown } | FailedToParseIntoHasUserProperty => {
  if (hasUserProperty(o)) return o;
  return new FailedToParseIntoHasUserProperty("Failed to parse.");
};

export const getSessionUser = async (): Promise<SessionUser | null> => {
  const res = await fetch("http://localhost:3000/api/user", {
    cache: "no-store",
  });

  try {
    if (!res.ok) {
      throw new Error("Failed to fetch data");
    }

    const payload = parseIntoHasUserProperty(await res.json());

    if (payload instanceof FailedToParseIntoHasUserProperty)
      throw new Error("Failed to parse into object that has user property .");

    const user = parseIntoSessionUser(payload.user);
    if (user instanceof FailedToParseIntoSessionUser)
      throw new Error("Failed to parse into SessionUser");
    return user;
  } catch (e) {
    if (e instanceof Error) console.error(e.message);
    return null;
  }
};
