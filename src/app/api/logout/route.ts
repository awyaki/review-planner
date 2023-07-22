import type { NextRequest } from "next/server";
import { getSession } from "@/lib/session";

export async function POST(request: NextRequest) {
  try {
    const response = new Response(null, {
      status: 302,
      headers: { Location: `http://localhost:3000/menu` },
    });

    const session = await getSession(request, response);
    await session.destroy();
  } catch (e) {
    throw e;
  }
}
