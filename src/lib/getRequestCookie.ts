import { User } from "@/types";
import { unsealData } from "iron-session";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

import { SESSION_COOKIE_NAME } from "./session";

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
  const found = cookies.get(SESSION_COOKIE_NAME);

  if (!found) return null;

  const { user } = await unsealData<{ user: User }>(found.value, {
    password: process.env.SECRET_COOKIE_PASWORD as string,
  });

  return user;
};
