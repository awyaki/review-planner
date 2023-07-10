import qs from "querystring";
import { parseIntoGoogleOneTapRequestBody } from "@/lib/google-auth";
import { verify } from "@/lib/google-auth";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createResponse, getSession } from "@/lib/session";

class UnexpectedRequest extends Error {}

export async function POST(request: NextRequest) {
  /*
   * 1. parse request body
   * 2. retrieve credential from parsed body
   * 3. check csrf token and verify credential
   * 4. retrieve the user of google id and picture url
   * 5. if the user is new user, create an account of the user on database
   * 6. create session
   * */
  try {
    const { body, headers, cookies } = request;
    if (!body) throw new UnexpectedRequest();
    const contentType = headers.get("content-type");
    if (!contentType || contentType !== "application/x-www-form-urlencoded")
      throw new UnexpectedRequest();

    const cookiesCsrfToken = cookies.get("g_csrf_token")?.value;
    if (!cookiesCsrfToken) throw new UnexpectedRequest();

    // parse request body
    const parsedBody = parseIntoGoogleOneTapRequestBody(
      qs.parse(await request.text())
    );

    if (parsedBody instanceof Error) {
      throw parsedBody;
    }

    // check csrf token
    // see https://developers.google.com/identity/gsi/web/guides/verify-google-id-token
    const bodyCsrfToken = parsedBody["g_csrf_token"];

    // TODO: UnexpectedRequest error is too big grain.
    if (bodyCsrfToken !== cookiesCsrfToken) throw new UnexpectedRequest();

    const credential = parsedBody["credential"];

    // retrieve user infomation
    const user = await verify(credential);

    // confirm the presense of user in database
    // if the user don't exist, make new user accout on this app

    // retrieve user information from DB
    // make session

    // TODO: research how getSession work.
    // Why does getSession have to take `request` and `response`
    const response = new Response(null, {
      status: 302,
      headers: { Location: `http://localhost:3000/menu` },
    });

    const session = await getSession(request, response);

    session.user = {
      id: user.userId,
      name: user.name ?? "",
    };

    console.log(session);
    await session.save();
    return response;
  } catch (e) {
    throw e;
  }
}
