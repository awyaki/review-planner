/*
 * CAUTION: This module depends on canary feature of iron-session(@8.0.0-alpha.0)
 * see https://github.com/vvo/iron-session/issues/586#issuecomment-1568830066
 * */
import { getIronSession, createResponse } from "iron-session";
import { User } from "@/types";

export const SESSION_COOKIE_NAME = "_review_planner_session";

class MissingPasword extends Error {}

const secret = process.env.SECRET_COOKIE_PASWORD;

const isString = (secret: unknown): secret is string => {
  if (typeof secret === "string") return true;
  return false;
};

const parseIntoString = (secret: unknown): string => {
  if (isString(secret)) return secret;
  throw new MissingPasword();
};

export interface Data {
  user?: {
    id: string;
    name: string;
  };
}

export const getSession = async (req: Request, res: Response) => {
  const session = await getIronSession<Data>(req, res, {
    password: parseIntoString(secret),
    cookieName: SESSION_COOKIE_NAME,
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
    },
  });

  return session;
};

declare module "iron-session" {
  interface IronSessionData {
    user?: User;
  }
}
export { createResponse };
