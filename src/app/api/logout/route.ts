import type { NextRequest } from "next/server";
import { getSession } from "@/lib/session";

export async function POST(request: NextRequest) {
  try {
    const response = new Response();

    const session = await getSession(request, response);
    await session.destroy();
    return response;
  } catch (e) {
    throw e;
  }
}
