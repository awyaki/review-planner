import { NextRequest } from "next/server";
import { getSession, createResponse } from "@/lib/session";

export const GET = async (req: NextRequest) => {
  const res = new Response();
  const session = await getSession(req, res);

  const user = session.user ?? null;
  console.log(user);
  return createResponse(res, JSON.stringify({ user }));
};
