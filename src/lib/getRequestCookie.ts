import { User } from "@/types";
import { unsealData } from "iron-session";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

/**
 * This implemetation is refered to https://github.com/vvo/iron-session/issues/560
 *
 * Can be called in page/layout server component.
 * @param cookies ReadonlyRequestCookies
 * @returns User or null
 */
export const getRequestCookie = async (
  cookies: ReadonlyRequestCookies
): Promise<User | null> => {
  // TODO: Reserch whether making cookie name for session "session" is problem.
  // And more, It seems to me that cookie name for session should be defined in @/lib/session
  const cookieName = "session";
  const found = cookies.get(cookieName);

  if (!found) return null;

  const { user } = await unsealData<{ user: User }>(found.value, {
    password: process.env.SECRET_COOKIE_PASWORD as string,
  });

  return user;
};
