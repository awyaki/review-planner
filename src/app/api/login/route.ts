import { redirect } from "next/navigation";
import { parse } from "querystring";
import { readStream } from "@/lib";
//import { verify } from "@/lib/google-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

class UnexpectedRequest extends Error {}

export async function POST(request: Request) {
  // handle request
  // verify access token
  // create session
  try {
    const { body, headers } = request;
    if (!body) throw new UnexpectedRequest();
    const contentType = headers.get("content-type");
    if (!contentType || contentType !== "application/x-www-form-urlencoded")
      throw new UnexpectedRequest();
    if (!body) throw new UnexpectedRequest();
    const bodyText = await request.text();
    const parsedBody = parse(bodyText);
    console.log(parsedBody);
    // const user = verify();
    // if all ok
    redirect("http://localhost:3000/menu");
  } catch (e) {
    throw e;
  }
}
